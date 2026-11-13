import { describe, expect, it } from 'vitest';
import {
  INACTIVE_CLAIM_STATUSES,
  buildEdges,
  claimFingerprint,
  isActiveClaim,
  validateRelationshipEndpoints,
} from './relationships.mjs';

const relationship = (overrides = {}, objectPerson = null) => ({
  claim: {
    id: 'c_1',
    subject_person_id: 'p_parent',
    object_person_id: 'p_child',
    predicate: 'kinship.father_of',
    parent_role: 'father',
    status: 'accepted',
    ...overrides,
  },
  sources: [],
  object_person: objectPerson,
});

const record = (id, relationships = {}) => ({ id, status: 'active', properties: [], relationships });

// One directed claim stored once in each endpoint's file: the display-only
// object_person is the *other* endpoint in that particular file.
const twoSidedRecords = () => {
  const claim = {
    id: 'c_1',
    subject_person_id: 'p_parent',
    object_person_id: 'p_child',
    predicate: 'kinship.father_of',
    parent_role: 'father',
    status: 'accepted',
  };
  return new Map([
    ['p_parent', record('p_parent', { children: [{ claim: { ...claim }, sources: [], object_person: { id: 'p_child' } }] })],
    ['p_child', record('p_child', { parents: [{ claim: { ...claim }, sources: [], object_person: { id: 'p_parent' } }] })],
  ]);
};

describe('isActiveClaim', () => {
  it('only excludes retracted and superseded claims', () => {
    for (const status of ['accepted', 'disputed', 'proposed', undefined]) {
      expect(isActiveClaim({ status })).toBe(true);
    }
    expect(INACTIVE_CLAIM_STATUSES).toEqual(['retracted', 'superseded']);
    for (const status of INACTIVE_CLAIM_STATUSES) expect(isActiveClaim({ status })).toBe(false);
  });
});

describe('buildEdges', () => {
  it('emits one edge per relationship predicate using the claim endpoints', () => {
    const edges = buildEdges([
      relationship({ id: 'c_parent', predicate: 'kinship.father_of' }, { id: 'p_child' }),
      relationship({ id: 'c_spouse', predicate: 'kinship.spouse_of' }),
      relationship({ id: 'c_sibling', predicate: 'kinship.sibling_of' }),
      relationship({ id: 'c_ancestor', predicate: 'kinship.ancestor_of', generation_count: 3 }),
    ]);
    expect(edges.parent_edges).toHaveLength(1);
    expect(edges.parent_edges[0]).toMatchObject({ claim_id: 'c_parent', parent_id: 'p_parent', child_id: 'p_child', parent_role: 'father', status: 'accepted' });
    expect(edges.spouse_edges[0]).toMatchObject({ claim_id: 'c_spouse', a_id: 'p_parent', b_id: 'p_child' });
    expect(edges.sibling_edges[0]).toMatchObject({ claim_id: 'c_sibling', a_id: 'p_parent', b_id: 'p_child' });
    expect(edges.descent_edges[0]).toMatchObject({ claim_id: 'c_ancestor', ancestor_id: 'p_parent', descendant_id: 'p_child', generations: 3 });
  });

  it.each(INACTIVE_CLAIM_STATUSES)('does not emit edges for %s relationships', (status) => {
    const edges = buildEdges([
      relationship({ id: 'c_1', status }),
      relationship({ id: 'c_2', predicate: 'kinship.spouse_of', status }),
      relationship({ id: 'c_3', predicate: 'kinship.sibling_of', status }),
      relationship({ id: 'c_4', predicate: 'kinship.ancestor_of', status }),
    ]);
    expect(edges).toEqual({ parent_edges: [], spouse_edges: [], sibling_edges: [], descent_edges: [] });
  });

  it('keeps disputed and unlabelled claims visible alongside accepted ones', () => {
    const edges = buildEdges([
      relationship({ id: 'c_disputed', predicate: 'kinship.spouse_of', status: 'disputed' }),
      relationship({ id: 'c_no_status', predicate: 'kinship.sibling_of', status: undefined }),
    ]);
    expect(edges.spouse_edges.map((edge) => edge.claim_id)).toEqual(['c_disputed']);
    expect(edges.sibling_edges.map((edge) => edge.claim_id)).toEqual(['c_no_status']);
  });

  it('ignores items without a claim', () => {
    expect(buildEdges([{ sources: [] }])).toEqual({ parent_edges: [], spouse_edges: [], sibling_edges: [], descent_edges: [] });
  });

  it('keeps citations on active edges', () => {
    const edges = buildEdges([{ ...relationship(), sources: [{ source: { title: '族谱' }, locator: '卷二' }] }]);
    expect(edges.parent_edges[0].citations).toEqual([{ source_title: '族谱', locator: '卷二' }]);
  });
});

describe('claimFingerprint', () => {
  it('changes when only one copy of a shared claim is re-anchored', () => {
    const original = relationship();
    const reanchored = relationship({ object_person_id: 'p_new_target' });
    expect(claimFingerprint(original)).not.toBe(claimFingerprint(reanchored));
    expect(claimFingerprint({ ...reanchored })).toBe(claimFingerprint(reanchored));
  });

  it('also covers the sources attached to the claim', () => {
    const item = relationship();
    const withSource = { ...item, sources: [{ source: { id: 's_1' } }] };
    expect(claimFingerprint(item)).not.toBe(claimFingerprint(withSource));
  });
});

describe('validateRelationshipEndpoints', () => {
  it('accepts both copies of a shared relationship', () => {
    expect(validateRelationshipEndpoints(twoSidedRecords())).toEqual([]);
  });

  it('rejects a claim endpoint that no longer exists', () => {
    const records = twoSidedRecords();
    records.delete('p_child');
    expect(validateRelationshipEndpoints(records).join('\n')).toContain('引用不存在的人物 p_child');
  });

  it('rejects a re-anchored claim whose display copy still names the old ID', () => {
    const records = twoSidedRecords();
    records.get('p_child').relationships.parents[0].object_person = { id: 'p_old_target' };
    expect(validateRelationshipEndpoints(records).join('\n')).toContain('不是主张端点');
  });

  it('rejects object_person pointing at the current record', () => {
    const records = twoSidedRecords();
    records.get('p_child').relationships.parents[0].object_person = { id: 'p_child' };
    expect(validateRelationshipEndpoints(records).join('\n')).toContain('指向记录自身');
  });

  it('rejects a relationship item without a claim', () => {
    const records = twoSidedRecords();
    records.get('p_child').relationships.parents = [{}];
    expect(validateRelationshipEndpoints(records).join('\n')).toContain('缺少 claim');
  });

  it('rejects a re-anchored claim left in the old non-endpoint record', () => {
    const records = twoSidedRecords();
    // Re-anchored to p_new_parent, but the stale copy still sits in p_parent.
    records.get('p_parent').relationships.children[0].claim.subject_person_id = 'p_new_parent';
    records.set('p_new_parent', record('p_new_parent'));
    expect(validateRelationshipEndpoints(records).join('\n')).toContain('副本存放在非端点人物文件中');
  });

  it('rejects a claim that has a copy in only one endpoint file', () => {
    const records = twoSidedRecords();
    records.get('p_child').relationships.parents = [];
    expect(validateRelationshipEndpoints(records).join('\n')).toContain('在端点人物 p_child 的文件中缺少副本');
  });

  it('rejects a copy without object_person', () => {
    const records = twoSidedRecords();
    delete records.get('p_child').relationships.parents[0].object_person;
    expect(validateRelationshipEndpoints(records).join('\n')).toContain('缺少 object_person');
  });

  it('rejects a parent claim whose direction is swapped in both copies', () => {
    const records = twoSidedRecords();
    for (const copy of [
      records.get('p_parent').relationships.children[0],
      records.get('p_child').relationships.parents[0],
    ]) {
      const claim = copy.claim;
      const oldSubject = claim.subject_person_id;
      claim.subject_person_id = claim.object_person_id;
      claim.object_person_id = oldSubject;
    }
    expect(validateRelationshipEndpoints(records).join('\n')).toContain('方向与');
  });

  it('accepts a fully re-anchored relationship', () => {
    const claim = {
      id: 'c_1',
      subject_person_id: 'p_new_parent',
      object_person_id: 'p_child',
      predicate: 'kinship.father_of',
      status: 'accepted',
    };
    const records = new Map([
      ['p_new_parent', record('p_new_parent', { children: [{ claim: { ...claim }, sources: [], object_person: { id: 'p_child' } }] })],
      ['p_child', record('p_child', { parents: [{ claim: { ...claim }, sources: [], object_person: { id: 'p_new_parent' } }] })],
    ]);
    expect(validateRelationshipEndpoints(records)).toEqual([]);
  });
});
