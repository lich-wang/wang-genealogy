import { describe, expect, it } from 'vitest';
import { findLoops } from './loops.mjs';

describe('findLoops', () => {
  it('leaves an acyclic line of descent alone', () => {
    const loops = findLoops([
      ['錯', '賁'],
      ['賁', '渝'],
      ['渝', '息'],
    ]);
    expect(loops.size).toBe(0);
  });

  it('finds the loop the 宰相世系表 import folded shut', () => {
    // 錯生賁，賁生渝，渝生息，息生恢，恢生元，元生頤，頤生翦，翦生賁 — the last
    // 賁 is a different man, but matched by name he closes the chain on himself.
    const loops = findLoops([
      ['宗敬', '錯'],
      ['錯', '賁'],
      ['賁', '渝'],
      ['渝', '息'],
      ['息', '恢'],
      ['恢', '元'],
      ['元', '頤'],
      ['頤', '翦'],
      ['翦', '賁'],
    ]);
    expect([...loops.get('賁')].sort()).toEqual(
      ['元', '恢', '息', '渝', '翦', '賁', '頤'].sort(),
    );
    // 宗敬 and 錯 are above the loop, not in it: they stay importable.
    expect(loops.has('宗敬')).toBe(false);
    expect(loops.has('錯')).toBe(false);
  });

  it('catches an edge that reverses one already stored', () => {
    const loops = findLoops([
      ['王翦', '王賁'],
      ['王賁', '王離'],
      ['王離', '王翦'],
    ]);
    expect(loops.size).toBe(3);
    expect(loops.get('王翦')).toBe(loops.get('王離'));
  });

  it('catches a person recorded as their own forebear', () => {
    const loops = findLoops([['王導', '王導']]);
    expect([...loops.keys()]).toEqual(['王導']);
  });

  it('keeps two separate loops separate', () => {
    const loops = findLoops([
      ['a', 'b'],
      ['b', 'a'],
      ['c', 'd'],
      ['d', 'c'],
      ['b', 'c'],
    ]);
    expect(loops.get('a')).not.toBe(loops.get('c'));
    expect(loops.get('a')).toHaveLength(2);
    expect(loops.get('c')).toHaveLength(2);
  });

  it('reports a diamond as acyclic — two parents is not a loop', () => {
    // 王恢 briefly had three fathers. Wrong, but not a cycle, and the guard must
    // not block that case: it is for a human to judge, not for this to refuse.
    const loops = findLoops([
      ['王劭', '王恢'],
      ['王協', '王恢'],
      ['王導', '王劭'],
      ['王導', '王協'],
    ]);
    expect(loops.size).toBe(0);
  });

  it('does not overflow on a deep chain', () => {
    const edges = [];
    for (let i = 0; i < 5000; i += 1) edges.push([`p${i}`, `p${i + 1}`]);
    expect(findLoops(edges).size).toBe(0);
    edges.push(['p5000', 'p0']);
    expect(findLoops(edges).size).toBe(5001);
  });
});
