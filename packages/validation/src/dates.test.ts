import { describe, expect, it } from 'vitest';
import { normalizeDate } from './dates.ts';

describe('normalizeDate', () => {
  it('keeps original text and never collapses to a single SQL date', () => {
    const d = normalizeDate('约1488年');
    expect(d.original_text).toBe('约1488年');
    expect(d.precision).toBe('year');
    expect(d.earliest).toBe('1483-01-01');
    expect(d.latest).toBe('1493-12-31');
  });

  it('parses a plain year to a full-year window', () => {
    const d = normalizeDate('1021');
    expect(d).toMatchObject({ precision: 'year', earliest: '1021-01-01', latest: '1021-12-31' });
  });

  it('parses an ISO date as day precision', () => {
    const d = normalizeDate('1021-01-18');
    expect(d).toMatchObject({ precision: 'day', earliest: '1021-01-18', latest: '1021-01-18' });
  });

  it('parses a decade', () => {
    const d = normalizeDate('1480年代');
    expect(d).toMatchObject({ precision: 'decade', earliest: '1480-01-01', latest: '1489-12-31' });
  });

  it('marks unknown when unparseable and not a dynasty', () => {
    const d = normalizeDate('不详');
    expect(d).toMatchObject({ precision: 'unknown', earliest: null, latest: null });
  });

  it('marks dynasty era text as dynasty precision, preserving the text', () => {
    const d = normalizeDate('清光绪二十年');
    expect(d.precision).toBe('dynasty');
    expect(d.earliest).toBeNull();
    expect(d.original_text).toBe('清光绪二十年');
  });
});
