import { describe, expect, it } from 'vitest';
import { MAX_NODES, loadAllRelatives, loadRelatives } from './relatives.ts';

/**
 * A small family, stored the way the schema stores it — one `parent_of` row per
 * pair, never mirrored:
 *
 *   grandpa → dad → me → kid
 *   mum (dad's spouse) → me
 */
const PARENT_EDGES = [
  { claim_id: 'c_1', status: 'accepted', parent_id: 'p_grandpa', child_id: 'p_dad' },
  { claim_id: 'c_2', status: 'accepted', parent_id: 'p_dad', child_id: 'p_me' },
  { claim_id: 'c_3', status: 'accepted', parent_id: 'p_mum', child_id: 'p_me' },
  { claim_id: 'c_4', status: 'accepted', parent_id: 'p_me', child_id: 'p_kid' },
  { claim_id: 'c_5', status: 'accepted', parent_id: 'p_kid', child_id: 'p_grandkid' },
  { claim_id: 'c_8', status: 'accepted', parent_id: 'p_grandpa', child_id: 'p_uncle' },
  { claim_id: 'c_9', status: 'accepted', parent_id: 'p_uncle', child_id: 'p_cousin' },
];
const SPOUSE_EDGES = [{ claim_id: 'c_6', status: 'accepted', a_id: 'p_dad', b_id: 'p_mum' }];
/**
 * Descent across generations nobody named: the founder is somewhere above
 * grandpa, and the source does not say how far.
 */
const DESCENT_EDGES = [
  { claim_id: 'c_7', status: 'accepted', parent_id: 'p_founder', child_id: 'p_grandpa' },
];
const CITATIONS = [
  { claim_id: 'c_2', locator: 'P22（父）', title: '维基数据：某人' },
  { claim_id: 'c_2', locator: '亲属关系：父', title: 'CBDB：某人' },
  { claim_id: 'c_7', locator: '条文：后代（代数不明）', title: '中文维基百科：某族' },
];

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
          if (sql.includes("c.claim_kind = 'relationship'") && sql.includes("c.predicate IN ('kinship.parent_of'")) {
            return Promise.resolve({
              results: [
                ...PARENT_EDGES.map((edge) => ({
                  ...edge,
                  predicate: 'kinship.parent_of',
                  subject_id: edge.parent_id,
                  object_id: edge.child_id,
                  generation_count: null,
                })),
                ...DESCENT_EDGES.map((edge) => ({
                  ...edge,
                  predicate: 'kinship.ancestor_of',
                  subject_id: edge.parent_id,
                  object_id: edge.child_id,
                  generation_count: null,
                })),
                ...SPOUSE_EDGES.map((edge) => ({
                  ...edge,
                  predicate: 'kinship.spouse_of',
                  subject_id: edge.a_id,
                  object_id: edge.b_id,
                  generation_count: null,
                })),
              ],
            });
          }
          if (sql.includes("c.predicate IN ('kinship.parent_of'") && sql.includes(' AS parent_id')) {
            const goingUp = sql.includes('c.object_person_id IN');
            return Promise.resolve({
              results: PARENT_EDGES.filter((e) => ids.has(goingUp ? e.child_id : e.parent_id)),
            });
          }
          // The predicate travels as a bound parameter, not as a literal.
          const predicate = stmt.binds[0];
          if (predicate === 'kinship.parent_of' || predicate === 'kinship.ancestor_of') {
            const rows = predicate === 'kinship.parent_of' ? PARENT_EDGES : DESCENT_EDGES;
            const goingUp = sql.includes('c.object_person_id IN');
            return Promise.resolve({
              results: rows.filter((e) => ids.has(goingUp ? e.child_id : e.parent_id)),
            });
          }
          if (sql.includes("'kinship.spouse_of'")) {
            return Promise.resolve({
              results: SPOUSE_EDGES.filter((e) => ids.has(e.a_id) || ids.has(e.b_id)),
            });
          }
          if (sql.includes('FROM claim_source cs')) {
            return Promise.resolve({ results: CITATIONS.filter((c) => ids.has(c.claim_id)) });
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
    expect(graph.parent_edges).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ parent_id: 'p_dad', child_id: 'p_me' }),
        expect.objectContaining({ parent_id: 'p_me', child_id: 'p_kid' }),
      ]),
    );
    // Never a mirrored row for the same pair.
    expect(graph.parent_edges.filter((e) => e.child_id === 'p_me')).toHaveLength(2);
  });

  it('carries the evidence for each line so a diagram can label it', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 1, down: 0 });
    const fromDad = graph.parent_edges.find((e) => e.parent_id === 'p_dad');
    expect(fromDad?.citations).toEqual([
      { source_title: '维基数据：某人', locator: 'P22（父）' },
      { source_title: 'CBDB：某人', locator: '亲属关系：父' },
    ]);
    expect(fromDad?.parent_role).toBe('father');
    // An edge nobody cited still renders; it just has nothing to show.
    expect(graph.parent_edges.find((e) => e.parent_id === 'p_mum')?.citations).toEqual([]);
    expect(graph.parent_edges.find((e) => e.parent_id === 'p_mum')?.parent_role).toBeNull();
  });

  it('keeps spouse edges only when both people are in the slice', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 1, down: 0 });
    expect(graph.spouse_edges).toEqual([
      expect.objectContaining({ a_id: 'p_dad', b_id: 'p_mum' }),
    ]);
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

describe('loadAllRelatives', () => {
  it('loads the whole connected family, including a branch reached by going up then down', async () => {
    const { db } = fakeDb();
    const graph = await loadAllRelatives(db, 'p_me');
    expect(graph.scope).toBe('all');
    expect(graph.nodes.map((node) => node.id)).toEqual(expect.arrayContaining([
      'p_founder',
      'p_me',
      'p_uncle',
      'p_cousin',
      'p_grandkid',
    ]));
    expect(graph.parent_edges).toEqual(expect.arrayContaining([
      expect.objectContaining({ parent_id: 'p_uncle', child_id: 'p_cousin' }),
    ]));
    expect(graph.truncated).toBe(false);
  });

  it('reports when the global safety cap stops traversal', async () => {
    const { db } = fakeDb();
    const graph = await loadAllRelatives(db, 'p_me', { limit: 3 });
    expect(graph.nodes).toHaveLength(3);
    expect(graph.truncated).toBe(true);
  });
});

describe('loadRelatives: descent across unnamed generations', () => {
  it('reaches an ancestor joined only by a line of descent', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 3, down: 0 });
    expect(graph.nodes.map((n) => n.id)).toContain('p_founder');
    expect(graph.descent_edges).toEqual([
      expect.objectContaining({ ancestor_id: 'p_founder', descendant_id: 'p_grandpa' }),
    ]);
  });

  it('keeps it out of parent_edges — it is not a parent link', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 3, down: 0 });
    expect(graph.parent_edges.some((e) => e.parent_id === 'p_founder')).toBe(false);
  });

  it('carries its citation, so the line can say what it rests on', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 3, down: 0 });
    expect(graph.descent_edges[0]?.citations).toEqual([
      { source_title: '中文维基百科：某族', locator: '条文：后代（代数不明）' },
    ]);
  });

  it('is not reached when the walk does not go that far up', async () => {
    const { db } = fakeDb();
    const graph = await loadRelatives(db, 'p_me', { up: 1, down: 0 });
    expect(graph.nodes.map((n) => n.id)).not.toContain('p_founder');
  });
});

describe('a stated generation count', () => {
  /** One ancestor, one descendant, and whatever the citation says about them. */
  function dbStating(locator: string, generationCount?: number) {
    const edge = {
      claim_id: 'c_x',
      status: 'accepted',
      parent_id: 'p_old',
      child_id: 'p_new',
      generation_count: generationCount ?? null,
    };
    return {
      prepare(sql: string) {
        const stmt = {
          binds: [] as unknown[],
          bind(...binds: unknown[]) {
            stmt.binds = binds;
            return stmt;
          },
          all() {
            const ids = new Set(stmt.binds.filter((b): b is string => typeof b === 'string'));
            if (stmt.binds[0] === 'kinship.ancestor_of') {
              const goingUp = sql.includes('c.object_person_id IN');
              return Promise.resolve({
                results: [edge].filter((e) => ids.has(goingUp ? e.child_id : e.parent_id)),
              });
            }
            if (sql.includes('FROM claim_source cs')) {
              return Promise.resolve({
                results: ids.has('c_x') ? [{ claim_id: 'c_x', locator, title: '某来源' }] : [],
              });
            }
            if (sql.includes('FROM person p')) {
              return Promise.resolve({
                results: [...ids].map((id) => ({ id, status: 'active', birth: null, death: null })),
              });
            }
            return Promise.resolve({ results: [] });
          },
        };
        return stmt;
      },
    } as unknown as D1Database;
  }

  it('is read off the locator, where the source put it', async () => {
    const graph = await loadRelatives(dbStating('条文：条文识读（孙）（8世）'), 'p_old', {
      up: 0,
      down: 1,
    });
    expect(graph.descent_edges[0]?.generations).toBe(8);
  });

  it('prefers the structured relationship count over a legacy locator', async () => {
    const graph = await loadRelatives(dbStating('條文（8世）', 4), 'p_old', { up: 0, down: 1 });
    expect(graph.descent_edges[0]?.generations).toBe(4);
  });

  it('reads a Chinese numeral too', async () => {
    const graph = await loadRelatives(dbStating('条文：条文识读（四世孫）（四世）'), 'p_old', {
      up: 0,
      down: 1,
    });
    expect(graph.descent_edges[0]?.generations).toBe(4);
  });

  it('is null when the source only said there was descent', async () => {
    const graph = await loadRelatives(dbStating('条文：王氏得姓始祖（代数不明）'), 'p_old', {
      up: 0,
      down: 1,
    });
    expect(graph.descent_edges[0]?.generations).toBeNull();
  });
});
