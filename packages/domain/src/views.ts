// DTO / view shapes returned by the API and consumed by the web app. Kept in
// the shared domain package so both sides agree on the contract.

import type { Claim, ClaimSource, Person, PersonMergeProposal, Source } from './types.ts';

/** A claim enriched with its source links (and resolved source records). */
export interface ClaimWithSources {
  claim: Claim;
  sources: Array<ClaimSource & { source: Source | null }>;
  /** For relationship claims, a light summary of the object person. */
  object_person?: PersonSummaryLite | null;
}

/** One field of the computed person summary: recommended value + coexisting alternatives. */
export interface SummaryField {
  predicate: string;
  /** Highest-ranked accepted claim for this predicate, if any. */
  recommended: ClaimWithSources | null;
  /** All other accepted/disputed claims for this predicate, never hidden. */
  alternatives: ClaimWithSources[];
}

/** Light person reference used inside relationship listings. */
export interface PersonSummaryLite {
  id: string;
  status: Person['status'];
  display_name: string | null;
  merged_into_person_id: string | null;
}

/** Full person page payload computed from currently-accepted claims. */
export interface PersonSummary {
  person: Person;
  /** null unless status = merged; then callers should redirect. */
  redirect_to_person_id: string | null;
  display_name: string | null;
  properties: SummaryField[];
  relationships: {
    parents: ClaimWithSources[];
    children: ClaimWithSources[];
    spouses: ClaimWithSources[];
    other: ClaimWithSources[];
  };
  current_revision: number;
}

export interface RecentChange {
  contribution_id: string;
  action: string;
  actor_display_name: string;
  target_type: string;
  target_id: string;
  /** Person this change resolves to (person target, or a claim's subject). */
  subject_person_id?: string | null;
  /** Display name of the resolved person, for a readable feed. */
  target_display_name?: string | null;
  change_summary: string | null;
  created_at: string;
}

/** Structured export of a person and everything attached to it. */
export interface PersonExport {
  person: Person;
  claims: ClaimWithSources[];
  sources: Source[];
  merge_proposals: PersonMergeProposal[];
  exported_at: string;
  format_version: 1;
}

export interface Cursor<T> {
  items: T[];
  next_cursor: string | null;
}

export interface ApiError {
  error: string; // machine-readable code, e.g. "revision_conflict"
  message: string; // human-readable Chinese explanation
  details?: unknown;
}
