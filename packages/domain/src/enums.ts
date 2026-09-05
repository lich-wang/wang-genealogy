// Status/enum vocabularies. These strings are part of the API contract and the
// domain invariants — keep them verbatim in sync with docs/DOMAIN_MODEL.md.

export const PERSON_STATUS = ['candidate', 'active', 'merged', 'suppressed'] as const;
export type PersonStatus = (typeof PERSON_STATUS)[number];

export const CLAIM_KIND = ['property', 'relationship'] as const;
export type ClaimKind = (typeof CLAIM_KIND)[number];

export const CLAIM_STATUS = [
  'proposed',
  'accepted',
  'disputed',
  'retracted',
  'superseded',
] as const;
export type ClaimStatus = (typeof CLAIM_STATUS)[number];

export const CONFIDENCE = ['unknown', 'low', 'medium', 'high'] as const;
export type Confidence = (typeof CONFIDENCE)[number];

// Attribute predicates (claim_kind = 'property').
export const PROPERTY_PREDICATES = [
  'name.primary',
  'name.alias',
  'name.courtesy',
  'name.pseudonym',
  'name.genealogical', // 谱名
  'name.rank', // 排行
  'birth.date',
  'death.date',
  'historical.period', // 朝代／历史时期（保留来源写法）
  'place.origin',
  'place.residence',
  'lineage.branch',
  'lineage.hall', // 堂号
  'lineage.commandery', // 郡望
  'lineage.founder', // 始祖
  'lineage.migrating_founder', // 始迁祖
  'generation.character', // 字辈
  'bio.summary', // 简单生平（单条带来源的概述性主张）
] as const;
export type PropertyPredicate = (typeof PROPERTY_PREDICATES)[number];

// Relationship predicates (claim_kind = 'relationship'). Stored one direction only.
export const RELATIONSHIP_PREDICATES = [
  'kinship.parent_of',
  'kinship.father_of',
  'kinship.mother_of',
  'kinship.spouse_of',
  'kinship.adoptive_parent_of',
  'kinship.adoptive_father_of',
  'kinship.adoptive_mother_of',
  'kinship.step_parent_of',
  // Descent across an unknown number of generations. Chinese genealogies state
  // origins exactly this way — 「太子晉後代」, 「王元四世孫」 — and squeezing that
  // into parent_of would invent generations no source names. The number of
  // generations, when a source gives one, belongs in the citation's locator.
  'kinship.ancestor_of',
] as const;
export type RelationshipPredicate = (typeof RELATIONSHIP_PREDICATES)[number];

// The role of the stored parent endpoint when a source states it explicitly.
// Null remains valid because some genealogical sources only say "parent".
export const PARENT_ROLE = ['father', 'mother'] as const;
export type ParentRole = (typeof PARENT_ROLE)[number];

export function parentRoleForPredicate(predicate: string): ParentRole | null {
  if (predicate === 'kinship.father_of' || predicate === 'kinship.adoptive_father_of') return 'father';
  if (predicate === 'kinship.mother_of' || predicate === 'kinship.adoptive_mother_of') return 'mother';
  return null;
}

export function parentPredicateForRole(
  predicate: RelationshipPredicate,
  role: ParentRole | null,
): RelationshipPredicate {
  if (predicate === 'kinship.parent_of' || predicate === 'kinship.father_of' || predicate === 'kinship.mother_of') {
    return role === 'father' ? 'kinship.father_of' : role === 'mother' ? 'kinship.mother_of' : 'kinship.parent_of';
  }
  if (
    predicate === 'kinship.adoptive_parent_of' ||
    predicate === 'kinship.adoptive_father_of' ||
    predicate === 'kinship.adoptive_mother_of'
  ) {
    return role === 'father'
      ? 'kinship.adoptive_father_of'
      : role === 'mother' ? 'kinship.adoptive_mother_of' : 'kinship.adoptive_parent_of';
  }
  return predicate;
}

// Natural-language relationship direction accepted by the API before it is
// normalized server-side to a *_of predicate anchored on a PARENT.
export const RELATIONSHIP_INPUT = [
  'father',
  'mother',
  'parent',
  'child',
  'adoptive_parent',
  'adoptive_child',
  'spouse',
  'ancestor',
  'descendant',
] as const;
export type RelationshipInput = (typeof RELATIONSHIP_INPUT)[number];

export const SOURCE_TYPE = [
  'book',
  'genealogy',
  'gazetteer',
  'epitaph',
  'biography',
  'exam_record', // 科举录
  'api_record',
  'website',
  'user_testimony',
] as const;
export type SourceType = (typeof SOURCE_TYPE)[number];

export const CLAIM_SOURCE_STANCE = ['supports', 'contradicts', 'mentions'] as const;
export type ClaimSourceStance = (typeof CLAIM_SOURCE_STANCE)[number];

export const MERGE_STATUS = [
  'proposed',
  'reviewing',
  'approved',
  'rejected',
  'reverted',
] as const;
export type MergeStatus = (typeof MERGE_STATUS)[number];

export const USER_ROLE = ['contributor', 'maintainer', 'reviewer', 'admin'] as const;
export type UserRole = (typeof USER_ROLE)[number];

export const USER_STATUS = ['active', 'restricted', 'banned'] as const;
export type UserStatus = (typeof USER_STATUS)[number];

// Precision of an uncertain historical date.
export const DATE_PRECISION = [
  'day',
  'month',
  'year',
  'decade',
  'century',
  'dynasty',
  'unknown',
] as const;
export type DatePrecision = (typeof DATE_PRECISION)[number];

// Contribution action types for the append-only audit trail.
export const CONTRIBUTION_ACTION = [
  'person.create',
  'claim.create',
  'claim.revise',
  'claim.source.add',
  'claim.source.remove',
  'claim.dispute',
  'claim.retract',
  'claim.revert',
  'source.create',
  'merge.propose',
  'merge.approve',
  'merge.reject',
  'merge.revert',
  // Operator-run maintenance, recorded in the same append-only trail as user
  // edits. Neither of these touches claim content, status or revisions.
  //   admin.reattribute      — change who is credited for existing records.
  //   admin.correct_metadata — fix descriptive metadata an import got wrong,
  //                            e.g. a citation locator pointing at the wrong
  //                            kind of source.
  //   admin.suppress_person  — take a record out of public view (person.status
  //                            = 'suppressed') without deleting anything, e.g.
  //                            when an import walked outside the collection's
  //                            scope. Reversible.
  //   admin.set_role         — change a contributor account's role. Recorded
  //                            because a privilege change is exactly the kind of
  //                            act that must not be invisible; it touches no
  //                            claim, only who may review.
  'admin.reattribute',
  'admin.correct_metadata',
  'admin.suppress_person',
  'admin.set_role',
  // The one action that removes data. Permitted only under clause 6 of the
  // completeness rules and only with explicit operator authorisation; the
  // contribution row IS the minimal audit record that clause requires, so it
  // records how much went and where the backup is.
  'admin.purge_records',
] as const;
export type ContributionAction = (typeof CONTRIBUTION_ACTION)[number];

// License codes we recognize. Free-form is allowed for external sources but we
// enumerate the common ones so we can reason about redistribution.
export const LICENSE_CODE = [
  'CC0-1.0',
  'CC-BY-4.0',
  'CC-BY-SA-4.0',
  'CC-BY-NC-4.0',
  'CC-BY-NC-SA-4.0',
  'public-domain',
  'all-rights-reserved',
  'unknown',
] as const;
export type LicenseCode = (typeof LICENSE_CODE)[number];
