import type { ContributionAction } from '@wang/domain';
import { newId, nowIso } from './util.ts';

export interface ContributionInput {
  action: ContributionAction;
  actorUserId: string;
  targetType: string;
  targetId: string;
  changeSummary?: string | null;
  beforeRevision?: number | null;
  afterRevision?: number | null;
}

/** Build an append-only audit INSERT statement (to be run inside a batch). */
export function contributionStatement(db: D1Database, input: ContributionInput): D1PreparedStatement {
  return db
    .prepare(
      `INSERT INTO contribution
         (id, action, actor_user_id, target_type, target_id, change_summary, before_revision, after_revision, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      newId('contribution'),
      input.action,
      input.actorUserId,
      input.targetType,
      input.targetId,
      input.changeSummary ?? null,
      input.beforeRevision ?? null,
      input.afterRevision ?? null,
      nowIso(),
    );
}
