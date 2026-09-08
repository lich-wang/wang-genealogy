#!/usr/bin/env node

/**
 * Materialize the final, reviewed kinship plan in the Git/Markdown store.
 *
 * The plan predates the repository's D1 → Markdown migration. It has already
 * been reviewed edge by edge, but none of its relationships reached the
 * authoritative content directory. This bridge keeps that review intact while
 * enforcing the current storage boundary and Markdown invariants.
 *
 * Default mode is a read-only dry run. Use --apply to write. A second --apply
 * is a zero-write no-op because identities resolve only through stable QID or
 * CBDB identifiers and relationships resolve through endpoint pairs.
 */
import { randomBytes } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { generateId } from '../packages/domain/src/id.ts';
import { foldKey } from '../packages/i18n/src/script.ts';
import { formatPersonRecordMarkdown, parsePersonMarkdown } from './lib/person-markdown.mjs';
import { isWangScopeName } from './lib/scope.mjs';

const args = process.argv.slice(2);
const apply = args.includes('--apply');
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const contentDir = resolve(option('--content', 'content/persons'));
const planPath = resolve(option('--plan', 'scripts/kinship-round3-final-approved-plan-2026-09.json'));
const reviewedAt = '2026-09-05T08:06:50.055Z';
const plan = JSON.parse(readFileSync(planPath, 'utf8'));

if (plan.review?.accepted !== plan.edges.length || plan.review?.manual_review !== 0) {
  throw new Error('只允许迁移人工待查为零、且 accepted 数量与边数一致的最终审核计划');
}

const newId = (entity) => generateId(entity, (length) => randomBytes(length));
const records = new Map();
const paths = new Map();
const identityIds = new Map();
const sourcesByExternal = new Map();
const sourcesByUrl = new Map();
const sourcesById = new Map();

const addIdentity = (identifier, personId) => {
  if (!identifier) return;
  const ids = identityIds.get(identifier) ?? new Set();
  ids.add(personId);
  identityIds.set(identifier, ids);
};
const noteSource = (source) => {
  if (!source?.id) return;
  sourcesById.set(source.id, source);
  if (source.external_identifier && !sourcesByExternal.has(source.external_identifier)) {
    sourcesByExternal.set(source.external_identifier, source);
  }
  if (source.canonical_url && !sourcesByUrl.has(source.canonical_url)) {
    sourcesByUrl.set(source.canonical_url, source);
  }
};

for (const filename of readdirSync(contentDir).filter((name) => name.endsWith('.md')).sort()) {
  const path = resolve(contentDir, filename);
  const record = parsePersonMarkdown(readFileSync(path, 'utf8'), path);
  records.set(record.id, record);
  paths.set(record.id, path);
  for (const field of record.properties ?? []) {
    for (const item of [field.recommended, ...(field.alternatives ?? [])].filter(Boolean)) {
      for (const ref of item.sources ?? []) noteSource(ref.source);
      if (field.predicate !== 'name.primary' || !['accepted', 'disputed', 'proposed'].includes(item.claim.status)) continue;
      for (const ref of item.sources ?? []) addIdentity(ref.source?.external_identifier, record.id);
    }
  }
  for (const item of Object.values(record.relationships ?? {}).flat()) {
    for (const ref of item.sources ?? []) noteSource(ref.source);
  }
}

const personPlanByKey = new Map(plan.persons.map((person) => [person.key, person]));
const sourcePlanByKey = new Map(plan.sources.map((source) => [source.key, source]));
const plannedPersonIds = new Map();
const plannedSourceIds = new Map();
const newPersonIds = new Set();
const touchedExisting = new Set();

const identifiersFor = (key, personPlan) => [
  key?.startsWith('wd:') ? key.slice(3) : null,
  key?.startsWith('cbdb:') ? `CBDB:${key.slice(5)}` : null,
  personPlan?.qid ?? null,
  personPlan?.cbdb ? `CBDB:${String(personPlan.cbdb).replace(/^0+/, '')}` : null,
].filter(Boolean);

function resolvePerson(key, explicitId = null, expectedName = null) {
  if (explicitId) {
    const record = records.get(explicitId);
    if (!record) throw new Error(`${key}: 审核计划引用的人物不存在 ${explicitId}`);
    if (expectedName && foldKey(record.display_name) !== foldKey(expectedName)) {
      throw new Error(`${key}: 稳定 ID ${explicitId} 的姓名为“${record.display_name}”，计划写作“${expectedName}”`);
    }
    plannedPersonIds.set(key, explicitId);
    return explicitId;
  }
  if (plannedPersonIds.has(key)) return plannedPersonIds.get(key);
  const personPlan = personPlanByKey.get(key);
  const matched = new Set(
    identifiersFor(key, personPlan).flatMap((identifier) => [...(identityIds.get(identifier) ?? [])]),
  );
  if (matched.size > 1) throw new Error(`${key}: 稳定外部标识指向多个人物 ${[...matched].join('、')}`);
  if (matched.size === 1) {
    const id = [...matched][0];
    if (expectedName && foldKey(records.get(id).display_name) !== foldKey(expectedName)) {
      throw new Error(`${key}: 外部标识命中的姓名与计划不符`);
    }
    plannedPersonIds.set(key, id);
    return id;
  }
  if (!personPlan) throw new Error(`${key}: 缺少待建人物计划，不能按姓名猜测身份`);
  const id = newId('person');
  plannedPersonIds.set(key, id);
  newPersonIds.add(id);
  return id;
}

function materializeSource(key) {
  if (plannedSourceIds.has(key)) return plannedSourceIds.get(key);
  const input = sourcePlanByKey.get(key);
  if (!input) throw new Error(`${key}: 审核计划缺少来源`);
  const existing =
    (input.external_identifier ? sourcesByExternal.get(input.external_identifier) : null) ??
    (input.canonical_url ? sourcesByUrl.get(input.canonical_url) : null);
  const source = existing ?? {
    id: newId('source'),
    source_type: input.source_type,
    title: input.title,
    creator: input.creator ?? null,
    publisher: input.publisher ?? null,
    published_at_text: input.published_at_text ?? null,
    canonical_url: input.canonical_url ?? null,
    external_identifier: input.external_identifier ?? null,
    license_code: input.license_code ?? null,
    accessed_at: input.accessed_at ?? reviewedAt,
    metadata_json: input.metadata_json ?? null,
  };
  noteSource(source);
  plannedSourceIds.set(key, source);
  return source;
}

function propertyLocator(predicate, source) {
  if (source.source_type !== 'api_record') return null;
  if (source.external_identifier?.startsWith('Q')) {
    if (predicate === 'birth.date') return 'P569（出生日期）';
    if (predicate === 'death.date') return 'P570（死亡日期）';
    return predicate === 'name.primary' ? source.external_identifier : null;
  }
  return predicate === 'name.primary' ? source.external_identifier : null;
}

function claimSources(claimId, sourceKeys) {
  return [...new Set(sourceKeys)].map((key) => {
    const source = materializeSource(key);
    return {
      id: newId('claimSource'),
      claim_id: claimId,
      source_id: source.id,
      stance: 'supports',
      locator: null,
      quotation: null,
      interpretation_note: null,
      source,
    };
  });
}

function createPersonRecord(personPlan, id) {
  const properties = personPlan.claims.map((input) => {
    const claimId = newId('claim');
    const sources = claimSources(claimId, input.source_keys).map((ref) => ({
      ...ref,
      locator: propertyLocator(input.predicate, ref.source),
      interpretation_note: input.change_summary ?? null,
    }));
    return {
      predicate: input.predicate,
      recommended: {
        claim: {
          id: claimId,
          subject_person_id: id,
          claim_kind: 'property',
          predicate: input.predicate,
          object_person_id: null,
          generation_count: null,
          parent_role: null,
          value_json: input.value,
          status: 'accepted',
          confidence: input.confidence ?? 'medium',
          current_revision: 1,
        },
        sources,
        object_person: null,
      },
      alternatives: [],
    };
  });
  return {
    schema: 'wang-person/v1',
    id,
    status: 'active',
    merged_into: null,
    display_name: personPlan.name.text,
    revision: 1,
    properties,
    relationships: {
      parents: [], children: [], adoptive_parents: [], adoptive_children: [],
      spouses: [], ancestors: [], descendants: [], other: [],
    },
  };
}

// Resolve every endpoint before creating anything. A plan identity is reused
// only through its QID/CBDB id; an equal display name is never enough.
const resolvedEdges = plan.edges.map((edge) => {
  if (edge.kind === 'spouse') {
    const a = resolvePerson(edge.a_key, edge.a_person_id, edge.a_name);
    const b = resolvePerson(edge.b_key, edge.b_person_id, edge.b_name);
    return { edge, a, b };
  }
  const a = resolvePerson(edge.parent_key, edge.parent_person_id, edge.parent_name);
  const b = resolvePerson(edge.child_key, edge.child_person_id, edge.child_name);
  return { edge, a, b };
});

for (const [key, id] of plannedPersonIds) {
  if (!newPersonIds.has(id)) continue;
  const personPlan = personPlanByKey.get(key);
  if (!personPlan) throw new Error(`${key}: 无法建立缺少计划的人物`);
  const record = createPersonRecord(personPlan, id);
  records.set(id, record);
  paths.set(id, resolve(contentDir, `${id}.md`));
  for (const identifier of identifiersFor(key, personPlan)) addIdentity(identifier, id);
}

const FATHER = /P22|父親|父亲|生父|養父|养父|嫡父|親父|亲父|[（(]父[）)]/;
const MOTHER = /P25|母親|母亲|生母|養母|养母|嫡母|親母|亲母|[（(]母[）)]/;
function parentRole(citations) {
  const locators = citations.map((citation) => citation.locator ?? '').join('\n');
  const father = FATHER.test(locators);
  const mother = MOTHER.test(locators);
  return father === mother ? null : father ? 'father' : 'mother';
}

function relationshipKey(kind, a, b) {
  return kind === 'spouse' ? `spouse|${[a, b].sort().join('|')}` : `${kind}|${a}|${b}`;
}
const existingRelationships = new Set();
const directedChildren = new Map();
const biologicalParents = new Map();
const addDirected = (a, b) => directedChildren.set(a, (directedChildren.get(a) ?? new Set()).add(b));
for (const record of records.values()) {
  for (const item of Object.values(record.relationships).flat()) {
    const claim = item.claim;
    if (['retracted', 'superseded'].includes(claim.status)) continue;
    if (claim.predicate === 'kinship.spouse_of') {
      existingRelationships.add(relationshipKey('spouse', claim.subject_person_id, claim.object_person_id));
    } else if (claim.predicate === 'kinship.ancestor_of') {
      addDirected(claim.subject_person_id, claim.object_person_id);
    } else if (claim.predicate.includes('adoptive')) {
      existingRelationships.add(relationshipKey('adoptive_parent', claim.subject_person_id, claim.object_person_id));
      addDirected(claim.subject_person_id, claim.object_person_id);
    } else if (/(?:parent|father|mother)_of$/.test(claim.predicate)) {
      existingRelationships.add(relationshipKey('parent', claim.subject_person_id, claim.object_person_id));
      addDirected(claim.subject_person_id, claim.object_person_id);
      biologicalParents.set(
        claim.object_person_id,
        (biologicalParents.get(claim.object_person_id) ?? new Set()).add(claim.subject_person_id),
      );
    }
  }
}

function reaches(start, target) {
  const seen = new Set([start]);
  const queue = [start];
  for (const id of queue) {
    if (id === target) return true;
    for (const next of directedChildren.get(id) ?? []) {
      if (!seen.has(next)) { seen.add(next); queue.push(next); }
    }
  }
  return false;
}

function relationshipSources(claimId, citations) {
  const merged = new Map();
  for (const citation of citations) {
    const prior = merged.get(citation.source_key) ?? {};
    merged.set(citation.source_key, {
      locator: [...new Set([prior.locator, citation.locator].filter(Boolean))].join(' / ') || null,
      quotation: [...new Set([prior.quotation, citation.quotation].filter(Boolean))].join('\n').slice(0, 2000) || null,
      interpretation_note: [...new Set([
        prior.interpretation_note, prior.note, citation.interpretation_note, citation.note,
      ].filter(Boolean))].join('；').slice(0, 2000) || null,
    });
  }
  return [...merged].map(([key, citation]) => {
    const source = materializeSource(key);
    return {
      id: newId('claimSource'), claim_id: claimId, source_id: source.id,
      stance: 'supports', ...citation, source,
    };
  });
}

function addItem(record, group, item) {
  record.relationships[group].push(item);
  if (!newPersonIds.has(record.id)) touchedExisting.add(record.id);
}

let createdRelationships = 0;
let skippedExisting = 0;
for (const { edge, a: rawA, b: rawB } of resolvedEdges) {
  let a = rawA;
  let b = rawB;
  if (edge.kind === 'spouse' && a.localeCompare(b) > 0) [a, b] = [b, a];
  if (a === b) throw new Error(`${edge.kind}: 审核边指向自身 ${a}`);
  const aRecord = records.get(a);
  const bRecord = records.get(b);
  if (edge.kind === 'spouse') {
    if (![aRecord.display_name, bRecord.display_name].some(isWangScopeName)) {
      throw new Error(`配偶关系两端均不在王姓范围：${aRecord.display_name}、${bRecord.display_name}`);
    }
  } else if (![aRecord.display_name, bRecord.display_name].every(isWangScopeName)) {
    throw new Error(`世系关系越出王姓范围：${aRecord.display_name}、${bRecord.display_name}`);
  }
  const key = relationshipKey(edge.kind, a, b);
  if (existingRelationships.has(key)) { skippedExisting += 1; continue; }
  if (edge.kind !== 'spouse' && reaches(b, a)) {
    throw new Error(`新增关系会形成环：${aRecord.display_name} → ${bRecord.display_name}`);
  }
  if (edge.kind === 'parent') {
    const parents = biologicalParents.get(b) ?? new Set();
    if (!parents.has(a) && parents.size >= 2) {
      throw new Error(`${bRecord.display_name} 已有两位父母，不能自动增加 ${aRecord.display_name}`);
    }
    parents.add(a);
    biologicalParents.set(b, parents);
  }

  const role = edge.kind === 'parent' ? parentRole(edge.citations) : null;
  const predicate = edge.kind === 'spouse'
    ? 'kinship.spouse_of'
    : edge.kind === 'adoptive_parent'
      ? 'kinship.adoptive_parent_of'
      : role === 'father'
        ? 'kinship.father_of'
        : role === 'mother'
          ? 'kinship.mother_of'
          : 'kinship.parent_of';
  const claimId = newId('claim');
  const claim = {
    id: claimId,
    subject_person_id: a,
    claim_kind: 'relationship',
    predicate,
    object_person_id: b,
    generation_count: null,
    parent_role: role,
    value_json: null,
    status: 'accepted',
    confidence: 'medium',
    current_revision: 1,
  };
  const sources = relationshipSources(claimId, edge.citations);
  const itemFor = (other) => ({
    claim,
    sources,
    object_person: {
      id: other.id, status: other.status, display_name: other.display_name,
      merged_into_person_id: other.merged_into ?? null,
    },
  });
  if (edge.kind === 'spouse') {
    addItem(aRecord, 'spouses', itemFor(bRecord));
    addItem(bRecord, 'spouses', itemFor(aRecord));
  } else if (edge.kind === 'adoptive_parent') {
    addItem(aRecord, 'adoptive_children', itemFor(bRecord));
    addItem(bRecord, 'adoptive_parents', itemFor(aRecord));
    addDirected(a, b);
  } else {
    addItem(aRecord, 'children', itemFor(bRecord));
    addItem(bRecord, 'parents', itemFor(aRecord));
    addDirected(a, b);
  }
  existingRelationships.add(key);
  createdRelationships += 1;
}

for (const id of touchedExisting) records.get(id).revision = Number(records.get(id).revision ?? 0) + 1;

const modifiedIds = new Set([...newPersonIds, ...touchedExisting]);
let changedFiles = 0;
for (const id of modifiedIds) {
  const path = paths.get(id);
  const next = formatPersonRecordMarkdown(records.get(id));
  let prior = null;
  try { prior = readFileSync(path, 'utf8'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (prior === next) continue;
  changedFiles += 1;
  if (apply) writeFileSync(path, next);
}

console.log(JSON.stringify({
  mode: apply ? 'apply' : 'dry-run',
  reviewed_edges: plan.edges.length,
  created_relationships: createdRelationships,
  skipped_existing: skippedExisting,
  created_people: newPersonIds.size,
  touched_existing_people: touchedExisting.size,
  changed_files: changedFiles,
}, null, 2));
