// Relationship claim rules shared by the content builder and its unit tests.
// Keep INACTIVE_CLAIM_STATUSES in sync with CLAIM_STATUS in packages/domain,
// the Claim.status vocabulary in docs/DOMAIN_MODEL.md, and active() in
// biography-kinship.mjs. "disputed" stays active: sourced minority views are
// shown side by side, never hidden.

export const INACTIVE_CLAIM_STATUSES = ['retracted', 'superseded'];

export function isActiveClaim(claim) {
  return !INACTIVE_CLAIM_STATUSES.includes(claim?.status);
}

/**
 * Fingerprint used by build-content.mjs to detect copies of the same shared
 * claim drifting apart. Re-anchoring a relationship must update every copy's
 * claim and sources identically, otherwise this value differs between files.
 */
export function claimFingerprint(item) {
  return JSON.stringify({ claim: item.claim, sources: item.sources });
}

const PARENT_PREDICATES = [
  'kinship.parent_of',
  'kinship.father_of',
  'kinship.mother_of',
  'kinship.adoptive_parent_of',
  'kinship.adoptive_father_of',
  'kinship.adoptive_mother_of',
];

/**
 * Turn deduplicated claim items into graph edges.
 * Retracted/superseded relationships remain in the claim and source indexes for
 * provenance, but must not appear in the public family tree or its adjacency.
 * Edges always use the claim's subject/object IDs, never object_person.
 */
export function buildEdges(items) {
  const result = { parent_edges: [], spouse_edges: [], sibling_edges: [], descent_edges: [] };
  for (const item of items) {
    const claim = item.claim;
    if (!claim || !isActiveClaim(claim)) continue;
    const citations = (item.sources ?? []).map((ref) => ({ source_title: ref.source?.title ?? '未知来源', locator: ref.locator ?? null }));
    const base = { claim_id: claim.id, status: claim.status, citations };
    if (PARENT_PREDICATES.includes(claim.predicate)) {
      const parentRole = claim.parent_role ?? (claim.predicate.includes('father') ? 'father' : claim.predicate.includes('mother') ? 'mother' : null);
      result.parent_edges.push({ ...base, parent_id: claim.subject_person_id, child_id: claim.object_person_id, parent_role: parentRole });
    } else if (claim.predicate === 'kinship.spouse_of') {
      result.spouse_edges.push({ ...base, a_id: claim.subject_person_id, b_id: claim.object_person_id });
    } else if (claim.predicate === 'kinship.sibling_of') {
      result.sibling_edges.push({ ...base, a_id: claim.subject_person_id, b_id: claim.object_person_id });
    } else if (claim.predicate === 'kinship.ancestor_of') {
      result.descent_edges.push({ ...base, ancestor_id: claim.subject_person_id, descendant_id: claim.object_person_id, generations: claim.generation_count ?? null });
    }
  }
  return result;
}

/**
 * Validate every relationship copy before edges are emitted.
 *
 * A relationship is stored once as a directed claim (PARENT -> CHILD) but has
 * one copy in each endpoint's file. `object_person` is the display-only record
 * for the *other* endpoint in that file, so it must be one of the claim's two
 * endpoints and must not be the current record. The containing record must also
 * be one of those endpoints: otherwise a re-anchored claim can leave a stale
 * copy in the old person file, which would be published in that person's
 * summary while the graph connects the new endpoints.
 */
export function validateRelationshipEndpoints(records) {
  const errors = [];
  for (const [id, record] of records) {
    for (const [group, items] of Object.entries(record.relationships ?? {})) {
      for (const item of items ?? []) {
        const claim = item.claim;
        if (!claim) {
          errors.push(`${id}: ${group} 中的关系缺少 claim`);
          continue;
        }
        const subject = claim.subject_person_id;
        const object = claim.object_person_id;
        for (const endpoint of [subject, object]) {
          if (endpoint && !records.has(endpoint)) {
            errors.push(`${id}: 关系主张 ${claim.id} 引用不存在的人物 ${endpoint}`);
          }
        }
        if (subject !== id && object !== id) {
          errors.push(`${id}: 关系主张 ${claim.id} 的副本存放在非端点人物文件中（端点为 ${subject} / ${object}）`);
        }
        const shown = item.object_person?.id;
        if (shown && shown !== subject && shown !== object) {
          errors.push(`${id}: 关系主张 ${claim.id} 的 object_person 指向 ${shown}，不是主张端点（${subject} / ${object}）`);
        }
        if (shown && shown === id) {
          errors.push(`${id}: 关系主张 ${claim.id} 的 object_person 指向记录自身`);
        }
      }
    }
  }
  return errors;
}
