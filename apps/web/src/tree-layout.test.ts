import { describe, expect, it } from 'vitest';
import type { ParentEdge, RelativeNode, SpouseEdge } from '@wang/domain';
import {
  NODE_HEIGHT,
  compactLifespan,
  compactYear,
  evidenceLabel,
  evidenceTooltip,
  UNKNOWN_DESCENT_SPAN,
  layoutTree,
  redundantDescent,
} from './tree-layout.ts';

const person = (id: string): RelativeNode => ({
  id,
  display_name: id,
  status: 'active',
  birth: null,
  death: null,
});

const parent = (parentId: string, childId: string): ParentEdge => ({
  parent_id: parentId,
  child_id: childId,
  claim_id: `c_${parentId}_${childId}`,
  status: 'accepted',
  citations: [],
});

const spouse = (a: string, b: string): SpouseEdge => ({
  a_id: a,
  b_id: b,
  claim_id: `c_${a}_${b}`,
  status: 'accepted',
  citations: [],
});

function graph(ids: string[], parentEdges: ParentEdge[], spouseEdges: SpouseEdge[] = []) {
  return {
    nodes: new Map(ids.map((id) => [id, person(id)])),
    parentEdges,
    spouseEdges,
  };
}

describe('layoutTree', () => {
  it('puts ancestors above and descendants below the person', () => {
    const layout = layoutTree(
      graph(['gp', 'dad', 'me', 'kid'], [parent('gp', 'dad'), parent('dad', 'me'), parent('me', 'kid')]),
      'me',
    );
    expect(layout.nodes.get('gp')!.generation).toBe(-2);
    expect(layout.nodes.get('dad')!.generation).toBe(-1);
    expect(layout.nodes.get('me')!.generation).toBe(0);
    expect(layout.nodes.get('kid')!.generation).toBe(1);
    // Rows run oldest first, so a smaller generation sits higher on the page.
    expect(layout.nodes.get('gp')!.y).toBeLessThan(layout.nodes.get('me')!.y);
    expect(layout.nodes.get('kid')!.y).toBeGreaterThan(layout.nodes.get('me')!.y);
  });

  it('places a spouse on the same row', () => {
    const layout = layoutTree(
      graph(['dad', 'mum', 'me'], [parent('dad', 'me'), parent('mum', 'me')], [spouse('dad', 'mum')]),
      'me',
    );
    expect(layout.nodes.get('dad')!.generation).toBe(-1);
    expect(layout.nodes.get('mum')!.generation).toBe(-1);
    expect(layout.nodes.get('dad')!.y).toBe(layout.nodes.get('mum')!.y);
  });

  it('keeps a couple side by side', () => {
    // Three people on one row, with the couple listed apart from each other.
    const layout = layoutTree(
      graph(
        ['a', 'b', 'c', 'kid'],
        [parent('a', 'kid'), parent('b', 'kid'), parent('c', 'kid')],
        [spouse('a', 'c')],
      ),
      'kid',
    );
    const xs = ['a', 'b', 'c'].map((id) => layout.nodes.get(id)!.x).sort((p, q) => p - q);
    const a = layout.nodes.get('a')!.x;
    const c = layout.nodes.get('c')!.x;
    const gap = Math.abs(xs.indexOf(a) - xs.indexOf(c));
    expect(gap).toBe(1);
  });

  it('centres narrower rows against the widest one', () => {
    const layout = layoutTree(
      graph(['me', 'k1', 'k2', 'k3'], [parent('me', 'k1'), parent('me', 'k2'), parent('me', 'k3')]),
      'me',
    );
    const children = ['k1', 'k2', 'k3'].map((id) => layout.nodes.get(id)!.x);
    const rootX = layout.nodes.get('me')!.x;
    const middle = (Math.min(...children) + Math.max(...children)) / 2;
    expect(Math.round(rootX)).toBe(Math.round(middle));
  });

  it('sizes the canvas to fit every row', () => {
    const layout = layoutTree(graph(['me', 'kid'], [parent('me', 'kid')]), 'me');
    expect(layout.generations).toEqual([0, 1]);
    expect(layout.height).toBeGreaterThan(NODE_HEIGHT);
    for (const placed of layout.nodes.values()) {
      expect(placed.x).toBeLessThan(layout.width);
      expect(placed.y).toBeLessThan(layout.height);
    }
  });

  it('still places someone the walk cannot reach', () => {
    // An orphan node (no edge to the root) must not vanish from the diagram.
    const layout = layoutTree(graph(['me', 'stranger'], []), 'me');
    expect(layout.nodes.has('stranger')).toBe(true);
  });
});

describe('evidenceLabel', () => {
  it('shortens a Wikidata property and a CBDB term', () => {
    expect(evidenceLabel([{ locator: 'P22（父）' }, { locator: '亲属关系：父' }])).toBe('P22·父');
  });

  it('collapses duplicates and caps the length', () => {
    expect(evidenceLabel([{ locator: 'P40（子女）' }, { locator: 'P40（子女）' }])).toBe('P40');
    expect(evidenceLabel([{ locator: 'P22（父）' }, { locator: 'P25（母）' }, { locator: 'P40（子女）' }])).toBe(
      'P22·P25…',
    );
  });

  it('falls back to a count, then says there is nothing', () => {
    expect(evidenceLabel([{ locator: null }])).toBe('来源 1');
    expect(evidenceLabel([])).toBe('无来源');
  });
});

describe('evidenceTooltip', () => {
  it('lists each source with its locator', () => {
    expect(
      evidenceTooltip([
        { source_title: '维基数据：王羲之', locator: 'P40（子女）' },
        { source_title: '中文维基百科：王羲之', locator: null },
      ]),
    ).toBe('维基数据：王羲之（P40（子女））\n中文维基百科：王羲之');
  });

  it('says so when a line rests on nothing', () => {
    expect(evidenceTooltip([])).toBe('尚无来源');
  });
});

describe('compactYear', () => {
  it('keeps the year and drops the rest', () => {
    expect(compactYear('23年10月6日（新地皇四年）')).toBe('23年');
    expect(compactYear('前208年')).toBe('前208年');
    expect(compactYear('公元前41年')).toBe('公元前41年');
    expect(compactYear('前1世纪')).toBe('前1世纪');
    expect(compactYear('1480年代')).toBe('1480年代');
  });

  it('treats an unknown value as no value', () => {
    expect(compactYear('不详')).toBeNull();
    expect(compactYear(null)).toBeNull();
  });

  it('truncates anything else rather than overflowing the box', () => {
    expect(compactYear('清光绪二十年冬月')).toBe('清光绪二十年…');
  });
});

describe('compactLifespan', () => {
  it('marks the unknown half', () => {
    expect(compactLifespan({ birth: '338年', death: null })).toBe('338年–？');
    expect(compactLifespan({ birth: null, death: '不详' })).toBeNull();
  });
});

describe('layoutTree: descent across unnamed generations', () => {
  const node = (id: string) => ({
    id,
    display_name: id,
    status: 'active' as const,
    birth: null,
    death: null,
  });
  const parent = (p: string, c: string) => ({
    claim_id: `p:${p}:${c}`,
    status: 'accepted' as const,
    citations: [],
    parent_id: p,
    child_id: c,
  });
  const descent = (a: string, d: string, generations: number | null) => ({
    claim_id: `d:${a}:${d}`,
    status: 'accepted' as const,
    citations: [],
    ancestor_id: a,
    descendant_id: d,
    generations,
  });

  /** 姬晋 → 宗敬, 宗敬 ⇢ 王错 (8 generations), 姬晋 ⇢ 王翦 (distance unknown). */
  const graph = {
    nodes: new Map([
      ['jijin', node('jijin')],
      ['zongjing', node('zongjing')],
      ['wangcuo', node('wangcuo')],
      ['wangjian', node('wangjian')],
      ['wangli', node('wangli')],
    ]),
    parentEdges: [parent('jijin', 'zongjing')],
    spouseEdges: [],
    descentEdges: [
      descent('zongjing', 'wangcuo', 8),
      descent('jijin', 'wangjian', null),
      descent('wangjian', 'wangli', 2),
    ],
  };

  it('puts a 八代孫 eight generations down, not one', () => {
    const layout = layoutTree(graph, 'jijin');
    expect(layout.nodes.get('zongjing')?.generation).toBe(1);
    expect(layout.nodes.get('wangcuo')?.generation).toBe(9);
  });

  it('never seats two generations in the same row', () => {
    const layout = layoutTree(graph, 'jijin');
    const byRow = new Map<number, string[]>();
    for (const [id, placed] of layout.nodes) {
      byRow.set(placed.generation, [...(byRow.get(placed.generation) ?? []), id]);
    }
    // 宗敬 is a son; 王翦 is an unknown distance away. Same row would say they
    // are the same generation, which is exactly the claim nobody made.
    expect(byRow.get(1)).toEqual(['zongjing']);
    expect(layout.nodes.get('wangjian')?.generation).toBe(UNKNOWN_DESCENT_SPAN);
  });

  it('counts a stated distance from wherever the ancestor landed', () => {
    const layout = layoutTree(graph, 'jijin');
    const jian = layout.nodes.get('wangjian')!.generation;
    expect(layout.nodes.get('wangli')?.generation).toBe(jian + 2);
  });

  it('keeps every row internally one generation', () => {
    const layout = layoutTree(graph, 'jijin');
    for (const g of layout.generations) {
      const inRow = [...layout.nodes.values()].filter((p) => p.generation === g);
      expect(new Set(inRow.map((p) => p.generation)).size).toBe(1);
    }
  });
});

describe('layoutTree: expanding below a line of descent', () => {
  const node = (id: string) => ({
    id,
    display_name: id,
    status: 'active' as const,
    birth: null,
    death: null,
  });
  const parent = (p: string, c: string) => ({
    claim_id: `p:${p}:${c}`,
    status: 'accepted' as const,
    citations: [],
    parent_id: p,
    child_id: c,
  });
  const descent = (a: string, d: string, generations: number | null) => ({
    claim_id: `d:${a}:${d}`,
    status: 'accepted' as const,
    citations: [],
    ancestor_id: a,
    descendant_id: d,
    generations,
  });

  /**
   * 姬晋 reaches 王元 only through lines of descent; 王诚 is 王元's son by an
   * ordinary parent link. Nothing but 王元's own placement can position him.
   */
  it('places the children of someone reached only by descent', () => {
    const layout = layoutTree(
      {
        nodes: new Map([
          ['jijin', node('jijin')],
          ['wangjian', node('wangjian')],
          ['wangyuan', node('wangyuan')],
          ['wangcheng', node('wangcheng')],
        ]),
        parentEdges: [parent('wangyuan', 'wangcheng')],
        spouseEdges: [],
        descentEdges: [descent('jijin', 'wangjian', null), descent('wangjian', 'wangyuan', 3)],
      },
      'jijin',
    );
    const yuan = layout.nodes.get('wangyuan')!.generation;
    expect(yuan).toBe(UNKNOWN_DESCENT_SPAN + 3);
    // A son is one row below his father, not dumped on the root's row.
    expect(layout.nodes.get('wangcheng')?.generation).toBe(yuan + 1);
    expect(layout.nodes.get('wangcheng')?.generation).not.toBe(0);
  });

  it('keeps walking parentage after each descent hop', () => {
    const layout = layoutTree(
      {
        nodes: new Map([
          ['root', node('root')],
          ['far', node('far')],
          ['kid', node('kid')],
          ['grandkid', node('grandkid')],
        ]),
        parentEdges: [parent('far', 'kid'), parent('kid', 'grandkid')],
        spouseEdges: [],
        descentEdges: [descent('root', 'far', 5)],
      },
      'root',
    );
    expect(layout.nodes.get('far')?.generation).toBe(5);
    expect(layout.nodes.get('kid')?.generation).toBe(6);
    expect(layout.nodes.get('grandkid')?.generation).toBe(7);
  });
});

describe('redundantDescent', () => {
  const P = (parent_id: string, child_id: string) => ({ parent_id, child_id });
  const D = (claim_id: string, ancestor_id: string, descendant_id: string) => ({
    claim_id,
    ancestor_id,
    descendant_id,
  });

  it('drops a line the named chain already draws', () => {
    // 王翦 → 王賁 → 王離 is on the diagram, so 「王翦之孫王離」 adds nothing.
    const covered = redundantDescent(
      [P('jian', 'ben'), P('ben', 'li')],
      [D('d1', 'jian', 'li')],
    );
    expect([...covered]).toEqual(['d1']);
  });

  it('keeps a line where the chain is missing', () => {
    const covered = redundantDescent([P('jian', 'ben')], [D('d1', 'jian', 'li')]);
    expect(covered.size).toBe(0);
  });

  it('keeps a line where only part of the chain is loaded', () => {
    // The middle generation is in the database but not in this slice; until it
    // is on screen the reader has no chain to follow.
    const covered = redundantDescent([P('ben', 'li')], [D('d1', 'jian', 'li')]);
    expect(covered.size).toBe(0);
  });

  it('does not mistake a chain running the other way for a match', () => {
    const covered = redundantDescent(
      [P('li', 'ben'), P('ben', 'jian')],
      [D('d1', 'jian', 'li')],
    );
    expect(covered.size).toBe(0);
  });

  it('survives a cycle in the loaded edges', () => {
    const covered = redundantDescent(
      [P('a', 'b'), P('b', 'a')],
      [D('d1', 'a', 'zzz')],
    );
    expect(covered.size).toBe(0);
  });
});
