import { describe, expect, it } from 'vitest';
import {
  KinshipError,
  mapChineseKinshipTerm,
  normalizeRelationship,
  wouldCreateAncestorCycle,
} from './kinship.ts';
import { createRelationshipSchema, reviseClaimSchema } from './schemas.ts';

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

  it('stores adoptive parentage separately from biological parentage', () => {
    expect(normalizeRelationship('p_CHILD', 'adoptive_parent', 'p_PARENT')).toEqual({
      predicate: 'kinship.adoptive_parent_of',
      subject_person_id: 'p_PARENT',
      object_person_id: 'p_CHILD',
    });
    expect(normalizeRelationship('p_PARENT', 'adoptive_child', 'p_CHILD')).toEqual({
      predicate: 'kinship.adoptive_parent_of',
      subject_person_id: 'p_PARENT',
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

describe('normalizeRelationship: descent across generations', () => {
  it('stores "ancestor" as related --ancestor_of--> current', () => {
    expect(normalizeRelationship('p_ME', 'ancestor', 'p_OLD')).toEqual({
      predicate: 'kinship.ancestor_of',
      subject_person_id: 'p_OLD',
      object_person_id: 'p_ME',
    });
  });

  it('stores "descendant" the other way round, still one row', () => {
    expect(normalizeRelationship('p_OLD', 'descendant', 'p_ME')).toEqual({
      predicate: 'kinship.ancestor_of',
      subject_person_id: 'p_OLD',
      object_person_id: 'p_ME',
    });
  });

  it('refuses to relate a person to themselves', () => {
    expect(() => normalizeRelationship('p_ME', 'ancestor', 'p_ME')).toThrow(KinshipError);
  });
});

describe('createRelationshipSchema: exact generation count', () => {
  it('accepts an exact distance for ancestor and descendant claims', () => {
    expect(createRelationshipSchema.parse({
      relationship: 'ancestor',
      related_person_id: 'p_old',
      generation_count: 4,
    }).generation_count).toBe(4);
  });

  it('keeps the count optional when the source only confirms descent', () => {
    expect(createRelationshipSchema.parse({
      relationship: 'descendant',
      related_person_id: 'p_new',
    }).generation_count).toBeUndefined();
  });

  it('rejects one generation and counts on non-descent relationships', () => {
    expect(() => createRelationshipSchema.parse({
      relationship: 'ancestor',
      related_person_id: 'p_old',
      generation_count: 1,
    })).toThrow();
    expect(() => createRelationshipSchema.parse({
      relationship: 'parent',
      related_person_id: 'p_old',
      generation_count: 2,
    })).toThrow();
  });
});

describe('reviseClaimSchema: generation correction', () => {
  it('allows a versioned generation update or clearing it to unknown', () => {
    expect(reviseClaimSchema.parse({
      expected_revision: 1,
      patch: { generation_count: 8 },
    }).patch.generation_count).toBe(8);
    expect(reviseClaimSchema.parse({
      expected_revision: 2,
      patch: { generation_count: null },
    }).patch.generation_count).toBeNull();
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

  it('keeps adoptive terms distinct from biological parentage', () => {
    for (const term of ['嗣父', '養母', '养父']) {
      expect(mapChineseKinshipTerm(term).input).toBe('adoptive_parent');
    }
    for (const term of ['嗣子', '養女', '养子']) {
      expect(mapChineseKinshipTerm(term).input).toBe('adoptive_child');
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
    for (const term of ['兄', '弟', '女婿', '岳父', '姪孫', '十世孫', '妾', '外甥']) {
      expect(mapChineseKinshipTerm(term).input).toBeNull();
    }
  });

  it('handles empty input', () => {
    expect(mapChineseKinshipTerm(null)).toMatchObject({ input: null, term: '' });
  });
});
