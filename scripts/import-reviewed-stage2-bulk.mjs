#!/usr/bin/env node

/**
 * Resume-safe, low-round-trip import for the Luna stage2 Wang roster and the
 * final reviewed kinship plan. All genealogy writes go through HTTP APIs.
 *
 * Usage:
 *   node scripts/import-reviewed-stage2-bulk.mjs --dry-run
 *   node scripts/import-reviewed-stage2-bulk.mjs --batch-size 200
 */
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const dryRun = flag('--dry-run');
const batchSize = Number(option('--batch-size', '200'));
if (!Number.isInteger(batchSize) || batchSize < 1 || batchSize > 200) throw new Error('--batch-size 必须是 1 到 200 的整数');
const stage2Path = resolve(option('--stage2', 'scripts/luna-wang-expansion-stage2-2026-09.json'));
const kinshipPath = resolve(option('--kinship', 'scripts/kinship-round3-final-approved-plan-2026-09.json'));
const statePath = resolve(option('--state', 'scripts/.cache/luna-stage2-final-bulk-import-state.json'));
const API = (process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev').replace(/\/+$/, '');
if (!dryRun && (!process.env.IMPORTER_EMAIL || !process.env.IMPORTER_PASSWORD)) throw new Error('写入模式需要 IMPORTER_EMAIL 和 IMPORTER_PASSWORD');

const stage2Body = readFileSync(stage2Path);
const kinshipBody = readFileSync(kinshipPath);
const stage2 = JSON.parse(stage2Body);
const kinship = JSON.parse(kinshipBody);
const digest = createHash('sha256').update(stage2Body).update('\0').update(kinshipBody).digest('hex');

const cleanSource = (source) => ({
  source_type: source.source_type,
  title: source.title,
  ...(source.creator ? { creator: source.creator } : {}),
  ...(source.publisher ? { publisher: source.publisher } : {}),
  ...(source.published_at_text ? { published_at_text: source.published_at_text } : {}),
  canonical_url: source.canonical_url,
  external_identifier: source.external_identifier,
  license_code: source.license_code ?? 'unknown',
  ...(source.metadata_json ? { metadata_json: source.metadata_json } : {}),
});
const historicity = (input) => ({
  kind: input.kind === 'death_date'
    ? 'wikidata_death_date'
    : ['cbdb_death_year', 'cbdb_birth_year', 'cbdb_dynasty', 'wikidata_death_date', 'historical_period'].includes(input.kind)
      ? input.kind
      : 'historical_period',
  detail: input.detail,
});

const stage2Sources = new Map(stage2.sources.map((source) => [source.key, source]));
const rosterPeople = stage2.persons.filter((person) => person.relationship_only === undefined);
if (rosterPeople.length !== 675) throw new Error(`stage2 roster 应为 675 人，实际 ${rosterPeople.length}`);
const rosterItems = rosterPeople.map((person) => {
  const allClaimSources = new Set(person.claims.flatMap((claim) => claim.source_keys ?? []));
  if (allClaimSources.size !== 1) throw new Error(`${person.key}: roster 人物不是单来源`);
  const sourceKey = [...allClaimSources][0];
  const source = stage2Sources.get(sourceKey);
  if (!source) throw new Error(`${person.key}: 缺少来源 ${sourceKey}`);
  return {
    identity_key: person.key,
    historicity: historicity(person.historicity),
    source: cleanSource(source),
    claims: person.claims.map((claim) => ({
      predicate: claim.predicate,
      value: claim.value,
      confidence: claim.confidence,
      change_summary: claim.change_summary,
    })),
  };
});

const kinshipSources = new Map(kinship.sources.map((source) => [source.key, source]));
const personSourceKeys = [...new Set(kinship.persons.flatMap((person) => person.claims.flatMap((claim) => claim.source_keys)))];
const kinshipPersonPayload = {
  sources: personSourceKeys.map((key) => ({ key, ...cleanSource(kinshipSources.get(key)) })),
  items: kinship.persons.map((person) => ({
    identity_key: person.key,
    historicity: historicity(person.historicity),
    homonym_review: `Luna 最终关系计划按独立 Wikidata/CBDB 标识确认同名异人（${person.key}）`,
    claims: person.claims.map((claim) => ({
      predicate: claim.predicate,
      value: claim.value,
      confidence: claim.confidence,
      source_keys: claim.source_keys,
      change_summary: claim.change_summary,
    })),
  })),
};

const endpoint = (key, personId) => personId ? { person_id: personId } : { identity_key: key };
const endpointLabel = (value) => value.person_id ? `person:${value.person_id}` : `identity:${value.identity_key}`;
const relationshipItems = kinship.edges.map((edge) => {
  const from = edge.kind === 'spouse' ? endpoint(edge.a_key, edge.a_person_id) : endpoint(edge.parent_key, edge.parent_person_id);
  const to = edge.kind === 'spouse' ? endpoint(edge.b_key, edge.b_person_id) : endpoint(edge.child_key, edge.child_person_id);
  const labels = edge.kind === 'spouse' ? [endpointLabel(from), endpointLabel(to)].sort() : [endpointLabel(from), endpointLabel(to)];
  const citations = new Map();
  for (const citation of edge.citations) {
    const prior = citations.get(citation.source_key);
    citations.set(citation.source_key, {
      source_key: citation.source_key,
      ...((prior?.locator || citation.locator) ? { locator: [...new Set([prior?.locator, citation.locator].filter(Boolean))].join(' / ') } : {}),
      ...((prior?.quotation || citation.quotation) ? { quotation: [...new Set([prior?.quotation, citation.quotation].filter(Boolean))].join('\n').slice(0, 2000) } : {}),
      ...((prior?.interpretation_note || prior?.note || citation.note) ? { interpretation_note: [...new Set([prior?.interpretation_note, prior?.note, citation.note].filter(Boolean))].join('；').slice(0, 2000) } : {}),
    });
  }
  return {
    identity_key: `luna-final:${edge.kind}:${labels.join('->')}`,
    kind: edge.kind,
    from,
    to,
    confidence: 'medium',
    citations: [...citations.values()],
  };
});
if (new Set(relationshipItems.map((item) => item.identity_key)).size !== relationshipItems.length) throw new Error('最终关系计划含重复稳定标识');

let state = { plan_sha256: digest, completed: { roster: [], kinship_people: [], relationships: [] } };
if (!dryRun) {
  try {
    state = JSON.parse(readFileSync(statePath, 'utf8'));
    if (state.plan_sha256 !== digest) throw new Error('断点对应的计划哈希不一致');
  } catch (error) { if (error?.code !== 'ENOENT') throw error; }
}
const completed = Object.fromEntries(Object.entries(state.completed).map(([key, values]) => [key, new Set(values)]));
const save = () => {
  mkdirSync(dirname(statePath), { recursive: true });
  const next = `${JSON.stringify({ plan_sha256: digest, updated_at: new Date().toISOString(), completed: Object.fromEntries(Object.entries(completed).map(([key, values]) => [key, [...values]])) }, null, 2)}\n`;
  const temporary = `${statePath}.tmp-${process.pid}`;
  writeFileSync(temporary, next); renameSync(temporary, statePath);
};

let token = null;
const sleep = (ms) => new Promise((resolvePromise) => setTimeout(resolvePromise, ms));
async function api(method, path, body, attempts = 5) {
  let last;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(`${API}/api/v1${path}`, { method, headers: { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) }, body: body === undefined ? undefined : JSON.stringify(body) });
      const text = await response.text(); let json; try { json = text ? JSON.parse(text) : {}; } catch { json = { raw: text }; }
      if (response.ok) return json;
      const error = new Error(`${method} ${path} -> ${response.status} ${json.message ?? json.error ?? text.slice(0, 200)}`); error.status = response.status; error.code = json.error;
      if (/daily row (read|write) limit|free tier daily|code:?\s*7500/i.test(text)) { error.code = 'd1_daily_quota_exhausted'; throw error; }
      if (![429, 500, 502, 503, 504].includes(response.status) || attempt === attempts) throw error;
      last = error;
    } catch (error) { last = error; if (attempt === attempts || error.code === 'd1_daily_quota_exhausted') throw error; }
    await sleep(1000 * (2 ** (attempt - 1)));
  }
  throw last;
}

const requestBytes = (value) => Buffer.byteLength(JSON.stringify(value));
console.log(JSON.stringify({ mode: dryRun ? 'dry-run' : 'apply', plan_sha256: digest, roster: rosterItems.length, kinship_people: kinshipPersonPayload.items.length, relationships: relationshipItems.length, relationship_unique_citations: relationshipItems.reduce((sum, item) => sum + item.citations.length, 0) }));
if (dryRun) {
  const rosterSizes = []; for (let i = 0; i < rosterItems.length; i += batchSize) rosterSizes.push(requestBytes({ summary: 'Luna stage2 王姓名录审核导入', items: rosterItems.slice(i, i + batchSize) }));
  console.log(JSON.stringify({ roster_request_bytes: rosterSizes, kinship_people_request_bytes: requestBytes({ summary: 'Luna 最终关系人物审核导入', ...kinshipPersonPayload }) }));
  for (let i = 0; i < relationshipItems.length; i += batchSize) {
    const items = relationshipItems.slice(i, i + batchSize); const sourceKeys = new Set(items.flatMap((item) => item.citations.map((citation) => citation.source_key)));
    console.log(JSON.stringify({ relationship_batch: [i + 1, i + items.length], bytes: requestBytes({ summary: 'Luna 最终亲属关系审核导入', sources: [...sourceKeys].map((key) => ({ key, ...cleanSource(kinshipSources.get(key)) })), items }) }));
  }
  process.exit(0);
}

const login = await api('POST', '/auth/login', { email: process.env.IMPORTER_EMAIL, password: process.env.IMPORTER_PASSWORD });
token = login.token;
if (!['admin', 'maintainer'].includes(login.user.role)) throw new Error(`需要 admin/maintainer，当前为 ${login.user.role}`);
console.log(`account: ${login.user.display_name} (${login.user.role})`);

async function runBatches(name, items, path, payloadFor) {
  const pending = items.filter((item) => !completed[name].has(item.identity_key));
  for (let offset = 0; offset < pending.length; offset += batchSize) {
    const batch = pending.slice(offset, offset + batchSize);
    const result = await api('POST', path, payloadFor(batch, offset));
    batch.forEach((item) => completed[name].add(item.identity_key)); save();
    console.log(JSON.stringify({ phase: name, range: [offset + 1, offset + batch.length], created: result.created, reused: result.reused, completed: completed[name].size }));
  }
}

await runBatches('roster', rosterItems, '/persons/bulk-reviewed', (items, offset) => ({ summary: `Luna stage2 王姓名录审核导入（${offset + 1}-${offset + items.length}）`, items }));
await runBatches('kinship_people', kinshipPersonPayload.items, '/persons/bulk-reviewed-kinship', (items) => {
  const sourceKeys = new Set(items.flatMap((item) => item.claims.flatMap((claim) => claim.source_keys)));
  return { summary: 'Luna 最终关系人物审核导入', sources: [...sourceKeys].map((key) => ({ key, ...cleanSource(kinshipSources.get(key)) })), items };
});
await runBatches('relationships', relationshipItems, '/claims/bulk-reviewed-relationships', (items) => {
  const sourceKeys = new Set(items.flatMap((item) => item.citations.map((citation) => citation.source_key)));
  return { summary: 'Luna 最终亲属关系审核导入', sources: [...sourceKeys].map((key) => ({ key, ...cleanSource(kinshipSources.get(key)) })), items };
});
console.log(JSON.stringify({ completed: Object.fromEntries(Object.entries(completed).map(([key, values]) => [key, values.size])), state: statePath }));
