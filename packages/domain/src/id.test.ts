import { describe, expect, it } from 'vitest';
import { generateId, isEntityId } from './id.ts';

// Deterministic fake RNG for tests.
const seq = (start: number) => (bytes: number) =>
  Uint8Array.from({ length: bytes }, (_, i) => (start + i) % 256);

describe('generateId', () => {
  it('prefixes by entity and is unguessable-length', () => {
    const id = generateId('person', seq(0));
    expect(id.startsWith('p_')).toBe(true);
    expect(id.length).toBe('p_'.length + 22);
    expect(isEntityId('person', id)).toBe(true);
    expect(isEntityId('claim', id)).toBe(false);
  });

  it('uses distinct prefixes per entity', () => {
    expect(generateId('claim', seq(1)).startsWith('c_')).toBe(true);
    expect(generateId('source', seq(1)).startsWith('s_')).toBe(true);
    expect(generateId('merge', seq(1)).startsWith('m_')).toBe(true);
  });
});
