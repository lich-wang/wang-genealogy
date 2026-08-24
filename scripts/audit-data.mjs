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
const byFolded = new Map();
for (const p of persons) {
  if (!p.name) continue;
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

const byIdentifier = new Map();
for (const p of persons) {
  for (const id of (p.identifiers ?? '').split(',').filter(Boolean)) {
    if (!byIdentifier.has(id)) byIdentifier.set(id, new Set());
    byIdentifier.get(id).add(p.id);
  }
}
findings.shared_identifier_persons = [...byIdentifier.entries()]
  .filter(([, ids]) => ids.size > 1)
  .map(([identifier, ids]) => ({ identifier, person_ids: [...ids] }));

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

// Two rows for what the model stores once.
findings.mirrored_parent_edges = query(
  `SELECT a.id AS claim_a, b.id AS claim_b, a.subject_person_id, a.object_person_id
     FROM claim a JOIN claim b
       ON a.predicate = 'kinship.parent_of' AND b.predicate = 'kinship.parent_of'
      AND a.subject_person_id = b.object_person_id
      AND a.object_person_id = b.subject_person_id
    WHERE a.id < b.id`,
  'mirrored parent edges',
);

findings.duplicate_spouse_edges = query(
  `SELECT a.id AS claim_a, b.id AS claim_b, a.subject_person_id, a.object_person_id
     FROM claim a JOIN claim b
       ON a.predicate = 'kinship.spouse_of' AND b.predicate = 'kinship.spouse_of'
      AND a.subject_person_id = b.object_person_id
      AND a.object_person_id = b.subject_person_id
    WHERE a.id < b.id`,
  'duplicate spouse edges',
);

findings.self_relationships = query(
  `SELECT id, predicate, subject_person_id FROM claim
    WHERE object_person_id = subject_person_id`,
  'self relationships',
);

// A public person linking to a record the reader cannot open.
findings.relationships_to_nonpublic = query(
  `SELECT c.id, c.predicate, c.subject_person_id, c.object_person_id, po.status AS object_status
     FROM claim c
     JOIN person ps ON ps.id = c.subject_person_id
     JOIN person po ON po.id = c.object_person_id
    WHERE c.claim_kind = 'relationship'
      AND ps.status = 'active'
      AND po.status NOT IN ('active', 'merged')`,
  'relationships to non-public persons',
);

// Spouse records are relationship-only by policy: no basic-info claims.
findings.spouse_only_with_property_claims = query(
  `SELECT p.id,
          (SELECT json_extract(c.value_json, '$.text') FROM claim c
             WHERE c.subject_person_id = p.id AND c.predicate = 'name.primary' LIMIT 1) AS name,
          (SELECT group_concat(c2.predicate) FROM claim c2
             WHERE c2.subject_person_id = p.id
               AND c2.claim_kind = 'property'
               AND c2.predicate <> 'name.primary') AS extra_claims
     FROM person p
    WHERE EXISTS (SELECT 1 FROM claim s WHERE s.predicate = 'kinship.spouse_of'
                    AND (s.subject_person_id = p.id OR s.object_person_id = p.id))
      AND NOT EXISTS (SELECT 1 FROM claim k WHERE k.predicate = 'kinship.parent_of'
                        AND (k.subject_person_id = p.id OR k.object_person_id = p.id))
      AND EXISTS (SELECT 1 FROM claim c3 WHERE c3.subject_person_id = p.id
                    AND c3.claim_kind = 'property' AND c3.predicate <> 'name.primary')`,
  'spouse-only persons carrying property claims',
);

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
