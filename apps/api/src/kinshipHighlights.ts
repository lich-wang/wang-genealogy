import type { KinshipHighlight } from '@wang/domain';
import { nameOf } from './summary.ts';

/**
 * Closed, policy-backed names for the people before the Wang surname existed.
 * Keep this aligned with scripts/lib/scope.mjs and SOURCES_AND_POLICY.md; this
 * is deliberately not a general rule for prioritising non-Wang names.
 */
export const SURNAME_PROGENITOR_NAMES = [
  '姬晋',
  '姬晉',
  '太子晋',
  '太子晉',
  '王子乔',
  '王子喬',
  '王子晋',
  '王子晉',
] as const;

/** Rank surname progenitors first, then let recorded kinship break ties. */
export async function loadKinshipHighlights(
  db: D1Database,
  limit: number,
): Promise<KinshipHighlight[]> {
  const progenitorPlaceholders = SURNAME_PROGENITOR_NAMES.map(() => '?').join(',');
  const res = await db
    .prepare(
      `SELECT p.id, COUNT(DISTINCT c.id) AS relative_count,
              CASE
                WHEN EXISTS (
                  SELECT 1 FROM claim n
                   WHERE n.subject_person_id = p.id
                     AND n.predicate LIKE 'name.%'
                     AND n.status NOT IN ('retracted','superseded')
                     AND json_extract(n.value_json, '$.text') IN (${progenitorPlaceholders})
                ) THEN 0
                WHEN EXISTS (
                  SELECT 1 FROM claim n
                   WHERE n.subject_person_id = p.id
                     AND n.predicate LIKE 'name.%'
                     AND n.status NOT IN ('retracted','superseded')
                     AND json_extract(n.value_json, '$.text') = '宗敬'
                ) THEN 1
                ELSE 2
              END AS progenitor_rank
         FROM person p
         JOIN claim c ON (c.subject_person_id = p.id OR c.object_person_id = p.id)
        WHERE p.status = 'active'
          AND c.claim_kind = 'relationship'
          AND c.status NOT IN ('retracted','superseded')
        GROUP BY p.id
        ORDER BY progenitor_rank ASC, relative_count DESC, p.created_at ASC
        LIMIT ?`,
    )
    .bind(...SURNAME_PROGENITOR_NAMES, limit)
    .all<{ id: string; relative_count: number; progenitor_rank: number }>();

  const rows = res.results ?? [];
  const names = await nameOf(db, rows.map((row) => row.id));
  return rows.map((row) => ({
    id: row.id,
    display_name: names.get(row.id) ?? null,
    relative_count: Number(row.relative_count),
    is_surname_progenitor: Number(row.progenitor_rank) < 2,
  }));
}
