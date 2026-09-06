import { Hono } from 'hono';
import { z } from 'zod';
import { createSourceSchema } from '@wang/validation';
import type { Env, Variables } from '../env.ts';
import { requireRole } from '../auth.ts';
import { AppError, badRequest, conflict, notFound } from '../errors.ts';
import { sha256Hex } from '../crypto.ts';
import { newId, nowIso } from '../util.ts';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
const MAX_REQUEST_BYTES = 2 * 1024 * 1024;

const endpointSchema = z.object({
  person_id: z.string().min(3).max(80).optional(),
  identity_key: z.string().min(3).max(200).optional(),
}).superRefine((endpoint, ctx) => {
  if (Number(Boolean(endpoint.person_id)) + Number(Boolean(endpoint.identity_key)) !== 1) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: '关系端点必须且只能提供 person_id 或 identity_key。' });
  }
});

const reviewedSourceSchema = createSourceSchema.extend({
  key: z.string().min(3).max(200),
  canonical_url: z.string().url().max(1000),
  external_identifier: z.string().trim().min(1).max(200),
});

export const bulkReviewedRelationshipsSchema = z.object({
  summary: z.string().min(3).max(500),
  sources: z.array(reviewedSourceSchema).min(1).max(1000),
  items: z.array(z.object({
    identity_key: z.string().min(3).max(500),
    kind: z.enum(['parent', 'adoptive_parent', 'spouse']),
    from: endpointSchema,
    to: endpointSchema,
    confidence: z.enum(['unknown', 'low', 'medium', 'high']).default('medium'),
    citations: z.array(z.object({
      source_key: z.string().min(3).max(200),
      locator: z.string().max(1000).optional(),
      quotation: z.string().max(2000).optional(),
      interpretation_note: z.string().max(2000).optional(),
    })).min(1).max(10),
  })).min(1).max(200),
}).superRefine((body, ctx) => {
  const sourceKeys = new Set<string>();
  const sourceIdentities = new Set<string>();
  body.sources.forEach((source, index) => {
    if (sourceKeys.has(source.key)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['sources', index, 'key'], message: '来源 key 不能重复。' });
    }
    sourceKeys.add(source.key);
    const identity = `${source.source_type}\u0000${source.external_identifier}`;
    if (sourceIdentities.has(identity)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['sources', index, 'external_identifier'], message: '来源稳定标识不能重复。' });
    }
    sourceIdentities.add(identity);
  });
  const edgeKeys = new Set<string>();
  body.items.forEach((item, index) => {
    if (edgeKeys.has(item.identity_key)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', index, 'identity_key'], message: '关系稳定标识不能重复。' });
    }
    edgeKeys.add(item.identity_key);
    const citationKeys = new Set<string>();
    item.citations.forEach((citation, citationIndex) => {
      if (!sourceKeys.has(citation.source_key)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', index, 'citations', citationIndex, 'source_key'], message: '关系引用了请求中不存在的来源。' });
      }
      if (citationKeys.has(citation.source_key)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', index, 'citations', citationIndex, 'source_key'], message: '同一关系不能重复引用同一来源。' });
      }
      citationKeys.add(citation.source_key);
    });
  });
});

type BulkInput = z.infer<typeof bulkReviewedRelationshipsSchema>;

function stableJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.entries(value as Record<string, unknown>)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, child]) => `${JSON.stringify(key)}:${stableJson(child)}`)
      .join(',')}}`;
  }
  return JSON.stringify(value);
}

async function readBoundedJson(c: Parameters<typeof requireRole>[0]): Promise<unknown> {
  const raw = await c.req.text();
  if (new TextEncoder().encode(raw).byteLength > MAX_REQUEST_BYTES) {
    throw new AppError(413, 'payload_too_large', '批量关系请求不能超过 2 MiB。');
  }
  try {
    return JSON.parse(raw) as unknown;
  } catch {
    throw badRequest('invalid_json', '请求正文不是合法 JSON。');
  }
}

function databaseError(error: unknown): never {
  const message = error instanceof Error ? error.message : String(error);
  if (/no such table:\s*reviewed_relationship_import/i.test(message)) {
    throw new AppError(503, 'migration_pending', '批量关系导入迁移尚未应用。');
  }
  if (/free tier daily row (read|write) limit|code:?\s*7500/i.test(message)) {
    throw new AppError(503, 'd1_daily_quota_exhausted', 'D1 每日额度已耗尽；可在额度重置后原批次续传。');
  }
  throw error;
}

const endpointKey = (endpoint: BulkInput['items'][number]['from']) =>
  endpoint.person_id ? `person:${endpoint.person_id}` : `identity:${endpoint.identity_key}`;

app.post('/bulk-reviewed-relationships', async (c) => {
  const auth = requireRole(c, ['admin', 'maintainer']);
  const body = bulkReviewedRelationshipsSchema.parse(await readBoundedJson(c));
  const sourceByKey = new Map(body.sources.map((source) => [source.key, source]));
  const refs = [...new Map(body.items.flatMap((item) => [item.from, item.to])
    .map((endpoint) => [endpointKey(endpoint), endpoint])).entries()]
    .map(([ref_key, endpoint]) => ({ ref_key, ...endpoint }));

  let firstRead: D1Result<unknown>[];
  try {
    firstRead = await c.env.DB.batch([
      c.env.DB.prepare(
        `WITH refs AS (
           SELECT json_extract(value,'$.ref_key') AS ref_key,
                  json_extract(value,'$.person_id') AS person_id,
                  json_extract(value,'$.identity_key') AS identity_key
             FROM json_each(?)
         )
         SELECT refs.ref_key,
                COALESCE(direct.id, imported_person.id) AS resolved_id,
                COALESCE(direct.status, imported_person.status) AS person_status
           FROM refs
           LEFT JOIN person direct ON direct.id = refs.person_id
           LEFT JOIN reviewed_person_import imported ON imported.identity_key = refs.identity_key
           LEFT JOIN reviewed_kinship_person_import kinship_imported ON kinship_imported.identity_key = refs.identity_key
           LEFT JOIN person imported_person ON imported_person.id = COALESCE(imported.person_id, kinship_imported.person_id)`,
      ).bind(JSON.stringify(refs)),
      c.env.DB.prepare(
        `WITH requested AS (
           SELECT json_extract(value,'$.key') AS source_key,
                  json_extract(value,'$.source_type') AS source_type,
                  json_extract(value,'$.external_identifier') AS external_identifier
             FROM json_each(?)
         )
         SELECT requested.source_key, COUNT(s.id) AS source_count,
                MIN(s.id) AS source_id, MIN(s.canonical_url) AS canonical_url
           FROM requested
           LEFT JOIN source s ON s.source_type = requested.source_type
            AND s.external_identifier = requested.external_identifier
          GROUP BY requested.source_key`,
      ).bind(JSON.stringify(body.sources)),
    ]);
  } catch (error) {
    databaseError(error);
  }

  const resolved = new Map(((firstRead[0]?.results ?? []) as Array<{ ref_key: string; resolved_id: string | null; person_status: string | null }>)
    .map((row) => [row.ref_key, row]));
  for (const ref of refs) {
    const row = resolved.get(ref.ref_key);
    if (!row?.resolved_id || row.person_status !== 'active') throw notFound(`关系端点不存在或未公开：${ref.ref_key}`);
  }

  const now = nowIso();
  const sourceIds = new Map<string, string>();
  const newSources: Array<Record<string, unknown>> = [];
  for (const row of (firstRead[1]?.results ?? []) as Array<{ source_key: string; source_count: number; source_id: string | null; canonical_url: string | null }>) {
    const input = sourceByKey.get(row.source_key)!;
    if (Number(row.source_count) > 1) throw conflict('source_ambiguous', `来源稳定标识对应多条记录：${row.source_key}`);
    if (Number(row.source_count) === 1) {
      if (row.canonical_url !== input.canonical_url || !row.source_id) throw conflict('source_identity_changed', `来源网址与既有记录不一致：${row.source_key}`);
      sourceIds.set(row.source_key, row.source_id);
    } else {
      const sourceId = newId('source');
      sourceIds.set(row.source_key, sourceId);
      newSources.push({
        ...input,
        id: sourceId,
        accessed_at: input.accessed_at ?? now,
        metadata_json: input.metadata_json ? JSON.stringify(input.metadata_json) : null,
        contribution_id: newId('contribution'),
        actor_user_id: auth.userId,
        created_at: now,
      });
    }
  }
  if (sourceIds.size !== body.sources.length) throw conflict('source_check_incomplete', '来源校验结果不完整。');

  const records = await Promise.all(body.items.map(async (item, index) => {
    let subject = resolved.get(endpointKey(item.from))!.resolved_id!;
    let object = resolved.get(endpointKey(item.to))!.resolved_id!;
    const predicate = item.kind === 'parent'
      ? 'kinship.parent_of'
      : item.kind === 'adoptive_parent'
        ? 'kinship.adoptive_parent_of'
        : 'kinship.spouse_of';
    if (item.kind === 'spouse' && subject.localeCompare(object) > 0) [subject, object] = [object, subject];
    if (subject === object) throw badRequest('self_relationship', `关系不能指向自身：${item.identity_key}`);
    const normalized = {
      identity_key: item.identity_key,
      kind: item.kind,
      subject_person_id: subject,
      predicate,
      object_person_id: object,
      confidence: item.confidence,
      citations: item.citations.map((citation) => ({
        ...citation,
        source_id: sourceIds.get(citation.source_key)!,
      })),
      sources: item.citations.map((citation) => sourceByKey.get(citation.source_key)),
    };
    return { ...normalized, request_index: index, content_hash: await sha256Hex(stableJson(normalized)) };
  }));
  const requestJson = JSON.stringify(records);

  let secondRead: D1Result<unknown>[];
  try {
    secondRead = await c.env.DB.batch([
      c.env.DB.prepare(
        `WITH requested AS (
           SELECT CAST(json_extract(value,'$.request_index') AS INTEGER) AS request_index,
                  json_extract(value,'$.identity_key') AS identity_key
             FROM json_each(?)
         )
         SELECT requested.request_index, imported.identity_key, imported.content_hash,
                imported.claim_id, imported.subject_person_id, imported.predicate, imported.object_person_id,
                claim.status, claim.confidence, COUNT(DISTINCT cs.source_id) AS citation_count
           FROM requested
           LEFT JOIN reviewed_relationship_import imported ON imported.identity_key = requested.identity_key
           LEFT JOIN claim ON claim.id = imported.claim_id
           LEFT JOIN claim_source cs ON cs.claim_id = imported.claim_id AND cs.stance = 'supports'
          GROUP BY requested.request_index, imported.identity_key`,
      ).bind(requestJson),
      c.env.DB.prepare(
        `WITH requested AS (
           SELECT CAST(json_extract(value,'$.request_index') AS INTEGER) AS request_index,
                  json_extract(value,'$.kind') AS kind,
                  json_extract(value,'$.subject_person_id') AS subject_person_id,
                  json_extract(value,'$.predicate') AS predicate,
                  json_extract(value,'$.object_person_id') AS object_person_id
             FROM json_each(?)
         )
         SELECT requested.request_index, existing.id AS claim_id
           FROM requested JOIN claim existing
             ON existing.subject_person_id = requested.subject_person_id
            AND existing.object_person_id = requested.object_person_id
            AND existing.status NOT IN ('retracted','superseded')
            AND ((requested.kind = 'parent' AND existing.predicate IN ('kinship.parent_of','kinship.father_of','kinship.mother_of'))
              OR (requested.kind = 'adoptive_parent' AND existing.predicate IN ('kinship.adoptive_parent_of','kinship.adoptive_father_of','kinship.adoptive_mother_of'))
              OR (requested.kind = 'spouse' AND existing.predicate = 'kinship.spouse_of'))`,
      ).bind(requestJson),
    ]);
  } catch (error) {
    databaseError(error);
  }

  const importRows = new Map(((secondRead[0]?.results ?? []) as Array<Record<string, unknown>>)
    .map((row) => [Number(row.request_index), row]));
  const existingByIndex = new Map<number, string>();
  for (const row of (secondRead[1]?.results ?? []) as Array<{ request_index: number; claim_id: string }>) {
    const index = Number(row.request_index);
    if (existingByIndex.has(index)) throw conflict('relationship_ambiguous', `关系存在多条等价记录：${body.items[index]!.identity_key}`);
    existingByIndex.set(index, row.claim_id);
  }

  const createRecords: Array<Record<string, unknown>> = [];
  const reused: Array<{ identity_key: string; claim_id: string }> = [];
  for (const record of records) {
    const imported = importRows.get(record.request_index);
    if (imported?.identity_key) {
      if (
        imported.content_hash !== record.content_hash || imported.claim_id !== existingByIndex.get(record.request_index) ||
        imported.subject_person_id !== record.subject_person_id || imported.predicate !== record.predicate ||
        imported.object_person_id !== record.object_person_id || imported.status !== 'accepted' ||
        imported.confidence !== record.confidence || Number(imported.citation_count) !== record.citations.length
      ) throw conflict('relationship_import_changed', `既有批量关系与计划不一致：${record.identity_key}`);
      reused.push({ identity_key: record.identity_key, claim_id: String(imported.claim_id) });
      continue;
    }
    if (existingByIndex.has(record.request_index)) {
      throw conflict('unregistered_relationship', `关系已存在但没有审核导入身份：${record.identity_key}`);
    }
    const claimId = newId('claim');
    const proposed = {
      predicate: record.predicate, claim_kind: 'relationship', object_person_id: record.object_person_id,
      generation_count: null, parent_role: null, value_json: null, status: 'proposed', confidence: record.confidence,
    };
    createRecords.push({
      ...record,
      claim_id: claimId,
      revision_1_id: newId('revision'), revision_2_id: newId('revision'),
      contribution_1_id: newId('contribution'), contribution_2_id: newId('contribution'),
      actor_user_id: auth.userId, created_at: now,
      proposed_snapshot: JSON.stringify(proposed),
      accepted_snapshot: JSON.stringify({ ...proposed, status: 'accepted' }),
      citations: record.citations.map((citation) => ({ ...citation, id: newId('claimSource') })),
    });
  }

  if (createRecords.length === 0 && newSources.length === 0) {
    return c.json({ requested: records.length, created: 0, reused: reused.length, skipped_noop: reused.length, d1_validation_batches: 2, d1_write_batches: 0, items: reused });
  }

  const directed = createRecords.filter((record) => record.kind !== 'spouse');
  if (directed.length > 0) {
    const cycleResult = await c.env.DB.prepare(
      `WITH RECURSIVE requested AS (
         SELECT CAST(json_extract(value,'$.request_index') AS INTEGER) AS request_index,
                json_extract(value,'$.subject_person_id') AS subject_person_id,
                json_extract(value,'$.object_person_id') AS object_person_id
           FROM json_each(?) WHERE json_extract(value,'$.kind') <> 'spouse'
       ), graph(a,b) AS (
         SELECT subject_person_id, object_person_id FROM claim
          WHERE predicate IN ('kinship.parent_of','kinship.father_of','kinship.mother_of','kinship.adoptive_parent_of','kinship.adoptive_father_of','kinship.adoptive_mother_of','kinship.ancestor_of')
            AND status NOT IN ('retracted','superseded')
         UNION SELECT subject_person_id, object_person_id FROM requested
       ), walk(request_index, node) AS (
         SELECT request_index, object_person_id FROM requested
         UNION
         SELECT walk.request_index, graph.b FROM walk JOIN graph ON graph.a = walk.node
       )
       SELECT DISTINCT requested.request_index FROM requested JOIN walk
         ON walk.request_index = requested.request_index AND walk.node = requested.subject_person_id`,
    ).bind(JSON.stringify(createRecords)).all<{ request_index: number }>();
    const cycles = cycleResult.results ?? [];
    if (cycles.length) throw conflict('kinship_cycle', `批量关系会形成亲属环：${cycles.map((row) => body.items[row.request_index]!.identity_key).join('、')}`);
  }

  const sourceData = JSON.stringify(newSources);
  const data = JSON.stringify(createRecords);
  const statements: D1PreparedStatement[] = [];
  if (newSources.length) {
    statements.push(
      c.env.DB.prepare(
        `INSERT INTO source (id, source_type, title, creator, publisher, published_at_text, canonical_url, external_identifier, license_code, accessed_at, metadata_json, created_by_user_id, created_at)
         SELECT json_extract(value,'$.id'), json_extract(value,'$.source_type'), json_extract(value,'$.title'), json_extract(value,'$.creator'), json_extract(value,'$.publisher'),
                json_extract(value,'$.published_at_text'), json_extract(value,'$.canonical_url'), json_extract(value,'$.external_identifier'), json_extract(value,'$.license_code'),
                json_extract(value,'$.accessed_at'), json_extract(value,'$.metadata_json'), json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at') FROM json_each(?)`,
      ).bind(sourceData),
      c.env.DB.prepare(
        `INSERT INTO contribution (id, action, actor_user_id, target_type, target_id, change_summary, before_revision, after_revision, created_at)
         SELECT json_extract(value,'$.contribution_id'), 'source.create', json_extract(value,'$.actor_user_id'), 'source', json_extract(value,'$.id'),
                '批量关系导入所需来源', NULL, NULL, json_extract(value,'$.created_at') FROM json_each(?)`,
      ).bind(sourceData),
    );
  }
  if (createRecords.length) {
    statements.push(
      c.env.DB.prepare(
        `INSERT INTO claim (id, subject_person_id, claim_kind, predicate, object_person_id, generation_count, value_json, status, confidence, created_by_user_id, created_at, updated_at, current_revision)
         SELECT json_extract(value,'$.claim_id'), json_extract(value,'$.subject_person_id'), 'relationship', json_extract(value,'$.predicate'), json_extract(value,'$.object_person_id'),
                NULL, NULL, 'accepted', json_extract(value,'$.confidence'), json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at'), json_extract(value,'$.created_at'), 2 FROM json_each(?)`,
      ).bind(data),
      c.env.DB.prepare(
        `INSERT INTO claim_revision (id, claim_id, revision_number, snapshot_json, change_summary, created_by_user_id, created_at, reverts_revision_id)
         SELECT json_extract(value,'$.revision_1_id'), json_extract(value,'$.claim_id'), 1, json_extract(value,'$.proposed_snapshot'), ?, json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at'), NULL FROM json_each(?)
         UNION ALL SELECT json_extract(value,'$.revision_2_id'), json_extract(value,'$.claim_id'), 2, json_extract(value,'$.accepted_snapshot'), '批量关系审计：核对来源后采纳', json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at'), NULL FROM json_each(?)`,
      ).bind(body.summary, data, data),
      c.env.DB.prepare(
        `INSERT INTO claim_source (id, claim_id, source_id, stance, locator, quotation, interpretation_note, added_by_user_id, created_at)
         SELECT json_extract(citation.value,'$.id'), json_extract(item.value,'$.claim_id'), json_extract(citation.value,'$.source_id'), 'supports',
                json_extract(citation.value,'$.locator'), json_extract(citation.value,'$.quotation'), json_extract(citation.value,'$.interpretation_note'),
                json_extract(item.value,'$.actor_user_id'), json_extract(item.value,'$.created_at') FROM json_each(?) item, json_each(json_extract(item.value,'$.citations')) citation`,
      ).bind(data),
      c.env.DB.prepare(
        `INSERT INTO contribution (id, action, actor_user_id, target_type, target_id, change_summary, before_revision, after_revision, created_at)
         SELECT json_extract(value,'$.contribution_1_id'), 'claim.create', json_extract(value,'$.actor_user_id'), 'claim', json_extract(value,'$.claim_id'), ?, NULL, 1, json_extract(value,'$.created_at') FROM json_each(?)
         UNION ALL SELECT json_extract(value,'$.contribution_2_id'), 'claim.revise', json_extract(value,'$.actor_user_id'), 'claim', json_extract(value,'$.claim_id'), '批量关系审计：核对来源后采纳', 1, 2, json_extract(value,'$.created_at') FROM json_each(?)`,
      ).bind(body.summary, data, data),
      c.env.DB.prepare(
        `INSERT INTO reviewed_relationship_import (identity_key, content_hash, claim_id, subject_person_id, predicate, object_person_id, created_by_user_id, created_at)
         SELECT json_extract(value,'$.identity_key'), json_extract(value,'$.content_hash'), json_extract(value,'$.claim_id'), json_extract(value,'$.subject_person_id'),
                json_extract(value,'$.predicate'), json_extract(value,'$.object_person_id'), json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at') FROM json_each(?)`,
      ).bind(data),
    );
  }
  try {
    await c.env.DB.batch(statements);
  } catch (error) {
    databaseError(error);
  }

  const created = createRecords.map((record) => ({ identity_key: String(record.identity_key), claim_id: String(record.claim_id) }));
  return c.json({
    requested: records.length,
    created: created.length,
    reused: reused.length,
    skipped_noop: reused.length,
    sources_created: newSources.length,
    d1_validation_batches: 2 + Number(directed.length > 0),
    d1_write_batches: 1,
    items: [...reused, ...created],
  }, 201);
});

export default app;
