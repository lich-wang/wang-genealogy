import { Hono } from 'hono';
import { z } from 'zod';
import { CONFIDENCE, PROPERTY_PREDICATES } from '@wang/domain';
import { createSourceSchema, normalizeDate, propertyValueSchema } from '@wang/validation';
import type { Env, Variables } from '../env.ts';
import { requireRole } from '../auth.ts';
import { AppError, badRequest, conflict } from '../errors.ts';
import { sha256Hex } from '../crypto.ts';
import { newId, nowIso } from '../util.ts';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
const MAX_REQUEST_BYTES = 2 * 1024 * 1024;

const sourceSchema = createSourceSchema.extend({
  key: z.string().min(3).max(200),
  canonical_url: z.string().url().max(1000),
  external_identifier: z.string().trim().min(1).max(200),
});
const claimSchema = z.object({
  predicate: z.enum(PROPERTY_PREDICATES),
  value: propertyValueSchema,
  confidence: z.enum(CONFIDENCE).default('medium'),
  source_keys: z.array(z.string().min(3).max(200)).min(1).max(5),
  change_summary: z.string().min(1).max(500),
});

export const bulkReviewedKinshipPersonsSchema = z.object({
  summary: z.string().min(3).max(500),
  sources: z.array(sourceSchema).min(1).max(1000),
  items: z.array(z.object({
    identity_key: z.string().min(3).max(200),
    historicity: z.object({
      kind: z.enum(['cbdb_death_year', 'cbdb_birth_year', 'cbdb_dynasty', 'wikidata_death_date', 'historical_period']),
      detail: z.string().min(3).max(500),
    }),
    homonym_review: z.string().min(3).max(500),
    claims: z.array(claimSchema).min(1).max(10),
  })).min(1).max(200),
}).superRefine((body, ctx) => {
  const sourceKeys = new Set<string>();
  const sourceIdentities = new Set<string>();
  body.sources.forEach((source, index) => {
    if (sourceKeys.has(source.key)) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['sources', index, 'key'], message: '来源 key 不能重复。' });
    sourceKeys.add(source.key);
    const identity = `${source.source_type}\u0000${source.external_identifier}`;
    if (sourceIdentities.has(identity)) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['sources', index, 'external_identifier'], message: '来源稳定标识不能重复。' });
    sourceIdentities.add(identity);
  });
  const identities = new Set<string>();
  body.items.forEach((item, itemIndex) => {
    if (identities.has(item.identity_key)) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', itemIndex, 'identity_key'], message: '人物稳定标识不能重复。' });
    identities.add(item.identity_key);
    const predicates = item.claims.map((claim) => claim.predicate);
    if (new Set(predicates).size !== predicates.length || predicates.filter((predicate) => predicate === 'name.primary').length !== 1) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', itemIndex, 'claims'], message: '每位人物必须有且只有一个主姓名，其他属性也不能重复。' });
    }
    item.claims.forEach((claim, claimIndex) => {
      const isDate = claim.predicate === 'birth.date' || claim.predicate === 'death.date';
      if (isDate && !claim.value.date?.original_text.trim()) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', itemIndex, 'claims', claimIndex, 'value'], message: '日期属性必须填写原文。' });
      if (!isDate && !claim.value.text?.trim()) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', itemIndex, 'claims', claimIndex, 'value'], message: '文本属性必须填写非空文字。' });
      if (new Set(claim.source_keys).size !== claim.source_keys.length) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', itemIndex, 'claims', claimIndex, 'source_keys'], message: '同一主张不能重复引用来源。' });
      claim.source_keys.forEach((key) => {
        if (!sourceKeys.has(key)) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', itemIndex, 'claims', claimIndex, 'source_keys'], message: `缺少来源：${key}` });
      });
    });
  });
});

type BulkInput = z.infer<typeof bulkReviewedKinshipPersonsSchema>;

function stableJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
  if (value && typeof value === 'object') return `{${Object.entries(value as Record<string, unknown>).sort(([a], [b]) => a.localeCompare(b)).map(([key, child]) => `${JSON.stringify(key)}:${stableJson(child)}`).join(',')}}`;
  return JSON.stringify(value);
}

async function readJson(c: Parameters<typeof requireRole>[0]): Promise<unknown> {
  const raw = await c.req.text();
  if (new TextEncoder().encode(raw).byteLength > MAX_REQUEST_BYTES) throw new AppError(413, 'payload_too_large', '批量关系人物请求不能超过 2 MiB。');
  try { return JSON.parse(raw) as unknown; } catch { throw badRequest('invalid_json', '请求正文不是合法 JSON。'); }
}

function dbError(error: unknown): never {
  const message = error instanceof Error ? error.message : String(error);
  if (/no such table:\s*reviewed_kinship_person_import/i.test(message)) throw new AppError(503, 'migration_pending', '批量关系人物迁移尚未应用。');
  if (/free tier daily row (read|write) limit|code:?\s*7500/i.test(message)) throw new AppError(503, 'd1_daily_quota_exhausted', 'D1 每日额度已耗尽；可在额度重置后续传。');
  throw error;
}

app.post('/bulk-reviewed-kinship', async (c) => {
  const auth = requireRole(c, ['admin', 'maintainer']);
  const body = bulkReviewedKinshipPersonsSchema.parse(await readJson(c));
  const sourceByKey = new Map(body.sources.map((source) => [source.key, source]));
  let validation: D1Result<unknown>[];
  try {
    validation = await c.env.DB.batch([
      c.env.DB.prepare(
        `WITH requested AS (
           SELECT json_extract(value,'$.key') AS source_key, json_extract(value,'$.source_type') AS source_type,
                  json_extract(value,'$.external_identifier') AS external_identifier FROM json_each(?)
         ) SELECT requested.source_key, COUNT(source.id) AS source_count, MIN(source.id) AS source_id, MIN(source.canonical_url) AS canonical_url
             FROM requested LEFT JOIN source ON source.source_type = requested.source_type AND source.external_identifier = requested.external_identifier
            GROUP BY requested.source_key`,
      ).bind(JSON.stringify(body.sources)),
      c.env.DB.prepare(
        `WITH requested AS (
           SELECT CAST(json_extract(value,'$.request_index') AS INTEGER) AS request_index, json_extract(value,'$.identity_key') AS identity_key FROM json_each(?)
         ) SELECT requested.request_index, imported.identity_key, imported.content_hash, imported.person_id, person.status AS person_status,
                  COUNT(DISTINCT claim.id) AS claim_count, COUNT(DISTINCT claim_source.id) AS citation_count
             FROM requested LEFT JOIN reviewed_kinship_person_import imported ON imported.identity_key = requested.identity_key
             LEFT JOIN person ON person.id = imported.person_id
             LEFT JOIN claim ON claim.subject_person_id = imported.person_id AND claim.claim_kind = 'property' AND claim.status NOT IN ('retracted','superseded')
             LEFT JOIN claim_source ON claim_source.claim_id = claim.id AND claim_source.stance = 'supports'
            GROUP BY requested.request_index, imported.identity_key`,
      ).bind(JSON.stringify(body.items.map((item, request_index) => ({ request_index, identity_key: item.identity_key })))),
    ]);
  } catch (error) { dbError(error); }

  const now = nowIso();
  const sourceIds = new Map<string, string>();
  const newSources: Array<Record<string, unknown>> = [];
  for (const row of (validation[0]?.results ?? []) as Array<{ source_key: string; source_count: number; source_id: string | null; canonical_url: string | null }>) {
    const input = sourceByKey.get(row.source_key)!;
    if (Number(row.source_count) > 1) throw conflict('source_ambiguous', `来源稳定标识对应多条记录：${row.source_key}`);
    if (Number(row.source_count) === 1) {
      if (!row.source_id || row.canonical_url !== input.canonical_url) throw conflict('source_identity_changed', `来源网址与既有记录不一致：${row.source_key}`);
      sourceIds.set(row.source_key, row.source_id);
    } else {
      const id = newId('source'); sourceIds.set(row.source_key, id);
      newSources.push({ ...input, id, accessed_at: input.accessed_at ?? now, metadata_json: input.metadata_json ? JSON.stringify(input.metadata_json) : null, contribution_id: newId('contribution'), actor_user_id: auth.userId, created_at: now });
    }
  }
  if (sourceIds.size !== body.sources.length) throw conflict('source_check_incomplete', '来源校验结果不完整。');

  const existing = new Map(((validation[1]?.results ?? []) as Array<Record<string, unknown>>).map((row) => [Number(row.request_index), row]));
  const prepared = await Promise.all(body.items.map(async (item, request_index) => {
    const claims = item.claims.map((claim) => {
      const value = { ...claim.value, ...(claim.value.date ? { date: normalizeDate(claim.value.date.original_text, claim.value.date.calendar_note) } : {}) };
      return { ...claim, value, value_json: JSON.stringify(value), source_ids: claim.source_keys.map((key) => sourceIds.get(key)!) };
    });
    const hashInput = { identity_key: item.identity_key, historicity: item.historicity, homonym_review: item.homonym_review, claims: claims.map(({ predicate, value, confidence, source_keys, change_summary }) => ({ predicate, value, confidence, source_keys, change_summary })), sources: [...new Set(item.claims.flatMap((claim) => claim.source_keys))].map((key) => sourceByKey.get(key)) };
    return { request_index, item, claims, content_hash: await sha256Hex(stableJson(hashInput)) };
  }));

  const reused: Array<{ identity_key: string; person_id: string }> = [];
  const records: Array<Record<string, unknown>> = [];
  for (const entry of prepared) {
    const found = existing.get(entry.request_index);
    const citationCount = entry.claims.reduce((sum, claim) => sum + claim.source_ids.length, 0);
    if (found?.identity_key) {
      if (found.content_hash !== entry.content_hash || found.person_status !== 'active' || Number(found.claim_count) !== entry.claims.length || Number(found.citation_count) !== citationCount) {
        throw conflict('kinship_person_import_changed', `既有关系人物与计划不一致：${entry.item.identity_key}`);
      }
      reused.push({ identity_key: entry.item.identity_key, person_id: String(found.person_id) });
      continue;
    }
    const personId = newId('person');
    records.push({
      identity_key: entry.item.identity_key, content_hash: entry.content_hash, person_id: personId,
      actor_user_id: auth.userId, created_at: now,
      summary: `${body.summary}｜同名审核：${entry.item.homonym_review}｜历史性依据：${entry.item.historicity.detail}`,
      person_contribution_id: newId('contribution'), publish_contribution_id: newId('contribution'),
      claims: entry.claims.map((claim) => {
        const claimId = newId('claim');
        const snapshot = { predicate: claim.predicate, claim_kind: 'property', object_person_id: null, generation_count: null, parent_role: null, value_json: claim.value, status: 'proposed', confidence: claim.confidence };
        return {
          ...claim, claim_id: claimId, revision_1_id: newId('revision'), revision_2_id: newId('revision'),
          contribution_1_id: newId('contribution'), contribution_2_id: newId('contribution'),
          proposed_snapshot: JSON.stringify(snapshot), accepted_snapshot: JSON.stringify({ ...snapshot, status: 'accepted' }),
          citations: claim.source_ids.map((source_id, index) => ({ id: newId('claimSource'), source_id, locator: claim.source_keys[index] })),
        };
      }),
    });
  }
  if (records.length === 0 && newSources.length === 0) return c.json({ requested: body.items.length, created: 0, reused: reused.length, skipped_noop: reused.length, d1_validation_batches: 1, d1_write_batches: 0, items: reused });

  const sourceData = JSON.stringify(newSources); const data = JSON.stringify(records); const statements: D1PreparedStatement[] = [];
  if (newSources.length) statements.push(
    c.env.DB.prepare(`INSERT INTO source (id, source_type, title, creator, publisher, published_at_text, canonical_url, external_identifier, license_code, accessed_at, metadata_json, created_by_user_id, created_at) SELECT json_extract(value,'$.id'), json_extract(value,'$.source_type'), json_extract(value,'$.title'), json_extract(value,'$.creator'), json_extract(value,'$.publisher'), json_extract(value,'$.published_at_text'), json_extract(value,'$.canonical_url'), json_extract(value,'$.external_identifier'), json_extract(value,'$.license_code'), json_extract(value,'$.accessed_at'), json_extract(value,'$.metadata_json'), json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at') FROM json_each(?)`).bind(sourceData),
    c.env.DB.prepare(`INSERT INTO contribution (id, action, actor_user_id, target_type, target_id, change_summary, before_revision, after_revision, created_at) SELECT json_extract(value,'$.contribution_id'), 'source.create', json_extract(value,'$.actor_user_id'), 'source', json_extract(value,'$.id'), '批量关系人物导入所需来源', NULL, NULL, json_extract(value,'$.created_at') FROM json_each(?)`).bind(sourceData),
  );
  if (records.length) statements.push(
    c.env.DB.prepare(`INSERT INTO person (id, status, created_by_user_id, created_at, updated_at, current_revision) SELECT json_extract(value,'$.person_id'), 'active', json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at'), json_extract(value,'$.created_at'), 1 FROM json_each(?)`).bind(data),
    c.env.DB.prepare(`INSERT INTO claim (id, subject_person_id, claim_kind, predicate, object_person_id, generation_count, value_json, status, confidence, created_by_user_id, created_at, updated_at, current_revision) SELECT json_extract(claim.value,'$.claim_id'), json_extract(item.value,'$.person_id'), 'property', json_extract(claim.value,'$.predicate'), NULL, NULL, json_extract(claim.value,'$.value_json'), 'accepted', json_extract(claim.value,'$.confidence'), json_extract(item.value,'$.actor_user_id'), json_extract(item.value,'$.created_at'), json_extract(item.value,'$.created_at'), 2 FROM json_each(?) item, json_each(json_extract(item.value,'$.claims')) claim`).bind(data),
    c.env.DB.prepare(`WITH claims AS (SELECT item.value AS item_json, claim.value AS claim_json FROM json_each(?) item, json_each(json_extract(item.value,'$.claims')) claim) INSERT INTO claim_revision (id, claim_id, revision_number, snapshot_json, change_summary, created_by_user_id, created_at, reverts_revision_id) SELECT json_extract(claim_json,'$.revision_1_id'), json_extract(claim_json,'$.claim_id'), 1, json_extract(claim_json,'$.proposed_snapshot'), json_extract(claim_json,'$.change_summary'), json_extract(item_json,'$.actor_user_id'), json_extract(item_json,'$.created_at'), NULL FROM claims UNION ALL SELECT json_extract(claim_json,'$.revision_2_id'), json_extract(claim_json,'$.claim_id'), 2, json_extract(claim_json,'$.accepted_snapshot'), '批量关系人物审计：核对来源后采纳', json_extract(item_json,'$.actor_user_id'), json_extract(item_json,'$.created_at'), NULL FROM claims`).bind(data),
    c.env.DB.prepare(`INSERT INTO claim_source (id, claim_id, source_id, stance, locator, quotation, interpretation_note, added_by_user_id, created_at) SELECT json_extract(citation.value,'$.id'), json_extract(claim.value,'$.claim_id'), json_extract(citation.value,'$.source_id'), 'supports', json_extract(citation.value,'$.locator'), NULL, json_extract(item.value,'$.summary'), json_extract(item.value,'$.actor_user_id'), json_extract(item.value,'$.created_at') FROM json_each(?) item, json_each(json_extract(item.value,'$.claims')) claim, json_each(json_extract(claim.value,'$.citations')) citation`).bind(data),
    c.env.DB.prepare(`WITH claims AS (SELECT item.value AS item_json, claim.value AS claim_json FROM json_each(?) item, json_each(json_extract(item.value,'$.claims')) claim), all_rows AS (SELECT json_extract(value,'$.person_contribution_id') AS id, 'person.create' AS action, json_extract(value,'$.person_id') AS target_id, 'person' AS target_type, json_extract(value,'$.summary') AS summary, NULL AS before_revision, 0 AS after_revision, json_extract(value,'$.actor_user_id') AS actor, json_extract(value,'$.created_at') AS created_at FROM json_each(?) UNION ALL SELECT json_extract(value,'$.publish_contribution_id'), 'person.create', json_extract(value,'$.person_id'), 'person', '发布已审核历史关系人物', 0, 1, json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at') FROM json_each(?) UNION ALL SELECT json_extract(claim_json,'$.contribution_1_id'), 'claim.create', json_extract(claim_json,'$.claim_id'), 'claim', json_extract(claim_json,'$.change_summary'), NULL, 1, json_extract(item_json,'$.actor_user_id'), json_extract(item_json,'$.created_at') FROM claims UNION ALL SELECT json_extract(claim_json,'$.contribution_2_id'), 'claim.revise', json_extract(claim_json,'$.claim_id'), 'claim', '批量关系人物审计：核对来源后采纳', 1, 2, json_extract(item_json,'$.actor_user_id'), json_extract(item_json,'$.created_at') FROM claims) INSERT INTO contribution (id, action, actor_user_id, target_type, target_id, change_summary, before_revision, after_revision, created_at) SELECT id, action, actor, target_type, target_id, summary, before_revision, after_revision, created_at FROM all_rows`).bind(data, data, data),
    c.env.DB.prepare(`INSERT INTO reviewed_kinship_person_import (identity_key, content_hash, person_id, created_by_user_id, created_at) SELECT json_extract(value,'$.identity_key'), json_extract(value,'$.content_hash'), json_extract(value,'$.person_id'), json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at') FROM json_each(?)`).bind(data),
  );
  try { await c.env.DB.batch(statements); } catch (error) { dbError(error); }
  const created = records.map((record) => ({ identity_key: String(record.identity_key), person_id: String(record.person_id) }));
  return c.json({ requested: body.items.length, created: created.length, reused: reused.length, skipped_noop: reused.length, sources_created: newSources.length, d1_validation_batches: 1, d1_write_batches: 1, items: [...reused, ...created] }, 201);
});

export default app;
