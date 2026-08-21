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
  'kinship.spouse_of',
  'kinship.adoptive_parent_of',
  'kinship.step_parent_of',
] as const;
export type RelationshipPredicate = (typeof RELATIONSHIP_PREDICATES)[number];

// Natural-language relationship direction accepted by the API before it is
// normalized server-side to a *_of predicate anchored on a PARENT.
export const RELATIONSHIP_INPUT = ['parent', 'child', 'spouse'] as const;
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
  // Operator-run maintenance recorded in the same append-only trail as user
  // edits: reassigning the contributor of imported records. Never edits claim
  // content — only who is credited/responsible for it.
  'admin.reattribute',
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
