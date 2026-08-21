import { describe, expect, it } from 'vitest';
import { findPersonsByName } from './nameSearch.ts';

interface Executed {
  sql: string;
  binds: unknown[];
}

/**
 * Minimal D1 stand-in: records every statement and answers from canned rows,
 * chosen by which table the statement reads.
 */
function fakeDb(rows: { persons?: unknown[]; nameClaims?: unknown[] } = {}) {
  const executed: Executed[] = [];
  const db = {
    prepare(sql: string) {
      const stmt = {
        bind(...binds: unknown[]) {
          executed.push({ sql, binds });
          return stmt;
        },
        all() {
          const results = /FROM claim\b/.test(sql) ? (rows.nameClaims ?? []) : (rows.persons ?? []);
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

describe('findPersonsByName', () => {
  it('matches both script forms of the query', async () => {
    const { db, executed } = fakeDb({
      persons: [{ id: 'p_1', status: 'active' }],
      nameClaims: [nameClaim('p_1', '王贲')],
    });

    const found = await findPersonsByName(db, '王賁');

    expect(found).toEqual([
      { id: 'p_1', status: 'active', display_name: '王贲', merged_into_person_id: null },
    ]);
    // Query expanded to 繁體 (as typed) + 简体 (as stored).
    expect(executed[0]!.binds).toEqual(['%王賁%', '%王贲%', 50]);
  });

  it('does not expand a script-neutral name', async () => {
    const { db, executed } = fakeDb({ persons: [], nameClaims: [] });
    await findPersonsByName(db, '王安石');
    expect(executed[0]!.binds).toEqual(['%王安石%', 50]);
  });

  it('anchors on the quoted JSON value when asked for exact matches', async () => {
    const { db, executed } = fakeDb({ persons: [], nameClaims: [] });
    await findPersonsByName(db, '王賁', { limit: 5, exactOnly: true });
    expect(executed[0]!.binds).toEqual(['%"王賁"%', '%"王贲"%', 5]);
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
    expect(await findPersonsByName(db, '   ')).toEqual([]);
    expect(executed).toEqual([]);
  });
});
