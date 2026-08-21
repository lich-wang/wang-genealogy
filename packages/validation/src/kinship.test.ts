import { describe, expect, it } from 'vitest';
import { normalizeRelationship, wouldCreateAncestorCycle, KinshipError } from './kinship.ts';

describe('normalizeRelationship', () => {
  it('stores "parent" as related --parent_of--> current (one direction)', () => {
    const edge = normalizeRelationship('p_CURRENT', 'parent', 'p_PARENT');
    expect(edge).toEqual({
      predicate: 'kinship.parent_of',
      subject_person_id: 'p_PARENT',
      object_person_id: 'p_CURRENT',
    });
  });

  it('stores "child" as current --parent_of--> related', () => {
    const edge = normalizeRelationship('p_CURRENT', 'child', 'p_CHILD');
    expect(edge).toEqual({
      predicate: 'kinship.parent_of',
      subject_person_id: 'p_CURRENT',
      object_person_id: 'p_CHILD',
    });
  });

  it('collapses spouse to a single canonical row regardless of direction', () => {
    const a = normalizeRelationship('p_aaa', 'spouse', 'p_zzz');
    const b = normalizeRelationship('p_zzz', 'spouse', 'p_aaa');
    expect(a).toEqual(b);
    expect(a.subject_person_id).toBe('p_aaa');
  });

  it('rejects self-relationship', () => {
    expect(() => normalizeRelationship('p_x', 'parent', 'p_x')).toThrow(KinshipError);
  });

  it('never infers gender/role — parent stays parent_of, not father/mother', () => {
    const edge = normalizeRelationship('p_c', 'parent', 'p_p');
    expect(edge.predicate).toBe('kinship.parent_of');
  });
});

describe('wouldCreateAncestorCycle', () => {
  const parents: Record<string, string[]> = {
    p_child: ['p_parent'],
    p_parent: ['p_grand'],
    p_grand: [],
  };
  const getParents = (id: string) => parents[id] ?? [];

  it('detects a direct cycle', () => {
    expect(wouldCreateAncestorCycle('p_child', 'p_grand', getParents)).toBe(true);
  });

  it('allows a non-cyclic edge', () => {
    expect(wouldCreateAncestorCycle('p_unrelated', 'p_child', getParents)).toBe(false);
  });
});
