#!/usr/bin/env node

/**
 * Find public people with more than one accepted parent whose recorded name
 * begins with 王, and print enough local evidence to distinguish a real
 * same-surname parental pair from a namesake merge or a misattached edge.
 *
 * This is deliberately an offline audit: it reads one SQLite D1 export and
 * never calls the live API.
 *
 * Usage: node scripts/audit-multiple-wang-parents.mjs exported.sqlite [--json]
 */
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const args = process.argv.slice(2);
const databaseArg = args.find((arg) => !arg.startsWith('--'));
if (!databaseArg) throw new Error('usage: audit-multiple-wang-parents.mjs <exported.sqlite> [--json]');
const database = resolve(databaseArg);
const asJson = args.includes('--json');

function query(sql) {
  const raw = execFileSync('sqlite3', ['-json', database, sql], {
    encoding: 'utf8',
    maxBuffer: 128 * 1024 * 1024,
  });
  return raw.trim() ? JSON.parse(raw) : [];
}

const people = query("SELECT * FROM person WHERE status = 'active' ORDER BY id");
const publicIds = new Set(people.map((person) => person.id));
const claims = query(`
  SELECT * FROM claim
   WHERE status NOT IN ('retracted', 'superseded')
   ORDER BY created_at, id
`).map((claim) => ({
  ...claim,
  value_json: claim.value_json ? JSON.parse(claim.value_json) : null,
  current_revision: Number(claim.current_revision),
}));
const citations = query(`
  SELECT cs.*, s.title AS source_title, s.source_type, s.canonical_url,
         s.external_identifier
    FROM claim_source cs
    JOIN source s ON s.id = cs.source_id
   ORDER BY cs.claim_id, cs.id
`);

const citationsByClaim = groupBy(citations, (citation) => citation.claim_id);
const claimsBySubject = groupBy(claims, (claim) => claim.subject_person_id);
const names = new Map(people.map((person) => [person.id, preferredName(person.id)]));

const parentClaims = claims.filter((claim) =>
  claim.status === 'accepted' &&
  ['kinship.parent_of', 'kinship.father_of', 'kinship.mother_of'].includes(claim.predicate) &&
  publicIds.has(claim.subject_person_id) &&
  publicIds.has(claim.object_person_id) &&
  (names.get(claim.subject_person_id) ?? '').startsWith('王'));
const parentsByChild = groupBy(parentClaims, (claim) => claim.object_person_id);

const cases = [];
for (const [childId, edges] of parentsByChild) {
  const parentIds = new Set(edges.map((edge) => edge.subject_person_id));
  if (parentIds.size < 2) continue;
  const relatedEdges = claims.filter((claim) =>
    claim.claim_kind === 'relationship' &&
    claim.status === 'accepted' &&
    (claim.subject_person_id === childId || claim.object_person_id === childId));
  cases.push({
    child: personRecord(childId),
    parents: edges.map((edge) => ({
      person: personRecord(edge.subject_person_id),
      edge: claimRecord(edge),
    })),
    relationships: relatedEdges.map((claim) => claimRecord(claim)),
  });
}
cases.sort((a, b) => (a.child.name ?? '').localeCompare(b.child.name ?? '', 'zh-Hans'));

if (asJson) {
  console.log(JSON.stringify({ total: cases.length, cases }, null, 2));
} else {
  console.log(`多个王姓父母：${cases.length} 人`);
  for (const item of cases) {
    console.log(`\n${item.child.name} ${item.child.id} ${item.child.dates}`);
    for (const parent of item.parents) {
      const locators = parent.edge.sources.map((source) => source.locator).filter(Boolean).join('、');
      console.log(`  ← ${parent.person.name} ${parent.person.dates} ${parent.edge.claim_id}｜${locators}`);
    }
    const children = item.relationships
      .filter((edge) => edge.subject_person_id === item.child.id && edge.object_person_id)
      .map((edge) => `${names.get(edge.object_person_id) ?? edge.object_person_id}@${edge.claim_id}`);
    if (children.length) console.log(`  子女：${children.join('、')}`);
  }
}

function preferredName(personId) {
  return (claimsBySubject.get(personId) ?? [])
    .filter((claim) => claim.predicate === 'name.primary' && ['accepted', 'proposed'].includes(claim.status))
    .sort((a, b) =>
      Number(b.status === 'accepted') - Number(a.status === 'accepted') ||
      b.current_revision - a.current_revision ||
      b.updated_at.localeCompare(a.updated_at))[0]?.value_json?.text ?? null;
}

function personRecord(id) {
  const own = claimsBySubject.get(id) ?? [];
  const property = (predicate) => own
    .filter((claim) => claim.predicate === predicate && claim.status === 'accepted')
    .sort((a, b) => b.updated_at.localeCompare(a.updated_at))[0] ?? null;
  const birth = property('birth.date')?.value_json?.date?.original_text ?? null;
  const death = property('death.date')?.value_json?.date?.original_text ?? null;
  const nameClaims = own.filter((claim) => claim.predicate.startsWith('name.') && claim.status === 'accepted');
  const identifiers = [...new Set(nameClaims.flatMap((claim) =>
    (citationsByClaim.get(claim.id) ?? []).flatMap((citation) =>
      [citation.external_identifier, citation.canonical_url].filter(Boolean))))];
  return {
    id,
    name: names.get(id) ?? null,
    dates: `${birth ?? '?'}—${death ?? '?'}`,
    bio: property('bio.summary')?.value_json?.text ?? null,
    aliases: nameClaims
      .filter((claim) => claim.predicate !== 'name.primary')
      .map((claim) => claim.value_json?.text)
      .filter(Boolean),
    identifiers,
  };
}

function claimRecord(claim) {
  return {
    claim_id: claim.id,
    subject_person_id: claim.subject_person_id,
    subject_name: names.get(claim.subject_person_id) ?? null,
    object_person_id: claim.object_person_id,
    object_name: claim.object_person_id ? names.get(claim.object_person_id) ?? null : null,
    predicate: claim.predicate,
    status: claim.status,
    current_revision: claim.current_revision,
    sources: (citationsByClaim.get(claim.id) ?? [])
      .filter((citation) => citation.stance === 'supports')
      .map((citation) => ({
        source_id: citation.source_id,
        source_title: citation.source_title,
        source_type: citation.source_type,
        locator: citation.locator ?? null,
        quotation: citation.quotation ?? null,
        canonical_url: citation.canonical_url ?? null,
        external_identifier: citation.external_identifier ?? null,
      })),
  };
}

function groupBy(rows, keyOf) {
  const grouped = new Map();
  for (const row of rows) {
    const key = keyOf(row);
    if (key == null) continue;
    grouped.set(key, [...(grouped.get(key) ?? []), row]);
  }
  return grouped;
}
