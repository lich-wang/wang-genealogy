import { Hono } from 'hono';
import { z } from 'zod';
import { CONFIDENCE, PROPERTY_PREDICATES } from '@wang/domain';
import { createSourceSchema, normalizeDate, propertyValueSchema } from '@wang/validation';
import type { Env, Variables } from '../env.ts';
import { requireRole } from '../auth.ts';
import { AppError, badRequest, conflict } from '../errors.ts';
import { newId, nowIso } from '../util.ts';
import { foldKey, scriptVariants } from '@wang/i18n';
import { sha256Hex } from '../crypto.ts';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
const MAX_REQUEST_BYTES = 2 * 1024 * 1024;

const reviewedClaimSchema = z.object({
  predicate: z.enum(PROPERTY_PREDICATES),
  value: propertyValueSchema,
  confidence: z.enum(CONFIDENCE).default('medium'),
  change_summary: z.string().min(1).max(500),
}).superRefine((claim, ctx) => {
  const isDate = claim.predicate === 'birth.date' || claim.predicate === 'death.date';
  if (isDate && !claim.value.date?.original_text.trim()) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['value', 'date'], message: '日期属性必须填写原文。' });
  }
  if (!isDate && !claim.value.text?.trim()) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['value', 'text'], message: '文本属性必须填写非空文字。' });
  }
});

const reviewedSourceSchema = createSourceSchema.extend({
  canonical_url: z.string().url().max(1000),
  external_identifier: z.string().trim().min(1).max(200),
});

export const bulkReviewedPersonsSchema = z.object({
  summary: z.string().min(3).max(500),
  items: z.array(z.object({
    identity_key: z.string().trim().min(3).max(200),
    historicity: z.object({
      kind: z.enum(['cbdb_death_year', 'cbdb_birth_year', 'cbdb_dynasty', 'wikidata_death_date', 'historical_period']),
      detail: z.string().trim().min(3).max(500),
    }),
    source: reviewedSourceSchema,
    claims: z.array(reviewedClaimSchema).min(1).max(10),
  })).min(1).max(200),
}).superRefine((body, ctx) => {
  const identities = new Set<string>();
  const sourceIdentities = new Set<string>();
  const names = new Set<string>();
  body.items.forEach((item, itemIndex) => {
    if (identities.has(item.identity_key)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', itemIndex, 'identity_key'], message: '批次中的人物稳定标识不能重复。' });
    }
    identities.add(item.identity_key);
    const sourceIdentity = `${item.source.source_type}\u0000${item.source.external_identifier}`;
    if (sourceIdentities.has(sourceIdentity)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', itemIndex, 'source', 'external_identifier'], message: '批次中的来源标识不能重复。' });
    }
    sourceIdentities.add(sourceIdentity);
    const predicates = item.claims.map((claim) => claim.predicate);
    if (new Set(predicates).size !== predicates.length) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', itemIndex, 'claims'], message: '同一人物的同一属性只能出现一次。' });
    }
    if (predicates.filter((predicate) => predicate === 'name.primary').length !== 1) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', itemIndex, 'claims'], message: '每位人物必须且只能有一个主姓名。' });
    }
    const primaryName = item.claims.find((claim) => claim.predicate === 'name.primary')?.value.text;
    if (primaryName) {
      const folded = foldKey(primaryName);
      if (names.has(folded)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['items', itemIndex, 'claims'], message: '批次中的主姓名不能简繁重复。' });
      }
      names.add(folded);
    }
  });
});

type BulkInput = z.infer<typeof bulkReviewedPersonsSchema>;

interface IdentityRow {
  request_index: number;
  import_identity_key: string | null;
  source_identity: string | null;
  folded_name: string | null;
  content_hash: string | null;
  source_count: number;
  source_url: string | null;
  person_count: number;
  person_id: string | null;
  person_status: string | null;
  identity_name: string | null;
}

interface ClaimRow {
  request_index: number;
  predicate: string;
  value_json: string;
  status: string;
  confidence: string;
  source_matches: number;
}

interface NameRow {
  person_id: string;
  name: string;
}

async function readBoundedJson(c: Parameters<typeof requireRole>[0]): Promise<unknown> {
  const contentLength = Number(c.req.header('content-length') ?? 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    throw new AppError(413, 'payload_too_large', '批量人物请求不能超过 2 MiB。');
  }
  const raw = await c.req.text();
  if (new TextEncoder().encode(raw).byteLength > MAX_REQUEST_BYTES) {
    throw new AppError(413, 'payload_too_large', '批量人物请求不能超过 2 MiB。');
  }
  try {
    return JSON.parse(raw) as unknown;
  } catch {
    throw badRequest('invalid_json', '请求正文不是合法 JSON。');
  }
}

function claimContents(item: BulkInput['items'][number]) {
  return item.claims.map((claim) => {
    const value = {
      ...claim.value,
      ...(claim.value.date
        ? { date: normalizeDate(claim.value.date.original_text, claim.value.date.calendar_note) }
        : {}),
    };
    return {
      predicate: claim.predicate,
      value,
      value_json: JSON.stringify(value),
      confidence: claim.confidence,
      change_summary: claim.change_summary,
    };
  });
}

function normalizedClaims(item: BulkInput['items'][number]) {
  return claimContents(item).map((claim) => {
    const claimId = newId('claim');
    return {
      ...claim,
      claim_id: claimId,
      revision_1_id: newId('revision'),
      revision_2_id: newId('revision'),
      claim_source_id: newId('claimSource'),
      contribution_1_id: newId('contribution'),
      contribution_2_id: newId('contribution'),
      proposed_snapshot: JSON.stringify({
        predicate: claim.predicate,
        claim_kind: 'property',
        object_person_id: null,
        generation_count: null,
        parent_role: null,
        value_json: claim.value,
        status: 'proposed',
        confidence: claim.confidence,
      }),
      accepted_snapshot: JSON.stringify({
        predicate: claim.predicate,
        claim_kind: 'property',
        object_person_id: null,
        generation_count: null,
        parent_role: null,
        value_json: claim.value,
        status: 'accepted',
        confidence: claim.confidence,
      }),
    };
  });
}

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

async function contentHash(item: BulkInput['items'][number]): Promise<string> {
  return sha256Hex(stableJson({
    historicity: item.historicity,
    source: item.source,
    claims: claimContents(item).map(({ predicate, value, confidence, change_summary }) => ({
      predicate,
      value,
      confidence,
      change_summary,
    })),
  }));
}

function rethrowBulkDatabaseError(error: unknown): never {
  const message = error instanceof Error ? error.message : String(error);
  if (/no such table:\s*reviewed_person_import/i.test(message)) {
    throw new AppError(503, 'migration_pending', '批量人物导入迁移尚未应用；静态审核数据仍可用，请在 D1 额度恢复后重试。');
  }
  if (/free tier daily row (read|write) limit|code:?\s*7500/i.test(message)) {
    throw new AppError(503, 'd1_daily_quota_exhausted', 'D1 每日额度已耗尽；静态审核数据仍可用，请在额度重置后续传。');
  }
  throw error;
}

/**
 * Import an already-reviewed historical-person roster with constant D1
 * round-trips: one validation batch and one transactional write batch. Every
 * claim still receives its source, proposed/accepted revisions and audit rows.
 */
app.post('/bulk-reviewed', async (c) => {
  const auth = requireRole(c, ['admin', 'maintainer']);
  const body = bulkReviewedPersonsSchema.parse(await readBoundedJson(c));
  const hashes = await Promise.all(body.items.map(contentHash));
  const requested = body.items.map((item, index) => {
    const name = item.claims.find((claim) => claim.predicate === 'name.primary')!.value.text!.trim();
    return {
      index,
      source_type: item.source.source_type,
      external_identifier: item.source.external_identifier,
      canonical_url: item.source.canonical_url,
      identity_key: item.identity_key,
      source_identity: JSON.stringify([item.source.source_type, item.source.external_identifier]),
      folded_name: foldKey(name),
      content_hash: hashes[index],
      name,
      name_variants: scriptVariants(name),
    };
  });
  const requestedJson = JSON.stringify(requested);
  const variants = requested.flatMap((item) => item.name_variants.map((variant) => ({ index: item.index, variant })));
  const variantsJson = JSON.stringify(variants);

  let validationResults: D1Result<unknown>[];
  try {
    validationResults = await c.env.DB.batch([
    c.env.DB.prepare(
      `WITH requested AS (
         SELECT CAST(json_extract(value, '$.index') AS INTEGER) AS request_index,
                json_extract(value, '$.source_type') AS source_type,
                json_extract(value, '$.external_identifier') AS external_identifier,
                json_extract(value, '$.identity_key') AS identity_key
           FROM json_each(?)
       )
       SELECT requested.request_index,
              imported.identity_key AS import_identity_key,
              imported.source_identity,
              imported.folded_name,
              imported.content_hash,
              COUNT(DISTINCT s.id) AS source_count,
              MIN(s.canonical_url) AS source_url,
              COUNT(DISTINCT p.id) AS person_count,
              MIN(p.id) AS person_id,
              MIN(p.status) AS person_status,
              MIN(json_extract(name_claim.value_json, '$.text')) AS identity_name
         FROM requested
         LEFT JOIN reviewed_person_import imported ON imported.identity_key = requested.identity_key
         LEFT JOIN source s
           ON s.source_type = requested.source_type
          AND s.external_identifier = requested.external_identifier
         LEFT JOIN claim_source cs ON cs.source_id = s.id AND cs.stance = 'supports'
         LEFT JOIN claim name_claim
           ON name_claim.id = cs.claim_id
          AND name_claim.predicate = 'name.primary'
          AND name_claim.status NOT IN ('retracted','superseded')
         LEFT JOIN person p ON p.id = name_claim.subject_person_id
        GROUP BY requested.request_index, imported.identity_key
        ORDER BY requested.request_index`,
    ).bind(requestedJson),
    c.env.DB.prepare(
      `SELECT DISTINCT json_extract(name_claim.value_json, '$.text') AS name, p.id AS person_id
         FROM claim name_claim
         JOIN person p ON p.id = name_claim.subject_person_id
        WHERE name_claim.predicate LIKE 'name.%'
          AND name_claim.status NOT IN ('retracted','superseded')
          AND json_extract(name_claim.value_json, '$.text') IN (
            SELECT json_extract(value, '$.variant') FROM json_each(?)
          )`,
    ).bind(variantsJson),
    c.env.DB.prepare(
      `WITH requested AS (
         SELECT CAST(json_extract(value, '$.index') AS INTEGER) AS request_index,
                json_extract(value, '$.identity_key') AS identity_key
           FROM json_each(?)
       )
       SELECT requested.request_index, claim.predicate, claim.value_json, claim.status, claim.confidence,
              SUM(CASE WHEN cs.source_id = imported.source_id AND cs.stance = 'supports' THEN 1 ELSE 0 END) AS source_matches
         FROM requested
         JOIN reviewed_person_import imported ON imported.identity_key = requested.identity_key
         JOIN claim ON claim.subject_person_id = imported.person_id
         LEFT JOIN claim_source cs ON cs.claim_id = claim.id
        WHERE claim.claim_kind = 'property' AND claim.status NOT IN ('retracted','superseded')
        GROUP BY requested.request_index, claim.id
        ORDER BY requested.request_index, claim.predicate`,
    ).bind(requestedJson),
    ]);
  } catch (error) {
    rethrowBulkDatabaseError(error);
  }
  const [identityResult, nameResult, claimResult] = validationResults;

  const identityRows = new Map(
    ((identityResult?.results ?? []) as unknown as IdentityRow[]).map((row) => [Number(row.request_index), row]),
  );
  const variantOwners = new Map<string, Set<string>>();
  for (const row of (nameResult?.results ?? []) as unknown as NameRow[]) {
    const owners = variantOwners.get(row.name) ?? new Set<string>();
    owners.add(row.person_id);
    variantOwners.set(row.name, owners);
  }
  const claimsByIndex = new Map<number, ClaimRow[]>();
  for (const row of (claimResult?.results ?? []) as unknown as ClaimRow[]) {
    const index = Number(row.request_index);
    claimsByIndex.set(index, [...(claimsByIndex.get(index) ?? []), row]);
  }

  const createIndexes: number[] = [];
  const reused: Array<{ identity_key: string; person_id: string }> = [];
  for (const item of requested) {
    const identity = identityRows.get(item.index);
    if (!identity) throw conflict('identity_check_incomplete', `人物身份校验没有返回第 ${item.index + 1} 项。`);
    const owners = new Set(item.name_variants.flatMap((variant) => [...(variantOwners.get(variant) ?? [])]));
    if (identity.import_identity_key) {
      const input = body.items[item.index]!;
      if (
        identity.source_identity !== item.source_identity ||
        identity.folded_name !== item.folded_name ||
        identity.content_hash !== item.content_hash ||
        Number(identity.source_count) !== 1 ||
        Number(identity.person_count) !== 1 ||
        !identity.person_id ||
        identity.source_url !== item.canonical_url ||
        identity.person_status !== 'active'
      ) {
        throw conflict('import_identity_changed', `既有批量导入身份与计划不一致：${input.identity_key}`);
      }
      const actualClaims = claimsByIndex.get(item.index) ?? [];
      for (const expected of claimContents(input)) {
        const match = actualClaims.find((actual) => {
          let actualValue: unknown;
          try { actualValue = JSON.parse(actual.value_json); } catch { return false; }
          return actual.predicate === expected.predicate &&
            actual.status === 'accepted' &&
            actual.confidence === expected.confidence &&
            Number(actual.source_matches) > 0 &&
            stableJson(actualValue) === stableJson(expected.value);
        });
        if (!match) {
          throw conflict('import_claim_changed', `既有人物缺少计划中的原始已采纳主张：${input.identity_key} ${expected.predicate}`);
        }
      }
      if ([...owners].some((personId) => personId !== identity.person_id)) {
        throw conflict('name_exists', `姓名已被其他人物使用：${item.name}`, { person_ids: [...owners] });
      }
      reused.push({ identity_key: input.identity_key, person_id: identity.person_id });
      continue;
    }
    if (Number(identity.source_count) === 0) {
      if (owners.size > 0) {
        throw conflict('name_exists', `姓名已被其他人物使用：${item.name}`, { person_ids: [...owners] });
      }
      createIndexes.push(item.index);
      continue;
    }
    throw conflict('unregistered_import_identity', `来源或人物已存在但没有对应的审核导入身份：${body.items[item.index]!.identity_key}`);
  }

  if (createIndexes.length === 0) {
    return c.json({ requested: body.items.length, created: 0, reused: reused.length, skipped_noop: reused.length, d1_validation_batches: 1, d1_write_batches: 0, items: reused });
  }

  const now = nowIso();
  const records = createIndexes.map((index) => {
    const item = body.items[index]!;
    return {
      identity_key: item.identity_key,
      source_identity: requested[index]!.source_identity,
      folded_name: requested[index]!.folded_name,
      content_hash: requested[index]!.content_hash,
      source_id: newId('source'),
      person_id: newId('person'),
      source: {
        ...item.source,
        accessed_at: item.source.accessed_at ?? now,
        metadata_json: item.source.metadata_json ? JSON.stringify(item.source.metadata_json) : null,
      },
      claims: normalizedClaims(item),
      source_contribution_id: newId('contribution'),
      person_contribution_id: newId('contribution'),
      publish_contribution_id: newId('contribution'),
      actor_user_id: auth.userId,
      created_at: now,
      summary: `${body.summary}｜历史性依据：${item.historicity.detail}`,
    };
  });
  const data = JSON.stringify(records);
  try {
    await c.env.DB.batch([
    c.env.DB.prepare(
      `INSERT INTO source (id, source_type, title, creator, publisher, published_at_text, canonical_url, external_identifier, license_code, accessed_at, metadata_json, created_by_user_id, created_at)
       SELECT json_extract(value,'$.source_id'), json_extract(value,'$.source.source_type'), json_extract(value,'$.source.title'),
              json_extract(value,'$.source.creator'), json_extract(value,'$.source.publisher'), json_extract(value,'$.source.published_at_text'),
              json_extract(value,'$.source.canonical_url'), json_extract(value,'$.source.external_identifier'), json_extract(value,'$.source.license_code'),
              json_extract(value,'$.source.accessed_at'), json_extract(value,'$.source.metadata_json'), json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at')
         FROM json_each(?)`,
    ).bind(data),
    c.env.DB.prepare(
      `INSERT INTO person (id, status, created_by_user_id, created_at, updated_at, current_revision)
       SELECT json_extract(value,'$.person_id'), 'active', json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at'), json_extract(value,'$.created_at'), 1
         FROM json_each(?)`,
    ).bind(data),
    c.env.DB.prepare(
      `INSERT INTO claim (id, subject_person_id, claim_kind, predicate, object_person_id, generation_count, value_json, status, confidence, created_by_user_id, created_at, updated_at, current_revision)
       SELECT json_extract(claim.value,'$.claim_id'), json_extract(item.value,'$.person_id'), 'property', json_extract(claim.value,'$.predicate'), NULL, NULL,
              json_extract(claim.value,'$.value_json'), 'accepted', json_extract(claim.value,'$.confidence'), json_extract(item.value,'$.actor_user_id'),
              json_extract(item.value,'$.created_at'), json_extract(item.value,'$.created_at'), 2
         FROM json_each(?) item, json_each(json_extract(item.value,'$.claims')) claim`,
    ).bind(data),
    c.env.DB.prepare(
      `WITH claims AS (
         SELECT item.value AS item_json, claim.value AS claim_json
           FROM json_each(?) item, json_each(json_extract(item.value,'$.claims')) claim
       )
       INSERT INTO claim_revision (id, claim_id, revision_number, snapshot_json, change_summary, created_by_user_id, created_at, reverts_revision_id)
       SELECT json_extract(claim_json,'$.revision_1_id'), json_extract(claim_json,'$.claim_id'), 1, json_extract(claim_json,'$.proposed_snapshot'),
              json_extract(claim_json,'$.change_summary'), json_extract(item_json,'$.actor_user_id'), json_extract(item_json,'$.created_at'), NULL FROM claims
       UNION ALL
       SELECT json_extract(claim_json,'$.revision_2_id'), json_extract(claim_json,'$.claim_id'), 2, json_extract(claim_json,'$.accepted_snapshot'),
              '批量人物审计：核对来源后采纳', json_extract(item_json,'$.actor_user_id'), json_extract(item_json,'$.created_at'), NULL FROM claims`,
    ).bind(data),
    c.env.DB.prepare(
      `INSERT INTO claim_source (id, claim_id, source_id, stance, locator, quotation, interpretation_note, added_by_user_id, created_at)
       SELECT json_extract(claim.value,'$.claim_source_id'), json_extract(claim.value,'$.claim_id'), json_extract(item.value,'$.source_id'), 'supports',
              json_extract(item.value,'$.source.external_identifier'), NULL, json_extract(item.value,'$.summary'),
              json_extract(item.value,'$.actor_user_id'), json_extract(item.value,'$.created_at')
         FROM json_each(?) item, json_each(json_extract(item.value,'$.claims')) claim`,
    ).bind(data),
    c.env.DB.prepare(
      `WITH claims AS (
         SELECT item.value AS item_json, claim.value AS claim_json
           FROM json_each(?) item, json_each(json_extract(item.value,'$.claims')) claim
       ), all_contributions AS (
         SELECT json_extract(value,'$.source_contribution_id') AS id, 'source.create' AS action, json_extract(value,'$.source_id') AS target_id,
                'source' AS target_type, json_extract(value,'$.summary') AS change_summary, NULL AS before_revision, NULL AS after_revision,
                json_extract(value,'$.actor_user_id') AS actor_user_id, json_extract(value,'$.created_at') AS created_at FROM json_each(?)
         UNION ALL
         SELECT json_extract(value,'$.person_contribution_id'), 'person.create', json_extract(value,'$.person_id'), 'person', json_extract(value,'$.summary'), NULL, 0,
                json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at') FROM json_each(?)
         UNION ALL
         SELECT json_extract(value,'$.publish_contribution_id'), 'person.create', json_extract(value,'$.person_id'), 'person', '发布已审核历史人物', 0, 1,
                json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at') FROM json_each(?)
         UNION ALL
         SELECT json_extract(claim_json,'$.contribution_1_id'), 'claim.create', json_extract(claim_json,'$.claim_id'), 'claim', json_extract(claim_json,'$.change_summary'), NULL, 1,
                json_extract(item_json,'$.actor_user_id'), json_extract(item_json,'$.created_at') FROM claims
         UNION ALL
         SELECT json_extract(claim_json,'$.contribution_2_id'), 'claim.revise', json_extract(claim_json,'$.claim_id'), 'claim', '批量人物审计：核对来源后采纳', 1, 2,
                json_extract(item_json,'$.actor_user_id'), json_extract(item_json,'$.created_at') FROM claims
       )
       INSERT INTO contribution (id, action, actor_user_id, target_type, target_id, change_summary, before_revision, after_revision, created_at)
       SELECT id, action, actor_user_id, target_type, target_id, change_summary, before_revision, after_revision, created_at FROM all_contributions`,
    ).bind(data, data, data, data),
    c.env.DB.prepare(
      `INSERT INTO reviewed_person_import (identity_key, source_identity, folded_name, content_hash, source_id, person_id, created_by_user_id, created_at)
       SELECT json_extract(value,'$.identity_key'), json_extract(value,'$.source_identity'), json_extract(value,'$.folded_name'),
              json_extract(value,'$.content_hash'), json_extract(value,'$.source_id'), json_extract(value,'$.person_id'),
              json_extract(value,'$.actor_user_id'), json_extract(value,'$.created_at') FROM json_each(?)`,
    ).bind(data),
    ]);
  } catch (error) {
    rethrowBulkDatabaseError(error);
  }

  const createdItems = records.map((record) => ({ identity_key: record.identity_key, person_id: record.person_id }));
  return c.json({
    requested: body.items.length,
    created: records.length,
    reused: reused.length,
    skipped_noop: reused.length,
    d1_validation_batches: 1,
    d1_write_batches: 1,
    items: [...reused, ...createdItems],
  }, 201);
});

export default app;
