#!/usr/bin/env node

/**
 * Idempotently synchronize reviewed person-plan shards through the HTTP API.
 * One request carries up to 200 people; the Worker performs one set-based
 * validation batch and one transactional write batch for the whole request.
 *
 * Usage:
 *   node scripts/import-reviewed-persons-bulk.mjs \
 *     --manifest scripts/generated/cbdb-wang-10000/manifest.json --dry-run
 *   node scripts/import-reviewed-persons-bulk.mjs \
 *     --manifest scripts/generated/cbdb-wang-10000/manifest.json --batch-size 100
 *
 * Environment: API_BASE, IMPORTER_EMAIL, IMPORTER_PASSWORD.
 */
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { basename, dirname, resolve } from 'node:path';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const manifestPath = resolve(option('--manifest', 'scripts/generated/cbdb-wang-10000/manifest.json'));
const manifestDir = dirname(manifestPath);
const batchSize = Number(option('--batch-size', '100'));
const dryRun = flag('--dry-run');
const limit = Number(option('--limit', '0'));
const API = (process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev').replace(/\/+$/, '');
const statePath = resolve(option('--state', `scripts/.cache/${basename(manifestDir)}-bulk-import-state.json`));

if (!Number.isInteger(batchSize) || batchSize < 1 || batchSize > 200) {
  throw new Error('--batch-size 必须是 1 到 200 的整数');
}
if (!dryRun && (!process.env.IMPORTER_EMAIL || !process.env.IMPORTER_PASSWORD)) {
  throw new Error('写入模式需要 IMPORTER_EMAIL 和 IMPORTER_PASSWORD');
}

const manifestBody = readFileSync(manifestPath);
const manifest = JSON.parse(manifestBody.toString('utf8'));
const completed = new Set();

let token = null;
const sleep = (ms) => new Promise((resolvePromise) => setTimeout(resolvePromise, ms));

async function api(method, path, body, maxAttempts = 5) {
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    let response;
    try {
      response = await fetch(`${API}/api/v1${path}`, {
        method,
        headers: {
          'content-type': 'application/json',
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
        body: body === undefined ? undefined : JSON.stringify(body),
      });
    } catch (error) {
      lastError = error;
      if (attempt === maxAttempts) throw error;
      await sleep(1000 * (2 ** (attempt - 1)));
      continue;
    }
    const text = await response.text();
    let json;
    try { json = text ? JSON.parse(text) : {}; } catch { json = { raw: text }; }
    if (response.ok) return json;
    const error = new Error(`${method} ${path} -> ${response.status} ${json.message ?? json.error ?? text.slice(0, 200)}`);
    error.status = response.status;
    error.code = json.error;
    error.details = json.details;
    const quota = /daily row (read|write) limit|free tier daily|code:?\s*7500/i.test(`${text} ${json.message ?? ''}`);
    if (quota) {
      error.code = 'd1_daily_quota_exhausted';
      throw error;
    }
    if (json.error === 'migration_pending') throw error;
    if (![429, 500, 502, 503, 504].includes(response.status) || attempt === maxAttempts) throw error;
    const retryAfter = Number(response.headers.get('retry-after'));
    await sleep(Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 1000 * (2 ** (attempt - 1)));
    lastError = error;
  }
  throw lastError;
}

async function authenticate() {
  const result = await api('POST', '/auth/login', {
    email: process.env.IMPORTER_EMAIL,
    password: process.env.IMPORTER_PASSWORD,
  });
  token = result.token;
  if (!['admin', 'maintainer'].includes(result.user.role)) {
    throw new Error(`批量导入需要 admin/maintainer，当前角色为 ${result.user.role}`);
  }
  return result.user;
}

function itemFrom(person, sourceByKey) {
  const sourceKeys = new Set(person.claims.flatMap((claim) => claim.source_keys ?? []));
  if (sourceKeys.size !== 1) throw new Error(`${person.key}: 批量人物接口要求本计划每人恰好使用一个来源`);
  const [sourceKey] = sourceKeys;
  const source = sourceByKey.get(sourceKey);
  if (!source) throw new Error(`${person.key}: 缺少来源 ${sourceKey}`);
  if (!source.canonical_url || !source.external_identifier) {
    throw new Error(`${person.key}: 来源必须有 canonical_url 和 external_identifier`);
  }
  if (!person.historicity?.kind || !person.historicity?.detail) {
    throw new Error(`${person.key}: 缺少历史性依据`);
  }
  return {
    identity_key: person.key,
    historicity: person.historicity,
    source: {
      source_type: source.source_type,
      title: source.title,
      ...(source.creator ? { creator: source.creator } : {}),
      ...(source.publisher ? { publisher: source.publisher } : {}),
      ...(source.published_at_text ? { published_at_text: source.published_at_text } : {}),
      canonical_url: source.canonical_url,
      external_identifier: source.external_identifier,
      license_code: source.license_code ?? 'unknown',
      ...(source.metadata_json ? { metadata_json: source.metadata_json } : {}),
    },
    claims: person.claims.map((claim) => ({
      predicate: claim.predicate,
      value: claim.value,
      confidence: claim.confidence,
      change_summary: claim.change_summary ?? `审核导入 ${person.key}`,
    })),
  };
}

const allItems = [];
const planHasher = createHash('sha256');
planHasher.update('manifest\0').update(manifestBody);
for (const shard of manifest.shards) {
  const shardBody = readFileSync(resolve(manifestDir, shard.file));
  planHasher.update(`\0${shard.file}\0`).update(shardBody);
  const plan = JSON.parse(shardBody.toString('utf8'));
  if (plan.persons.length !== shard.people || plan.sources.length !== shard.sources || plan.edges.length !== shard.relationships) {
    throw new Error(`${shard.file}: manifest 计数不一致`);
  }
  if (plan.edges.length > 0) throw new Error(`${shard.file}: 此导入器只处理无关系边的人物分片`);
  const sourceByKey = new Map(plan.sources.map((source) => [source.key, source]));
  allItems.push(...plan.persons.map((person) => itemFrom(person, sourceByKey)));
}
if (allItems.length !== manifest.accepted) throw new Error(`manifest accepted=${manifest.accepted}，实际人物=${allItems.length}`);
const uniqueKeys = new Set(allItems.map((item) => item.identity_key));
const uniqueSources = new Set(allItems.map((item) => `${item.source.source_type}\u0000${item.source.external_identifier}`));
if (uniqueKeys.size !== allItems.length || uniqueSources.size !== allItems.length) throw new Error('跨分片人物或来源标识重复');
const planDigest = planHasher.digest('hex');
if (!dryRun) {
  try {
    const state = JSON.parse(readFileSync(statePath, 'utf8'));
    if (state.plan_sha256 !== planDigest) {
      throw new Error(`断点对应的计划哈希不一致：${state.plan_sha256 ?? '(missing)'} != ${planDigest}`);
    }
    for (const key of state.completed_identity_keys ?? []) completed.add(key);
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
  }
}

const pending = allItems.filter((item) => !completed.has(item.identity_key)).slice(0, limit > 0 ? limit : undefined);
console.log(JSON.stringify({ mode: dryRun ? 'dry-run' : 'apply', planned: allItems.length, resumed_completed: completed.size, pending: pending.length, batch_size: batchSize }));
if (dryRun) process.exit(0);

const account = await authenticate();
console.log(`account: ${account.display_name} (${account.role})`);
const totals = { requested: 0, created: 0, reused: 0, skipped_noop: 0, batches: 0 };
for (let offset = 0; offset < pending.length; offset += batchSize) {
  const items = pending.slice(offset, offset + batchSize);
  try {
    const result = await api('POST', '/persons/bulk-reviewed', {
      summary: `CBDB 2026-08-29 Luna 审核通过人物批量导入（${offset + 1}-${offset + items.length}）`,
      items,
    });
    totals.requested += result.requested;
    totals.created += result.created;
    totals.reused += result.reused;
    totals.skipped_noop += result.skipped_noop;
    totals.batches += 1;
    for (const item of items) completed.add(item.identity_key);
    mkdirSync(dirname(statePath), { recursive: true });
    const checkpoint = `${JSON.stringify({
      manifest: manifestPath,
      plan_sha256: planDigest,
      updated_at: new Date().toISOString(),
      completed_identity_keys: [...completed],
      totals,
    }, null, 2)}\n`;
    const temporaryState = `${statePath}.tmp-${process.pid}`;
    writeFileSync(temporaryState, checkpoint);
    renameSync(temporaryState, statePath);
    console.log(JSON.stringify({ batch: totals.batches, range: [offset + 1, offset + items.length], created: result.created, reused: result.reused, completed: completed.size }));
  } catch (error) {
    console.error(JSON.stringify({ stopped: true, completed: completed.size, code: error.code ?? null, message: error.message }));
    process.exitCode = error.code === 'd1_daily_quota_exhausted' ? 75 : 1;
    break;
  }
}
console.log(JSON.stringify({ ...totals, checkpoint: statePath, completed_total: completed.size, target: allItems.length }));
