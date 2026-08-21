import type {
  ClaimKind,
  ClaimSourceStance,
  ClaimStatus,
  Confidence,
  ContributionAction,
  DatePrecision,
  LicenseCode,
  MergeStatus,
  PersonStatus,
  SourceType,
  UserRole,
  UserStatus,
} from './enums.ts';

/** Contributor account. Represents a site contributor, never a genealogy person. */
export interface User {
  id: string;
  display_name: string;
  email_hash: string | null;
  external_login: string | null;
  role: UserRole;
  status: UserStatus;
  created_at: string;
}

/** Historical person: identity anchor only. Holds no final name/date/origin. */
export interface Person {
  id: string;
  status: PersonStatus;
  merged_into_person_id: string | null;
  created_by_user_id: string;
  created_at: string;
  updated_at: string;
  /** Optimistic-concurrency counter for the person anchor itself. */
  current_revision: number;
}

/**
 * Uncertain historical date. Never a single SQL date — we keep the original
 * text plus a normalized earliest/latest window, precision, and calendar note.
 */
export interface UncertainDate {
  original_text: string;
  earliest: string | null; // ISO 8601 date, inclusive lower bound
  latest: string | null; // ISO 8601 date, inclusive upper bound
  precision: DatePrecision;
  calendar_note: string | null;
}

/** Value payload for property claims, stored in Claim.value_json. */
export interface ClaimValue {
  text?: string;
  language?: string;
  date?: UncertainDate;
  [key: string]: unknown;
}

/** A sourced, versioned, review-tracked assertion about a person. */
export interface Claim {
  id: string;
  subject_person_id: string;
  claim_kind: ClaimKind;
  predicate: string;
  /** relationship claims only: the object person (child in parent_of). */
  object_person_id: string | null;
  /** property claims only. */
  value_json: ClaimValue | null;
  status: ClaimStatus;
  confidence: Confidence;
  created_by_user_id: string;
  created_at: string;
  updated_at: string;
  current_revision: number;
}

/** Append-only revision of a claim. Reverting is a new revision, never overwrite. */
export interface ClaimRevision {
  id: string;
  claim_id: string;
  revision_number: number;
  snapshot_json: ClaimSnapshot;
  change_summary: string | null;
  created_by_user_id: string;
  created_at: string;
  reverts_revision_id: string | null;
}

/** Frozen state of a claim captured in each revision. */
export interface ClaimSnapshot {
  predicate: string;
  claim_kind: ClaimKind;
  object_person_id: string | null;
  value_json: ClaimValue | null;
  status: ClaimStatus;
  confidence: Confidence;
}

/** Reusable, independent source record. No images/attachments by policy. */
export interface Source {
  id: string;
  source_type: SourceType;
  title: string;
  creator: string | null;
  publisher: string | null;
  published_at_text: string | null;
  canonical_url: string | null;
  external_identifier: string | null;
  license_code: LicenseCode;
  accessed_at: string | null;
  metadata_json: Record<string, unknown> | null;
  created_by_user_id: string;
  created_at: string;
}

/** Many-to-many link between a claim and a source, with stance and locator. */
export interface ClaimSource {
  id: string;
  claim_id: string;
  source_id: string;
  stance: ClaimSourceStance;
  locator: string | null;
  quotation: string | null;
  interpretation_note: string | null;
  added_by_user_id: string;
  created_at: string;
}

/** Non-exclusive maintenance relationship between a user and a person. */
export interface PersonMaintainer {
  id: string;
  person_id: string;
  user_id: string;
  maintainer_role: string;
  created_at: string;
}

/** Reversible soft-merge proposal between two persons. */
export interface PersonMergeProposal {
  id: string;
  source_person_id: string;
  target_person_id: string;
  status: MergeStatus;
  reason: string | null;
  created_by_user_id: string;
  approved_by_user_id: string | null;
  created_at: string;
  resolved_at: string | null;
  merge_snapshot_json: MergeSnapshot | null;
}

/** Full snapshot retained so a merge can always be reverted faithfully. */
export interface MergeSnapshot {
  source_person: Person;
  target_person: Person;
  /** Claim ids that belonged to the source person before the merge. */
  source_claim_ids: string[];
  affected_relationship_count: number;
  taken_at: string;
}

/** Immutable audit record for every write action. */
export interface Contribution {
  id: string;
  action: ContributionAction;
  actor_user_id: string;
  target_type: string;
  target_id: string;
  change_summary: string | null;
  before_revision: number | null;
  after_revision: number | null;
  created_at: string;
}
