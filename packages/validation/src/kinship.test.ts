import { describe, expect, it } from 'vitest';
import {
  KinshipError,
  mapChineseKinshipTerm,
  normalizeRelationship,
  wouldCreateAncestorCycle,
} from './kinship.ts';

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

describe('mapChineseKinshipTerm', () => {
  it('maps the terms an external database writes for a parent', () => {
    for (const term of ['父', '母', '生父', '嫡母']) {
      expect(mapChineseKinshipTerm(term).input).toBe('parent');
    }
  });

  it('maps ordinal and two-character child terms alike', () => {
    for (const term of ['子', '女', '長子', '長女', '次子', '幼女', '庶子', '兒子', '女兒']) {
      expect(mapChineseKinshipTerm(term).input).toBe('child');
    }
  });

  it('maps spouse terms including later marriages', () => {
    for (const term of ['妻', '妻子', '夫', '繼室', '第二任妻']) {
      expect(mapChineseKinshipTerm(term).input).toBe('spouse');
    }
  });

  it('takes the first alias when a source packs several into one field', () => {
    expect(mapChineseKinshipTerm('從祖;伯叔祖')).toMatchObject({
      input: null,
      term: '從祖',
      raw: '從祖;伯叔祖',
    });
  });

  it('refuses to restate relations this model cannot express', () => {
    // Siblings, in-laws and distant descendants have no predicate here, and
    // 妾 is not the same statement as marriage.
    for (const term of ['兄', '弟', '女婿', '岳父', '姪孫', '十世孫', '妾', '嗣子', '外甥']) {
      expect(mapChineseKinshipTerm(term).input).toBeNull();
    }
  });

  it('handles empty input', () => {
    expect(mapChineseKinshipTerm(null)).toMatchObject({ input: null, term: '' });
  });
});
