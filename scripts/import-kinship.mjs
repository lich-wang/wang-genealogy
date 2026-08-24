// Import the kinship plan produced by fetch-kinship.mjs through the HTTP API.
//
// Everything goes through /api/v1 on purpose: the server is what normalizes a
// parent/child submission to a single `kinship.parent_of` row, canonicalizes a
// spouse pair, refuses kinship cycles, enforces the provenance gate, and appends
// revisions and audit rows. A direct D1 write would bypass all of it.
//
// Idempotent: persons are claimed by the Wikidata/CBDB identifier recorded on
// their name claim, sources are reused by identifier + kind, and an existing
// relationship (HTTP 409) is left in place — it only gains any citation it was
// missing and is nudged to `accepted`.
//
// Usage:
//   node scripts/import-kinship.mjs [--plan scripts/kinship-data.json] [--dry-run]
//   env: API_BASE, IMPORTER_EMAIL, IMPORTER_PASSWORD, D1_DATABASE
//
// Publishing a person with no death date needs a maintainer/reviewer/admin
// account (the API's staff override for "an authoritative database identifies
// this as a historical figure"). With a plain contributor account those persons
// stay private drafts and are listed at the end.

import { readFileSync } from 'node:fs';
import { d1Query } from './lib/d1.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const API = (process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev').replace(/\/+$/, '');
const EMAIL = process.env.IMPORTER_EMAIL;
const PASSWORD = process.env.IMPORTER_PASSWORD;
const d1 = {
  database: option('--db', process.env.D1_DATABASE ?? 'wang-genealogy'),
  remote: !flag('--local'),
};
const dryRun = flag('--dry-run');
const planPath = option('--plan', new URL('kinship-data.json', import.meta.url).pathname);

if (!EMAIL || !PASSWORD) {
  console.error('set IMPORTER_EMAIL and IMPORTER_PASSWORD');
  process.exit(2);
}

const plan = JSON.parse(readFileSync(planPath, 'utf8'));
const sourceDefs = new Map(plan.sources.map((s) => [s.key, s]));

// --- API plumbing -----------------------------------------------------------

let token = null;

async function api(method, path, body) {
  const res = await fetch(`${API}/api/v1${path}`, {
    method,
    headers: {
      'content-type': 'application/json',
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }
  if (!res.ok) {
    const err = new Error(`${method} ${path} -> ${res.status} ${JSON.stringify(json)}`);
    err.status = res.status;
    err.code = json.error;
    throw err;
  }
  return json;
}

async function authenticate() {
  try {
    const r = await api('POST', '/auth/login', { email: EMAIL, password: PASSWORD });
    token = r.token;
  } catch (e) {
    if (e.status !== 401) throw e;
    const r = await api('POST', '/auth/signup', {
      display_name: '亲属关系导入',
      email: EMAIL,
      password: PASSWORD,
    });
    token = r.token;
  }
  return (await api('GET', '/auth/me')).user;
}

/** Promote a proposed claim to accepted; harmless if it already is. */
async function acceptClaim(claimId, revision, summary) {
  try {
    await api('POST', `/claims/${claimId}/revisions`, {
      expected_revision: revision,
      patch: { status: 'accepted' },
      change_summary: summary,
    });
    return true;
  } catch (e) {
    // A revision conflict means an earlier run already moved this claim on.
    if (e.status === 409) return false;
    throw e;
  }
}

// --- existing state ---------------------------------------------------------

const overrides = JSON.parse(
  readFileSync(new URL('wikidata-qid-overrides.json', import.meta.url), 'utf8'),
);

// Identity comes from what a person's NAME claim cites — a relationship claim
// cites the other endpoint too, which would confuse one person for another.
const personRows = d1Query(
  `SELECT p.id AS person_id,
          (SELECT group_concat(DISTINCT s.external_identifier) FROM claim_source cs
             JOIN source s ON s.id = cs.source_id
             JOIN claim c ON c.id = cs.claim_id
            WHERE c.subject_person_id = p.id
              AND c.predicate = 'name.primary'
              AND s.external_identifier IS NOT NULL) AS identifiers
     FROM person p
    WHERE p.status IN ('candidate', 'active')`,
  { ...d1, label: 'persons' },
);

const personIdByKey = new Map();
for (const row of personRows) {
  for (const id of (row.identifiers ?? '').split(',').filter(Boolean)) {
    if (/^Q\d+$/.test(id)) personIdByKey.set(`wd:${id}`, row.person_id);
    const m = /^CBDB[:=]?\s*(\d+)$/i.exec(id);
    if (m) personIdByKey.set(`cbdb:${m[1].replace(/^0+/, '')}`, row.person_id);
  }
}
for (const o of overrides.persons) personIdByKey.set(`wd:${o.qid}`, o.person_id);

// A source is reusable only if it is the same record *kind*: an early import
// stored a CBDB id on a Wikipedia article record, and a Wikidata property
// locator has no meaning against that.
const sourceRows = d1Query(
  `SELECT id, external_identifier, canonical_url FROM source
    WHERE external_identifier IS NOT NULL`,
  { ...d1, label: 'sources' },
);
const sourceIdByKey = new Map();
for (const row of sourceRows) {
  const url = row.canonical_url ?? '';
  if (/^Q\d+$/.test(row.external_identifier) && url.startsWith('https://www.wikidata.org/wiki/')) {
    sourceIdByKey.set(`wd:${row.external_identifier}`, row.id);
  }
  const m = /^CBDB[:=]?\s*(\d+)$/i.exec(row.external_identifier);
  if (m && url.includes('cbdb.fas.harvard.edu')) {
    sourceIdByKey.set(`cbdb:${m[1].replace(/^0+/, '')}`, row.id);
  }
}

console.log(
  `plan: ${plan.persons.length} 新人物（仅配偶 ${plan.persons.filter((p) => p.spouse_only).length}）、` +
    `${plan.edges.length} 条关系、${plan.sources.length} 个来源 | ` +
    `已知 ${personIdByKey.size} 个人物标识、${sourceIdByKey.size} 个来源`,
);
if (plan.name_collisions.length) {
  console.log(`同名待人工判断 ${plan.name_collisions.length} 条（不自动合并）：`);
  for (const c of plan.name_collisions) {
    console.log(`  ${c.name} ${c.key} ↔ ${c.existing.map((e) => e.person_id).join(', ')}`);
  }
}

const account = dryRun ? { display_name: '(dry-run)', role: 'n/a' } : await authenticate();
const isStaff = ['maintainer', 'reviewer', 'admin'].includes(account.role);
console.log(`account: ${account.display_name} (${account.role})${isStaff ? '' : ' — 无法发布缺少卒年的人物'}`);

const stats = {
  sources_created: 0,
  persons_created: 0,
  persons_published: 0,
  persons_unpublished: [],
  claims_created: 0,
  edges_created: { parent: 0, spouse: 0 },
  edges_existing: 0,
  citations_added: 0,
  edges_failed: [],
};

async function ensureSource(key) {
  const known = sourceIdByKey.get(key);
  if (known) return known;
  const def = sourceDefs.get(key);
  if (!def) throw new Error(`plan is missing a source definition for ${key}`);
  if (dryRun) return `(new source ${key})`;
  const created = await api('POST', '/sources', {
    source_type: def.source_type,
    title: def.title,
    creator: def.creator,
    publisher: def.publisher,
    canonical_url: def.canonical_url,
    external_identifier: def.external_identifier,
    license_code: def.license_code,
    accessed_at: new Date().toISOString(),
    ...(def.metadata_json ? { metadata_json: def.metadata_json } : {}),
  });
  const id = created.source_id ?? created.id;
  sourceIdByKey.set(key, id);
  stats.sources_created += 1;
  return id;
}

async function sourceRefs(keys, locator = undefined, note = undefined) {
  const refs = [];
  for (const key of keys) {
    refs.push({
      source_id: await ensureSource(key),
      stance: 'supports',
      ...(locator ? { locator } : {}),
      ...(note ? { interpretation_note: note } : {}),
    });
  }
  return refs;
}

// --- 1. create the relatives that are not in the database yet ---------------

for (const person of plan.persons) {
  if (personIdByKey.has(person.key)) continue;
  if (person.qid && personIdByKey.has(`wd:${person.qid}`)) continue;
  if (person.cbdb && personIdByKey.has(`cbdb:${person.cbdb}`)) continue;

  const [nameClaim, ...rest] = person.claims;
  if (dryRun) {
    for (const key of [person.key, person.qid && `wd:${person.qid}`, person.cbdb && `cbdb:${person.cbdb}`]) {
      if (key) personIdByKey.set(key, `(dry-run:${person.key})`);
    }
    console.log(
      `+ ${person.name.text} (${person.key})${person.spouse_only ? ' [仅配偶]' : ''} ` +
        `${person.claims.length} 条主张 [${person.historicity.kind}]`,
    );
    continue;
  }

  const created = await api('POST', '/persons', {
    name: {
      predicate: 'name.primary',
      value: nameClaim.value,
      confidence: nameClaim.confidence,
      sources: await sourceRefs(nameClaim.source_keys, person.qid ?? `CBDB:${person.cbdb}`),
    },
    change_summary: nameClaim.change_summary,
  });
  const personId = created.person_id;
  stats.persons_created += 1;
  for (const key of [person.key, person.qid && `wd:${person.qid}`, person.cbdb && `cbdb:${person.cbdb}`]) {
    if (key) personIdByKey.set(key, personId);
  }
  await acceptClaim(created.claim_id, 1, '导入：来源为维基数据/CBDB 人名');

  for (const claim of rest) {
    const result = await api('POST', `/persons/${personId}/claims`, {
      claim_kind: 'property',
      predicate: claim.predicate,
      value: claim.value,
      confidence: claim.confidence,
      sources: await sourceRefs(claim.source_keys),
      change_summary: claim.change_summary,
    });
    stats.claims_created += 1;
    await acceptClaim(result.claim_id, 1, '导入：核对来源后采纳');
  }

  // Publish. Without a death claim this needs the staff override, which is the
  // "authoritative database identifies a historical figure" case the source
  // policy allows — the evidence is recorded in `historicity`.
  try {
    await api('POST', `/persons/${personId}/publish`, {});
    stats.persons_published += 1;
    console.log(`+ ${person.name.text} -> ${personId}${person.spouse_only ? ' [仅配偶]' : ''}`);
  } catch (e) {
    stats.persons_unpublished.push({
      name: person.name.text,
      person_id: personId,
      key: person.key,
      reason: e.code ?? String(e.status),
      historicity: person.historicity,
    });
    console.log(`+ ${person.name.text} -> ${personId} (草稿: ${e.code ?? e.status})`);
  }
}

// --- 2. link them -----------------------------------------------------------

/** The stored relationship claim between these two, if the API already has it. */
async function findEdgeClaim(predicate, subjectId, objectId) {
  const { claims } = await api('GET', `/persons/${subjectId}/claims`);
  return (
    claims.find(
      (c) =>
        c.predicate === predicate &&
        ((c.subject_person_id === subjectId && c.object_person_id === objectId) ||
          (c.subject_person_id === objectId && c.object_person_id === subjectId)),
    ) ?? null
  );
}

for (const edge of plan.edges) {
  const isParent = edge.kind === 'parent';
  const fromKey = isParent ? edge.parent_key : edge.a_key;
  const toKey = isParent ? edge.child_key : edge.b_key;
  const fromId = personIdByKey.get(fromKey);
  const toId = personIdByKey.get(toKey);
  const label = isParent
    ? `${edge.parent_name} → ${edge.child_name}`
    : `${edge.a_name} ⇄ ${edge.b_name}`;

  if (!fromId || !toId) {
    stats.edges_failed.push({ edge: label, reason: 'person_missing' });
    continue;
  }
  if (fromId === toId) {
    stats.edges_failed.push({ edge: label, reason: 'same_person' });
    continue;
  }

  // Citations keep their own locator: which Wikidata property or CBDB term
  // states this link, plus the work CBDB itself cites.
  const sources = [];
  for (const citation of edge.citations) {
    sources.push({
      source_id: await ensureSource(citation.source_key),
      stance: 'supports',
      ...(citation.locator ? { locator: citation.locator } : {}),
      ...(citation.note ? { interpretation_note: citation.note } : {}),
    });
  }

  if (dryRun) {
    console.log(`~ ${label} [${edge.citations.map((c) => c.locator).join(' / ')}]`);
    continue;
  }

  try {
    const created = await api('POST', `/persons/${fromId}/relationships`, {
      // Submitted in natural language relative to `from`; the server normalizes
      // parent/child to one stored direction and canonicalizes spouse pairs.
      relationship: isParent ? 'child' : 'spouse',
      related_person_id: toId,
      confidence: 'medium',
      sources,
      change_summary: `导入亲属关系（${edge.citations.map((c) => c.locator).join('、')}）`,
    });
    stats.edges_created[edge.kind] += 1;
    await acceptClaim(created.claim_id, 1, '导入：来源为维基数据/CBDB 亲属声明');
    console.log(`~ ${label}`);
  } catch (e) {
    if (e.code !== 'relationship_exists') {
      stats.edges_failed.push({ edge: label, reason: e.code ?? String(e.status) });
      console.log(`! ${label}: ${e.code ?? e.status}`);
      continue;
    }
    // Already linked: converge to accepted and add any citation it lacks, so
    // re-runs improve provenance instead of duplicating rows.
    stats.edges_existing += 1;
    const predicate = isParent ? 'kinship.parent_of' : 'kinship.spouse_of';
    const existing = await findEdgeClaim(predicate, fromId, toId);
    if (!existing) continue;
    if (existing.status === 'proposed') {
      await acceptClaim(existing.id, existing.current_revision, '导入：来源为维基数据/CBDB 亲属声明');
    }
    for (const source of sources) {
      try {
        await api('POST', `/claims/${existing.id}/sources`, source);
        stats.citations_added += 1;
      } catch (err) {
        if (err.status !== 409) throw err;
      }
    }
    console.log(`= ${label} (已存在)`);
  }
}

// --- summary ----------------------------------------------------------------

console.log('\n--- 汇总 ---');
console.log(`来源新建: ${stats.sources_created}`);
console.log(`人物新建: ${stats.persons_created}（已发布 ${stats.persons_published}）`);
console.log(`属性主张新建: ${stats.claims_created}`);
console.log(
  `亲子关系新建: ${stats.edges_created.parent}，配偶关系新建: ${stats.edges_created.spouse}，` +
    `已存在: ${stats.edges_existing}（补充引用 ${stats.citations_added} 条）`,
);
if (stats.persons_unpublished.length) {
  console.log(`\n未发布（仍为私有草稿）${stats.persons_unpublished.length} 人：`);
  for (const p of stats.persons_unpublished) {
    console.log(`  ${p.name} (${p.person_id}) ${p.reason} | 历史性依据: ${p.historicity?.detail}`);
  }
}
if (plan.capped_relationships > 0) {
  console.log(`\n注意：本次计划因 --max-new 上限跳过了 ${plan.capped_relationships} 条关系，重跑可继续。`);
}
if (stats.edges_failed.length) {
  console.log(`\n失败的关系 ${stats.edges_failed.length} 条：`);
  for (const f of stats.edges_failed) console.log(`  ${f.edge}: ${f.reason}`);
  process.exitCode = 1;
}
