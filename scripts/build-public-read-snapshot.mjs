#!/usr/bin/env node

/**
 * Materialize every anonymous read model from a SQLite D1 export.
 *
 * The snapshot deliberately excludes passwords, email hashes, sessions,
 * candidate/suppressed people, and claims involving a non-public person.
 * Authenticated reads and every write continue to use D1.
 *
 * Usage:
 *   node scripts/build-public-read-snapshot.mjs exported.sqlite apps/api/tree-snapshot/public
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const [databaseArg, outputArg] = process.argv.slice(2);
if (!databaseArg || !outputArg) {
  throw new Error('usage: build-public-read-snapshot.mjs <database.sqlite> <output-directory>');
}
const database = resolve(databaseArg);
const output = resolve(outputArg);
if (output === '/' || output.length < 8) throw new Error(`unsafe output directory: ${output}`);

function query(sql) {
  const raw = execFileSync('sqlite3', ['-json', database, sql], {
    encoding: 'utf8',
    maxBuffer: 256 * 1024 * 1024,
  });
  return raw.trim() ? JSON.parse(raw) : [];
}

const people = query(`SELECT * FROM person WHERE status IN ('active','merged') ORDER BY id`);
const publicIds = new Set(people.map((person) => person.id));
const claims = query(`
  SELECT c.* FROM claim c
  JOIN person ps ON ps.id = c.subject_person_id
  LEFT JOIN person po ON po.id = c.object_person_id
  WHERE ps.status IN ('active','merged')
    AND (c.object_person_id IS NULL OR po.status IN ('active','merged'))
  ORDER BY c.created_at, c.id
`).map(mapClaim);
const claimIds = new Set(claims.map((claim) => claim.id));
const sources = query('SELECT * FROM source ORDER BY created_at, id').map(mapSource);
const sourceById = new Map(sources.map((source) => [source.id, source]));
const claimSources = query(`
  SELECT cs.* FROM claim_source cs
  JOIN claim c ON c.id = cs.claim_id
  JOIN person ps ON ps.id = c.subject_person_id
  LEFT JOIN person po ON po.id = c.object_person_id
  WHERE ps.status IN ('active','merged')
    AND (c.object_person_id IS NULL OR po.status IN ('active','merged'))
  ORDER BY cs.created_at, cs.id
`);
const revisions = query(`
  SELECT r.* FROM claim_revision r
  JOIN claim c ON c.id = r.claim_id
  JOIN person ps ON ps.id = c.subject_person_id
  LEFT JOIN person po ON po.id = c.object_person_id
  WHERE ps.status IN ('active','merged')
    AND (c.object_person_id IS NULL OR po.status IN ('active','merged'))
  ORDER BY r.claim_id, r.revision_number
`).map(mapRevision);
const merges = query(`
  SELECT m.* FROM person_merge_proposal m
  JOIN person ps ON ps.id = m.source_person_id
  JOIN person pt ON pt.id = m.target_person_id
  WHERE ps.status IN ('active','merged') AND pt.status IN ('active','merged')
  ORDER BY m.created_at, m.id
`).map(mapMerge);
const contributions = query(`
  SELECT ct.*, u.display_name AS actor_display_name
  FROM contribution ct JOIN user u ON u.id = ct.actor_user_id
  ORDER BY ct.created_at DESC, ct.id DESC
`);

const personById = new Map(people.map((person) => [person.id, mapPerson(person)]));
const claimById = new Map(claims.map((claim) => [claim.id, claim]));
const claimSourcesByClaim = groupBy(claimSources, (row) => row.claim_id);
const revisionsByClaim = groupBy(revisions, (row) => row.claim_id);
const claimsByPerson = new Map(people.map((person) => [person.id, []]));
for (const claim of claims) {
  claimsByPerson.get(claim.subject_person_id)?.push(claim);
  if (claim.object_person_id) claimsByPerson.get(claim.object_person_id)?.push(claim);
}
const mergedInto = groupBy(people.filter((person) => person.status === 'merged'), (person) => person.merged_into_person_id);

const names = new Map(people.map((person) => [person.id, preferredName(person.id)]));
const sourceRecords = new Map();
for (const source of sources) sourceRecords.set(source.id, buildSourceRecord(source));

const personRecords = new Map();
for (const rawPerson of people) {
  const person = mapPerson(rawPerson);
  const summary = buildSummary(person);
  const touching = claimsByPerson.get(person.id) ?? [];
  const touchingIds = new Set(touching.map((claim) => claim.id));
  const history = contributions
    .filter((row) =>
      (row.target_type === 'person' && row.target_id === person.id) ||
      (row.target_type === 'claim' && touchingIds.has(row.target_id)))
    .slice(0, 200)
    .map(stripActorName);
  const linkedSources = unique(touching.flatMap((claim) =>
    (claimSourcesByClaim.get(claim.id) ?? []).map((row) => row.source_id)))
    .map((id) => sourceById.get(id))
    .filter(Boolean);
  const personMerges = merges.filter((merge) => merge.source_person_id === person.id || merge.target_person_id === person.id);
  const exportClaims = [
    ...summary.properties.flatMap((field) => [field.recommended, ...field.alternatives].filter(Boolean)),
    ...summary.relationships.parents,
    ...summary.relationships.children,
    ...summary.relationships.spouses,
    ...summary.relationships.other,
  ];
  personRecords.set(person.id, {
    summary,
    claims: touching,
    history,
    export: {
      person,
      claims: exportClaims,
      sources: linkedSources,
      merge_proposals: personMerges,
      exported_at: new Date().toISOString(),
      format_version: 1,
    },
  });
}

const claimRecords = new Map();
for (const claim of claims) {
  claimRecords.set(claim.id, {
    claim,
    sources: (claimSourcesByClaim.get(claim.id) ?? []).map((row) => {
      const source = sourceById.get(row.source_id);
      return {
        ...row,
        s_title: source?.title ?? null,
        s_source_type: source?.source_type ?? null,
        s_canonical_url: source?.canonical_url ?? null,
      };
    }),
    revisions: revisionsByClaim.get(claim.id) ?? [],
  });
}

const search = people
  .filter((person) => person.status === 'active')
  .map((person) => buildSearchRecord(person))
  .filter((record) => record.search_terms.length > 0)
  .sort((a, b) => a.created_at.localeCompare(b.created_at) || a.id.localeCompare(b.id));
const highlights = buildHighlights();
const changes = buildChanges();
const generatedAt = new Date().toISOString();

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
writeFileSync(resolve(output, 'index.json'), JSON.stringify({
  format_version: 1,
  generated_at: generatedAt,
  highlights,
}));
writeFileSync(resolve(output, 'search.json'), JSON.stringify(search));
writeFileSync(resolve(output, 'source-search.json'), JSON.stringify(sources));
writeFileSync(resolve(output, 'changes.json'), JSON.stringify(changes));
writeShards('persons', personRecords);
writeShards('claims', claimRecords);
writeShards('sources', sourceRecords);
writeShards('merges', new Map(merges.map((proposal) => [proposal.id, { proposal }])));

console.log(JSON.stringify({
  generated_at: generatedAt,
  people: personRecords.size,
  claims: claimRecords.size,
  sources: sourceRecords.size,
  merges: merges.length,
  changes: changes.length,
  files: 4 + shardCount(personRecords) + shardCount(claimRecords) + shardCount(sourceRecords) + shardCount(new Map(merges.map((m) => [m.id, m]))),
}));

function mapPerson(row) {
  return {
    id: row.id,
    status: row.status,
    merged_into_person_id: row.merged_into_person_id ?? null,
    created_by_user_id: row.created_by_user_id,
    created_at: row.created_at,
    updated_at: row.updated_at,
    current_revision: Number(row.current_revision),
  };
}

function mapClaim(row) {
  return {
    id: row.id,
    subject_person_id: row.subject_person_id,
    claim_kind: row.claim_kind,
    predicate: row.predicate,
    object_person_id: row.object_person_id ?? null,
    generation_count: row.generation_count == null ? null : Number(row.generation_count),
    parent_role: parentRoleForPredicate(row.predicate),
    value_json: parseJson(row.value_json),
    status: row.status,
    confidence: row.confidence,
    created_by_user_id: row.created_by_user_id,
    created_at: row.created_at,
    updated_at: row.updated_at,
    current_revision: Number(row.current_revision),
  };
}

function parentRoleForPredicate(predicate) {
  if (predicate === 'kinship.father_of' || predicate === 'kinship.adoptive_father_of') return 'father';
  if (predicate === 'kinship.mother_of' || predicate === 'kinship.adoptive_mother_of') return 'mother';
  return null;
}

function mapSource(row) {
  return {
    id: row.id,
    source_type: row.source_type,
    title: row.title,
    creator: row.creator ?? null,
    publisher: row.publisher ?? null,
    published_at_text: row.published_at_text ?? null,
    canonical_url: row.canonical_url ?? null,
    external_identifier: row.external_identifier ?? null,
    license_code: row.license_code,
    accessed_at: row.accessed_at ?? null,
    metadata_json: parseJson(row.metadata_json),
    created_by_user_id: row.created_by_user_id,
    created_at: row.created_at,
  };
}

function mapRevision(row) {
  return {
    id: row.id,
    claim_id: row.claim_id,
    revision_number: Number(row.revision_number),
    snapshot_json: parseJson(row.snapshot_json),
    change_summary: row.change_summary ?? null,
    created_by_user_id: row.created_by_user_id,
    created_at: row.created_at,
    reverts_revision_id: row.reverts_revision_id ?? null,
  };
}

function mapMerge(row) {
  return {
    id: row.id,
    source_person_id: row.source_person_id,
    target_person_id: row.target_person_id,
    status: row.status,
    reason: row.reason ?? null,
    created_by_user_id: row.created_by_user_id,
    approved_by_user_id: row.approved_by_user_id ?? null,
    created_at: row.created_at,
    resolved_at: row.resolved_at ?? null,
    merge_snapshot_json: parseJson(row.merge_snapshot_json),
  };
}

function parseJson(value) {
  if (value == null || value === '') return null;
  return JSON.parse(value);
}

function groupBy(rows, keyOf) {
  const result = new Map();
  for (const row of rows) {
    const key = keyOf(row);
    if (key == null) continue;
    result.set(key, [...(result.get(key) ?? []), row]);
  }
  return result;
}

function preferredName(personId) {
  const candidates = claims
    .filter((claim) => claim.subject_person_id === personId && claim.predicate === 'name.primary' && ['accepted', 'proposed'].includes(claim.status))
    .sort((a, b) =>
      Number(b.status === 'accepted') - Number(a.status === 'accepted') ||
      confidenceRank(b.confidence) - confidenceRank(a.confidence) ||
      b.updated_at.localeCompare(a.updated_at));
  return candidates[0]?.value_json?.text ?? null;
}

function sourcesForClaim(claimId) {
  return (claimSourcesByClaim.get(claimId) ?? []).map((row) => ({
    ...row,
    source: sourceById.get(row.source_id) ?? null,
  }));
}

function claimWithSources(claim, counterpartId = claim.object_person_id) {
  return {
    claim,
    sources: sourcesForClaim(claim.id),
    object_person: counterpartId ? personLite(counterpartId) : null,
  };
}

function personLite(id) {
  const person = personById.get(id);
  if (!person) return null;
  return { id, status: person.status, display_name: names.get(id) ?? null, merged_into_person_id: null };
}

function buildSummary(person) {
  const ownerIds = new Set([person.id, ...(mergedInto.get(person.id) ?? []).map((row) => row.id)]);
  const relevant = claims.filter((claim) =>
    !['retracted', 'superseded'].includes(claim.status) &&
    (ownerIds.has(claim.subject_person_id) || (claim.object_person_id && ownerIds.has(claim.object_person_id))));
  const propertiesByPredicate = new Map();
  const relationships = {
    parents: [], children: [], adoptive_parents: [], adoptive_children: [], spouses: [],
    ancestors: [], descendants: [], other: [],
  };
  for (const claim of relevant) {
    if (claim.claim_kind === 'property') {
      if (!ownerIds.has(claim.subject_person_id)) continue;
      propertiesByPredicate.set(claim.predicate, [...(propertiesByPredicate.get(claim.predicate) ?? []), claimWithSources(claim)]);
      continue;
    }
    const subjectIsOwner = ownerIds.has(claim.subject_person_id);
    const counterpart = subjectIsOwner ? claim.object_person_id : claim.subject_person_id;
    const item = claimWithSources(claim, counterpart);
    if (['kinship.parent_of', 'kinship.father_of', 'kinship.mother_of'].includes(claim.predicate)) relationships[subjectIsOwner ? 'children' : 'parents'].push(item);
    else if (['kinship.adoptive_parent_of', 'kinship.adoptive_father_of', 'kinship.adoptive_mother_of'].includes(claim.predicate)) relationships[subjectIsOwner ? 'adoptive_children' : 'adoptive_parents'].push(item);
    else if (claim.predicate === 'kinship.ancestor_of') relationships[subjectIsOwner ? 'descendants' : 'ancestors'].push(item);
    else if (claim.predicate === 'kinship.spouse_of') relationships.spouses.push(item);
    else relationships.other.push(item);
  }
  const properties = [...propertiesByPredicate].map(([predicate, items]) => {
    items.sort(rankClaimWithSources);
    const recommended = items.find((item) => item.claim.status === 'accepted') ?? null;
    return { predicate, recommended, alternatives: items.filter((item) => item !== recommended) };
  }).sort((a, b) => a.predicate.localeCompare(b.predicate));
  const nameField = properties.find((field) => field.predicate === 'name.primary');
  return {
    person,
    redirect_to_person_id: person.status === 'merged' ? person.merged_into_person_id : null,
    display_name: nameField?.recommended?.claim.value_json?.text ?? nameField?.alternatives[0]?.claim.value_json?.text ?? names.get(person.id) ?? null,
    properties,
    relationships,
    current_revision: person.current_revision,
  };
}

function rankClaimWithSources(a, b) {
  const supports = (item) => new Set(item.sources.filter((source) => source.stance === 'supports').map((source) => source.source_id)).size;
  return supports(b) - supports(a) || confidenceRank(b.claim.confidence) - confidenceRank(a.claim.confidence) || b.claim.updated_at.localeCompare(a.claim.updated_at);
}

function confidenceRank(value) {
  return ({ unknown: 0, low: 1, medium: 2, high: 3 })[value] ?? 0;
}

function buildSearchRecord(person) {
  const own = claims.filter((claim) => claim.subject_person_id === person.id && ['accepted', 'disputed'].includes(claim.status));
  const searchTerms = own.filter((claim) => claim.predicate.startsWith('name.')).map((claim) => claim.value_json?.text).filter(Boolean);
  const detailClaims = own.filter((claim) => [
    'birth.date', 'death.date', 'place.origin', 'lineage.branch',
    'name.alias', 'name.courtesy', 'name.pseudonym', 'name.genealogical',
  ].includes(claim.predicate)).sort((a, b) =>
    a.predicate.localeCompare(b.predicate) ||
    Number(b.status === 'accepted') - Number(a.status === 'accepted') ||
    confidenceRank(b.confidence) - confidenceRank(a.confidence) ||
    b.updated_at.localeCompare(a.updated_at));
  const chosen = new Set();
  const detail = { birth_text: null, death_text: null, origin_text: null, branch_text: null, also_known_as: [] };
  for (const claim of detailClaims) {
    const text = claim.value_json?.text ?? claim.value_json?.date?.original_text ?? null;
    if (!text) continue;
    if (claim.predicate.startsWith('name.')) {
      if (!detail.also_known_as.includes(text)) detail.also_known_as.push(text);
      continue;
    }
    if (chosen.has(claim.predicate)) continue;
    chosen.add(claim.predicate);
    if (claim.predicate === 'birth.date') detail.birth_text = text;
    if (claim.predicate === 'death.date') detail.death_text = text;
    if (claim.predicate === 'place.origin') detail.origin_text = text;
    if (claim.predicate === 'lineage.branch') detail.branch_text = text;
  }
  const relativeCount = (claimsByPerson.get(person.id) ?? []).filter((claim) =>
    claim.claim_kind === 'relationship' && !['retracted', 'superseded'].includes(claim.status)).length;
  return {
    id: person.id,
    status: person.status,
    display_name: names.get(person.id) ?? null,
    merged_into_person_id: null,
    ...detail,
    relative_count: relativeCount,
    created_at: person.created_at,
    search_terms: unique(searchTerms),
  };
}

function buildHighlights() {
  const progenitors = new Set(['姬晋','姬晉','太子晋','太子晉','王子乔','王子喬','王子晋','王子晉','毕公高','畢公高']);
  return people.filter((person) => person.status === 'active').map((person) => {
    const nameClaims = claims.filter((claim) => claim.subject_person_id === person.id && claim.predicate.startsWith('name.') && !['retracted','superseded'].includes(claim.status));
    const recordedNames = nameClaims.map((claim) => claim.value_json?.text).filter(Boolean);
    const rank = recordedNames.some((name) => progenitors.has(name)) ? 0 : recordedNames.includes('宗敬') ? 1 : 2;
    const relativeCount = (claimsByPerson.get(person.id) ?? []).filter((claim) => claim.claim_kind === 'relationship' && !['retracted','superseded'].includes(claim.status)).length;
    return { id: person.id, display_name: names.get(person.id) ?? null, relative_count: relativeCount, is_surname_progenitor: rank < 2, rank, created_at: person.created_at };
  }).filter((person) => person.relative_count > 0)
    .sort((a, b) => a.rank - b.rank || b.relative_count - a.relative_count || a.created_at.localeCompare(b.created_at))
    .slice(0, 24)
    .map(({ rank, created_at, ...item }) => item);
}

function buildChanges() {
  const result = [];
  for (const row of contributions) {
    let personId = null;
    if (row.target_type === 'person') personId = publicIds.has(row.target_id) ? row.target_id : null;
    if (row.target_type === 'claim') personId = claimById.get(row.target_id)?.subject_person_id ?? null;
    if ((row.target_type === 'person' || row.target_type === 'claim') && !personId) continue;
    result.push({
      contribution_id: row.id,
      action: row.action,
      actor_display_name: row.actor_display_name,
      target_type: row.target_type,
      target_id: row.target_id,
      subject_person_id: personId,
      target_display_name: personId ? names.get(personId) ?? null : null,
      change_summary: row.change_summary ?? null,
      created_at: row.created_at,
    });
  }
  return result;
}

function buildSourceRecord(source) {
  const citations = claimSources.filter((row) => row.source_id === source.id);
  const items = [];
  for (const citation of citations) {
    const claim = claimById.get(citation.claim_id);
    if (!claim || claim.status === 'retracted') continue;
    items.push({
      claim,
      sources: sourcesForClaim(claim.id),
      object_person: claim.object_person_id ? personLite(claim.object_person_id) : null,
      stance: citation.stance,
      locator: citation.locator ?? null,
      quotation: citation.quotation ?? null,
    });
  }
  return { source, claims: items };
}

function stripActorName(row) {
  const { actor_display_name: _actorDisplayName, ...contribution } = row;
  return contribution;
}

function unique(values) {
  return [...new Set(values)];
}

function bucketName(id) {
  const marker = id.indexOf('_');
  const char = id[marker + 1] ?? '_';
  return char.charCodeAt(0).toString(16).padStart(2, '0');
}

function bucketize(records) {
  const buckets = new Map();
  for (const [id, record] of records) {
    const bucket = bucketName(id);
    buckets.set(bucket, { ...(buckets.get(bucket) ?? {}), [id]: record });
  }
  return buckets;
}

function writeShards(kind, records) {
  for (const [bucket, data] of bucketize(records)) {
    writeFileSync(resolve(output, `${kind}-${bucket}.json`), JSON.stringify(data));
  }
}

function shardCount(records) {
  return bucketize(records).size;
}
