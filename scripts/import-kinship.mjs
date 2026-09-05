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
import { foldKey } from '../packages/i18n/src/script.ts';
import { d1Query } from './lib/d1.mjs';
import { findLoops } from './lib/loops.mjs';
import { markExpanded } from './lib/expansion-state.mjs';

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
// Suppressed records are included on purpose: they are still that person, and
// skipping them would recreate the record the operator just took out of view.
const personRows = d1Query(
  `SELECT p.id AS person_id,
          (SELECT json_extract(c.value_json, '$.text') FROM claim c
             WHERE c.subject_person_id = p.id AND c.predicate = 'name.primary'
             ORDER BY c.created_at LIMIT 1) AS name,
          (SELECT group_concat(DISTINCT s.external_identifier) FROM claim_source cs
             JOIN source s ON s.id = cs.source_id
             JOIN claim c ON c.id = cs.claim_id
            WHERE c.subject_person_id = p.id
              AND c.predicate = 'name.primary'
              AND s.external_identifier IS NOT NULL) AS identifiers,
          (SELECT group_concat(DISTINCT s.canonical_url) FROM claim_source cs
             JOIN source s ON s.id = cs.source_id
             JOIN claim c ON c.id = cs.claim_id
            WHERE c.subject_person_id = p.id
              AND c.predicate = 'name.primary'
              AND s.canonical_url IS NOT NULL) AS name_source_urls
     FROM person p
    WHERE p.status <> 'merged'`,
  { ...d1, label: 'persons' },
);

const personIdByKey = new Map();
for (const row of personRows) {
  for (const id of (row.identifiers ?? '').split(',').filter(Boolean)) {
    if (/^Q\d+$/.test(id)) personIdByKey.set(`wd:${id}`, row.person_id);
    const m = /^CBDB[:=]?\s*(\d+)$/i.exec(id);
    if (m) personIdByKey.set(`cbdb:${m[1].replace(/^0+/, '')}`, row.person_id);
  }
  // A person mined out of prose often has no identifier at all — a Wikipedia
  // sentence names 王瑜 without linking him anywhere. Identity then rests on the
  // name together with the article that vouches for it, which is stable enough
  // for a re-run to find the record it made last time instead of making a
  // second one. Name alone would be far too loose: 王氏 names eight women here.
  if (row.name) {
    for (const url of (row.name_source_urls ?? '').split(',').filter(Boolean)) {
      const key = `named:${foldKey(row.name)}@${url}`;
      if (!personIdByKey.has(key)) personIdByKey.set(key, row.person_id);
    }
  }
}
for (const o of overrides.persons) personIdByKey.set(`wd:${o.qid}`, o.person_id);

/** The name-plus-article keys a planned person could already be stored under. */
function namedKeys(person) {
  const text = person.name?.text;
  if (!text) return [];
  return (person.source_keys ?? person.claims?.[0]?.source_keys ?? [])
    .map((key) => sourceDefs.get(key)?.canonical_url)
    .filter(Boolean)
    .map((url) => `named:${foldKey(text)}@${url}`);
}

// A source is reusable only if it is the same record *kind*: an early import
// stored a CBDB id on a Wikipedia article record, and a Wikidata property
// locator has no meaning against that.
const sourceRows = [];
for (let offset = 0; ; offset += 1000) {
  const batch = d1Query(
    `SELECT id, external_identifier, canonical_url FROM source
      WHERE external_identifier IS NOT NULL OR canonical_url IS NOT NULL
      ORDER BY id LIMIT 1000 OFFSET ${offset}`,
    { ...d1, label: `sources ${offset + 1}-${offset + 1000}` },
  );
  sourceRows.push(...batch);
  if (batch.length < 1000) break;
}
const sourceIdByKey = new Map();
const sourceIdByUrl = new Map();
for (const row of sourceRows) {
  const url = row.canonical_url ?? '';
  // Prose and book sources usually have no external identifier. Their
  // canonical URL is still a stable identity and must be reused across
  // incremental reading rounds, otherwise every run creates another copy of
  // the same Wikipedia/Wikisource/gazetteer record.
  if (url && !sourceIdByUrl.has(url)) sourceIdByUrl.set(url, row.id);
  if (/^Q\d+$/.test(row.external_identifier) && url.startsWith('https://www.wikidata.org/wiki/')) {
    sourceIdByKey.set(`wd:${row.external_identifier}`, row.id);
  }
  const m = /^CBDB[:=]?\s*(\d+)$/i.exec(row.external_identifier);
  if (m && url.includes('cbdb.fas.harvard.edu')) {
    sourceIdByKey.set(`cbdb:${m[1].replace(/^0+/, '')}`, row.id);
  }
}
for (const source of plan.sources) {
  const existing = source.canonical_url ? sourceIdByUrl.get(source.canonical_url) : null;
  if (existing && !sourceIdByKey.has(source.key)) sourceIdByKey.set(source.key, existing);
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
  edges_created: { parent: 0, adoptive_parent: 0, spouse: 0, ancestor: 0 },
  edges_existing: 0,
  citations_added: 0,
  edges_failed: [],
};

// Concurrent person creations often cite the same source; share one in-flight
// creation per key so a source is never created twice.
const sourceInFlight = new Map();

async function ensureSource(key) {
  const known = sourceIdByKey.get(key);
  if (known) return known;
  const pending = sourceInFlight.get(key);
  if (pending) return pending;
  const def = sourceDefs.get(key);
  if (!def) throw new Error(`plan is missing a source definition for ${key}`);
  if (dryRun) return `(new source ${key})`;
  const promise = createSource(def, key);
  sourceInFlight.set(key, promise);
  return promise;
}

async function createSource(def, key) {
  // Optional fields are omitted rather than sent as null: a source with no
  // external identifier — a Wikipedia article, as against a Wikidata item —
  // has no identifier, which is not the same as having a null one, and the
  // API's schema rejects the latter.
  const optional = (field, value) => (value === null || value === undefined ? {} : { [field]: value });
  const created = await api('POST', '/sources', {
    source_type: def.source_type,
    title: def.title,
    ...optional('creator', def.creator),
    ...optional('publisher', def.publisher),
    ...optional('canonical_url', def.canonical_url),
    ...optional('external_identifier', def.external_identifier),
    ...optional('license_code', def.license_code),
    accessed_at: new Date().toISOString(),
    ...optional('metadata_json', def.metadata_json),
  });
  const id = created.source_id ?? created.id;
  sourceIdByKey.set(key, id);
  sourceInFlight.delete(key);
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

/**
 * Run tasks a few at a time. Person creation is independent per person, so a
 * little concurrency turns a multi-thousand-call expansion from hours into
 * minutes. Relationship writes stay sequential further down: the server's cycle
 * check reads the graph before it writes, and concurrent edges touching the same
 * people could slip a cycle past it.
 */
async function inBatches(items, size, worker) {
  for (let i = 0; i < items.length; i += size) {
    await Promise.all(items.slice(i, i + size).map(worker));
  }
}

// --- 1. create the relatives that are not in the database yet ---------------

const toCreate = plan.persons.filter((person) => {
  if (personIdByKey.has(person.key)) return false;
  if (person.qid && personIdByKey.has(`wd:${person.qid}`)) return false;
  if (person.cbdb && personIdByKey.has(`cbdb:${person.cbdb}`)) return false;
  // Already created by an earlier run of this same plan, under the name and the
  // article that named them. Point the plan key at that record so this run's
  // relationships attach to it rather than to a second copy.
  const already = namedKeys(person).find((key) => personIdByKey.has(key));
  if (already) {
    personIdByKey.set(person.key, personIdByKey.get(already));
    return false;
  }
  return true;
});

await inBatches(toCreate, dryRun ? 1 : 4, async (person) => {
  const [nameClaim, ...rest] = person.claims;
  const register = (personId) => {
    for (const key of [
      person.key,
      person.qid && `wd:${person.qid}`,
      person.cbdb && `cbdb:${person.cbdb}`,
      ...namedKeys(person),
    ]) {
      if (key) personIdByKey.set(key, personId);
    }
  };

  if (dryRun) {
    register(`(dry-run:${person.key})`);
    console.log(
      `+ ${person.name.text} (${person.key})${person.relationship_only ?? person.spouse_only ? ' [仅关系]' : ''} ` +
        `${person.claims.length} 条主张 [${person.historicity.kind}]`,
    );
    return;
  }

  const created = await api('POST', '/persons', {
    name: {
      predicate: 'name.primary',
      value: nameClaim.value,
      confidence: nameClaim.confidence,
      sources: await sourceRefs(nameClaim.source_keys, person.qid ?? `CBDB:${person.cbdb}`),
    },
    // The reason this person may be published at all travels with the record:
    // the plan file is regenerated every round, the audit trail is permanent.
    change_summary:
      `${nameClaim.change_summary}｜历史性依据：${person.historicity?.detail ?? '未记录'}` +
      (person.relationship_only ? '｜仅作为亲属关系端点，不记录基本信息' : ''),
  });
  const personId = created.person_id;
  stats.persons_created += 1;
  register(personId);
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
  } catch (e) {
    stats.persons_unpublished.push({
      name: person.name.text,
      person_id: personId,
      key: person.key,
      reason: e.code ?? String(e.status),
      historicity: person.historicity,
    });
  }
});
if (!dryRun) console.log(`人物新建 ${stats.persons_created}（发布 ${stats.persons_published}）`);

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

// How each planned edge is submitted. The directed kinds share the plan's
// parent/child field names — for `ancestor` those two ends are the 先祖 and the
// 後代, with an unknown number of generations between them — so only the
// predicate and the wording differ.
const EDGE_KINDS = {
  parent: { relationship: 'child', predicate: 'kinship.parent_of', arrow: '→', directed: true },
  adoptive_parent: {
    relationship: 'adoptive_child',
    predicate: 'kinship.adoptive_parent_of',
    arrow: '⇢',
    directed: true,
  },
  ancestor: { relationship: 'descendant', predicate: 'kinship.ancestor_of', arrow: '⇢', directed: true },
  spouse: { relationship: 'spouse', predicate: 'kinship.spouse_of', arrow: '⇄', directed: false },
};

/**
 * Where a planned edge starts and ends.
 *
 * A plan may name the person outright when the end is a record it already
 * matched in the database, which is how the zhwiki miner refers to everyone it
 * recognised. Only a key that stands for a person this run created has to be
 * looked up.
 */
function endpointsOf(edge, spec) {
  const fromKey = spec.directed ? edge.parent_key : edge.a_key;
  const toKey = spec.directed ? edge.child_key : edge.b_key;
  return {
    fromKey,
    toKey,
    fromId: (spec.directed ? edge.parent_person_id : edge.a_person_id) ?? personIdByKey.get(fromKey),
    toId: (spec.directed ? edge.child_person_id : edge.b_person_id) ?? personIdByKey.get(toKey),
  };
}

// --- 2a. refuse whole loops, not just the edge that closes one --------------

const plannedDescent = [];
for (const edge of plan.edges) {
  const spec = EDGE_KINDS[edge.kind];
  if (!spec?.directed) continue;
  const { fromKey, toKey, fromId, toId } = endpointsOf(edge, spec);
  const from = fromId ?? fromKey;
  const to = toId ?? toKey;
  if (from && to) plannedDescent.push({ edge, from, to });
}
// Existing descent plus planned descent: a loop that only exists once the plan
// is applied has to be visible before the plan is applied. A person this run
// would create has no id yet, so the plan key stands in for them.
const inLoop = findLoops([
  ...d1Query(
    `SELECT subject_person_id AS a, object_person_id AS b FROM claim
      WHERE predicate IN (
        'kinship.parent_of','kinship.father_of','kinship.mother_of',
        'kinship.adoptive_parent_of','kinship.adoptive_father_of','kinship.adoptive_mother_of',
        'kinship.ancestor_of'
      )
        AND status NOT IN ('retracted','superseded')`,
    { ...d1, label: 'descent edges' },
  ).map((row) => [row.a, row.b]),
  ...plannedDescent.map(({ from, to }) => [from, to]),
]);
const looping = new Set();
const loops = new Map();
for (const { edge, from, to } of plannedDescent) {
  const members = inLoop.get(from);
  if (!members || inLoop.get(to) !== members) continue;
  looping.add(edge);
  loops.set(members, members);
}
if (looping.size > 0) {
  console.log(
    `\n跳过 ${looping.size} 条会构成亲属环的关系（同名异人，需人工拆分后再导入）：`,
  );
  // Named, because the point of the report is that a person reads it and says
  // which of these names is two people.
  const nameById = new Map(personRows.map((row) => [row.person_id, row.name]));
  for (const members of loops.keys()) {
    const shown = members.map((m) => (nameById.has(m) ? `${nameById.get(m)}(${m})` : String(m)));
    console.log(`  环内 ${members.length} 人：${shown.join(' → ')}`);
  }
  for (const edge of looping) {
    stats.edges_failed.push({
      edge: `${edge.parent_name ?? edge.a_name} → ${edge.child_name ?? edge.b_name}`,
      reason: 'kinship_cycle_preflight',
    });
  }
}

for (const edge of plan.edges) {
  const spec = EDGE_KINDS[edge.kind];
  if (!spec) {
    stats.edges_failed.push({ edge: edge.kind, reason: 'unknown_edge_kind' });
    continue;
  }
  if (looping.has(edge)) continue;
  const { fromId, toId } = endpointsOf(edge, spec);
  const label = spec.directed
    ? `${edge.parent_name} ${spec.arrow} ${edge.child_name}`
    : `${edge.a_name} ${spec.arrow} ${edge.b_name}`;

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
      // The sentence the relation was read out of. A reader can check the claim
      // against the words themselves without leaving the page, which is the
      // whole point of mining prose rather than copying a structured field.
      ...(citation.quotation ? { quotation: citation.quotation.slice(0, 2000) } : {}),
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
      // parent/child and ancestor/descendant to one stored direction each, and
      // canonicalizes spouse pairs.
      relationship: spec.relationship,
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
    const existing = await findEdgeClaim(spec.predicate, fromId, toId);
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
    `收养关系新建: ${stats.edges_created.adoptive_parent}，世系关系新建: ${stats.edges_created.ancestor}，` +
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
  for (const f of stats.edges_failed.slice(0, 20)) console.log(`  ${f.edge}: ${f.reason}`);
  if (stats.edges_failed.length > 20) console.log(`  … 其余 ${stats.edges_failed.length - 20} 条`);
  process.exitCode = 1;
}

// Only now: the persons this plan asked about have been dealt with, so the next
// round can start from the frontier they revealed.
if (!dryRun && plan.expanded_keys?.length) {
  const all = markExpanded(plan.expanded_keys);
  console.log(`\n已展开人物累计 ${all.size} 人（本轮 +${plan.expanded_keys.length}）`);
}
