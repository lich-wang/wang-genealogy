// Import the kinship plan produced by fetch-kinship.mjs through the HTTP API.
//
// Everything goes through /api/v1 on purpose: the server is what normalizes a
// parent/child submission to a single `kinship.parent_of` row, refuses kinship
// cycles, enforces the provenance gate, and appends revisions and audit rows.
// A direct D1 write would bypass all of it.
//
// Idempotent: persons are matched to Wikidata QIDs already recorded in the
// database, sources are reused by external identifier, and an existing
// relationship (HTTP 409) is left alone apart from making sure it is accepted
// and cites everything we know.
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
const database = option('--db', process.env.D1_DATABASE ?? 'wang-genealogy');
const remote = !flag('--local');
const dryRun = flag('--dry-run');
const planPath = option('--plan', new URL('kinship-data.json', import.meta.url).pathname);

if (!EMAIL || !PASSWORD) {
  console.error('set IMPORTER_EMAIL and IMPORTER_PASSWORD');
  process.exit(2);
}

const plan = JSON.parse(readFileSync(planPath, 'utf8'));

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
      display_name: '维基数据导入',
      email: EMAIL,
      password: PASSWORD,
    });
    token = r.token;
  }
  const me = await api('GET', '/auth/me');
  return me.user;
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
    // A revision conflict means somebody (probably an earlier run) already
    // moved this claim on; leave it as it is.
    if (e.status === 409) return false;
    throw e;
  }
}

// --- existing state ---------------------------------------------------------

const overrides = JSON.parse(
  readFileSync(new URL('wikidata-qid-overrides.json', import.meta.url), 'utf8'),
);

const personRows = d1Query(
  `SELECT p.id AS person_id, p.status,
          (SELECT s.external_identifier FROM claim_source cs
             JOIN source s ON s.id = cs.source_id
             JOIN claim c ON c.id = cs.claim_id
            WHERE c.subject_person_id = p.id
              AND s.external_identifier LIKE 'Q%'
            ORDER BY cs.created_at LIMIT 1) AS qid
     FROM person p
    WHERE p.status IN ('candidate', 'active')`,
  { database, remote, label: 'persons' },
);
const personIdByQid = new Map();
for (const row of personRows) if (row.qid) personIdByQid.set(row.qid, row.person_id);
for (const o of overrides.persons) personIdByQid.set(o.qid, o.person_id);

// Only Wikidata *item* records count as reusable here. Earlier imports created
// zh-Wikipedia sources carrying the same QID as their external identifier, and
// citing "P40（子女）" against an encyclopedia article would misdescribe where
// the statement actually lives.
const sourceRows = d1Query(
  `SELECT id, external_identifier FROM source
    WHERE external_identifier LIKE 'Q%'
      AND canonical_url LIKE 'https://www.wikidata.org/wiki/%'`,
  { database, remote, label: 'sources' },
);
const sourceIdByQid = new Map(sourceRows.map((r) => [r.external_identifier, r.id]));

const itemByQid = new Map(plan.wikidata_items.map((i) => [i.qid, i]));

console.log(
  `plan: ${plan.new_persons.length} new persons, ${plan.edges.length} edges | ` +
    `known: ${personIdByQid.size} persons, ${sourceIdByQid.size} wikidata sources`,
);

const account = dryRun ? { display_name: '(dry-run)', role: 'n/a' } : await authenticate();
const isStaff = ['maintainer', 'reviewer', 'admin'].includes(account.role);
console.log(`account: ${account.display_name} (${account.role})${isStaff ? '' : ' — 无法发布缺少卒年的人物'}`);

const stats = {
  sources_created: 0,
  persons_created: 0,
  persons_published: 0,
  persons_unpublished: [],
  claims_created: 0,
  edges_created: 0,
  edges_existing: 0,
  edges_failed: [],
};

/** One Source record per Wikidata item, reused across claims and runs. */
async function ensureSource(itemQid) {
  const known = sourceIdByQid.get(itemQid);
  if (known) return known;
  const item = itemByQid.get(itemQid) ?? { qid: itemQid, name: itemQid, zh_wikipedia: null };
  if (dryRun) return `(new source for ${itemQid})`;
  const created = await api('POST', '/sources', {
    ...plan.source_template,
    title: `維基數據：${item.name}（${itemQid}）`,
    canonical_url: `https://www.wikidata.org/wiki/${itemQid}`,
    external_identifier: itemQid,
    accessed_at: new Date().toISOString(),
    ...(item.zh_wikipedia ? { metadata_json: { zh_wikipedia: item.zh_wikipedia } } : {}),
  });
  const id = created.source_id ?? created.id;
  sourceIdByQid.set(itemQid, id);
  stats.sources_created += 1;
  return id;
}

// --- 1. create the relatives that are not in the database yet ---------------

for (const person of plan.new_persons) {
  if (personIdByQid.has(person.qid)) continue;
  const sourceId = await ensureSource(person.qid);
  const sourceRef = { source_id: sourceId, stance: 'supports', locator: person.qid };

  if (dryRun) {
    // Stand-in id so the edge pass can still be checked end to end.
    personIdByQid.set(person.qid, `(dry-run:${person.qid})`);
    console.log(`+ ${person.name.text} (${person.qid}) [${person.historicity.kind}]`);
    continue;
  }

  const created = await api('POST', '/persons', {
    name: {
      predicate: 'name.primary',
      value: person.name,
      confidence: 'high',
      sources: [sourceRef],
    },
    change_summary: `导入亲属人物（维基数据 ${person.qid}）`,
  });
  const personId = created.person_id;
  personIdByQid.set(person.qid, personId);
  stats.persons_created += 1;
  await acceptClaim(created.claim_id, 1, '导入：来源为维基数据标签');

  const properties = [];
  if (person.description) {
    properties.push({
      predicate: 'bio.summary',
      value: person.description,
      confidence: 'medium',
      summary: '维基数据条目描述',
    });
  }
  if (person.birth) {
    properties.push({
      predicate: 'birth.date',
      value: { date: person.birth },
      confidence: 'medium',
      summary: '维基数据 P569',
    });
  }
  if (person.death) {
    properties.push({
      predicate: 'death.date',
      value: { date: person.death },
      confidence: 'medium',
      summary: '维基数据 P570',
    });
  }
  for (const property of properties) {
    const claim = await api('POST', `/persons/${personId}/claims`, {
      claim_kind: 'property',
      predicate: property.predicate,
      value: property.value,
      confidence: property.confidence,
      sources: [sourceRef],
      change_summary: property.summary,
    });
    stats.claims_created += 1;
    await acceptClaim(claim.claim_id, 1, '导入：核对来源后采纳');
  }

  // Publish. Without a death claim this needs the staff override, which is
  // exactly the "authoritative database identifies a historical figure" case
  // the source policy allows — the evidence is recorded in `historicity`.
  try {
    await api('POST', `/persons/${personId}/publish`, {});
    stats.persons_published += 1;
    console.log(`+ ${person.name.text} -> ${personId} (published)`);
  } catch (e) {
    stats.persons_unpublished.push({
      name: person.name.text,
      person_id: personId,
      qid: person.qid,
      reason: e.code ?? String(e.status),
      historicity: person.historicity,
    });
    console.log(`+ ${person.name.text} -> ${personId} (draft: ${e.code ?? e.status})`);
  }
}

// --- 2. link the generations ------------------------------------------------

/** The kinship.parent_of claim between these two, if the API already has it. */
async function findParentEdge(parentId, childId) {
  const { claims } = await api('GET', `/persons/${parentId}/claims`);
  return (
    claims.find(
      (c) =>
        c.predicate === 'kinship.parent_of' &&
        c.subject_person_id === parentId &&
        c.object_person_id === childId,
    ) ?? null
  );
}

for (const edge of plan.edges) {
  const parentId = edge.parent_person_id ?? personIdByQid.get(edge.parent_qid);
  const childId = edge.child_person_id ?? personIdByQid.get(edge.child_qid);
  const label = `${edge.parent_name} → ${edge.child_name}`;

  if (!parentId || !childId) {
    stats.edges_failed.push({ edge: label, reason: 'person_missing' });
    continue;
  }

  const sources = [];
  for (const citation of edge.citations) {
    sources.push({
      source_id: await ensureSource(citation.qid),
      stance: 'supports',
      locator: citation.locator,
    });
  }

  if (dryRun) {
    console.log(`~ ${label} [${edge.citations.map((c) => c.property).join(',')}]`);
    continue;
  }

  try {
    // Submitted in natural language relative to the parent; the server
    // normalizes it to the single stored parent_of direction.
    const created = await api('POST', `/persons/${parentId}/relationships`, {
      relationship: 'child',
      related_person_id: childId,
      confidence: 'medium',
      sources,
      change_summary: `导入亲属关系（维基数据 ${edge.citations.map((c) => c.property).join('、')}）`,
    });
    stats.edges_created += 1;
    await acceptClaim(created.claim_id, 1, '导入：来源为维基数据亲属声明');
    console.log(`~ ${label}`);
  } catch (e) {
    if (e.code !== 'relationship_exists') {
      stats.edges_failed.push({ edge: label, reason: e.code ?? String(e.status) });
      console.log(`! ${label}: ${e.code ?? e.status}`);
      continue;
    }
    // Already linked: converge it to accepted and make sure our citations are
    // attached, so re-runs improve provenance instead of duplicating rows.
    stats.edges_existing += 1;
    const existing = await findParentEdge(parentId, childId);
    if (!existing) continue;
    if (existing.status === 'proposed') {
      await acceptClaim(existing.id, existing.current_revision, '导入：来源为维基数据亲属声明');
    }
    for (const source of sources) {
      try {
        await api('POST', `/claims/${existing.id}/sources`, source);
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
console.log(`亲属关系新建: ${stats.edges_created}，已存在: ${stats.edges_existing}`);
if (stats.persons_unpublished.length) {
  console.log(`\n未发布（仍为私有草稿）${stats.persons_unpublished.length} 人：`);
  for (const p of stats.persons_unpublished) {
    console.log(`  ${p.name} (${p.person_id}) ${p.reason} | 历史性依据: ${p.historicity.detail}`);
  }
}
if (stats.edges_failed.length) {
  console.log(`\n失败的关系 ${stats.edges_failed.length} 条：`);
  for (const f of stats.edges_failed) console.log(`  ${f.edge}: ${f.reason}`);
  process.exitCode = 1;
}
