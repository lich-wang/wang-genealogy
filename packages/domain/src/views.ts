// DTO / view shapes returned by the API and consumed by the web app. Kept in
// the shared domain package so both sides agree on the contract.

import type { ClaimStatus } from './enums.ts';
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
    /** Descent across unnamed generations, kept apart from named parentage. */
    ancestors: ClaimWithSources[];
    descendants: ClaimWithSources[];
    other: ClaimWithSources[];
  };
  current_revision: number;
}

/** One person in a family-tree view: enough to draw a node, nothing more. */
export interface RelativeNode {
  id: string;
  display_name: string | null;
  status: Person['status'];
  /** Original text of the recommended birth/death claim, when there is one. */
  birth: string | null;
  death: string | null;
}

/** What a kinship link rests on, short enough to label a line in a diagram. */
export interface KinshipEvidence {
  source_title: string;
  /** Which statement inside that source: a Wikidata property, a CBDB term, a page. */
  locator: string | null;
}

interface KinshipEdgeBase {
  claim_id: string;
  status: ClaimStatus;
  /** Supporting citations, so a tree can show why a line is drawn. */
  citations: KinshipEvidence[];
}

/** Stored direction: PARENT --kinship.parent_of--> CHILD. */
export interface ParentEdge extends KinshipEdgeBase {
  parent_id: string;
  child_id: string;
}

export interface SpouseEdge extends KinshipEdgeBase {
  a_id: string;
  b_id: string;
}

/**
 * Stored direction: ANCESTOR --kinship.ancestor_of--> DESCENDANT, across a
 * number of generations the source did not name.
 *
 * Kept apart from `ParentEdge` because it is a different statement: a parent
 * link says who someone's father was, this one says only that a line of descent
 * runs between two people. A tree must not draw them alike, or「秦将王翦为太子
 * 晋后代」would read as a claim that 王翦 was 太子晋's son. Whatever the source
 * said about the distance —「四世孫」,「第八代孫」— is in the citation's locator.
 */
export interface DescentEdge extends KinshipEdgeBase {
  ancestor_id: string;
  descendant_id: string;
  /**
   * How many generations the source put between them —「四世孫」is 4 — or null
   * where it only said there was descent. Read off the citation's locator,
   * which is where the number is stored; a diagram needs it as a number to put
   * a 八代孫 eight rows down instead of one.
   */
  generations: number | null;
}

/**
 * A slice of the kinship graph around one person, walked a bounded number of
 * generations up and down. Light on purpose: names, dates and the evidence
 * behind each line — not every claim attached to every person.
 */
export interface RelativesGraph {
  root_id: string;
  up: number;
  down: number;
  nodes: RelativeNode[];
  parent_edges: ParentEdge[];
  spouse_edges: SpouseEdge[];
  /** Lines of descent across unnamed generations, drawn differently. */
  descent_edges: DescentEdge[];
  /** True when the node cap stopped the walk before it ran out of relatives. */
  truncated: boolean;
}

/** A suggested starting point for browsing family trees. */
export interface KinshipHighlight {
  id: string;
  display_name: string | null;
  /** Recorded parents, children and spouses — how much tree there is to walk. */
  relative_count: number;
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
