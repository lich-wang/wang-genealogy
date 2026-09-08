import { describe, expect, it } from 'vitest';
import {
  completeNamedPaternalChain,
  extractNamedPaternalAncestors,
  validateCompletePaternalChains,
} from './biography-kinship.mjs';

const biography =
  '據說，他家本來是琅琊郡人，王恁的曾祖父王曄為光州定城縣令，遂遷居河南。' +
  '祖父王友、父親王蘊玉和他都在固始務農。';

const person = (id, name, summary = null, father = null) => ({
  id,
  display_name: name,
  properties: summary
    ? [{ predicate: 'bio.summary', recommended: { claim: { value_json: { text: summary } } } }]
    : [],
  relationships: {
    parents: father
      ? [{
          claim: {
            predicate: 'kinship.father_of',
            parent_role: 'father',
            status: 'accepted',
            subject_person_id: father.id,
          },
          object_person: { id: father.id, display_name: father.name },
        }]
      : [],
  },
});

describe('named paternal ancestry in biographies', () => {
  it('extracts explicit father, grandfather, and great-grandfather names', () => {
    expect(extractNamedPaternalAncestors(biography)).toEqual([
      { term: '曾祖父', name: '王曄', generation: 3 },
      { term: '祖父', name: '王友', generation: 2 },
      { term: '父親', name: '王蘊玉', generation: 1 },
    ]);
    expect(completeNamedPaternalChain(biography)).toEqual(['王蘊玉', '王友', '王曄']);
  });

  it('ignores incomplete ancestry instead of inventing missing generations', () => {
    expect(completeNamedPaternalChain('九世祖王波，高祖父王珍，曾祖父王罴。')).toEqual([]);
    expect(completeNamedPaternalChain('随父入京，后来返乡。')).toEqual([]);
  });

  it('accepts a matching structured chain and reports a missing link', () => {
    const complete = new Map([
      ['ren', person('ren', '王恁', biography, { id: 'yunyu', name: '王蘊玉' })],
      ['yunyu', person('yunyu', '王蘊玉', null, { id: 'you', name: '王友' })],
      ['you', person('you', '王友', null, { id: 'ye', name: '王曄' })],
      ['ye', person('ye', '王曄')],
    ]);
    expect(validateCompletePaternalChains(complete)).toEqual([]);

    complete.get('yunyu').relationships.parents = [];
    expect(validateCompletePaternalChains(complete)).toEqual([
      'ren: 简介写明父系链 王蘊玉 → 王友 → 王曄，但第 2 代“王友”没有对应的 father_of 关系',
    ]);
  });
});
