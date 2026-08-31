// Read-only data audit: duplicates, unsourced public claims, dangling links.
//
// Run it after every import. It never writes anything — it prints what a human
// (or a follow-up cleanup) has to decide about, because in this project a
// duplicate person is resolved by a reversible merge proposal, not by deletion.
//
// Usage: node scripts/audit-data.mjs [--local] [--json]

import { foldKey } from '../packages/i18n/src/script.ts';
import { d1Query } from './lib/d1.mjs';

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
const asJson = flag('--json');
const findings = {};

const query = (sql, label) => d1Query(sql, { ...d1, label });

// --- persons and their identities -------------------------------------------

const persons = query(
  `SELECT p.id, p.status,
          (SELECT json_extract(c.value_json, '$.text') FROM claim c
             WHERE c.subject_person_id = p.id AND c.predicate = 'name.primary'
             ORDER BY c.created_at LIMIT 1) AS name,
          -- Identity comes from what the NAME claim cites. A relationship claim
          -- cites the other endpoint's record too, so counting those would make
          -- every linked pair look like it shared an identifier.
          (SELECT group_concat(DISTINCT s.external_identifier) FROM claim_source cs
             JOIN source s ON s.id = cs.source_id
             JOIN claim c2 ON c2.id = cs.claim_id
            WHERE c2.subject_person_id = p.id
              AND c2.predicate = 'name.primary'
              AND s.external_identifier IS NOT NULL) AS identifiers
     FROM person p`,
  'persons',
);

// Same folded name = same name regardless of 简繁. Real namesakes exist, so this
// is a review list, not a defect list — unless the two records also share an
// external identifier, which means they are certainly the same record twice.
// Suppressed records are out of public view; two of them sharing a name is not
// something anyone needs to act on. Identifier collisions below still consider
// every status, because those indicate one person stored twice.
const byFolded = new Map();
for (const p of persons) {
  if (!p.name || p.status === 'suppressed') continue;
  const key = foldKey(p.name);
  if (!byFolded.has(key)) byFolded.set(key, []);
  byFolded.get(key).push(p);
}
findings.same_name_persons = [...byFolded.entries()]
  .filter(([, group]) => group.length > 1)
  .map(([folded, group]) => ({
    folded,
    persons: group.map((p) => ({ id: p.id, name: p.name, status: p.status, identifiers: p.identifiers })),
  }));

// A shared name means little in a genealogy spanning 2000 years — there are
// eight different 王氏 in here. What does mean something is two records with the
// same name that also touch the same relative, or that carry the same dates:
// that is one person entered twice, and worth a merge proposal.
const kinship = query(
  `SELECT subject_person_id AS a, object_person_id AS b, predicate FROM claim
    WHERE claim_kind = 'relationship' AND status NOT IN ('retracted', 'superseded')`,
  'kinship',
);
// Role matters: 王益's wife 吳氏 and 王安石's wife 吳氏 both touch 王安石, but one
// is his mother and the other his wife. Only a shared relative in the *same*
// role suggests one person entered twice.
const neighbours = new Map();
const add = (id, token) => {
  if (!neighbours.has(id)) neighbours.set(id, new Set());
  neighbours.get(id).add(token);
};
for (const edge of kinship) {
  if (edge.predicate === 'kinship.spouse_of') {
    add(edge.a, `spouse:${edge.b}`);
    add(edge.b, `spouse:${edge.a}`);
  } else if (edge.predicate === 'kinship.parent_of') {
    add(edge.a, `parent_of:${edge.b}`);
    add(edge.b, `child_of:${edge.a}`);
  } else if (edge.predicate === 'kinship.adoptive_parent_of') {
    add(edge.a, `adoptive_parent_of:${edge.b}`);
    add(edge.b, `adoptive_child_of:${edge.a}`);
  } else if (edge.predicate === 'kinship.ancestor_of') {
    add(edge.a, `ancestor_of:${edge.b}`);
    add(edge.b, `descendant_of:${edge.a}`);
  }
}
const dates = new Map();
for (const row of query(
  `SELECT subject_person_id AS id, predicate,
          json_extract(value_json, '$.date.original_text') AS text
     FROM claim
    WHERE predicate IN ('birth.date', 'death.date') AND status <> 'retracted'`,
  'dates',
)) {
  if (!row.text) continue;
  if (!dates.has(row.id)) dates.set(row.id, new Map());
  dates.get(row.id).set(row.predicate, row.text);
}

findings.likely_duplicate_persons = [];
for (const [folded, group] of byFolded) {
  if (group.length < 2) continue;
  for (let i = 0; i < group.length; i += 1) {
    for (let j = i + 1; j < group.length; j += 1) {
      const [a, b] = [group[i], group[j]];
      const shared = [...(neighbours.get(a.id) ?? [])].filter((n) => neighbours.get(b.id)?.has(n));
      // e.g. both are recorded as the child of the same person
      const da = dates.get(a.id) ?? new Map();
      const db = dates.get(b.id) ?? new Map();
      const sameDate = [...da].some(([k, v]) => db.get(k) === v);
      if (shared.length === 0 && !sameDate) continue;
      findings.likely_duplicate_persons.push({
        folded,
        persons: [a.id, b.id],
        shared_relatives: shared,
        same_dates: sameDate,
      });
    }
  }
}

const byIdentifier = new Map();
for (const p of persons) {
  for (const id of (p.identifiers ?? '').split(',').filter(Boolean)) {
    if (!byIdentifier.has(id)) byIdentifier.set(id, new Set());
    byIdentifier.get(id).add(p.id);
  }
}
// Two records under one identifier is always one person twice. Statuses are
// included because the usual cause is benign: a record suppressed as
// out-of-scope, then legitimately re-created when a 王 relative reached it.
const statusById = new Map(persons.map((p) => [p.id, p.status]));
findings.shared_identifier_persons = [...byIdentifier.entries()]
  .filter(([, ids]) => ids.size > 1)
  .map(([identifier, ids]) => ({
    identifier,
    persons: [...ids].map((id) => ({ id, status: statusById.get(id) })),
    note: [...ids].some((id) => statusById.get(id) === 'suppressed')
      ? '其中有已隐藏记录：多为剪枝残留，公开视图不受影响'
      : '两条都公开：应提合并提案',
  }));

findings.persons_without_name = persons
  .filter((p) => !p.name)
  .map((p) => ({ id: p.id, status: p.status }));

// --- sources ----------------------------------------------------------------

findings.duplicate_sources = query(
  `SELECT external_identifier, canonical_url, COUNT(*) AS n,
          group_concat(id) AS source_ids
     FROM source
    WHERE external_identifier IS NOT NULL
    GROUP BY external_identifier, canonical_url
   HAVING COUNT(*) > 1`,
  'duplicate sources',
);

findings.unused_sources = query(
  `SELECT s.id, s.title FROM source s
    WHERE NOT EXISTS (SELECT 1 FROM claim_source cs WHERE cs.source_id = s.id)`,
  'unused sources',
);

// --- claims -----------------------------------------------------------------

// A public claim must cite at least one supporting source.
findings.unsourced_public_claims = query(
  `SELECT c.id, c.predicate, c.status, c.subject_person_id
     FROM claim c JOIN person p ON p.id = c.subject_person_id
    WHERE p.status = 'active'
      AND c.status IN ('accepted', 'disputed', 'proposed')
      AND NOT EXISTS (
            SELECT 1 FROM claim_source cs
             WHERE cs.claim_id = c.id AND cs.stance = 'supports')`,
  'unsourced public claims',
);

// Unknown is absence of data, not a date claim. Keeping one produces a public
// fact that says only that the source had no fact, contrary to source policy.
findings.unknown_date_claims = query(
  `SELECT c.id, c.predicate, c.subject_person_id,
          json_extract(c.value_json, '$.date.original_text') AS original_text
     FROM claim c JOIN person p ON p.id = c.subject_person_id
    WHERE p.status = 'active'
      AND c.predicate IN ('birth.date', 'death.date')
      AND c.status NOT IN ('retracted', 'superseded')
      AND trim(coalesce(json_extract(c.value_json, '$.date.original_text'), ''))
          IN ('', '不详', '不詳', '?', '？')`,
  'unknown date claims',
);

// A child may be born posthumously, so allow a full year after the parent's
// latest possible death. Larger gaps usually mean two namesakes were joined.
findings.parent_dead_before_child_birth = query(
  `SELECT rel.id AS claim_id,
          (SELECT json_extract(n.value_json, '$.text') FROM claim n
            WHERE n.subject_person_id = rel.subject_person_id
              AND n.predicate = 'name.primary' AND n.status NOT IN ('retracted', 'superseded')
            ORDER BY n.created_at LIMIT 1) AS parent,
          (SELECT json_extract(n.value_json, '$.text') FROM claim n
            WHERE n.subject_person_id = rel.object_person_id
              AND n.predicate = 'name.primary' AND n.status NOT IN ('retracted', 'superseded')
            ORDER BY n.created_at LIMIT 1) AS child,
          json_extract(pd.value_json, '$.date.latest') AS parent_death,
          json_extract(cb.value_json, '$.date.earliest') AS child_birth
     FROM claim rel
     JOIN claim pd ON pd.subject_person_id = rel.subject_person_id
                  AND pd.predicate = 'death.date'
                  AND pd.status = 'accepted'
     JOIN claim cb ON cb.subject_person_id = rel.object_person_id
                  AND cb.predicate = 'birth.date'
                  AND cb.status = 'accepted'
    WHERE rel.predicate = 'kinship.parent_of'
      AND rel.status = 'accepted'
      AND substr(json_extract(pd.value_json, '$.date.latest'), 1, 1) <> '-'
      AND substr(json_extract(cb.value_json, '$.date.earliest'), 1, 1) <> '-'
      AND julianday(json_extract(cb.value_json, '$.date.earliest'))
          - julianday(json_extract(pd.value_json, '$.date.latest')) > 366`,
  'parent died more than one year before child birth',
);

// Two rows for what the model stores once.
findings.mirrored_parent_edges = query(
  `SELECT a.id AS claim_a, b.id AS claim_b, a.subject_person_id, a.object_person_id
     FROM claim a JOIN claim b
       ON a.predicate = 'kinship.parent_of' AND b.predicate = 'kinship.parent_of'
      AND a.subject_person_id = b.object_person_id
      AND a.object_person_id = b.subject_person_id
    WHERE a.id < b.id
      -- A withdrawn claim is not a duplicate: it is the record of one being
      -- cleared up, and counting it keeps a fixed problem on the list forever.
      AND a.status NOT IN ('retracted','superseded')
      AND b.status NOT IN ('retracted','superseded')`,
  'mirrored parent edges',
);

findings.duplicate_spouse_edges = query(
  `SELECT a.id AS claim_a, b.id AS claim_b, a.subject_person_id, a.object_person_id
     FROM claim a JOIN claim b
       ON a.predicate = 'kinship.spouse_of' AND b.predicate = 'kinship.spouse_of'
      AND a.subject_person_id = b.object_person_id
      AND a.object_person_id = b.subject_person_id
    WHERE a.id < b.id
      AND a.status NOT IN ('retracted','superseded')
      AND b.status NOT IN ('retracted','superseded')`,
  'duplicate spouse edges',
);

findings.self_relationships = query(
  `SELECT id, predicate, subject_person_id FROM claim
    WHERE object_person_id = subject_person_id`,
  'self relationships',
);

// --- kinship that contradicts itself ----------------------------------------
//
// Three checks that catch what name-matching gets wrong, and they catch it
// without needing a name: a record that has silently become two people, or a
// sentence read as the wrong relation, shows up as a shape the graph should
// not contain. Name folding cannot see 王栽 and 王裁 as one man; a diamond of
// identical parents and identical children can.

const descent = query(
  `SELECT c.subject_person_id AS a, c.object_person_id AS b
     FROM claim c
     JOIN person pa ON pa.id = c.subject_person_id
     JOIN person pb ON pb.id = c.object_person_id
    WHERE c.predicate = 'kinship.parent_of'
      -- Disputed edges have already been reviewed and intentionally coexist;
      -- structural checks should report unresolved accepted graph defects.
      AND c.status = 'accepted'
      AND pa.status <> 'merged' AND pb.status <> 'merged'`,
  'parent edges',
);
const parentsOf = new Map();
const childrenOf = new Map();
for (const e of descent) {
  if (!parentsOf.has(e.b)) parentsOf.set(e.b, new Set());
  parentsOf.get(e.b).add(e.a);
  if (!childrenOf.has(e.a)) childrenOf.set(e.a, new Set());
  childrenOf.get(e.a).add(e.b);
}
const nameById = new Map(persons.map((p) => [p.id, p.name]));
const both = (a, b) => [...(a ?? [])].filter((x) => b?.has(x));

// Nobody has three parents. A third is a namesake's father who found his way
// onto the wrong record — 王敞 carried four, spanning西汉 to 南朝.
findings.persons_with_three_parents = [...parentsOf.entries()]
  .filter(([, ps]) => ps.size >= 3)
  .map(([id, ps]) => ({
    person_id: id,
    name: nameById.get(id) ?? null,
    parents: [...ps].map((p) => `${nameById.get(p) ?? '?'}@${p}`),
  }));

// Same parents and same children: either one person recorded twice under two
// spellings, or two brothers one of whom has been given the other's family.
findings.same_parent_same_child_pairs = [];
const siblingSets = new Map();
for (const [child, ps] of parentsOf) {
  for (const p of ps) {
    if (!siblingSets.has(p)) siblingSets.set(p, new Set());
    siblingSets.get(p).add(child);
  }
}
const seenPair = new Set();
for (const sibs of siblingSets.values()) {
  const list = [...sibs];
  for (let i = 0; i < list.length; i += 1) {
    for (let j = i + 1; j < list.length; j += 1) {
      const [a, b] = [list[i], list[j]];
      const key = a < b ? `${a}|${b}` : `${b}|${a}`;
      if (seenPair.has(key)) continue;
      const kids = both(childrenOf.get(a), childrenOf.get(b));
      if (kids.length === 0) continue;
      seenPair.add(key);
      findings.same_parent_same_child_pairs.push({
        persons: [`${nameById.get(a) ?? '?'}@${a}`, `${nameById.get(b) ?? '?'}@${b}`],
        shared_parents: both(parentsOf.get(a), parentsOf.get(b)).map((p) => nameById.get(p) ?? p),
        shared_children: kids.map((k) => nameById.get(k) ?? k),
      });
    }
  }
}

// Two parents who are neither married to each other nor siblings. Mostly a
// father and mother whose marriage this database simply has not recorded, so
// this is a REVIEW list, not a defect list — but it is the only check that finds
// a two-parent conflation, and two-parent conflations are the ones that hide:
// 王劭 sat under 王導 in 東晉 and under 王松年 in 隋 at the same time, and no count
// of parents was ever wrong enough to notice.
const spouseOf = new Map();
for (const e of kinship) {
  if (e.predicate !== 'kinship.spouse_of') continue;
  if (!spouseOf.has(e.a)) spouseOf.set(e.a, new Set());
  if (!spouseOf.has(e.b)) spouseOf.set(e.b, new Set());
  spouseOf.get(e.a).add(e.b);
  spouseOf.get(e.b).add(e.a);
}
findings.parents_neither_married_nor_siblings = [];
for (const [child, ps] of parentsOf) {
  if (ps.size < 2) continue;
  const l = [...ps];
  for (let i = 0; i < l.length; i += 1) {
    for (let j = i + 1; j < l.length; j += 1) {
      const [a, b] = [l[i], l[j]];
      if (spouseOf.get(a)?.has(b)) continue;
      if (both(parentsOf.get(a), parentsOf.get(b)).length > 0) continue;
      findings.parents_neither_married_nor_siblings.push({
        person_id: child,
        person: nameById.get(child) ?? null,
        parents: [`${nameById.get(a) ?? '?'}@${a}`, `${nameById.get(b) ?? '?'}@${b}`],
        note: '多为父母未记婚姻关系；也可能是一条记录承载了两位同名者',
      });
    }
  }
}

// A parent who is also, by another path, a grandparent: 「王承祖父王俭、父亲王暕」
// read as two fathers. Also catches a sibling pair read as parent and child,
// since that puts both of them under the same person.
findings.parent_is_also_grandparent = [];
for (const e of descent) {
  for (const mid of parentsOf.get(e.b) ?? []) {
    if (mid === e.a) continue;
    if (!parentsOf.get(mid)?.has(e.a)) continue;
    findings.parent_is_also_grandparent.push({
      edge: `${nameById.get(e.a) ?? '?'} → ${nameById.get(e.b) ?? '?'}`,
      actual_path: `${nameById.get(e.a) ?? '?'} → ${nameById.get(mid) ?? '?'} → ${nameById.get(e.b) ?? '?'}`,
      subject_person_id: e.a,
      object_person_id: e.b,
    });
    break;
  }
}

// A public person linking to a record the reader cannot open.
findings.relationships_to_nonpublic = query(
  `SELECT c.id, c.predicate, c.subject_person_id, c.object_person_id, po.status AS object_status
     FROM claim c
     JOIN person ps ON ps.id = c.subject_person_id
     JOIN person po ON po.id = c.object_person_id
    WHERE c.claim_kind = 'relationship'
      AND c.status NOT IN ('retracted', 'superseded')
      AND ps.status = 'active'
      AND po.status NOT IN ('active', 'merged')`,
  'relationships to non-public persons',
);

// Spouse records are relationship-only by policy: no basic-info claims.
findings.spouse_only_with_property_claims = query(
  `SELECT p.id,
          (SELECT json_extract(c.value_json, '$.text') FROM claim c
             WHERE c.subject_person_id = p.id AND c.predicate = 'name.primary' LIMIT 1) AS name,
          -- Aliases are names, not basic information: a temple name recorded
          -- next to a personal name is fine on a relationship-only record.
          (SELECT group_concat(c2.predicate) FROM claim c2
             WHERE c2.subject_person_id = p.id
               AND c2.claim_kind = 'property'
               AND c2.predicate NOT LIKE 'name.%'
               AND c2.status <> 'retracted') AS extra_claims
     FROM person p
    WHERE EXISTS (SELECT 1 FROM claim s WHERE s.predicate = 'kinship.spouse_of'
                    AND (s.subject_person_id = p.id OR s.object_person_id = p.id))
      AND NOT EXISTS (SELECT 1 FROM claim k WHERE k.predicate = 'kinship.parent_of'
                        AND (k.subject_person_id = p.id OR k.object_person_id = p.id))
      AND EXISTS (SELECT 1 FROM claim c3 WHERE c3.subject_person_id = p.id
                    AND c3.claim_kind = 'property'
                    AND c3.predicate NOT LIKE 'name.%'
                    AND c3.status <> 'retracted')`,
  'spouse-only persons carrying property claims',
);

// Marriages that cross a generation. Wikidata records 功显君 as the spouse of
// 王禁 while also making her the mother of 王莽, whose father 王曼 is 王禁's son —
// so she would be married to her co-parent's father. The import is faithful to
// the source; the source contradicts itself, and that is worth surfacing rather
// than quietly reproducing. Nothing is auto-corrected: a sourced claim is
// disputed by a person, with a reason.
const childrenOfPerson = new Map();
const parentsOfPerson = new Map();
const spousePairs = [];
for (const edge of kinship) {
  if (edge.predicate === 'kinship.spouse_of') {
    spousePairs.push([edge.a, edge.b]);
    continue;
  }
  if (edge.predicate !== 'kinship.parent_of') continue;
  if (!childrenOfPerson.has(edge.a)) childrenOfPerson.set(edge.a, new Set());
  childrenOfPerson.get(edge.a).add(edge.b);
  if (!parentsOfPerson.has(edge.b)) parentsOfPerson.set(edge.b, new Set());
  parentsOfPerson.get(edge.b).add(edge.a);
}

const nameOfPerson = new Map(persons.map((p) => [p.id, p.name]));
findings.spouse_generation_conflicts = [];
for (const [a, b] of spousePairs) {
  for (const [self, spouse] of [
    [a, b],
    [b, a],
  ]) {
    for (const child of childrenOfPerson.get(self) ?? []) {
      for (const coParent of parentsOfPerson.get(child) ?? []) {
        if (coParent === self) continue;
        if (!(parentsOfPerson.get(coParent)?.has(spouse) ?? false)) continue;
        findings.spouse_generation_conflicts.push({
          spouse_pair: [nameOfPerson.get(self) ?? self, nameOfPerson.get(spouse) ?? spouse],
          detail:
            `${nameOfPerson.get(self) ?? self} 与 ${nameOfPerson.get(spouse) ?? spouse} 记为配偶，` +
            `但其子女 ${nameOfPerson.get(child) ?? child} 的另一位家长 ` +
            `${nameOfPerson.get(coParent) ?? coParent} 正是 ${nameOfPerson.get(spouse) ?? spouse} 的子女——相差一代`,
          person_ids: { self, spouse, child, co_parent: coParent },
        });
      }
    }
  }
}

// Duplicates already raised for review, so they are not reported twice as if
// nothing had been done about them.
findings.open_merge_proposals = query(
  `SELECT m.id, m.status, m.source_person_id, m.target_person_id, m.reason
     FROM person_merge_proposal m
    WHERE m.status IN ('proposed', 'reviewing')`,
  'open merge proposals',
);

// --- accounts ---------------------------------------------------------------

findings.users_without_data = query(
  `SELECT u.id, u.display_name, u.role FROM user u
    WHERE NOT EXISTS (SELECT 1 FROM person p WHERE p.created_by_user_id = u.id)
      AND NOT EXISTS (SELECT 1 FROM claim c WHERE c.created_by_user_id = u.id)
      AND NOT EXISTS (SELECT 1 FROM source s WHERE s.created_by_user_id = u.id)
      AND NOT EXISTS (SELECT 1 FROM contribution ct WHERE ct.actor_user_id = u.id)`,
  'users without data',
);

// --- report -----------------------------------------------------------------

const [totals] = query(
  `SELECT (SELECT COUNT(*) FROM person WHERE status = 'active') AS active_persons,
          (SELECT COUNT(*) FROM person WHERE status = 'candidate') AS draft_persons,
          (SELECT COUNT(*) FROM claim) AS claims,
          (SELECT COUNT(*) FROM claim WHERE predicate = 'kinship.parent_of') AS parent_edges,
          (SELECT COUNT(*) FROM claim WHERE predicate = 'kinship.spouse_of') AS spouse_edges,
          (SELECT COUNT(*) FROM source) AS sources,
          (SELECT COUNT(*) FROM claim_source) AS citations`,
  'totals',
);

if (asJson) {
  console.log(JSON.stringify({ totals, findings }, null, 2));
} else {
  console.log('规模:', totals);
  let problems = 0;
  for (const [name, rows] of Object.entries(findings)) {
    if (rows.length === 0) continue;
    problems += rows.length;
    console.log(`\n${name}: ${rows.length}`);
    for (const row of rows.slice(0, 20)) console.log('  ', JSON.stringify(row));
    if (rows.length > 20) console.log(`   … 其余 ${rows.length - 20} 条`);
  }
  console.log(problems === 0 ? '\n无需处理。' : `\n共 ${problems} 项待判断。`);
}
