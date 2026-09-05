import { describe, expect, it } from 'vitest';
import { createPropertyClaimSchema } from './schemas.ts';

const source = { source_id: 's_example', stance: 'supports' as const };

describe('createPropertyClaimSchema', () => {
  it('accepts a sourced historical period', () => {
    expect(createPropertyClaimSchema.parse({
      claim_kind: 'property',
      predicate: 'historical.period',
      value: { text: '明末清初', language: 'zh-Hans' },
      confidence: 'high',
      sources: [source],
    }).predicate).toBe('historical.period');
  });

  it('rejects an empty historical period', () => {
    expect(() => createPropertyClaimSchema.parse({
      claim_kind: 'property',
      predicate: 'historical.period',
      value: {},
      sources: [source],
    })).toThrow();
  });

  it('requires date payloads for date predicates', () => {
    expect(() => createPropertyClaimSchema.parse({
      claim_kind: 'property',
      predicate: 'birth.date',
      value: { text: '1021年' },
      sources: [source],
    })).toThrow();
  });
});
