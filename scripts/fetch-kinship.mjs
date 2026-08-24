// Look up kinship for the persons already in the database and write a
// reviewable import plan.
//
//   node scripts/fetch-kinship.mjs [--hops 1] [--max-new 250]
//                                  [--sources wikidata,cbdb] [--local]
//
// Two sources are consulted per person:
//
//   * Wikidata — P22 父, P25 母, P40 子女, P26 配偶.
//   * CBDB     — 亲属关系, mapped from Chinese kinship terms; anything this
//                domain model cannot state faithfully (siblings, in-laws,
//                grandchildren) is reported, never forced into a predicate.
//
// The two are cross-linked by Wikidata's CBDB id (P497), which is what keeps one
// historical person from being created twice under two identifiers.
//
// Output: scripts/kinship-data.json — persons to create, edges to link, sources
// to cite, plus what was skipped and why. Nothing is written here;
// `import-kinship.mjs` submits the plan through the HTTP API.
//
// Policy baked in:
//   * Only deceased historical persons. Evidence is a death date, a pre-1900
//     birth, an extinct polity, a dynasty in the description or CBDB's dynasty
//     field, or being one generation (or a spouse) away from someone so dated.
//     Anything else is skipped and listed.
//   * Spouses are recorded as a relationship only — a spouse-only record gets a
//     name and nothing else, per the project's instruction not to build out
//     basic information for them.
//   * Nothing is invented: no "卒年：不详" placeholders, and coarse precisions
//     stay coarse.
//   * Names are stored exactly as the source publishes them and tagged with the
//     script we detect; no 简繁 conversion is ever written.

import { readFileSync, writeFileSync } from 'node:fs';
import { detectScript, foldKey } from '../packages/i18n/src/script.ts';
import { d1Query } from './lib/d1.mjs';
import { loadExpanded } from './lib/expansion-state.mjs';
import {
  CBDB_SOURCE_TEMPLATE,
  basicInfo as cbdbBasicInfo,
  cbdbPersonUrl,
  fetchPerson as fetchCbdbPerson,
  kinship as cbdbKinship,
} from './lib/cbdb.mjs';
import {
  KINSHIP_PROPERTIES,
  TITLE_PATTERN,
  WANG_FAMILY_NAME_QID,
  dateClaim,
  factsFor,
  kinshipFor,
  personalNameCandidates,
  pickName,
  pickPersonalName,
  qidsByCbdb,
  yearOf,
  formatWikidataTime,
} from './lib/wikidata.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const d1 = {
  database: option('--db', process.env.D1_DATABASE ?? 'wang-genealogy'),
  remote: !flag('--local'),
};
const hops = Math.max(1, Number(option('--hops', '1')));
const maxNew = Math.max(1, Number(option('--max-new', '250')));
const enabled = new Set(option('--sources', 'wikidata,cbdb').split(',').map((s) => s.trim()));
// Expansion normally continues from where the last round stopped; --all re-asks
// about everyone, which is only useful when upstream data has changed.
const onlyNew = !flag('--all');
// This is a 王-surname genealogy. Following parent/child links out of every
// in-law pulls in whole imperial clans (王政君's husband 汉元帝 leads to 汉宣帝,
// 汉武帝, 汉景帝 …), so by default only 王-surname persons are expanded: their
// parents, children and spouses are still recorded, but a non-王 relative is a
// leaf. `--frontier all` restores unbounded expansion.
const frontierScope = option('--frontier', 'wang');
const outPath = option('--out', new URL('kinship-data.json', import.meta.url).pathname);

/** 王 by Wikidata's family-name property, or by the name a source publishes. */
function isWangSurname(node) {
  if (node.facts?.family_name) return node.facts.family_name === WANG_FAMILY_NAME_QID;
  const text = node.name?.text ?? '';
  // Titles such as 孝景王皇后 carry the surname in the middle; the leading
  // character is the usual case.
  return text.startsWith('王') || /王(皇后|夫人|氏|美人|婕妤)/.test(text);
}

const HISTORICAL_ERA =
  /(秦|漢|汉|魏|蜀|吳|吴|晉|晋|隋|唐|宋|遼|辽|金|元|明|清|齊|齐|梁|陳|陈|周|商|春秋|戰國|战国|匈奴|Qin|Han|Wei|Shu|Jin dynasty|Sui|Tang|Song|Liao|Yuan|Ming|Qing|Xiongnu|Three Kingdoms|Northern|Southern)/;
const CUTOFF_YEAR = 1900;

// --- person registry --------------------------------------------------------

let nodeSeq = 0;
const nodes = new Map();
const byQid = new Map();
const byCbdb = new Map();
const merges = [];

function keyOf(node) {
  return node.qid ? `wd:${node.qid}` : `cbdb:${node.cbdb}`;
}

/** Find or create the node for an identity, merging when two ids meet. */
function resolveNode({ qid = null, cbdb = null }, seed = {}) {
  const viaQid = qid ? byQid.get(qid) : undefined;
  const viaCbdb = cbdb ? byCbdb.get(cbdb) : undefined;

  let node = viaQid ?? viaCbdb;
  if (viaQid && viaCbdb && viaQid !== viaCbdb) {
    // Same person reached under two identifiers: keep the older node and fold
    // the other into it, so one historical person stays one record.
    const [keep, drop] = viaQid.seq <= viaCbdb.seq ? [viaQid, viaCbdb] : [viaCbdb, viaQid];
    merges.push({ kept: keyOf(keep), dropped: keyOf(drop), reason: 'qid_and_cbdb_agree' });
    keep.qid ??= drop.qid;
    keep.cbdb ??= drop.cbdb;
    keep.roles = new Set([...keep.roles, ...drop.roles]);
    keep.person_id ??= drop.person_id;
    keep.hop = Math.min(keep.hop, drop.hop);
    drop.merged_into = keep;
    nodes.delete(drop.id);
    if (drop.qid) byQid.set(drop.qid, keep);
    if (drop.cbdb) byCbdb.set(drop.cbdb, keep);
    node = keep;
  }

  if (!node) {
    node = {
      id: `n${nodeSeq}`,
      seq: nodeSeq++,
      qid: null,
      cbdb: null,
      person_id: null,
      name: null,
      facts: null,
      cbdb_info: null,
      roles: new Set(),
      hop: seed.hop ?? 0,
      introduced_by: seed.introduced_by ?? null,
      source_keys: new Set(),
      ...seed,
    };
    nodes.set(node.id, node);
  }
  if (qid && !node.qid) {
    node.qid = qid;
    byQid.set(qid, node);
  }
  if (cbdb && !node.cbdb) {
    node.cbdb = cbdb;
    byCbdb.set(cbdb, node);
  }
  if (qid) byQid.set(qid, node);
  if (cbdb) byCbdb.set(cbdb, node);
  return node;
}

// --- 1. roster: who is already in the database ------------------------------

const overrides = JSON.parse(
  readFileSync(new URL('wikidata-qid-overrides.json', import.meta.url), 'utf8'),
);

const rosterRows = d1Query(
  `SELECT p.id AS person_id, p.status,
          (SELECT json_extract(c.value_json, '$.text') FROM claim c
             WHERE c.subject_person_id = p.id AND c.predicate = 'name.primary'
             ORDER BY c.created_at LIMIT 1) AS name,
          (SELECT group_concat(DISTINCT s.external_identifier) FROM claim_source cs
             JOIN source s ON s.id = cs.source_id
             JOIN claim c2 ON c2.id = cs.claim_id
            WHERE c2.subject_person_id = p.id
              AND c2.predicate = 'name.primary'
              AND s.external_identifier IS NOT NULL) AS identifiers
     FROM person p
    WHERE p.status <> 'merged'
    ORDER BY p.created_at`,
  { ...d1, label: 'roster' },
);

const overrideByPerson = new Map(overrides.persons.map((p) => [p.person_id, p.qid]));
const foldedExisting = new Map();

for (const row of rosterRows) {
  const identifiers = (row.identifiers ?? '').split(',').filter(Boolean);
  let qid = overrideByPerson.get(row.person_id) ?? null;
  let cbdb = null;
  for (const id of identifiers) {
    if (/^Q\d+$/.test(id)) qid ??= id;
    const m = /^CBDB[:=]?\s*(\d+)$/i.exec(id);
    if (m) cbdb ??= m[1].replace(/^0+/, '');
  }
  const node = resolveNode({ qid, cbdb }, { hop: 0 });
  node.person_id = row.person_id;
  node.name = row.name ? { text: row.name, language: detectScript(row.name) ?? 'zh-Hans' } : null;
  node.existing = true;
  if (row.name) {
    const folded = foldKey(row.name);
    if (!foldedExisting.has(folded)) foldedExisting.set(folded, []);
    foldedExisting.get(folded).push({ person_id: row.person_id, name: row.name });
  }
}

const rosterNodes = [...nodes.values()];
console.error(
  `roster: ${rosterRows.length} persons | 有 QID ${rosterNodes.filter((n) => n.qid).length} |` +
    ` 有 CBDB ${rosterNodes.filter((n) => n.cbdb).length}`,
);

// Learn the CBDB id of existing persons from Wikidata (P497) so CBDB expansion
// can start from them even though the database never recorded one.
if (enabled.has('wikidata')) {
  const facts = await factsFor(rosterNodes.filter((n) => n.qid).map((n) => n.qid));
  for (const node of rosterNodes) {
    const f = node.qid ? facts.get(node.qid) : null;
    if (!f) continue;
    node.facts = f;
    if (f.cbdb && !node.cbdb) {
      node.cbdb = f.cbdb;
      byCbdb.set(f.cbdb, node);
    }
  }
  console.error(`roster: 补齐 CBDB id 后共 ${rosterNodes.filter((n) => n.cbdb).length} 人可查 CBDB`);
}

// --- 2. expand, one generation per hop --------------------------------------

const edges = new Map();
const skipped = [];
const unmapped = new Map();
let capped = 0;

function addCitation(edge, citation) {
  const dup = edge.citations.some(
    (c) => c.source_key === citation.source_key && c.locator === citation.locator,
  );
  if (!dup) edge.citations.push(citation);
}

/** Record a parent/child or spouse edge between two nodes, merging citations. */
function addEdge(kind, first, second, citation) {
  if (first === second) return null;
  const [a, b] =
    kind === 'spouse' ? [first, second].sort((x, y) => x.seq - y.seq) : [first, second];
  const key = `${kind}|${a.id}|${b.id}`;
  const edge =
    edges.get(key) ??
    (() => {
      const created = { kind, a, b, citations: [] };
      edges.set(key, created);
      return created;
    })();
  addCitation(edge, citation);
  return edge;
}

function noteRole(node, role) {
  node.roles.add(role);
}

const alreadyExpanded = onlyNew ? loadExpanded() : new Set();
const expandedThisRun = new Set();

/** Nodes worth asking about: identifiable, in scope, and not already queried. */
const expandable = (list) =>
  list.filter(
    (n) =>
      (n.qid || n.cbdb) &&
      !alreadyExpanded.has(keyOf(n)) &&
      (frontierScope === 'all' || isWangSurname(n)),
  );

let frontier = expandable(rosterNodes);
console.error(
  `frontier: ${frontier.length} 人待展开（范围=${frontierScope === 'all' ? '不限姓氏' : '仅王姓'}，` +
    `已展开过 ${alreadyExpanded.size} 人）`,
);

for (let hop = 1; hop <= hops; hop += 1) {
  const discovered = [];
  const canCreate = () => nodes.size - rosterRows.length < maxNew;

  for (const node of frontier) expandedThisRun.add(keyOf(node));

  // 2a. Wikidata statements for the frontier.
  if (enabled.has('wikidata')) {
    const qids = frontier.filter((n) => n.qid).map((n) => n.qid);
    const statements = qids.length ? await kinshipFor(qids) : [];
    console.error(`hop ${hop}: wikidata ${statements.length} 条声明（${qids.length} 人）`);
    for (const statement of statements) {
      const anchor = byQid.get(statement.subject_qid);
      if (!anchor) continue;
      const relation = KINSHIP_PROPERTIES[statement.property];
      const facts = statement.facts;
      const name = pickName(facts);
      if (!name) {
        skipped.push({
          anchor: anchor.name?.text ?? anchor.qid,
          source: 'wikidata',
          relation: statement.property,
          relative: facts.qid,
          reason: 'no_label',
        });
        continue;
      }
      const existing = byQid.get(facts.qid) ?? (facts.cbdb ? byCbdb.get(facts.cbdb) : undefined);
      if (!existing && !canCreate()) {
        capped += 1;
        continue;
      }
      const node = resolveNode(
        { qid: facts.qid, cbdb: facts.cbdb },
        { hop, introduced_by: { node: anchor.id, relation: relation.otherIs, source: 'wikidata' } },
      );
      if (!node.facts) node.facts = facts;
      if (!node.name) node.name = { text: name, language: detectScript(name) ?? 'zh-Hans' };
      if (!node.existing && node.hop === hop && !discovered.includes(node)) discovered.push(node);

      const sourceKey = `wd:${anchor.qid}`;
      const citation = {
        source_key: sourceKey,
        locator: `${statement.property}（${relation.label}）`,
        note: null,
      };
      if (relation.otherIs === 'parent') {
        noteRole(node, 'parent');
        noteRole(anchor, 'child');
        addEdge('parent', node, anchor, citation);
      } else if (relation.otherIs === 'child') {
        noteRole(node, 'child');
        noteRole(anchor, 'parent');
        addEdge('parent', anchor, node, citation);
      } else {
        noteRole(node, 'spouse');
        noteRole(anchor, 'spouse');
        addEdge('spouse', anchor, node, citation);
      }
    }
  }

  // 2b. CBDB kinship for the frontier.
  if (enabled.has('cbdb')) {
    const withCbdb = frontier.filter((n) => n.cbdb);
    const pending = [];
    for (const anchor of withCbdb) {
      const person = await fetchCbdbPerson(anchor.cbdb);
      if (!person) continue;
      anchor.cbdb_info ??= cbdbBasicInfo(person);
      for (const row of cbdbKinship(person)) {
        if (!row.kind) {
          const entry = unmapped.get(row.term) ?? { term: row.term, count: 0, examples: [] };
          entry.count += 1;
          if (entry.examples.length < 3) {
            entry.examples.push(`${anchor.name?.text ?? anchor.cbdb} → ${row.name}`);
          }
          unmapped.set(row.term, entry);
          continue;
        }
        pending.push({ anchor, row });
      }
    }
    console.error(`hop ${hop}: cbdb ${pending.length} 条可表达的亲属（${withCbdb.length} 人）`);

    // Bridge CBDB ids to Wikidata items in one query, so a relative already in
    // the graph under its QID is recognised instead of duplicated.
    const bridge = pending.length ? await qidsByCbdb(pending.map((p) => p.row.cbdb)) : new Map();

    for (const { anchor, row } of pending) {
      const qid = bridge.get(row.cbdb) ?? null;
      const existing = (qid ? byQid.get(qid) : undefined) ?? byCbdb.get(row.cbdb);
      if (!existing && !canCreate()) {
        capped += 1;
        continue;
      }
      const node = resolveNode(
        { qid, cbdb: row.cbdb },
        { hop, introduced_by: { node: anchor.id, relation: row.kind, source: 'cbdb' } },
      );
      if (!node.name && row.name) {
        node.name = { text: row.name, language: detectScript(row.name) ?? 'zh-Hant' };
      }
      if (!node.existing && node.hop === hop && !discovered.includes(node)) discovered.push(node);

      const citation = {
        source_key: `cbdb:${anchor.cbdb}`,
        locator: `亲属关系：${row.term}`,
        note: row.cited_source ? `CBDB 注明此条来源：${row.cited_source}` : null,
      };
      if (row.kind === 'parent') {
        noteRole(node, 'parent');
        noteRole(anchor, 'child');
        addEdge('parent', node, anchor, citation);
      } else if (row.kind === 'child') {
        noteRole(node, 'child');
        noteRole(anchor, 'parent');
        addEdge('parent', anchor, node, citation);
      } else {
        noteRole(node, 'spouse');
        noteRole(anchor, 'spouse');
        addEdge('spouse', anchor, node, citation);
      }
    }
  }

  // Fill in what we still do not know about the newcomers, so the next hop can
  // expand them and so their records carry dates.
  const needFacts = discovered.filter((n) => n.qid && !n.facts).map((n) => n.qid);
  if (enabled.has('wikidata') && needFacts.length) {
    const facts = await factsFor(needFacts);
    for (const node of discovered) {
      const f = node.qid ? facts.get(node.qid) : null;
      if (!f) continue;
      node.facts = f;
      if (f.cbdb && !node.cbdb) {
        node.cbdb = f.cbdb;
        byCbdb.set(f.cbdb, node);
      }
      const label = pickName(f);
      if (label && !node.name) node.name = { text: label, language: detectScript(label) ?? 'zh-Hans' };
    }
  }
  if (enabled.has('cbdb')) {
    for (const node of discovered) {
      if (!node.cbdb || node.cbdb_info) continue;
      const person = await fetchCbdbPerson(node.cbdb);
      if (person) node.cbdb_info = cbdbBasicInfo(person);
    }
  }

  console.error(`hop ${hop}: 新增 ${discovered.length} 人（累计新增 ${nodes.size - rosterRows.length}）`);
  frontier = expandable(discovered);
  if (frontier.length === 0) break;
}

if (capped > 0) {
  console.error(`! 达到 --max-new ${maxNew} 上限，跳过 ${capped} 条关系（未静默截断，重跑可继续）`);
}

// --- 3. names: the person's own name, not the title they were given ---------

// Sources label emperors and consorts with temple names and posthumous titles
// (漢成帝, 孝景王皇后). Those are not names: where a source states the actual
// name we store that and keep the title as an alias. Where none does, the title
// stays — a name nobody wrote is not ours to invent.
const titledNew = [...nodes.values()].filter(
  (n) => !n.existing && n.qid && n.name?.text && TITLE_PATTERN.test(n.name.text),
);
if (titledNew.length > 0) {
  const candidates = await personalNameCandidates(titledNew.map((n) => n.qid));
  let fixed = 0;
  for (const node of titledNew) {
    const personal = pickPersonalName(candidates.get(node.qid));
    if (!personal || personal === node.name.text) continue;
    node.title_alias = node.name.text;
    node.name = { text: personal, language: detectScript(personal) ?? 'zh-Hans' };
    fixed += 1;
  }
  console.error(`称号改本名：${fixed}/${titledNew.length}（其余来源未给出本名，保留称号）`);
}

// --- 4. historicity ---------------------------------------------------------

/** Evidence that a person is a deceased historical figure, or null. */
function ownEvidence(node) {
  const f = node.facts;
  if (f?.death) {
    return {
      kind: 'death_date',
      detail: `维基数据 P570 = ${formatWikidataTime(f.death) ?? f.death.value}`,
    };
  }
  if (f?.birth && yearOf(f.birth) < CUTOFF_YEAR) {
    return {
      kind: 'birth_date',
      detail: `维基数据 P569 = ${formatWikidataTime(f.birth) ?? f.birth.value}`,
    };
  }
  const info = node.cbdb_info;
  if (info?.death_year && info.death_year < CUTOFF_YEAR) {
    return { kind: 'cbdb_death_year', detail: `CBDB 卒年 = ${info.death_year}` };
  }
  if (info?.birth_year && info.birth_year < CUTOFF_YEAR) {
    return { kind: 'cbdb_birth_year', detail: `CBDB 生年 = ${info.birth_year}` };
  }
  if (info?.dynasty && HISTORICAL_ERA.test(info.dynasty)) {
    return { kind: 'cbdb_dynasty', detail: `CBDB 朝代 = ${info.dynasty}` };
  }
  const country = f ? [...f.countries].find((c) => HISTORICAL_ERA.test(c)) : null;
  if (country) return { kind: 'historical_country', detail: `维基数据 P27 = ${country}` };
  const description = f?.descriptions.zh ?? f?.descriptions.en ?? '';
  if (HISTORICAL_ERA.test(description)) return { kind: 'description_era', detail: description };
  return null;
}

/** Whether this person is dated/placed far enough back to vouch for a neighbour. */
function vouches(node) {
  const evidence = ownEvidence(node);
  return evidence ? evidence.detail : null;
}

const RELATION_LABEL = { parent: '其子/女', child: '其父/母', spouse: '其配偶' };

/** CBDB stores a bare year; keep it as year precision and say where it came from. */
function cbdbYearClaim(field, year) {
  const text = year < 0 ? `前${Math.abs(year)}年` : `${year}年`;
  return { original_text: text, calendar_note: `CBDB ${field}字段，精度：年` };
}

for (const node of nodes.values()) {
  if (node.existing) continue;
  let evidence = ownEvidence(node);
  if (!evidence && node.introduced_by) {
    const anchor = nodes.get(node.introduced_by.node) ?? null;
    const vouch = anchor ? vouches(anchor) : null;
    if (anchor && vouch) {
      evidence = {
        kind: 'adjacent_to_historical_person',
        detail:
          `${RELATION_LABEL[node.introduced_by.relation] ?? '其亲属'} ` +
          `${anchor.name?.text ?? anchor.qid ?? anchor.cbdb}：${vouch}；相邻一代不可能仍在世`,
      };
    }
  }
  node.historicity = evidence;
}

// Drop unusable nodes and any edge that would dangle.
const unusable = new Set();
for (const node of nodes.values()) {
  if (node.existing) continue;
  if (!node.name?.text) {
    unusable.add(node.id);
    skipped.push({ key: keyOf(node), reason: 'no_name', detail: '两个来源都没有可用名称' });
  } else if (!/[\u3400-\u9fff]/.test(node.name.text)) {
    // An item whose only label is a romanization would enter a Chinese
    // genealogy under a name no source actually writes that way.
    unusable.add(node.id);
    skipped.push({
      key: keyOf(node),
      name: node.name.text,
      reason: 'no_chinese_label',
      detail: '来源只有拉丁转写名，未录入',
    });
  } else if (!node.historicity) {
    unusable.add(node.id);
    skipped.push({
      key: keyOf(node),
      name: node.name.text,
      reason: 'not_proven_historical',
      detail: '无生卒年、无朝代、相邻人物亦无纪年，无法排除仍在世',
    });
  }
}

// --- 4. shape the plan ------------------------------------------------------

const usedSourceKeys = new Set();
const planEdges = [];
for (const edge of edges.values()) {
  if (unusable.has(edge.a.id) || unusable.has(edge.b.id)) continue;
  const a = edge.a.merged_into ?? edge.a;
  const b = edge.b.merged_into ?? edge.b;
  if (a === b) continue;
  for (const c of edge.citations) usedSourceKeys.add(c.source_key);
  planEdges.push({
    kind: edge.kind,
    ...(edge.kind === 'parent'
      ? { parent_key: keyOf(a), child_key: keyOf(b), parent_name: a.name?.text, child_name: b.name?.text }
      : { a_key: keyOf(a), b_key: keyOf(b), a_name: a.name?.text, b_name: b.name?.text }),
    parent_person_id: edge.kind === 'parent' ? a.person_id : undefined,
    child_person_id: edge.kind === 'parent' ? b.person_id : undefined,
    a_person_id: edge.kind === 'spouse' ? a.person_id : undefined,
    b_person_id: edge.kind === 'spouse' ? b.person_id : undefined,
    citations: edge.citations,
  });
}

const planPersons = [];
const nameCollisions = [];
for (const node of nodes.values()) {
  if (node.existing || unusable.has(node.id)) continue;

  // Records that exist only to make a 王 person's kinship legible carry a name
  // and nothing else: spouses (per instruction), and everyone outside the 王
  // surname, who is in this database only as somebody's relative.
  const spouseOnly = node.roles.has('spouse') && !node.roles.has('parent') && !node.roles.has('child');
  const relationshipOnly = spouseOnly || !isWangSurname(node);

  const f = node.facts;
  const info = node.cbdb_info;
  const wdKey = node.qid ? `wd:${node.qid}` : null;
  const cbdbKey = node.cbdb ? `cbdb:${node.cbdb}` : null;
  const sourceKeys = [wdKey, cbdbKey].filter(Boolean);
  for (const key of sourceKeys) usedSourceKeys.add(key);

  // Claims are spelled out here so the plan is what gets reviewed, and the
  // importer only has to submit it.
  const claims = [
    {
      predicate: 'name.primary',
      value: node.name,
      confidence: 'high',
      source_keys: sourceKeys,
      change_summary: '导入亲属人物姓名',
    },
  ];

  if (node.title_alias) {
    claims.push({
      predicate: 'name.alias',
      value: { text: node.title_alias, language: detectScript(node.title_alias) ?? 'zh-Hans' },
      confidence: 'high',
      source_keys: sourceKeys,
      change_summary: '称号/庙号记为异名',
    });
  }

  if (!relationshipOnly) {
    const description = f?.descriptions.zh
      ? { text: f.descriptions.zh, language: detectScript(f.descriptions.zh) ?? 'zh-Hans' }
      : f?.descriptions.en
        ? { text: f.descriptions.en, language: 'en' }
        : null;
    if (description && wdKey) {
      claims.push({
        predicate: 'bio.summary',
        value: description,
        confidence: 'medium',
        source_keys: [wdKey],
        change_summary: '维基数据条目描述',
      });
    }
    // Prefer Wikidata's structured date; fall back to CBDB's year field. When
    // both exist and disagree they are both recorded — coexisting sourced
    // claims are the point of this database, not something to average away.
    if (f?.birth && wdKey) {
      const date = dateClaim('P569', f.birth);
      if (date) {
        claims.push({
          predicate: 'birth.date',
          value: { date },
          confidence: 'medium',
          source_keys: [wdKey],
          change_summary: '维基数据 P569',
        });
      }
    } else if (info?.birth_year && cbdbKey) {
      claims.push({
        predicate: 'birth.date',
        value: { date: cbdbYearClaim('生年', info.birth_year) },
        confidence: 'medium',
        source_keys: [cbdbKey],
        change_summary: 'CBDB 生年',
      });
    }
    if (f?.death && wdKey) {
      const date = dateClaim('P570', f.death);
      if (date) {
        claims.push({
          predicate: 'death.date',
          value: { date },
          confidence: 'medium',
          source_keys: [wdKey],
          change_summary: '维基数据 P570',
        });
      }
    } else if (info?.death_year && cbdbKey) {
      claims.push({
        predicate: 'death.date',
        value: { date: cbdbYearClaim('卒年', info.death_year) },
        confidence: 'medium',
        source_keys: [cbdbKey],
        change_summary: 'CBDB 卒年',
      });
    }
  }

  const folded = foldKey(node.name.text);
  if (foldedExisting.has(folded)) {
    nameCollisions.push({
      key: keyOf(node),
      name: node.name.text,
      existing: foldedExisting.get(folded),
      note: '同名但外部标识不同：可能是同名异人，也可能需要人工提出合并提案',
    });
  }

  planPersons.push({
    key: keyOf(node),
    qid: node.qid,
    cbdb: node.cbdb,
    hop: node.hop,
    name: node.name,
    spouse_only: spouseOnly,
    relationship_only: relationshipOnly,
    relationship_only_reason: relationshipOnly ? (spouseOnly ? 'spouse_only' : 'not_wang_surname') : null,
    claims,
    historicity: node.historicity,
    source_keys: sourceKeys,
  });
}

// Source records for every citation the plan uses.
const planSources = [];
for (const key of usedSourceKeys) {
  const [kind, id] = key.split(':');
  if (kind === 'wd') {
    const node = byQid.get(id);
    const name = node?.name?.text ?? id;
    planSources.push({
      key,
      kind: 'wikidata',
      source_type: 'api_record',
      title: `维基数据：${name}（${id}）`,
      creator: '维基数据贡献者',
      publisher: 'Wikimedia Foundation',
      license_code: 'CC0-1.0',
      canonical_url: `https://www.wikidata.org/wiki/${id}`,
      external_identifier: id,
      metadata_json: node?.facts?.zh_wikipedia ? { zh_wikipedia: node.facts.zh_wikipedia } : null,
    });
  } else {
    const node = byCbdb.get(id);
    const name = node?.cbdb_info?.name ?? node?.name?.text ?? id;
    planSources.push({
      key,
      kind: 'cbdb',
      ...CBDB_SOURCE_TEMPLATE,
      title: `CBDB 中国历代人物传记资料库：${name}（${id}）`,
      canonical_url: cbdbPersonUrl(id),
      external_identifier: `CBDB:${id}`,
      metadata_json: null,
    });
  }
}

const plan = {
  generated_from: [...enabled],
  hops,
  // The importer marks these expanded once the plan lands, so the next round
  // starts from the new frontier instead of re-querying everyone.
  expanded_keys: [...expandedThisRun],
  max_new: maxNew,
  capped_relationships: capped,
  sources: planSources,
  persons: planPersons,
  edges: planEdges,
  identity_merges: merges,
  name_collisions: nameCollisions,
  unmapped_cbdb_relations: [...unmapped.values()].sort((a, b) => b.count - a.count),
  skipped,
};

writeFileSync(outPath, `${JSON.stringify(plan, null, 2)}\n`, 'utf8');

const spouseOnlyCount = planPersons.filter((p) => p.spouse_only).length;
console.error(
  `plan: ${planEdges.filter((e) => e.kind === 'parent').length} 条亲子 + ` +
    `${planEdges.filter((e) => e.kind === 'spouse').length} 条配偶 | ` +
    `新建 ${planPersons.length} 人（其中仅配偶 ${spouseOnlyCount}）| ` +
    `跳过 ${skipped.length} | 同名待查 ${nameCollisions.length} | ` +
    `CBDB 未映射关系 ${plan.unmapped_cbdb_relations.length} 种`,
);
console.error(`written to ${outPath}`);
