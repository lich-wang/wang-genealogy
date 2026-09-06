import { describe, expect, it } from 'vitest';
import { bulkReviewedKinshipPersonsSchema } from './routes/bulkKinshipPersons.ts';
import { bulkReviewedRelationshipsSchema } from './routes/bulkRelationships.ts';

const source = {
  key: 'wd:Q1',
  source_type: 'api_record' as const,
  title: '维基数据：测试人物（Q1）',
  canonical_url: 'https://www.wikidata.org/wiki/Q1',
  external_identifier: 'Q1',
  license_code: 'CC0-1.0',
};

describe('reviewed kinship bulk schemas', () => {
  it('accepts independently reviewed homonyms with multi-source claims', () => {
    const second = { ...source, key: 'cbdb:1', canonical_url: 'https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1&o=json', external_identifier: 'CBDB:1' };
    const parsed = bulkReviewedKinshipPersonsSchema.parse({
      summary: 'Luna 最终关系人物审核导入',
      sources: [source, second],
      items: [{
        identity_key: 'wd:Q1',
        historicity: { kind: 'cbdb_dynasty', detail: 'CBDB 朝代 = 宋' },
        homonym_review: '独立 QID 和 CBDB 标识确认同名异人',
        claims: [{
          predicate: 'name.primary',
          value: { text: '王氏', language: 'zh-Hans' },
          confidence: 'high',
          source_keys: ['wd:Q1', 'cbdb:1'],
          change_summary: '导入亲属人物姓名',
        }],
      }],
    });
    expect(parsed.items[0]?.claims[0]?.source_keys).toEqual(['wd:Q1', 'cbdb:1']);
  });

  it('requires relationship citations to resolve within the request', () => {
    expect(() => bulkReviewedRelationshipsSchema.parse({
      summary: 'Luna 最终亲属关系审核导入',
      sources: [source],
      items: [{
        identity_key: 'edge:1',
        kind: 'parent',
        from: { identity_key: 'wd:Q1' },
        to: { person_id: 'p_existing' },
        confidence: 'medium',
        citations: [{ source_key: 'wd:missing' }],
      }],
    })).toThrow('关系引用了请求中不存在的来源');
  });

  it('rejects duplicate citations that would violate claim_source uniqueness', () => {
    expect(() => bulkReviewedRelationshipsSchema.parse({
      summary: 'Luna 最终亲属关系审核导入',
      sources: [source],
      items: [{
        identity_key: 'edge:1',
        kind: 'spouse',
        from: { identity_key: 'wd:Q1' },
        to: { person_id: 'p_existing' },
        citations: [{ source_key: 'wd:Q1' }, { source_key: 'wd:Q1' }],
      }],
    })).toThrow('同一关系不能重复引用同一来源');
  });
});
