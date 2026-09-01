import { describe, expect, it } from 'vitest';
import {
  decodeSearchCursor,
  encodeSearchCursor,
  findPersonsByName,
  SEARCH_PAGE_SIZE,
} from './nameSearch.ts';

interface Executed {
  sql: string;
  binds: unknown[];
}

/**
 * Minimal D1 stand-in: records every statement and answers from canned rows,
 * chosen by which table the statement reads. The search statement scans
 * `person` (with a claim EXISTS subquery); `nameOf` selects straight from
 * `claim`.
 */
function fakeDb(rows: { persons?: unknown[]; nameClaims?: unknown[]; detailClaims?: unknown[] } = {}) {
  const executed: Executed[] = [];
  const db = {
    prepare(sql: string) {
      const stmt = {
        bind(...binds: unknown[]) {
          executed.push({ sql, binds });
          return stmt;
        },
        all() {
          const results = /FROM person p\b/.test(sql)
            ? (rows.persons ?? [])
            : /predicate IN/.test(sql)
              ? (rows.detailClaims ?? [])
              : (rows.nameClaims ?? []);
          return Promise.resolve({ results });
        },
      };
      return stmt;
    },
  };
  return { db: db as unknown as D1Database, executed };
}

const nameClaim = (personId: string, text: string) => ({
  id: `c_${personId}`,
  subject_person_id: personId,
  claim_kind: 'property',
  predicate: 'name.primary',
  object_person_id: null,
  value_json: JSON.stringify({ text, language: 'zh-Hans' }),
  status: 'accepted',
  confidence: 'high',
  created_by_user_id: 'u_1',
  created_at: '2026-01-01T00:00:00.000Z',
  updated_at: '2026-01-01T00:00:00.000Z',
  current_revision: 1,
});

const person = (id: string, createdAt = '2026-01-01T00:00:00.000Z') => ({
  id,
  status: 'active',
  created_at: createdAt,
  relative_count: 0,
});

const detailClaim = (personId: string, predicate: string, value: Record<string, unknown>) => ({
  ...nameClaim(personId, ''),
  id: `c_${personId}_${predicate}`,
  predicate,
  value_json: JSON.stringify(value),
});

describe('findPersonsByName', () => {
  it('matches both script forms of the query', async () => {
    const { db, executed } = fakeDb({
      persons: [person('p_1')],
      nameClaims: [nameClaim('p_1', '王贲')],
    });

    const page = await findPersonsByName(db, '王賁');

    expect(page.items).toEqual([
      {
        id: 'p_1',
        status: 'active',
        display_name: '王贲',
        merged_into_person_id: null,
        birth_text: null,
        death_text: null,
        origin_text: null,
        branch_text: null,
        also_known_as: [],
        relative_count: 0,
      },
    ]);
    expect(page.next_cursor).toBeNull();
    // Query expanded to 繁體 (as typed) + 简体 (as stored); the limit is the page
    // size plus one probe row.
    expect(executed[0]!.binds).toEqual(['%王賁%', '%王贲%', SEARCH_PAGE_SIZE + 1]);
  });

  it('adds batch-loaded identity clues that distinguish namesakes', async () => {
    const { db } = fakeDb({
      persons: [{ ...person('p_1'), relative_count: 4 }],
      nameClaims: [nameClaim('p_1', '王安石')],
      detailClaims: [
        detailClaim('p_1', 'birth.date', { date: { original_text: '1021年' } }),
        detailClaim('p_1', 'death.date', { date: { original_text: '1086年' } }),
        detailClaim('p_1', 'place.origin', { text: '臨川' }),
        detailClaim('p_1', 'lineage.branch', { text: '臨川王氏' }),
        detailClaim('p_1', 'name.courtesy', { text: '介甫' }),
      ],
    });

    const page = await findPersonsByName(db, '王安石');
    expect(page.items[0]).toMatchObject({
      birth_text: '1021年',
      death_text: '1086年',
      origin_text: '臨川',
      branch_text: '臨川王氏',
      also_known_as: ['介甫'],
      relative_count: 4,
    });
  });

  it('does not expand a script-neutral name', async () => {
    const { db, executed } = fakeDb({ persons: [], nameClaims: [] });
    await findPersonsByName(db, '王安石');
    expect(executed[0]!.binds).toEqual(['%王安石%', SEARCH_PAGE_SIZE + 1]);
  });

  it('anchors on the quoted JSON value when asked for exact matches', async () => {
    const { db, executed } = fakeDb({ persons: [], nameClaims: [] });
    await findPersonsByName(db, '王賁', { limit: 5, exactOnly: true });
    expect(executed[0]!.binds).toEqual(['%"王賁"%', '%"王贲"%', 6]);
  });

  it('only queries public persons and sourced name claims', async () => {
    const { db, executed } = fakeDb();
    await findPersonsByName(db, '王贲');
    const sql = executed[0]!.sql;
    expect(sql).toContain("p.status = 'active'");
    expect(sql).toContain("cl.predicate LIKE 'name.%'");
    expect(sql).toContain("cl.status IN ('accepted','disputed')");
  });

  it('returns nothing for a blank query without touching the database', async () => {
    const { db, executed } = fakeDb();
    expect(await findPersonsByName(db, '   ')).toEqual({ items: [], next_cursor: null });
    expect(executed).toEqual([]);
  });

  it('orders by the pagination key so pages cannot overlap or skip rows', async () => {
    const { db, executed } = fakeDb();
    await findPersonsByName(db, '王');
    expect(executed[0]!.sql).toContain('ORDER BY p.created_at ASC, p.id ASC');
  });

  it('drops the probe row and returns a cursor when more rows exist', async () => {
    // limit 2 → 3 rows fetched; the third only signals "there is more".
    const persons = [
      person('p_1', '2026-01-01T00:00:00.000Z'),
      person('p_2', '2026-01-02T00:00:00.000Z'),
      person('p_3', '2026-01-03T00:00:00.000Z'),
    ];
    const { db } = fakeDb({
      persons,
      nameClaims: [nameClaim('p_1', '王贲'), nameClaim('p_2', '王翦')],
    });

    const page = await findPersonsByName(db, '王', { limit: 2 });

    expect(page.items.map((p) => p.id)).toEqual(['p_1', 'p_2']);
    expect(page.next_cursor).not.toBeNull();
    // The cursor points at the last returned row, not at the probe row.
    expect(decodeSearchCursor(page.next_cursor!)).toEqual({
      created_at: '2026-01-02T00:00:00.000Z',
      id: 'p_2',
    });
  });

  it('has no cursor when the last page is exactly full', async () => {
    const { db } = fakeDb({
      persons: [person('p_1'), person('p_2')],
      nameClaims: [nameClaim('p_1', '王贲'), nameClaim('p_2', '王翦')],
    });
    const page = await findPersonsByName(db, '王', { limit: 2 });
    expect(page.items).toHaveLength(2);
    expect(page.next_cursor).toBeNull();
  });

  it('continues after the cursor by keyset, keeping the script expansion', async () => {
    const { db, executed } = fakeDb({ persons: [], nameClaims: [] });
    const cursor = encodeSearchCursor({ created_at: '2026-01-02T00:00:00.000Z', id: 'p_2' });

    await findPersonsByName(db, '王賁', { limit: 2, cursor });

    expect(executed[0]!.sql).toContain(
      'AND (p.created_at > ? OR (p.created_at = ? AND p.id > ?))',
    );
    // Script variants first (inside EXISTS), then the keyset, then the limit.
    expect(executed[0]!.binds).toEqual([
      '%王賁%',
      '%王贲%',
      '2026-01-02T00:00:00.000Z',
      '2026-01-02T00:00:00.000Z',
      'p_2',
      3,
    ]);
  });

  it('clamps an oversized limit and rejects a non-positive one', async () => {
    const { db, executed } = fakeDb();
    await findPersonsByName(db, '王', { limit: 5000 });
    expect(executed[0]!.binds.at(-1)).toBe(101);
    await findPersonsByName(db, '王', { limit: 0 });
    const searchQueries = executed.filter((entry) => /FROM person p\b/.test(entry.sql));
    expect(searchQueries[1]!.binds.at(-1)).toBe(2);
  });

  it('rejects a malformed cursor with a 400 instead of scanning everything', async () => {
    const { db, executed } = fakeDb();
    await expect(findPersonsByName(db, '王', { cursor: 'not-a-cursor' })).rejects.toMatchObject({
      status: 400,
      code: 'invalid_cursor',
    });
    expect(executed).toEqual([]);
  });
});

describe('search cursors', () => {
  it('round-trips the ordering key', () => {
    const key = { created_at: '2026-08-24T10:00:00.000Z', id: 'p_3kQx' };
    expect(decodeSearchCursor(encodeSearchCursor(key))).toEqual(key);
  });

  it('is opaque: not the raw key, and URL-safe', () => {
    const encoded = encodeSearchCursor({ created_at: '2026-08-24T10:00:00.000Z', id: 'p_3kQx' });
    expect(encoded).not.toContain('p_3kQx');
    expect(encoded).toMatch(/^[A-Za-z0-9_-]+$/);
  });

  it('rejects cursors missing either half', () => {
    const raw = (s: string) => btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    for (const bad of ['', '|p_1', '2026-01-01T00:00:00.000Z|', 'no-separator']) {
      expect(() => decodeSearchCursor(raw(bad))).toThrow();
    }
  });
});
