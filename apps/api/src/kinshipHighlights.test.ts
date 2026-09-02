import { describe, expect, it } from 'vitest';
import { loadKinshipHighlights, SURNAME_PROGENITOR_NAMES } from './kinshipHighlights.ts';

const nameClaim = (personId: string, text: string) => ({
  id: `c_${personId}`,
  subject_person_id: personId,
  claim_kind: 'property',
  predicate: 'name.primary',
  object_person_id: null,
  generation_count: null,
  value_json: JSON.stringify({ text, language: 'zh-Hans' }),
  status: 'accepted',
  confidence: 'high',
  created_by_user_id: 'u_1',
  created_at: '2026-01-01T00:00:00.000Z',
  updated_at: '2026-01-01T00:00:00.000Z',
  current_revision: 1,
});

function fakeDb() {
  const executed: Array<{ sql: string; binds: unknown[] }> = [];
  const db = {
    prepare(sql: string) {
      const statement = {
        binds: [] as unknown[],
        bind(...binds: unknown[]) {
          statement.binds = binds;
          executed.push({ sql, binds });
          return statement;
        },
        all() {
          if (sql.includes('AS progenitor_rank')) {
            return Promise.resolve({
              results: [
                { id: 'p_jin', relative_count: 2, progenitor_rank: 0 },
                { id: 'p_zong', relative_count: 1, progenitor_rank: 1 },
                { id: 'p_other', relative_count: 20, progenitor_rank: 2 },
              ],
            });
          }
          return Promise.resolve({
            results: [
              nameClaim('p_jin', '姬晋'),
              nameClaim('p_zong', '宗敬'),
              nameClaim('p_other', '王安石'),
            ],
          });
        },
      };
      return statement;
    },
  };
  return { db: db as unknown as D1Database, executed };
}

describe('loadKinshipHighlights', () => {
  it('keeps surname progenitors ahead of people with more recorded relatives', async () => {
    const { db } = fakeDb();
    const items = await loadKinshipHighlights(db, 8);

    expect(items.map((item) => item.display_name)).toEqual(['姬晋', '宗敬', '王安石']);
    expect(items.map((item) => item.is_surname_progenitor)).toEqual([true, true, false]);
  });

  it('uses the closed policy list and then kinship count in its ordering', async () => {
    const { db, executed } = fakeDb();
    await loadKinshipHighlights(db, 8);

    expect(executed[0]?.sql).toContain('ORDER BY progenitor_rank ASC, relative_count DESC');
    expect(executed[0]?.binds).toEqual([...SURNAME_PROGENITOR_NAMES, 8]);
  });
});
