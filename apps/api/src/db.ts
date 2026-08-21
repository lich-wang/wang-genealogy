import type {
  Claim,
  ClaimRevision,
  ClaimSource,
  ClaimValue,
  Contribution,
  MergeSnapshot,
  Person,
  PersonMergeProposal,
  Source,
  User,
} from '@wang/domain';
import { parseJson } from './util.ts';

// Row shape helpers. D1 returns plain objects; we map to domain types and parse
// JSON columns. Kept centralized so column names live in one place.

export function mapUser(r: Record<string, unknown>): User {
  return {
    id: r.id as string,
    display_name: r.display_name as string,
    email_hash: (r.email_hash as string) ?? null,
    external_login: (r.external_login as string) ?? null,
    role: r.role as User['role'],
    status: r.status as User['status'],
    created_at: r.created_at as string,
  };
}

export function mapPerson(r: Record<string, unknown>): Person {
  return {
    id: r.id as string,
    status: r.status as Person['status'],
    merged_into_person_id: (r.merged_into_person_id as string) ?? null,
    created_by_user_id: r.created_by_user_id as string,
    created_at: r.created_at as string,
    updated_at: r.updated_at as string,
    current_revision: Number(r.current_revision),
  };
}

export function mapClaim(r: Record<string, unknown>): Claim {
  return {
    id: r.id as string,
    subject_person_id: r.subject_person_id as string,
    claim_kind: r.claim_kind as Claim['claim_kind'],
    predicate: r.predicate as string,
    object_person_id: (r.object_person_id as string) ?? null,
    value_json: parseJson<ClaimValue>((r.value_json as string) ?? null),
    status: r.status as Claim['status'],
    confidence: r.confidence as Claim['confidence'],
    created_by_user_id: r.created_by_user_id as string,
    created_at: r.created_at as string,
    updated_at: r.updated_at as string,
    current_revision: Number(r.current_revision),
  };
}

export function mapClaimRevision(r: Record<string, unknown>): ClaimRevision {
  return {
    id: r.id as string,
    claim_id: r.claim_id as string,
    revision_number: Number(r.revision_number),
    snapshot_json: parseJson(r.snapshot_json as string) as ClaimRevision['snapshot_json'],
    change_summary: (r.change_summary as string) ?? null,
    created_by_user_id: r.created_by_user_id as string,
    created_at: r.created_at as string,
    reverts_revision_id: (r.reverts_revision_id as string) ?? null,
  };
}

export function mapSource(r: Record<string, unknown>): Source {
  return {
    id: r.id as string,
    source_type: r.source_type as Source['source_type'],
    title: r.title as string,
    creator: (r.creator as string) ?? null,
    publisher: (r.publisher as string) ?? null,
    published_at_text: (r.published_at_text as string) ?? null,
    canonical_url: (r.canonical_url as string) ?? null,
    external_identifier: (r.external_identifier as string) ?? null,
    license_code: r.license_code as Source['license_code'],
    accessed_at: (r.accessed_at as string) ?? null,
    metadata_json: parseJson<Record<string, unknown>>((r.metadata_json as string) ?? null),
    created_by_user_id: r.created_by_user_id as string,
    created_at: r.created_at as string,
  };
}

export function mapClaimSource(r: Record<string, unknown>): ClaimSource {
  return {
    id: r.id as string,
    claim_id: r.claim_id as string,
    source_id: r.source_id as string,
    stance: r.stance as ClaimSource['stance'],
    locator: (r.locator as string) ?? null,
    quotation: (r.quotation as string) ?? null,
    interpretation_note: (r.interpretation_note as string) ?? null,
    added_by_user_id: r.added_by_user_id as string,
    created_at: r.created_at as string,
  };
}

export function mapMergeProposal(r: Record<string, unknown>): PersonMergeProposal {
  return {
    id: r.id as string,
    source_person_id: r.source_person_id as string,
    target_person_id: r.target_person_id as string,
    status: r.status as PersonMergeProposal['status'],
    reason: (r.reason as string) ?? null,
    created_by_user_id: r.created_by_user_id as string,
    approved_by_user_id: (r.approved_by_user_id as string) ?? null,
    created_at: r.created_at as string,
    resolved_at: (r.resolved_at as string) ?? null,
    merge_snapshot_json: parseJson<MergeSnapshot>((r.merge_snapshot_json as string) ?? null),
  };
}

export function mapContribution(r: Record<string, unknown>): Contribution {
  return {
    id: r.id as string,
    action: r.action as Contribution['action'],
    actor_user_id: r.actor_user_id as string,
    target_type: r.target_type as string,
    target_id: r.target_id as string,
    change_summary: (r.change_summary as string) ?? null,
    before_revision: r.before_revision == null ? null : Number(r.before_revision),
    after_revision: r.after_revision == null ? null : Number(r.after_revision),
    created_at: r.created_at as string,
  };
}
