import { Hono } from 'hono';
import { z } from 'zod';
import type { Env, Variables } from '../env.ts';
import type { Claim, ClaimSnapshot, RelationshipPredicate } from '@wang/domain';
import { parentPredicateForRole } from '@wang/domain';
import { disputeSchema, normalizeDate, retractSchema, reviseClaimSchema, revertSchema, sourceRefSchema } from '@wang/validation';
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
