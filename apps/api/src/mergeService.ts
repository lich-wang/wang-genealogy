import type { MergeSnapshot, Person, PersonMergeProposal } from '@wang/domain';
import { mapPerson } from './db.ts';
import { contributionStatement } from './contributions.ts';
import { badRequest, conflict, notFound } from './errors.ts';
import { newId, nowIso } from './util.ts';

const SIMPLIFIED_MAX_AFFECTED = 5;

async function loadPerson(db: D1Database, id: string): Promise<Person | null> {
  const row = await db.prepare('SELECT * FROM person WHERE id = ?').bind(id).first<Record<string, unknown>>();
  return row ? mapPerson(row) : null;
}

async function affectedRelationshipCount(db: D1Database, personId: string): Promise<number> {
  const row = await db
    .prepare(
      "SELECT COUNT(*) AS n FROM claim WHERE claim_kind = 'relationship' AND (subject_person_id = ? OR object_person_id = ?)",
    )
    .bind(personId, personId)
    .first<{ n: number }>();
  return Number(row?.n ?? 0);
}

async function maintainsBoth(db: D1Database, userId: string, a: string, b: string): Promise<boolean> {
  const row = await db
    .prepare('SELECT COUNT(DISTINCT person_id) AS n FROM person_maintainer WHERE user_id = ? AND person_id IN (?, ?)')
    .bind(userId, a, b)
    .first<{ n: number }>();
  return Number(row?.n ?? 0) === 2;
}

/** Any accepted property claim sharing a predicate between the two persons = conflict risk. */
async function hasAcceptedConflict(db: D1Database, sourceId: string, targetId: string): Promise<boolean> {
  const row = await db
    .prepare(
      `SELECT 1 FROM claim a JOIN claim b ON a.predicate = b.predicate
        WHERE a.subject_person_id = ? AND b.subject_person_id = ?
          AND a.claim_kind = 'property' AND b.claim_kind = 'property'
          AND a.status = 'accepted' AND b.status = 'accepted' LIMIT 1`,
    )
    .bind(sourceId, targetId)
    .first();
  return row != null;
}

async function buildSnapshot(db: D1Database, source: Person, target: Person): Promise<MergeSnapshot> {
  const claimsRes = await db
    .prepare('SELECT id FROM claim WHERE subject_person_id = ?')
    .bind(source.id)
    .all<{ id: string }>();
  return {
    source_person: source,
    target_person: target,
    source_claim_ids: (claimsRes.results ?? []).map((r) => r.id),
    affected_relationship_count: await affectedRelationshipCount(db, source.id),
    taken_at: nowIso(),
  };
}

export async function createMergeProposal(
  db: D1Database,
  sourcePersonId: string,
  targetPersonId: string,
  reason: string | null,
  actorUserId: string,
): Promise<{ proposal_id: string; status: PersonMergeProposal['status']; auto_approved: boolean }> {
  if (sourcePersonId === targetPersonId) throw badRequest('same_person', '不能與自身合併。');
  const source = await loadPerson(db, sourcePersonId);
  const target = await loadPerson(db, targetPersonId);
  if (!source || !target) throw notFound('人物不存在');
  if (source.status === 'merged') throw conflict('already_merged', '源人物已被合併。');
  if (target.status === 'merged') throw conflict('target_merged', '目標人物已被合併，請選擇規範目標。');

  const snapshot = await buildSnapshot(db, source, target);
  const proposalId = newId('merge');
  const now = nowIso();

  const affected = snapshot.affected_relationship_count;
  const simplified =
    (await maintainsBoth(db, actorUserId, sourcePersonId, targetPersonId)) &&
    affected <= SIMPLIFIED_MAX_AFFECTED &&
    !(await hasAcceptedConflict(db, sourcePersonId, targetPersonId));

  if (simplified) {
    // Simplified path: create + approve + perform in one atomic batch.
    await db.batch([
      db
        .prepare(
          `INSERT INTO person_merge_proposal
             (id, source_person_id, target_person_id, status, reason, created_by_user_id, approved_by_user_id, created_at, resolved_at, merge_snapshot_json)
           VALUES (?, ?, ?, 'approved', ?, ?, ?, ?, ?, ?)`,
        )
        .bind(proposalId, sourcePersonId, targetPersonId, reason, actorUserId, actorUserId, now, now, JSON.stringify(snapshot)),
      ...mergeMutations(db, sourcePersonId, targetPersonId, proposalId, actorUserId, true),
    ]);
    return { proposal_id: proposalId, status: 'approved', auto_approved: true };
  }

  // Otherwise it must be reviewed.
  await db.batch([
    db
      .prepare(
        `INSERT INTO person_merge_proposal
           (id, source_person_id, target_person_id, status, reason, created_by_user_id, created_at, merge_snapshot_json)
         VALUES (?, ?, ?, 'proposed', ?, ?, ?, ?)`,
      )
      .bind(proposalId, sourcePersonId, targetPersonId, reason, actorUserId, now, JSON.stringify(snapshot)),
    contributionStatement(db, {
      action: 'merge.propose',
      actorUserId,
      targetType: 'person_merge_proposal',
      targetId: proposalId,
      changeSummary: reason,
    }),
  ]);
  return { proposal_id: proposalId, status: 'proposed', auto_approved: false };
}

/** Statements that fold source into target: soft-merge, redirect, audit. Never deletes claims. */
function mergeMutations(
  db: D1Database,
  sourceId: string,
  targetId: string,
  proposalId: string,
  actorUserId: string,
  approve: boolean,
): D1PreparedStatement[] {
  const now = nowIso();
  const stmts: D1PreparedStatement[] = [
    db
      .prepare(
        "UPDATE person SET status = 'merged', merged_into_person_id = ?, updated_at = ?, current_revision = current_revision + 1 WHERE id = ? AND status <> 'merged'",
      )
      .bind(targetId, now, sourceId),
    contributionStatement(db, {
      action: approve ? 'merge.approve' : 'merge.propose',
      actorUserId,
      targetType: 'person',
      targetId: sourceId,
      changeSummary: `軟合併到 ${targetId}`,
    }),
  ];
  return stmts;
}

export async function approveMerge(db: D1Database, proposalId: string, approverUserId: string) {
  const row = await db.prepare('SELECT * FROM person_merge_proposal WHERE id = ?').bind(proposalId).first<Record<string, unknown>>();
  if (!row) throw notFound('合併提案不存在');
  const status = row.status as string;
  if (status !== 'proposed' && status !== 'reviewing') throw conflict('bad_status', `提案狀態為 ${status}，不能批准。`);
  const now = nowIso();
  await db.batch([
    db
      .prepare("UPDATE person_merge_proposal SET status = 'approved', approved_by_user_id = ?, resolved_at = ? WHERE id = ? AND status IN ('proposed','reviewing')")
      .bind(approverUserId, now, proposalId),
    ...mergeMutations(db, row.source_person_id as string, row.target_person_id as string, proposalId, approverUserId, true),
  ]);
  return { proposal_id: proposalId, status: 'approved' as const };
}

export async function rejectMerge(db: D1Database, proposalId: string, reviewerUserId: string) {
  const row = await db.prepare('SELECT status FROM person_merge_proposal WHERE id = ?').bind(proposalId).first<{ status: string }>();
  if (!row) throw notFound('合併提案不存在');
  if (row.status !== 'proposed' && row.status !== 'reviewing') throw conflict('bad_status', `提案狀態為 ${row.status}，不能拒絕。`);
  const now = nowIso();
  await db.batch([
    db.prepare("UPDATE person_merge_proposal SET status = 'rejected', resolved_at = ? WHERE id = ?").bind(now, proposalId),
    contributionStatement(db, { action: 'merge.reject', actorUserId: reviewerUserId, targetType: 'person_merge_proposal', targetId: proposalId }),
  ]);
  return { proposal_id: proposalId, status: 'rejected' as const };
}

/** Revert an approved merge from its snapshot. Restores source person + prior status. */
export async function revertMerge(db: D1Database, proposalId: string, actorUserId: string) {
  const row = await db.prepare('SELECT * FROM person_merge_proposal WHERE id = ?').bind(proposalId).first<Record<string, unknown>>();
  if (!row) throw notFound('合併提案不存在');
  if ((row.status as string) !== 'approved') throw conflict('not_approved', '只有已執行的合併可以撤銷。');
  const snapshot = JSON.parse(row.merge_snapshot_json as string) as MergeSnapshot;
  const priorStatus = snapshot.source_person.status; // status before the merge
  const now = nowIso();
  await db.batch([
    db
      .prepare('UPDATE person SET status = ?, merged_into_person_id = NULL, updated_at = ?, current_revision = current_revision + 1 WHERE id = ?')
      .bind(priorStatus === 'merged' ? 'active' : priorStatus, now, snapshot.source_person.id),
    db.prepare("UPDATE person_merge_proposal SET status = 'reverted', resolved_at = ? WHERE id = ?").bind(now, proposalId),
    contributionStatement(db, {
      action: 'merge.revert',
      actorUserId,
      targetType: 'person',
      targetId: snapshot.source_person.id,
      changeSummary: `撤銷合併提案 ${proposalId}`,
    }),
  ]);
  return { proposal_id: proposalId, status: 'reverted' as const, restored_person_id: snapshot.source_person.id };
}
