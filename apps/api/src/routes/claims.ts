import { Hono } from 'hono';
import { z } from 'zod';
import type { Env, Variables } from '../env.ts';
import type { Claim, ClaimSnapshot, RelationshipPredicate } from '@wang/domain';
import { parentPredicateForRole, PROPERTY_PREDICATES, RELATIONSHIP_PREDICATES } from '@wang/domain';
import { disputeSchema, normalizeDate, propertyValueSchema, retractSchema, reviseClaimSchema, revertSchema, sourceRefSchema } from '@wang/validation';
import { requireAuth, requireRole } from '../auth.ts';
import { badRequest, conflict, notFound } from '../errors.ts';
import { mapClaim, mapClaimRevision } from '../db.ts';
import { contributionStatement } from '../contributions.ts';
import { assertSourcesExist, claimSourceStatement } from '../claimService.ts';
import { newId, nowIso } from '../util.ts';
import { parentRoleFromLocators } from '../parentRoleEvidence.ts';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

async function loadClaim(db: D1Database, id: string): Promise<Claim | null> {
  const row = await db.prepare('SELECT * FROM claim WHERE id = ?').bind(id).first<Record<string, unknown>>();
  return row ? mapClaim(row) : null;
}

function snapshotOf(claim: Claim): ClaimSnapshot {
  return {
    predicate: claim.predicate,
    claim_kind: claim.claim_kind,
    object_person_id: claim.object_person_id,
    generation_count: claim.generation_count,
    parent_role: claim.parent_role,
    value_json: claim.value_json,
    status: claim.status,
    confidence: claim.confidence,
  };
}

const bulkParentRolesSchema = z.object({
  items: z.array(z.object({
    claim_id: z.string().min(3).max(80),
    expected_revision: z.number().int().positive(),
    parent_role: z.enum(['father', 'mother']),
  })).min(1).max(1500),
});

const bulkPersonPropertiesSchema = z.object({
  summary: z.string().min(3).max(500),
  items: z.array(z.object({
    person_id: z.string().min(3).max(80),
    predicate: z.enum(PROPERTY_PREDICATES),
    value: propertyValueSchema,
    confidence: z.enum(['unknown', 'low', 'medium', 'high']).default('medium'),
    source: sourceRefSchema.refine((ref) => ref.stance === 'supports', '批量采纳资料必须有支持来源。'),
  })).min(1).max(1200),
}).superRefine((body, ctx) => {
  body.items.forEach((item, index) => {
    const isDate = item.predicate === 'birth.date' || item.predicate === 'death.date';
    if (isDate && !item.value.date?.original_text.trim()) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', index, 'value', 'date'], message: '日期属性必须填写原文。' });
    }
    if (!isDate && !item.value.text?.trim()) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', index, 'value', 'text'], message: '文本属性必须填写非空文字。' });
    }
  });
});

/**
 * Staff-only reviewed property import. The request performs two set-based
 * validation reads, then one D1 batch containing four INSERT ... SELECT
 * statements regardless of item count.
 */
app.post('/bulk-person-properties', async (c) => {
  const auth = requireRole(c, ['admin', 'maintainer']);
  const body = bulkPersonPropertiesSchema.parse(await c.req.json());
  const keys = body.items.map((item) => `${item.person_id}\u0000${item.predicate}`);
  if (new Set(keys).size !== keys.length) throw badRequest('duplicate_property', '批次中不能重复同一人物的同一属性。');

  const requested = JSON.stringify(body.items.map((item) => ({
    person_id: item.person_id,
    predicate: item.predicate,
    source_id: item.source.source_id,
  })));
  const [personResult, sourceResult] = await c.env.DB.batch([
    c.env.DB.prepare(
      `SELECT requested.person_id, requested.predicate,
              p.status AS person_status,
              EXISTS (
                SELECT 1 FROM claim existing
                 WHERE existing.subject_person_id = requested.person_id
                   AND existing.predicate = requested.predicate
                   AND existing.status NOT IN ('retracted','superseded')
              ) AS already_exists
         FROM (
           SELECT json_extract(value, '$.person_id') AS person_id,
                  json_extract(value, '$.predicate') AS predicate
             FROM json_each(?)
         ) requested
         LEFT JOIN person p ON p.id = requested.person_id`,
    ).bind(requested),
    c.env.DB.prepare(
      `SELECT requested.source_id, s.id AS found_id
         FROM (SELECT DISTINCT json_extract(value, '$.source_id') AS source_id FROM json_each(?)) requested
         LEFT JOIN source s ON s.id = requested.source_id`,
    ).bind(requested),
  ]);
  for (const row of (personResult?.results ?? []) as Array<{ person_id: string; predicate: string; person_status: string | null; already_exists: number }>) {
    if (!row.person_status || row.person_status === 'suppressed') throw notFound(`人物不存在或已隐藏：${row.person_id}`);
    if (row.already_exists) throw conflict('property_exists', `人物已有未撤回属性：${row.person_id} ${row.predicate}`);
  }
  for (const row of (sourceResult?.results ?? []) as Array<{ source_id: string; found_id: string | null }>) {
    if (!row.found_id) throw notFound(`来源不存在：${row.source_id}`);
  }

  const now = nowIso();
  const records = body.items.map((item) => {
    const value = {
      ...item.value,
      ...(item.value.date?.original_text != null
        ? { date: normalizeDate(item.value.date.original_text, item.value.date.calendar_note) }
        : {}),
    };
    const claimId = newId('claim');
    const base = {
      claim_id: claimId,
      person_id: item.person_id,
      predicate: item.predicate,
      value_json: JSON.stringify(value),
      confidence: item.confidence,
      source_id: item.source.source_id,
      stance: item.source.stance,
      locator: item.source.locator ?? null,
      quotation: item.source.quotation ?? null,
      interpretation_note: item.source.interpretation_note ?? null,
      revision_1_id: newId('revision'),
      revision_2_id: newId('revision'),
      claim_source_id: newId('claimSource'),
      contribution_1_id: newId('contribution'),
      contribution_2_id: newId('contribution'),
      actor_user_id: auth.userId,
      created_at: now,
      summary: body.summary,
    };
    return {
      ...base,
      proposed_snapshot: JSON.stringify({ predicate: item.predicate, claim_kind: 'property', object_person_id: null, generation_count: null, parent_role: null, value_json: value, status: 'proposed', confidence: item.confidence }),
      accepted_snapshot: JSON.stringify({ predicate: item.predicate, claim_kind: 'property', object_person_id: null, generation_count: null, parent_role: null, value_json: value, status: 'accepted', confidence: item.confidence }),
    };
  });
  const data = JSON.stringify(records);
  await c.env.DB.batch([
    c.env.DB.prepare(
      `INSERT INTO claim (id, subject_person_id, claim_kind, predicate, object_person_id, generation_count, value_json, status, confidence, created_by_user_id, created_at, updated_at, current_revision)
       SELECT json_extract(value,'$.claim_id'), json_extract(value,'$.person_id'), 'property', json_extract(value,'$.predicate'), NULL, NULL,
              json_extract(value,'$.value_json'), 'accepted', json_extract(value,'$.confidence'), json_extract(value,'$.actor_user_id'),
              json_extract(value,'$.created_at'), json_extract(value,'$.created_at'), 2 FROM json_each(?)`,
    ).bind(data),
    c.env.DB.prepare(
      `INSERT INTO claim_revision (id, claim_id, revision_number, snapshot_json, change_summary, created_by_user_id, created_at, reverts_revision_id)
       SELECT json_extract(value,'$.revision_1_id'), json_extract(value,'$.claim_id'), 1, json_extract(value,'$.proposed_snapshot'), json_extract(value,'$.summary'), json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at'), NULL FROM json_each(?)
       UNION ALL
       SELECT json_extract(value,'$.revision_2_id'), json_extract(value,'$.claim_id'), 2, json_extract(value,'$.accepted_snapshot'), '批量资料审计：核对来源后采纳', json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at'), NULL FROM json_each(?)`,
    ).bind(data, data),
    c.env.DB.prepare(
      `INSERT INTO claim_source (id, claim_id, source_id, stance, locator, quotation, interpretation_note, added_by_user_id, created_at)
       SELECT json_extract(value,'$.claim_source_id'), json_extract(value,'$.claim_id'), json_extract(value,'$.source_id'), json_extract(value,'$.stance'),
              json_extract(value,'$.locator'), json_extract(value,'$.quotation'), json_extract(value,'$.interpretation_note'), json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at') FROM json_each(?)`,
    ).bind(data),
    c.env.DB.prepare(
      `INSERT INTO contribution (id, action, actor_user_id, target_type, target_id, change_summary, before_revision, after_revision, created_at)
       SELECT json_extract(value,'$.contribution_1_id'), 'claim.create', json_extract(value,'$.actor_user_id'), 'claim', json_extract(value,'$.claim_id'), json_extract(value,'$.summary'), NULL, 1, json_extract(value,'$.created_at') FROM json_each(?)
       UNION ALL
       SELECT json_extract(value,'$.contribution_2_id'), 'claim.revise', json_extract(value,'$.actor_user_id'), 'claim', json_extract(value,'$.claim_id'), '批量资料审计：核对来源后采纳', 1, 2, json_extract(value,'$.created_at') FROM json_each(?)`,
    ).bind(data, data),
  ]);
  return c.json({ created: records.length, d1_validation_batches: 1, d1_write_batches: 1 }, 201);
});

const expectedRelationshipSchema = z.object({
  predicate: z.enum(RELATIONSHIP_PREDICATES),
  subject: z.string().min(3).max(80),
  object: z.string().min(3).max(80),
});

/**
 * Staff-only, set-based repair for an audited group of homonym/misread kinship
 * claims. A relink never edits its source claim in place: the old claim is
 * retracted and a new accepted claim carries the same citations to the correct
 * person anchor. This keeps the evidence trail append-only while avoiding the
 * hundreds of D1 round trips produced by the ordinary one-claim-at-a-time API.
 */
const bulkKinshipRepairSchema = z.object({
  summary: z.string().min(3).max(500),
  retractions: z.array(z.object({
    claim_id: z.string().min(3).max(80),
    expected_revision: z.number().int().positive(),
    expect: expectedRelationshipSchema,
    reason: z.string().min(3).max(500),
  })).max(200),
  splits: z.array(z.object({
    key: z.string().regex(/^[a-z0-9_-]+$/).max(80),
    name: z.object({ text: z.string().min(1).max(100), language: z.string().min(2).max(20) }),
    evidence_claim_id: z.string().min(3).max(80),
    reason: z.string().min(3).max(500),
  })).max(100),
  relinks: z.array(z.object({
    source_claim_id: z.string().min(3).max(80),
    subject: z.string().min(3).max(100),
    object: z.string().min(3).max(100),
    label: z.string().min(1).max(200),
  })).max(200),
  reclassifications: z.array(z.object({
    claim_id: z.string().min(3).max(80),
    expected_revision: z.number().int().positive(),
    expect: expectedRelationshipSchema,
    predicate: z.enum(RELATIONSHIP_PREDICATES),
    reason: z.string().min(3).max(500),
  })).max(50).default([]),
});

interface BackfillClaimRow extends Record<string, unknown> {
  requested_role: 'father' | 'mother';
  requested_revision: number;
  locator: string | null;
  stance: string | null;
}

/**
 * Convert evidence-backed legacy parent_of claims in one set-based operation.
 * This endpoint is intentionally staff-only and narrower than ordinary claim
 * editing: it accepts no free-form predicate and independently verifies that a
 * supporting citation locator explicitly says father or mother.
 */
app.post('/bulk-parent-roles', async (c) => {
  const auth = requireRole(c, ['admin', 'maintainer']);
  const body = bulkParentRolesSchema.parse(await c.req.json());
  const ids = body.items.map((item) => item.claim_id);
  if (new Set(ids).size !== ids.length) throw badRequest('duplicate_claim', '批次中不能重複同一條主張。');

  const requestedJson = JSON.stringify(body.items);
  const result = await c.env.DB.prepare(
    `WITH requested AS (
       SELECT json_extract(value, '$.claim_id') AS claim_id,
              json_extract(value, '$.expected_revision') AS expected_revision,
              json_extract(value, '$.parent_role') AS parent_role
         FROM json_each(?)
     )
     SELECT c.*, requested.expected_revision AS requested_revision,
            requested.parent_role AS requested_role,
            cs.locator, cs.stance
       FROM requested
       LEFT JOIN claim c ON c.id = requested.claim_id
       LEFT JOIN claim_source cs ON cs.claim_id = c.id
      ORDER BY requested.claim_id, cs.id`,
  ).bind(requestedJson).all<BackfillClaimRow>();

  const rowsByClaim = new Map<string, BackfillClaimRow[]>();
  for (const row of result.results ?? []) {
    const id = row.id as string | null;
    if (!id) continue;
    const rows = rowsByClaim.get(id) ?? [];
    rows.push(row);
    rowsByClaim.set(id, rows);
  }

  const changes: Array<{
    claim_id: string;
    predicate: string;
    expected_revision: number;
    new_revision: number;
    updated_at: string;
    revision_id: string;
    contribution_id: string;
    snapshot_json: string;
    change_summary: string;
    actor_user_id: string;
  }> = [];
  let alreadyApplied = 0;
  const now = nowIso();

  for (const requested of body.items) {
    const rows = rowsByClaim.get(requested.claim_id);
    if (!rows?.length) throw notFound(`主張不存在：${requested.claim_id}`);
    const claim = mapClaim(rows[0]!);
    const locators = rows
      .filter((row) => row.stance === 'supports')
      .map((row) => row.locator);
    const evidence = parentRoleFromLocators(locators);
    if (evidence.conflict || evidence.role !== requested.parent_role) {
      throw badRequest('parent_role_not_supported', `來源未明確支持父母角色：${claim.id}`);
    }

    const targetPredicate = requested.parent_role === 'father'
      ? 'kinship.father_of'
      : 'kinship.mother_of';
    if (claim.predicate === targetPredicate && claim.current_revision === requested.expected_revision + 1) {
      alreadyApplied += 1;
      continue;
    }
    if (claim.predicate !== 'kinship.parent_of' || claim.current_revision !== requested.expected_revision) {
      throw conflict('revision_conflict', `主張已改動：${claim.id}`, {
        current_revision: claim.current_revision,
        current_predicate: claim.predicate,
        expected_revision: requested.expected_revision,
      });
    }
    if (claim.claim_kind !== 'relationship' || !claim.object_person_id) {
      throw badRequest('not_parent_relationship', `不是直接父母關係：${claim.id}`);
    }

    const next: Claim = {
      ...claim,
      predicate: targetPredicate,
      parent_role: requested.parent_role,
      updated_at: now,
      current_revision: claim.current_revision + 1,
    };
    changes.push({
      claim_id: claim.id,
      predicate: targetPredicate,
      expected_revision: claim.current_revision,
      new_revision: next.current_revision,
      updated_at: now,
      revision_id: newId('revision'),
      contribution_id: newId('contribution'),
      snapshot_json: JSON.stringify(snapshotOf(next)),
      change_summary: requested.parent_role === 'father'
        ? '依据既有来源明确父母角色为父亲'
        : '依据既有来源明确父母角色为母亲',
      actor_user_id: auth.userId,
    });
  }

  if (changes.length > 0) {
    const changesJson = JSON.stringify(changes);
    await c.env.DB.batch([
      c.env.DB.prepare(
        `INSERT INTO claim_revision
           (id, claim_id, revision_number, snapshot_json, change_summary, created_by_user_id, created_at, reverts_revision_id)
         SELECT json_extract(value, '$.revision_id'), json_extract(value, '$.claim_id'),
                json_extract(value, '$.new_revision'), json_extract(value, '$.snapshot_json'),
                json_extract(value, '$.change_summary'), json_extract(value, '$.actor_user_id'),
                json_extract(value, '$.updated_at'), NULL
           FROM json_each(?)`,
      ).bind(changesJson),
      c.env.DB.prepare(
        `WITH updates AS (
           SELECT json_extract(value, '$.claim_id') AS claim_id,
                  json_extract(value, '$.predicate') AS predicate,
                  json_extract(value, '$.expected_revision') AS expected_revision,
                  json_extract(value, '$.new_revision') AS new_revision,
                  json_extract(value, '$.updated_at') AS updated_at
             FROM json_each(?)
         )
         UPDATE claim
            SET predicate = (SELECT predicate FROM updates WHERE claim_id = claim.id),
                updated_at = (SELECT updated_at FROM updates WHERE claim_id = claim.id),
                current_revision = (SELECT new_revision FROM updates WHERE claim_id = claim.id)
          WHERE id IN (SELECT claim_id FROM updates)
            AND current_revision = (SELECT expected_revision FROM updates WHERE claim_id = claim.id)`,
      ).bind(changesJson),
      c.env.DB.prepare(
        `INSERT INTO contribution
           (id, action, actor_user_id, target_type, target_id, change_summary, before_revision, after_revision, created_at)
         SELECT json_extract(value, '$.contribution_id'), 'claim.revise',
                json_extract(value, '$.actor_user_id'), 'claim', json_extract(value, '$.claim_id'),
                json_extract(value, '$.change_summary'), json_extract(value, '$.expected_revision'),
                json_extract(value, '$.new_revision'), json_extract(value, '$.updated_at')
           FROM json_each(?)`,
      ).bind(changesJson),
    ]);
  }

  return c.json({
    updated: changes.length,
    already_applied: alreadyApplied,
    father: changes.filter((item) => item.predicate === 'kinship.father_of').length,
    mother: changes.filter((item) => item.predicate === 'kinship.mother_of').length,
  });
});

app.post('/bulk-kinship-repairs', async (c) => {
  const auth = requireRole(c, ['admin', 'maintainer']);
  const body = bulkKinshipRepairSchema.parse(await c.req.json());
  if (body.retractions.length + body.reclassifications.length === 0) {
    throw badRequest('empty_repair', '修復計劃至少要修改一條既有主張。');
  }

  const splitKeys = body.splits.map((item) => item.key);
  if (new Set(splitKeys).size !== splitKeys.length) {
    throw badRequest('duplicate_split_key', '同名拆分鍵不能重複。');
  }
  const changedIds = [
    ...body.retractions.map((item) => item.claim_id),
    ...body.reclassifications.map((item) => item.claim_id),
  ];
  if (new Set(changedIds).size !== changedIds.length) {
    throw badRequest('duplicate_claim', '同一條既有主張只能修改一次。');
  }
  const retractedIds = new Set(body.retractions.map((item) => item.claim_id));
  for (const item of body.relinks) {
    if (!retractedIds.has(item.source_claim_id)) {
      throw badRequest('relink_without_retraction', `改掛來源主張未列入撤回：${item.source_claim_id}`);
    }
  }

  const referencedClaimIds = [...new Set([
    ...changedIds,
    ...body.splits.map((item) => item.evidence_claim_id),
    ...body.relinks.map((item) => item.source_claim_id),
  ])];
  const directPersonRefs = [...new Set(body.relinks.flatMap((item) => [item.subject, item.object])
    .filter((ref) => !ref.startsWith('split:')))];
  const [claimResult, personResult] = await c.env.DB.batch([
    c.env.DB.prepare(
      `SELECT c.*, cs.id AS cs_id, cs.source_id, cs.stance, cs.locator, cs.quotation,
              cs.interpretation_note
         FROM claim c
         LEFT JOIN claim_source cs ON cs.claim_id = c.id
        WHERE c.id IN (SELECT value FROM json_each(?))
        ORDER BY c.id, cs.id`,
    ).bind(JSON.stringify(referencedClaimIds)),
    c.env.DB.prepare(
      `SELECT id FROM person WHERE id IN (SELECT value FROM json_each(?)) AND status <> 'suppressed'`,
    ).bind(JSON.stringify(directPersonRefs)),
  ]);

  const claims = new Map<string, Claim>();
  const citations = new Map<string, Array<Record<string, unknown>>>();
  for (const row of (claimResult?.results ?? []) as Array<Record<string, unknown>>) {
    const claim = mapClaim(row);
    claims.set(claim.id, claim);
    if (row.cs_id) {
      const refs = citations.get(claim.id) ?? [];
      refs.push(row);
      citations.set(claim.id, refs);
    }
  }
  for (const id of referencedClaimIds) {
    if (!claims.has(id)) throw notFound(`主張不存在：${id}`);
  }
  const foundPeople = new Set(((personResult?.results ?? []) as Array<{ id: string }>).map((row) => row.id));
  for (const id of directPersonRefs) {
    if (!foundPeople.has(id)) throw notFound(`人物不存在或已隱藏：${id}`);
  }

  const assertExpected = (
    claimId: string,
    expectedRevision: number,
    expect: z.infer<typeof expectedRelationshipSchema>,
  ): Claim => {
    const claim = claims.get(claimId)!;
    if (
      claim.claim_kind !== 'relationship' ||
      claim.current_revision !== expectedRevision ||
      claim.predicate !== expect.predicate ||
      claim.subject_person_id !== expect.subject ||
      claim.object_person_id !== expect.object ||
      claim.status === 'retracted'
    ) {
      throw conflict('repair_plan_stale', `修復計劃與目前主張不一致：${claimId}`, {
        current_revision: claim.current_revision,
        current_predicate: claim.predicate,
        current_subject: claim.subject_person_id,
        current_object: claim.object_person_id,
        current_status: claim.status,
      });
    }
    return claim;
  };
  for (const item of body.retractions) {
    assertExpected(item.claim_id, item.expected_revision, item.expect);
  }
  for (const item of body.reclassifications) {
    assertExpected(item.claim_id, item.expected_revision, item.expect);
  }
  for (const item of body.splits) {
    const sourceClaim = claims.get(item.evidence_claim_id)!;
    if (sourceClaim.claim_kind !== 'relationship' || !(citations.get(sourceClaim.id) ?? []).some((row) => row.stance === 'supports')) {
      throw badRequest('split_without_evidence', `拆分人物缺少支持來源：${item.key}`);
    }
  }

  const now = nowIso();
  const personIdByKey = new Map(body.splits.map((item) => [item.key, newId('person')]));
  const resolvePerson = (ref: string): string => {
    if (!ref.startsWith('split:')) return ref;
    const id = personIdByKey.get(ref.slice(6));
    if (!id) throw badRequest('unknown_split_key', `找不到拆分人物：${ref}`);
    return id;
  };

  const newPeople = body.splits.map((item) => ({
    id: personIdByKey.get(item.key)!,
    created_by_user_id: auth.userId,
    created_at: now,
  }));
  const newClaims: Array<Record<string, unknown>> = [];
  const newRevisions: Array<Record<string, unknown>> = [];
  const newCitations: Array<Record<string, unknown>> = [];
  const contributions: Array<Record<string, unknown>> = [];

  const addContribution = (
    action: 'person.create' | 'claim.create' | 'claim.revise' | 'claim.retract',
    targetType: 'person' | 'claim',
    targetId: string,
    summary: string,
    beforeRevision: number | null,
    afterRevision: number | null,
  ) => contributions.push({
    id: newId('contribution'), action, actor_user_id: auth.userId, target_type: targetType,
    target_id: targetId, change_summary: summary, before_revision: beforeRevision,
    after_revision: afterRevision, created_at: now,
  });

  const addAcceptedClaim = (input: {
    subject: string;
    kind: 'property' | 'relationship';
    predicate: string;
    object?: string | null;
    value?: Record<string, unknown> | null;
    generationCount?: number | null;
    confidence: string;
    sourceClaimId: string;
    summary: string;
    nameOnlyFirstCitation?: boolean;
  }): string => {
    const id = newId('claim');
    const base = {
      id, subject_person_id: input.subject, claim_kind: input.kind, predicate: input.predicate,
      object_person_id: input.object ?? null, generation_count: input.generationCount ?? null,
      value_json: input.value ? JSON.stringify(input.value) : null, status: 'accepted',
      confidence: input.confidence, created_by_user_id: auth.userId, created_at: now,
      updated_at: now, current_revision: 2,
    };
    newClaims.push(base);
    const proposed = { ...base, status: 'proposed', current_revision: 1 };
    newRevisions.push(
      { id: newId('revision'), claim_id: id, revision_number: 1, snapshot_json: JSON.stringify(snapshotOf(mapClaim(proposed))), change_summary: input.summary, actor_user_id: auth.userId, created_at: now },
      { id: newId('revision'), claim_id: id, revision_number: 2, snapshot_json: JSON.stringify(snapshotOf(mapClaim(base))), change_summary: '同名异人核对后采纳', actor_user_id: auth.userId, created_at: now },
    );
    const supporting = (citations.get(input.sourceClaimId) ?? []).filter((row) => row.stance === 'supports');
    for (const row of input.nameOnlyFirstCitation ? supporting.slice(0, 1) : supporting) {
      newCitations.push({
        id: newId('claimSource'), claim_id: id, source_id: row.source_id, stance: row.stance,
        locator: row.locator ?? null, quotation: row.quotation ?? null,
        interpretation_note: row.interpretation_note ?? null, actor_user_id: auth.userId, created_at: now,
      });
    }
    addContribution('claim.create', 'claim', id, input.summary, null, 1);
    addContribution('claim.revise', 'claim', id, '同名异人核对后采纳', 1, 2);
    return id;
  };

  for (const split of body.splits) {
    const personId = personIdByKey.get(split.key)!;
    addContribution('person.create', 'person', personId, `同名异人拆分：${split.reason}`, 0, 1);
    addAcceptedClaim({
      subject: personId,
      kind: 'property',
      predicate: 'name.primary',
      value: split.name,
      confidence: 'medium',
      sourceClaimId: split.evidence_claim_id,
      summary: `同名异人拆分：${split.reason}`,
      nameOnlyFirstCitation: true,
    });
  }

  for (const relink of body.relinks) {
    const old = claims.get(relink.source_claim_id)!;
    if (old.claim_kind !== 'relationship' || !old.object_person_id) {
      throw badRequest('not_relationship', `不能改掛非關係主張：${old.id}`);
    }
    const subject = resolvePerson(relink.subject);
    const object = resolvePerson(relink.object);
    if (subject === object) throw badRequest('self_relationship', `改掛後不能指向自身：${relink.label}`);
    addAcceptedClaim({
      subject,
      kind: 'relationship',
      predicate: old.predicate,
      object,
      generationCount: old.generation_count,
      confidence: old.confidence,
      sourceClaimId: old.id,
      summary: `同名异人拆分后改挂：${relink.label}`,
    });
  }

  const updates: Array<Record<string, unknown>> = [];
  for (const item of body.retractions) {
    const old = claims.get(item.claim_id)!;
    const next = { ...old, status: 'retracted' as const, current_revision: old.current_revision + 1, updated_at: now };
    updates.push({ id: old.id, predicate: old.predicate, status: 'retracted', expected_revision: old.current_revision, new_revision: next.current_revision });
    newRevisions.push({ id: newId('revision'), claim_id: old.id, revision_number: next.current_revision, snapshot_json: JSON.stringify(snapshotOf(next)), change_summary: item.reason, actor_user_id: auth.userId, created_at: now });
    addContribution('claim.retract', 'claim', old.id, item.reason, old.current_revision, next.current_revision);
  }
  for (const item of body.reclassifications) {
    const old = claims.get(item.claim_id)!;
    const next = { ...old, predicate: item.predicate, current_revision: old.current_revision + 1, updated_at: now };
    updates.push({ id: old.id, predicate: item.predicate, status: old.status, expected_revision: old.current_revision, new_revision: next.current_revision });
    newRevisions.push({ id: newId('revision'), claim_id: old.id, revision_number: next.current_revision, snapshot_json: JSON.stringify(snapshotOf(next)), change_summary: item.reason, actor_user_id: auth.userId, created_at: now });
    addContribution('claim.revise', 'claim', old.id, item.reason, old.current_revision, next.current_revision);
  }

  const statements: D1PreparedStatement[] = [];
  if (newPeople.length) statements.push(c.env.DB.prepare(
    `INSERT INTO person (id, status, created_by_user_id, created_at, updated_at, current_revision)
     SELECT json_extract(value,'$.id'), 'active', json_extract(value,'$.created_by_user_id'),
            json_extract(value,'$.created_at'), json_extract(value,'$.created_at'), 1
       FROM json_each(?)`,
  ).bind(JSON.stringify(newPeople)));
  if (newClaims.length) statements.push(c.env.DB.prepare(
    `INSERT INTO claim (id, subject_person_id, claim_kind, predicate, object_person_id,
                        generation_count, value_json, status, confidence, created_by_user_id,
                        created_at, updated_at, current_revision)
     SELECT json_extract(value,'$.id'), json_extract(value,'$.subject_person_id'),
            json_extract(value,'$.claim_kind'), json_extract(value,'$.predicate'),
            json_extract(value,'$.object_person_id'), json_extract(value,'$.generation_count'),
            json_extract(value,'$.value_json'), json_extract(value,'$.status'),
            json_extract(value,'$.confidence'), json_extract(value,'$.created_by_user_id'),
            json_extract(value,'$.created_at'), json_extract(value,'$.updated_at'),
            json_extract(value,'$.current_revision') FROM json_each(?)`,
  ).bind(JSON.stringify(newClaims)));
  if (newRevisions.length) statements.push(c.env.DB.prepare(
    `INSERT INTO claim_revision (id, claim_id, revision_number, snapshot_json, change_summary,
                                 created_by_user_id, created_at, reverts_revision_id)
     SELECT json_extract(value,'$.id'), json_extract(value,'$.claim_id'),
            json_extract(value,'$.revision_number'), json_extract(value,'$.snapshot_json'),
            json_extract(value,'$.change_summary'), json_extract(value,'$.actor_user_id'),
            json_extract(value,'$.created_at'), NULL FROM json_each(?)`,
  ).bind(JSON.stringify(newRevisions)));
  if (newCitations.length) statements.push(c.env.DB.prepare(
    `INSERT INTO claim_source (id, claim_id, source_id, stance, locator, quotation,
                               interpretation_note, added_by_user_id, created_at)
     SELECT json_extract(value,'$.id'), json_extract(value,'$.claim_id'),
            json_extract(value,'$.source_id'), json_extract(value,'$.stance'),
            json_extract(value,'$.locator'), json_extract(value,'$.quotation'),
            json_extract(value,'$.interpretation_note'), json_extract(value,'$.actor_user_id'),
            json_extract(value,'$.created_at') FROM json_each(?)`,
  ).bind(JSON.stringify(newCitations)));
  statements.push(c.env.DB.prepare(
    `WITH u AS (
       SELECT json_extract(value,'$.id') id, json_extract(value,'$.predicate') predicate,
              json_extract(value,'$.status') status,
              json_extract(value,'$.expected_revision') expected_revision,
              json_extract(value,'$.new_revision') new_revision FROM json_each(?)
     )
     UPDATE claim SET predicate=(SELECT predicate FROM u WHERE u.id=claim.id),
                      status=(SELECT status FROM u WHERE u.id=claim.id), updated_at=?,
                      current_revision=(SELECT new_revision FROM u WHERE u.id=claim.id)
      WHERE id IN (SELECT id FROM u)
        AND current_revision=(SELECT expected_revision FROM u WHERE u.id=claim.id)`,
  ).bind(JSON.stringify(updates), now));
  statements.push(c.env.DB.prepare(
    `INSERT INTO contribution (id, action, actor_user_id, target_type, target_id,
                               change_summary, before_revision, after_revision, created_at)
     SELECT json_extract(value,'$.id'), json_extract(value,'$.action'),
            json_extract(value,'$.actor_user_id'), json_extract(value,'$.target_type'),
            json_extract(value,'$.target_id'), json_extract(value,'$.change_summary'),
            json_extract(value,'$.before_revision'), json_extract(value,'$.after_revision'),
            json_extract(value,'$.created_at') FROM json_each(?)`,
  ).bind(JSON.stringify(contributions)));
  await c.env.DB.batch(statements);

  return c.json({
    retracted: body.retractions.length,
    reclassified: body.reclassifications.length,
    people_created: newPeople.length,
    relationships_relinked: body.relinks.length,
    split_people: Object.fromEntries(personIdByKey),
  });
});

/** Count distinct supporting sources for a claim. */
async function supportingSourceCount(db: D1Database, claimId: string): Promise<number> {
  const row = await db
    .prepare("SELECT COUNT(DISTINCT source_id) AS n FROM claim_source WHERE claim_id = ? AND stance = 'supports'")
    .bind(claimId)
    .first<{ n: number }>();
  return Number(row?.n ?? 0);
}

// Claim detail: the claim, its sources, and its full append-only revision list.
app.get('/:id', async (c) => {
  const claim = await loadClaim(c.env.DB, c.req.param('id'));
  if (!claim) throw notFound('主張不存在');
  const [sourcesRes, revsRes] = await Promise.all([
    c.env.DB
      .prepare(
        `SELECT cs.*, s.title AS s_title, s.source_type AS s_source_type, s.canonical_url AS s_canonical_url
           FROM claim_source cs LEFT JOIN source s ON s.id = cs.source_id WHERE cs.claim_id = ?`,
      )
      .bind(claim.id)
      .all<Record<string, unknown>>(),
    c.env.DB
      .prepare('SELECT * FROM claim_revision WHERE claim_id = ? ORDER BY revision_number')
      .bind(claim.id)
      .all<Record<string, unknown>>(),
  ]);
  return c.json({
    claim,
    sources: sourcesRes.results ?? [],
    revisions: (revsRes.results ?? []).map(mapClaimRevision),
  });
});

// Revise a claim (optimistic concurrency via expected_revision).
app.post('/:id/revisions', async (c) => {
  const auth = requireAuth(c);
  const claim = await loadClaim(c.env.DB, c.req.param('id'));
  if (!claim) throw notFound('主張不存在');
  const body = reviseClaimSchema.parse(await c.req.json());

  if (body.patch.value !== undefined && claim.claim_kind !== 'property')
    throw badRequest('bad_claim_value', '只有人物屬性主張可以修改取值。');
  if (body.patch.generation_count !== undefined && claim.predicate !== 'kinship.ancestor_of')
    throw badRequest('bad_generation_count', '只有先祖／後代世系可以修改相隔代數。');
  if (
    body.patch.parent_role !== undefined &&
    ![
      'kinship.parent_of', 'kinship.father_of', 'kinship.mother_of',
      'kinship.adoptive_parent_of', 'kinship.adoptive_father_of', 'kinship.adoptive_mother_of',
      'kinship.step_parent_of',
    ].includes(claim.predicate)
  ) throw badRequest('bad_parent_role', '只有父母關係可以設定父親或母親角色。');

  if (body.expected_revision !== claim.current_revision)
    throw conflict('revision_conflict', `版本不一致：當前為 ${claim.current_revision}`, {
      current_revision: claim.current_revision,
      expected_revision: body.expected_revision,
    });

  const patchedValue: Claim['value_json'] =
    body.patch.value !== undefined
      ? {
          ...body.patch.value,
          date:
            body.patch.value.date?.original_text != null
              ? normalizeDate(body.patch.value.date.original_text, body.patch.value.date.calendar_note ?? undefined)
              : undefined,
        }
      : claim.value_json;

  const next: Claim = {
    ...claim,
    predicate: body.patch.parent_role === undefined
      ? claim.predicate
      : parentPredicateForRole(claim.predicate as RelationshipPredicate, body.patch.parent_role),
    confidence: body.patch.confidence ?? claim.confidence,
    value_json: patchedValue,
    generation_count: body.patch.generation_count === undefined
      ? claim.generation_count
      : body.patch.generation_count,
    parent_role: body.patch.parent_role === undefined
      ? claim.parent_role
      : body.patch.parent_role,
    status: body.patch.status ?? claim.status,
  };

  // A claim can only become 'accepted' with at least one supporting source.
  if (next.status === 'accepted' && (await supportingSourceCount(c.env.DB, claim.id)) < 1)
    throw badRequest('no_source', '主張需至少一條支持來源才能被採納。');

  const now = nowIso();
  const newRevision = claim.current_revision + 1;
  await c.env.DB.batch([
    c.env.DB
      .prepare(
        'UPDATE claim SET predicate = ?, confidence = ?, value_json = ?, generation_count = ?, status = ?, updated_at = ?, current_revision = ? WHERE id = ? AND current_revision = ?',
      )
      .bind(
        next.predicate,
        next.confidence,
        next.value_json ? JSON.stringify(next.value_json) : null,
        next.generation_count,
        next.status,
        now,
        newRevision,
        claim.id,
        claim.current_revision,
      ),
    c.env.DB
      .prepare(
        `INSERT INTO claim_revision (id, claim_id, revision_number, snapshot_json, change_summary, created_by_user_id, created_at, reverts_revision_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, NULL)`,
      )
      .bind(newId('revision'), claim.id, newRevision, JSON.stringify(snapshotOf(next)), body.change_summary ?? null, auth.userId, now),
    contributionStatement(c.env.DB, {
      action: 'claim.revise',
      actorUserId: auth.userId,
      targetType: 'claim',
      targetId: claim.id,
      changeSummary: body.change_summary ?? null,
      beforeRevision: claim.current_revision,
      afterRevision: newRevision,
    }),
  ]);
  return c.json({ claim_id: claim.id, current_revision: newRevision, status: next.status });
});

// Mark disputed. A minority view with valid sources is never hidden.
app.post('/:id/disputes', async (c) => {
  const auth = requireAuth(c);
  const claim = await loadClaim(c.env.DB, c.req.param('id'));
  if (!claim) throw notFound('主張不存在');
  const body = disputeSchema.parse(await c.req.json().catch(() => ({})));
  return c.json(await transition(c.env.DB, claim, auth.userId, 'disputed', 'claim.dispute', body.change_summary ?? body.reason ?? null));
});

// Retract (author-style withdrawal). Still append-only; never deleted.
app.post('/:id/retractions', async (c) => {
  const auth = requireAuth(c);
  const claim = await loadClaim(c.env.DB, c.req.param('id'));
  if (!claim) throw notFound('主張不存在');
  const body = retractSchema.parse(await c.req.json().catch(() => ({})));
  return c.json(await transition(c.env.DB, claim, auth.userId, 'retracted', 'claim.retract', body.change_summary ?? body.reason ?? null));
});

// Revert: create a NEW revision restoring a prior snapshot. Never overwrite/delete.
app.post('/:id/reverts', async (c) => {
  const auth = requireAuth(c);
  const claim = await loadClaim(c.env.DB, c.req.param('id'));
  if (!claim) throw notFound('主張不存在');
  const body = revertSchema.parse(await c.req.json());

  const target = await c.env.DB
    .prepare('SELECT * FROM claim_revision WHERE id = ? AND claim_id = ?')
    .bind(body.target_revision_id, claim.id)
    .first<Record<string, unknown>>();
  if (!target) throw notFound('目標版本不存在');
  const targetRev = mapClaimRevision(target);
  const snap = targetRev.snapshot_json;

  const now = nowIso();
  const newRevision = claim.current_revision + 1;
  await c.env.DB.batch([
    c.env.DB
      .prepare(
        'UPDATE claim SET predicate = ?, confidence = ?, value_json = ?, status = ?, object_person_id = ?, generation_count = ?, updated_at = ?, current_revision = ? WHERE id = ? AND current_revision = ?',
      )
      .bind(
        snap.predicate,
        snap.confidence,
        snap.value_json ? JSON.stringify(snap.value_json) : null,
        snap.status,
        snap.object_person_id,
        snap.generation_count ?? null,
        now,
        newRevision,
        claim.id,
        claim.current_revision,
      ),
    c.env.DB
      .prepare(
        `INSERT INTO claim_revision (id, claim_id, revision_number, snapshot_json, change_summary, created_by_user_id, created_at, reverts_revision_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(
        newId('revision'),
        claim.id,
        newRevision,
        JSON.stringify(snap),
        body.change_summary ?? `回滾到版本 ${targetRev.revision_number}`,
        auth.userId,
        now,
        targetRev.id,
      ),
    contributionStatement(c.env.DB, {
      action: 'claim.revert',
      actorUserId: auth.userId,
      targetType: 'claim',
      targetId: claim.id,
      changeSummary: body.change_summary ?? `回滾到版本 ${targetRev.revision_number}`,
      beforeRevision: claim.current_revision,
      afterRevision: newRevision,
    }),
  ]);
  return c.json({ claim_id: claim.id, current_revision: newRevision, reverted_to: targetRev.revision_number });
});

// Attach an additional source to an existing claim.
app.post('/:id/sources', async (c) => {
  const auth = requireAuth(c);
  const claim = await loadClaim(c.env.DB, c.req.param('id'));
  if (!claim) throw notFound('主張不存在');
  const ref = sourceRefSchema.parse(await c.req.json());
  await assertSourcesExist(c.env.DB, [ref]);
  try {
    await c.env.DB.batch([
      claimSourceStatement(c.env.DB, claim.id, ref, auth.userId),
      contributionStatement(c.env.DB, {
        action: 'claim.source.add',
        actorUserId: auth.userId,
        targetType: 'claim',
        targetId: claim.id,
      }),
    ]);
  } catch (e) {
    if (String(e).includes('UNIQUE')) throw conflict('source_link_exists', '該來源已按此立場關聯到主張。');
    throw e;
  }
  return c.json({ claim_id: claim.id, source_id: ref.source_id, stance: ref.stance }, 201);
});

async function transition(
  db: D1Database,
  claim: Claim,
  actorUserId: string,
  status: Claim['status'],
  action: 'claim.dispute' | 'claim.retract',
  changeSummary: string | null,
) {
  const now = nowIso();
  const newRevision = claim.current_revision + 1;
  const snap = snapshotOf({ ...claim, status });
  await db.batch([
    db
      .prepare('UPDATE claim SET status = ?, updated_at = ?, current_revision = ? WHERE id = ? AND current_revision = ?')
      .bind(status, now, newRevision, claim.id, claim.current_revision),
    db
      .prepare(
        `INSERT INTO claim_revision (id, claim_id, revision_number, snapshot_json, change_summary, created_by_user_id, created_at, reverts_revision_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, NULL)`,
      )
      .bind(newId('revision'), claim.id, newRevision, JSON.stringify(snap), changeSummary, actorUserId, now),
    contributionStatement(db, {
      action,
      actorUserId,
      targetType: 'claim',
      targetId: claim.id,
      changeSummary,
      beforeRevision: claim.current_revision,
      afterRevision: newRevision,
    }),
  ]);
  return { claim_id: claim.id, status, current_revision: newRevision };
}

export default app;
