import { describe, expect, it } from 'vitest';
import { cacheTtlFor } from './publicCache.ts';

const url = (path: string) => new URL(path, 'https://api.example.test');

describe('public edge-cache policy', () => {
  it('caches expensive public reads with bounded staleness', () => {
    expect(cacheTtlFor(url('/api/v1/persons/p_1'))).toBe(300);
    expect(cacheTtlFor(url('/api/v1/persons/p_1/relatives?up=2&down=2'))).toBe(300);
    expect(cacheTtlFor(url('/api/v1/persons/p_1/export'))).toBe(300);
    expect(cacheTtlFor(url('/api/v1/claims/c_1'))).toBe(300);
    expect(cacheTtlFor(url('/api/v1/person-merge-proposals/m_1'))).toBe(300);
    expect(cacheTtlFor(url('/api/v1/search?q=王俭'))).toBe(120);
    expect(cacheTtlFor(url('/api/v1/kinship-highlights'))).toBe(600);
  });

  it('keeps the change feed fresher and never caches auth or health routes by policy', () => {
    expect(cacheTtlFor(url('/api/v1/changes'))).toBe(30);
    expect(cacheTtlFor(url('/api/v1/auth/me'))).toBe(0);
    expect(cacheTtlFor(url('/api/v1/health'))).toBe(0);
  });
});
