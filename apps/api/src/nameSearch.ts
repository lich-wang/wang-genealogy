import type { PersonSummaryLite } from '@wang/domain';
import { scriptVariants } from '@wang/i18n';
import { nameOf } from './summary.ts';

/**
 * Look up public persons by name, insensitive to Chinese script: a query for
 * 王賁 must find the person recorded as 王贲, otherwise the same historical
 * figure gets entered twice — once per script.
 *
 * The stored side cannot be folded (name text lives inside `claim.value_json`
 * and is sourced evidence we never rewrite), so the QUERY is expanded into both
 * scripts and every variant is matched.
 */
export async function findPersonsByName(
  db: D1Database,
  query: string,
  options: { limit?: number; exactOnly?: boolean } = {},
): Promise<PersonSummaryLite[]> {
  const limit = options.limit ?? 50;
  const variants = scriptVariants(query.slice(0, 100));
  if (variants.length === 0) return [];

  const likeClause = variants.map(() => 'cl.value_json LIKE ?').join(' OR ');
  const res = await db
    .prepare(
      `SELECT DISTINCT p.id, p.status
         FROM person p
         JOIN claim cl ON cl.subject_person_id = p.id
        WHERE p.status = 'active'
          AND cl.predicate LIKE 'name.%'
          AND cl.status IN ('accepted','disputed')
          AND (${likeClause})
        LIMIT ?`,
    )
    .bind(...variants.map((v) => (options.exactOnly ? `%"${v}"%` : `%${v}%`)), limit)
    .all<Record<string, unknown>>();

  const rows = res.results ?? [];
  // Resolve one display name per person (the recommended name.primary) rather
  // than echoing whichever alias happened to match.
  const names = await nameOf(db, rows.map((r) => r.id as string));
  return rows.map((r) => ({
    id: r.id as string,
    status: r.status as PersonSummaryLite['status'],
    display_name: names.get(r.id as string) ?? null,
    merged_into_person_id: null,
  }));
}
