import { describe, expect, it } from 'vitest';
import { MAX_NODES, loadRelatives } from './relatives.ts';

/**
 * A small family, stored the way the schema stores it — one `parent_of` row per
 * pair, never mirrored:
 *
 *   grandpa → dad → me → kid
 *   mum (dad's spouse) → me
 */
const PARENT_EDGES = [
  { parent_id: 'p_grandpa', child_id: 'p_dad' },
  { parent_id: 'p_dad', child_id: 'p_me' },
  { parent_id: 'p_mum', child_id: 'p_me' },
  { parent_id: 'p_me', child_id: 'p_kid' },
  { parent_id: 'p_kid', child_id: 'p_grandkid' },
];
const SPOUSE_EDGES = [{ a_id: 'p_dad', b_id: 'p_mum' }];

function fakeDb() {
  const queries: string[] = [];
  const db = {
    prepare(sql: string) {
      const stmt = {
        binds: [] as unknown[],
        bind(...binds: unknown[]) {
          stmt.binds = binds;
          queries.push(sql);
          return stmt;
        },
        all() {
          const ids = new Set(stmt.binds.filter((b): b is string => typeof b === 'string'));
          if (sql.includes("'kinship.parent_of'")) {
            const goingUp = sql.includes('c.object_person_id IN');
            return Promise.resolve({
              results: PARENT_EDGES.filter((e) => ids.has(goingUp ? e.child_id : e.parent_id)),
            });
          }
          if (sql.includes("'kinship.spouse_of'")) {
            return Promise.resolve({
              results: SPOUSE_EDGES.filter((e) => ids.has(e.a_id) || ids.has(e.b_id)),
            });
          }
          if (sql.includes('FROM person p')) {
            return Promise.resolve({
              results: [...ids].map((id) => ({ id, status: 'active', birth: null, death: null })),
            });
          }
          // nameOf's claim lookup
          return Promise.resolve({ results: [] });
        },
      };
      return stmt;
    },
  };
  return { db: db as unknown as D1Database, queries };
}

describe('loadRelatives', () => {
  it('walks the requested number of generations in each direction', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 2, down: 2 });
    const ids = graph.nodes.map((n) => n.id).sort();
    expect(ids).toEqual(['p_dad', 'p_grandkid', 'p_grandpa', 'p_kid', 'p_me', 'p_mum'].sort());
    expect(graph.truncated).toBe(false);
  });

  it('stops at the requested depth', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 1, down: 1 });
    const ids = graph.nodes.map((n) => n.id).sort();
    // No grandparent, no grandchild — but the spouse of an included parent is
    // still shown, otherwise a couple would appear as one person.
    expect(ids).toEqual(['p_dad', 'p_kid', 'p_me', 'p_mum'].sort());
  });

  it('reads the single stored direction from both ends', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 1, down: 1 });
    expect(graph.parent_edges).toContainEqual({ parent_id: 'p_dad', child_id: 'p_me' });
    expect(graph.parent_edges).toContainEqual({ parent_id: 'p_me', child_id: 'p_kid' });
    // Never a mirrored row for the same pair.
    expect(graph.parent_edges.filter((e) => e.child_id === 'p_me')).toHaveLength(2);
  });

  it('keeps spouse edges only when both people are in the slice', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 1, down: 0 });
    expect(graph.spouse_edges).toEqual([{ a_id: 'p_dad', b_id: 'p_mum' }]);
    const onlyRoot = await loadRelatives(db, 'p_grandkid', { up: 0, down: 0 });
    expect(onlyRoot.spouse_edges).toEqual([]);
  });

  it('clamps absurd depths instead of walking the whole database', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 99, down: 99 });
    expect(graph.up).toBeLessThanOrEqual(4);
    expect(graph.down).toBeLessThanOrEqual(4);
  });

  it('reports truncation rather than silently returning a partial tree', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 2, down: 2, limit: 2 });
    expect(graph.truncated).toBe(true);
    expect(graph.nodes.length).toBeLessThanOrEqual(2);
    expect(MAX_NODES).toBeGreaterThan(2);
  });

  it('returns just the person when no generations are requested', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 0, down: 0 });
    expect(graph.nodes.map((n) => n.id)).toEqual(['p_me']);
    expect(graph.parent_edges).toEqual([]);
  });
});
