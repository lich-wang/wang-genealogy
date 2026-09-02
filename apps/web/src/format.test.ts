import { describe, expect, it } from 'vitest';
import type { ClaimWithSources } from '@wang/domain';
import { relationshipParentRole } from './format';

function relation(parentRole: 'father' | 'mother' | null, locator: string | null): ClaimWithSources {
  return {
    claim: {
      id: 'c_test',
      subject_person_id: 'p_parent',
      claim_kind: 'relationship',
      predicate: 'kinship.parent_of',
      object_person_id: 'p_child',
      generation_count: null,
      parent_role: parentRole,
      value_json: null,
      status: 'accepted',
      confidence: 'medium',
      created_by_user_id: 'u_test',
      created_at: '2026-01-01T00:00:00.000Z',
      updated_at: '2026-01-01T00:00:00.000Z',
      current_revision: 1,
    },
    sources: locator ? [{
      id: 'cs_test', claim_id: 'c_test', source_id: 's_test', stance: 'supports', locator,
      quotation: null, interpretation_note: null, added_by_user_id: 'u_test',
      created_at: '2026-01-01T00:00:00.000Z', source: null,
    }] : [],
  };
}

describe('relationshipParentRole', () => {
  it('prefers the structured role', () => {
    expect(relationshipParentRole(relation('mother', 'P22（父）'))).toBe('mother');
  });

  it('conservatively recognizes legacy Wikidata father and mother locators', () => {
    expect(relationshipParentRole(relation(null, 'P22（父）'))).toBe('father');
    expect(relationshipParentRole(relation(null, 'P25（母）'))).toBe('mother');
  });

  it('keeps neutral or conflicting evidence unspecified', () => {
    expect(relationshipParentRole(relation(null, '条文：父母'))).toBeNull();
    const item = relation(null, 'P22（父）');
    item.sources.push({ ...item.sources[0]!, id: 'cs_mother', locator: 'P25（母）' });
    expect(relationshipParentRole(item)).toBeNull();
  });
});
