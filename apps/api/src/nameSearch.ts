import type { Claim, PersonSearchResult } from '@wang/domain';
import { scriptVariants } from '@wang/i18n';
import { mapClaim } from './db.ts';
import { badRequest } from './errors.ts';
import { nameOf } from './summary.ts';

/** Default and maximum rows returned by one search request. */
export const SEARCH_PAGE_SIZE = 50;
const SEARCH_PAGE_SIZE_MAX = 100;

/** One page of name-search hits plus the cursor that continues it. */
export interface PersonSearchPage {
  items: PersonSearchResult[];
  next_cursor: string | null;
}

/**
 * Cursor payload: the ordering key of the last row already returned.
 * `person.created_at` alone is not unique (a bulk import stamps many rows with
 * the same instant), so the person id breaks ties and keeps paging total.
 */
interface SearchCursor {
  created_at: string;
  id: string;
}

const b64urlEncode = (s: string): string =>
  btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

const b64urlDecode = (s: string): string => atob(s.replace(/-/g, '+').replace(/_/g, '/'));

/** Opaque cursor so clients never build one by hand; `|` cannot occur in either half. */
export function encodeSearchCursor(cursor: SearchCursor): string {
  return b64urlEncode(`${cursor.created_at}|${cursor.id}`);
}

export function decodeSearchCursor(raw: string): SearchCursor {
  let decoded: string;
  try {
    decoded = b64urlDecode(raw);
  } catch {
    throw badRequest('invalid_cursor', '分頁游標不合法。');
  }
  const sep = decoded.indexOf('|');
  if (sep <= 0 || sep === decoded.length - 1) throw badRequest('invalid_cursor', '分頁游標不合法。');
  return { created_at: decoded.slice(0, sep), id: decoded.slice(sep + 1) };
}

/**
 * Look up public persons by name, insensitive to Chinese script: a query for
 * 王賁 must find the person recorded as 王贲, otherwise the same historical
 * figure gets entered twice — once per script.
 *
 * The stored side cannot be folded (name text lives inside `claim.value_json`
 * and is sourced evidence we never rewrite), so the QUERY is expanded into both
 * scripts and every variant is matched.
 *
 * Results are ordered by `(person.created_at, person.id)` ascending, which is
 * the pagination key. Ascending order also means newly added persons land at
 * the end instead of shifting the rows a client already paged through.
 */
export async function findPersonsByName(
  db: D1Database,
  query: string,
  options: { limit?: number; exactOnly?: boolean; cursor?: string | null } = {},
): Promise<PersonSearchPage> {
  const limit = Math.min(Math.max(options.limit ?? SEARCH_PAGE_SIZE, 1), SEARCH_PAGE_SIZE_MAX);
  const variants = scriptVariants(query.slice(0, 100));
  if (variants.length === 0) return { items: [], next_cursor: null };

  const after = options.cursor ? decodeSearchCursor(options.cursor) : null;
  const likeClause = variants.map(() => 'cl.value_json LIKE ?').join(' OR ');
  const binds: unknown[] = variants.map((v) => (options.exactOnly ? `%"${v}"%` : `%${v}%`));
  let keyset = '';
  if (after) {
    keyset = 'AND (p.created_at > ? OR (p.created_at = ? AND p.id > ?))';
    binds.push(after.created_at, after.created_at, after.id);
  }
  // One row beyond the page tells us whether a next page exists without a
  // second COUNT query; it is dropped before returning.
  binds.push(limit + 1);

  // EXISTS instead of a DISTINCT join: one row per person even when several of
  // its name claims match, so LIMIT counts persons and the ordering key stays
  // unique (a DISTINCT join cannot be paged reliably).
  const res = await db
    .prepare(
      `SELECT p.id, p.status, p.created_at,
              (SELECT COUNT(*) FROM claim rel
                WHERE (rel.subject_person_id = p.id OR rel.object_person_id = p.id)
                  AND rel.claim_kind = 'relationship'
                  AND rel.status NOT IN ('retracted','superseded')) AS relative_count
         FROM person p
        WHERE p.status = 'active'
          AND EXISTS (
                SELECT 1 FROM claim cl
                 WHERE cl.subject_person_id = p.id
                   AND cl.predicate LIKE 'name.%'
                   AND cl.status IN ('accepted','disputed')
                   AND (${likeClause})
              )
          ${keyset}
        ORDER BY p.created_at ASC, p.id ASC
        LIMIT ?`,
    )
    .bind(...binds)
    .all<Record<string, unknown>>();

  const all = res.results ?? [];
  const hasMore = all.length > limit;
  const rows = hasMore ? all.slice(0, limit) : all;

  // Resolve one display name per person (the recommended name.primary) rather
  // than echoing whichever alias happened to match.
  const names = await nameOf(db, rows.map((r) => r.id as string));
  const details = await personSearchDetails(db, rows.map((r) => r.id as string));
  const items = rows.map((r) => ({
    id: r.id as string,
    status: r.status as PersonSearchResult['status'],
    display_name: names.get(r.id as string) ?? null,
    merged_into_person_id: null,
    ...(details.get(r.id as string) ?? emptySearchDetails()),
    relative_count: Number(r.relative_count ?? 0),
  }));

  const last = rows[rows.length - 1];
  return {
    items,
    next_cursor:
      hasMore && last
        ? encodeSearchCursor({ created_at: last.created_at as string, id: last.id as string })
        : null,
  };
}

type SearchDetails = Pick<
  PersonSearchResult,
  'birth_text' | 'death_text' | 'origin_text' | 'branch_text' | 'also_known_as'
>;

const emptySearchDetails = (): SearchDetails => ({
  birth_text: null,
  death_text: null,
  origin_text: null,
  branch_text: null,
  also_known_as: [],
});

/** Batch-load compact identity clues for one search page; never N+1 queries. */
async function personSearchDetails(
  db: D1Database,
  personIds: string[],
): Promise<Map<string, SearchDetails>> {
  const out = new Map<string, SearchDetails>();
  if (personIds.length === 0) return out;
  const placeholders = personIds.map(() => '?').join(',');
  const res = await db
    .prepare(
      `SELECT * FROM claim
        WHERE subject_person_id IN (${placeholders})
          AND predicate IN (
            'birth.date','death.date','place.origin','lineage.branch',
            'name.alias','name.courtesy','name.pseudonym','name.genealogical'
          )
          AND status IN ('accepted','disputed')
        ORDER BY subject_person_id, predicate,
                 CASE status WHEN 'accepted' THEN 0 ELSE 1 END,
                 CASE confidence WHEN 'high' THEN 0 WHEN 'medium' THEN 1 WHEN 'low' THEN 2 ELSE 3 END,
                 updated_at DESC`,
    )
    .bind(...personIds)
    .all<Record<string, unknown>>();

  const chosen = new Set<string>();
  for (const row of res.results ?? []) {
    const claim = mapClaim(row);
    const current = out.get(claim.subject_person_id) ?? emptySearchDetails();
    const text = claimText(claim);
    if (!text) continue;

    if (claim.predicate.startsWith('name.')) {
      if (!current.also_known_as.includes(text)) current.also_known_as.push(text);
    } else {
      const key = `${claim.subject_person_id}:${claim.predicate}`;
      if (chosen.has(key)) continue;
      chosen.add(key);
      if (claim.predicate === 'birth.date') current.birth_text = text;
      if (claim.predicate === 'death.date') current.death_text = text;
      if (claim.predicate === 'place.origin') current.origin_text = text;
      if (claim.predicate === 'lineage.branch') current.branch_text = text;
    }
    out.set(claim.subject_person_id, current);
  }
  return out;
}

function claimText(claim: Claim): string | null {
  const value = claim.value_json;
  if (typeof value?.text === 'string' && value.text.trim()) return value.text.trim();
  const original = value?.date?.original_text;
  return typeof original === 'string' && original.trim() ? original.trim() : null;
}
