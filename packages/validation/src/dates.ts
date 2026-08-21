import type { DatePrecision, UncertainDate } from '@wang/domain';

// Best-effort normalization of Chinese/Western historical date text into an
// UncertainDate. We NEVER reduce to a single SQL date — the original text is
// preserved and we produce an [earliest, latest] window + precision.
//
// This is intentionally conservative: when we cannot parse confidently we keep
// precision 'unknown' and null bounds rather than guessing.

function isoDate(year: number, month = 1, day = 1): string {
  const mm = String(month).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  const yyyy = String(year).padStart(4, '0');
  return `${yyyy}-${mm}-${dd}`;
}

// 天干地支 / dynasty era parsing is out of scope for MVP; we handle the common
// machine-readable and loosely-Western forms plus explicit "unknown".
export function normalizeDate(originalText: string, calendarNote?: string): UncertainDate {
  const text = originalText.trim();
  const base = {
    original_text: originalText,
    calendar_note: calendarNote ?? null,
  };

  if (text === '' || /不详|未知|unknown/i.test(text)) {
    return { ...base, earliest: null, latest: null, precision: 'unknown' };
  }

  // Explicit ISO date: 1021-01-18
  const iso = /^(\d{3,4})-(\d{1,2})-(\d{1,2})$/.exec(text);
  if (iso) {
    const d = isoDate(+iso[1]!, +iso[2]!, +iso[3]!);
    return { ...base, earliest: d, latest: d, precision: 'day' };
  }

  // Year-month: 1021-01 or 1021年1月
  const ym = /^(\d{3,4})[-年](\d{1,2})月?$/.exec(text);
  if (ym) {
    const y = +ym[1]!;
    const m = +ym[2]!;
    const lastDay = new Date(Date.UTC(y, m, 0)).getUTCDate();
    return {
      ...base,
      earliest: isoDate(y, m, 1),
      latest: isoDate(y, m, lastDay),
      precision: 'month',
    };
  }

  // Approximate year: 约1488, 约1488年, c.1488, ca 1488  -> +/- 5 years window
  const approx = /^(?:约|大约|c\.?|ca\.?\s*)(\d{3,4})\s*年?$/i.exec(text);
  if (approx) {
    const y = +approx[1]!;
    return {
      ...base,
      earliest: isoDate(y - 5, 1, 1),
      latest: isoDate(y + 5, 12, 31),
      precision: 'year',
    };
  }

  // Decade: 1480年代, 1480s
  const decade = /^(\d{3,4})0\s*(?:年代|s)$/i.exec(text);
  if (decade) {
    const start = +`${decade[1]}0`;
    return {
      ...base,
      earliest: isoDate(start, 1, 1),
      latest: isoDate(start + 9, 12, 31),
      precision: 'decade',
    };
  }

  // Plain year: 1021 or 1021年
  const year = /^(\d{3,4})\s*年?$/.exec(text);
  if (year) {
    const y = +year[1]!;
    return {
      ...base,
      earliest: isoDate(y, 1, 1),
      latest: isoDate(y, 12, 31),
      precision: 'year',
    };
  }

  // Unparseable (e.g. dynasty era text like 清光绪二十年): keep text, mark dynasty.
  const precision: DatePrecision = /[清明宋元唐汉晋隋秦]/.test(text) ? 'dynasty' : 'unknown';
  return { ...base, earliest: null, latest: null, precision };
}
