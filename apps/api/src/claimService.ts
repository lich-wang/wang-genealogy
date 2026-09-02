import type { Claim, ClaimKind, ClaimSnapshot, ClaimValue, Confidence, ParentRole } from '@wang/domain';
import { PROPERTY_PREDICATES, RELATIONSHIP_PREDICATES } from '@wang/domain';
import type { CreateSourceInput, PropertyValueInput } from '@wang/validation';
import { normalizeDate } from '@wang/validation';
import { contributionStatement } from './contributions.ts';
import { badRequest } from './errors.ts';
import { newId, nowIso } from './util.ts';

export interface SourceRef {
  source_id: string;
  stance: 'supports' | 'contradicts' | 'mentions';
  locator?: string;
  quotation?: string;
  interpretation_note?: string;
}

interface BuildClaimArgs {
  db: D1Database;
  subjectPersonId: string;
  claimKind: ClaimKind;
  predicate: string;
  objectPersonId?: string | null;
  generationCount?: number | null;
  parentRole?: ParentRole | null;
  value?: PropertyValueInput | null;
  confidence: Confidence;
  sources: SourceRef[];
  actorUserId: string;
  changeSummary?: string | null;
}

/**
 * Build the statements that create a claim, its first revision, its source
 * links, and the audit contribution. Returned so a caller can run them in one
 * atomic D1 batch (possibly alongside person creation).
 */
export function buildClaimCreation(args: BuildClaimArgs): {
  claim: Claim;
  statements: D1PreparedStatement[];
} {
  const { db } = args;
  const now = nowIso();
  const claimId = newId('claim');

  // Normalize uncertain dates for date-bearing property claims, producing a
  // fully-formed ClaimValue (never a bare SQL date).
  const value: ClaimValue | null = args.value
    ? {
        ...args.value,
        date:
          args.value.date?.original_text != null
            ? normalizeDate(args.value.date.original_text, args.value.date.calendar_note ?? undefined)
            : undefined,
      }
    : null;

  const snapshot: ClaimSnapshot = {
    predicate: args.predicate,
    claim_kind: args.claimKind,
    object_person_id: args.objectPersonId ?? null,
    generation_count: args.generationCount ?? null,
    parent_role: args.parentRole ?? null,
    value_json: value,
    status: 'proposed',
    confidence: args.confidence,
  };

  const claim: Claim = {
    id: claimId,
    subject_person_id: args.subjectPersonId,
    claim_kind: args.claimKind,
    predicate: args.predicate,
    object_person_id: args.objectPersonId ?? null,
    generation_count: args.generationCount ?? null,
    parent_role: args.parentRole ?? null,
    value_json: value,
    status: 'proposed',
    confidence: args.confidence,
    created_by_user_id: args.actorUserId,
    created_at: now,
    updated_at: now,
    current_revision: 1,
  };

  const statements: D1PreparedStatement[] = [
    db
      .prepare(
        `INSERT INTO claim
           (id, subject_person_id, claim_kind, predicate, object_person_id, generation_count, parent_role, value_json,
            status, confidence, created_by_user_id, created_at, updated_at, current_revision)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'proposed', ?, ?, ?, ?, 1)`,
      )
      .bind(
        claimId,
        args.subjectPersonId,
        args.claimKind,
        args.predicate,
        args.objectPersonId ?? null,
        args.generationCount ?? null,
        args.parentRole ?? null,
        value ? JSON.stringify(value) : null,
        args.confidence,
        args.actorUserId,
        now,
        now,
      ),
    db
      .prepare(
        `INSERT INTO claim_revision
           (id, claim_id, revision_number, snapshot_json, change_summary, created_by_user_id, created_at, reverts_revision_id)
         VALUES (?, ?, 1, ?, ?, ?, ?, NULL)`,
      )
      .bind(newId('revision'), claimId, JSON.stringify(snapshot), args.changeSummary ?? null, args.actorUserId, now),
  ];

  for (const s of args.sources) {
    statements.push(claimSourceStatement(db, claimId, s, args.actorUserId));
  }

  statements.push(
    contributionStatement(db, {
      action: 'claim.create',
      actorUserId: args.actorUserId,
      targetType: 'claim',
      targetId: claimId,
      changeSummary: args.changeSummary ?? null,
      afterRevision: 1,
    }),
  );

  return { claim, statements };
}

export function claimSourceStatement(
  db: D1Database,
  claimId: string,
  s: SourceRef,
  actorUserId: string,
): D1PreparedStatement {
  return db
    .prepare(
      `INSERT INTO claim_source
         (id, claim_id, source_id, stance, locator, quotation, interpretation_note, added_by_user_id, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      newId('claimSource'),
      claimId,
      s.source_id,
      s.stance,
      s.locator ?? null,
      s.quotation ?? null,
      s.interpretation_note ?? null,
      actorUserId,
      nowIso(),
    );
}

export function assertPropertyPredicate(predicate: string): void {
  if (!(PROPERTY_PREDICATES as readonly string[]).includes(predicate))
    throw badRequest('bad_predicate', `未知的屬性謂詞：${predicate}`);
}

export function assertRelationshipPredicate(predicate: string): void {
  if (!(RELATIONSHIP_PREDICATES as readonly string[]).includes(predicate))
    throw badRequest('bad_predicate', `未知的關係謂詞：${predicate}`);
}

/** Verify that all referenced source ids exist; throws 400 otherwise. */
export async function assertSourcesExist(db: D1Database, sources: SourceRef[]): Promise<void> {
  if (sources.length === 0) return;
  const ids = [...new Set(sources.map((s) => s.source_id))];
  const ph = ids.map(() => '?').join(',');
  const res = await db.prepare(`SELECT id FROM source WHERE id IN (${ph})`).bind(...ids).all<{ id: string }>();
  const found = new Set((res.results ?? []).map((r) => r.id));
  const missing = ids.filter((id) => !found.has(id));
  if (missing.length > 0) throw badRequest('source_not_found', `來源不存在：${missing.join(', ')}`);
}

export function buildSourceCreation(
  db: D1Database,
  input: CreateSourceInput,
  actorUserId: string,
): { sourceId: string; statements: D1PreparedStatement[] } {
  const sourceId = newId('source');
  const now = nowIso();
  const stmt = db
    .prepare(
      `INSERT INTO source
         (id, source_type, title, creator, publisher, published_at_text, canonical_url,
          external_identifier, license_code, accessed_at, metadata_json, created_by_user_id, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      sourceId,
      input.source_type,
      input.title,
      input.creator ?? null,
      input.publisher ?? null,
      input.published_at_text ?? null,
      input.canonical_url ?? null,
      input.external_identifier ?? null,
      input.license_code,
      input.accessed_at ?? null,
      input.metadata_json ? JSON.stringify(input.metadata_json) : null,
      actorUserId,
      now,
    );
  return {
    sourceId,
    statements: [
      stmt,
      contributionStatement(db, {
        action: 'source.create',
        actorUserId,
        targetType: 'source',
        targetId: sourceId,
      }),
    ],
  };
}
