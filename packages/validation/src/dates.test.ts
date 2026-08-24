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

  it('parses a short year, which antiquity is full of', () => {
    expect(normalizeDate('3年')).toMatchObject({
      precision: 'year',
      earliest: '0003-01-01',
      latest: '0003-12-31',
    });
    expect(normalizeDate('358年')).toMatchObject({ precision: 'year', earliest: '0358-01-01' });
  });

  it('parses a full 年月日 date', () => {
    expect(normalizeDate('1086年5月21日')).toMatchObject({
      precision: 'day',
      earliest: '1086-05-21',
      latest: '1086-05-21',
    });
  });

  describe('BCE dates', () => {
    it('keeps the historical year number with a leading minus', () => {
      expect(normalizeDate('前208年')).toMatchObject({
        precision: 'year',
        earliest: '-0208-01-01',
        latest: '-0208-12-31',
      });
      expect(normalizeDate('公元前41年')).toMatchObject({ precision: 'year', earliest: '-0041-01-01' });
    });

    it('parses a BCE day', () => {
      expect(normalizeDate('前6年4月15日')).toMatchObject({
        precision: 'day',
        earliest: '-0006-04-15',
      });
    });

    it('orders an approximate BCE window from earlier to later', () => {
      const d = normalizeDate('约前50年');
      expect(d).toMatchObject({ precision: 'year', earliest: '-0055-01-01', latest: '-0045-12-31' });
    });

    it('parses a BCE decade', () => {
      expect(normalizeDate('前50年代')).toMatchObject({
        precision: 'decade',
        earliest: '-0059-01-01',
        latest: '-0050-12-31',
      });
    });
  });

  describe('centuries', () => {
    it('spans a CE century', () => {
      expect(normalizeDate('3世纪')).toMatchObject({
        precision: 'century',
        earliest: '0201-01-01',
        latest: '0300-12-31',
      });
    });

    it('spans a BCE century, earliest first', () => {
      expect(normalizeDate('前1世纪')).toMatchObject({
        precision: 'century',
        earliest: '-0100-01-01',
        latest: '-0001-12-31',
      });
    });

    it('accepts the traditional 世紀', () => {
      expect(normalizeDate('4世紀').precision).toBe('century');
    });
  });

  it('treats 不詳 like 不详', () => {
    expect(normalizeDate('不詳')).toMatchObject({ precision: 'unknown', earliest: null });
  });
});
