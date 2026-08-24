import type { DatePrecision, UncertainDate } from '@wang/domain';

// Best-effort normalization of Chinese/Western historical date text into an
// UncertainDate. We NEVER reduce to a single SQL date — the original text is
// preserved and we produce an [earliest, latest] window + precision.
//
// This is intentionally conservative: when we cannot parse confidently we keep
// precision 'unknown' and null bounds rather than guessing.
//
// BCE dates keep the historical year number with a leading minus, matching both
// the source text (前208年) and Wikidata (-0208): `-0208-01-01`. There is no year
// zero in this convention, so these bounds are for display and range reasoning,
// not for lexicographic sorting across the era boundary.

function isoDate(year: number, month = 1, day = 1): string {
  const mm = String(month).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  const sign = year < 0 ? '-' : '';
  const yyyy = String(Math.abs(year)).padStart(4, '0');
  return `${sign}${yyyy}-${mm}-${dd}`;
}

function lastDayOfMonth(year: number, month: number): number {
  // Month lengths do not depend on the era for our purposes; use the absolute
  // year so February in a BCE leap year still behaves sensibly.
  return new Date(Date.UTC(Math.abs(year), month, 0)).getUTCDate();
}

/** Strips a "before common era" marker and reports the sign to apply. */
function splitEra(text: string): { sign: 1 | -1; rest: string } {
  const prefix = /^(?:公元前|西元前|前|-)\s*(.+)$/.exec(text);
  if (prefix) return { sign: -1, rest: prefix[1]!.trim() };
  const suffix = /^(.+?)\s*(?:BCE|BC)$/i.exec(text);
  if (suffix) return { sign: -1, rest: suffix[1]!.trim() };
  const ce = /^(?:公元|西元)\s*(.+)$/.exec(text);
  if (ce) return { sign: 1, rest: ce[1]!.trim() };
  return { sign: 1, rest: text };
}

// 天干地支 / dynasty era parsing is out of scope for MVP; we handle the common
// machine-readable and loosely-Western forms plus explicit "unknown".
export function normalizeDate(originalText: string, calendarNote?: string): UncertainDate {
  const text = originalText.trim();
  const base = {
    original_text: originalText,
    calendar_note: calendarNote ?? null,
  };

  if (text === '' || /不详|不詳|未知|unknown/i.test(text)) {
    return { ...base, earliest: null, latest: null, precision: 'unknown' };
  }

  // Explicit ISO date: 1021-01-18 (never BCE-marked; handled before splitEra so
  // a leading minus is not mistaken for an era marker).
  const iso = /^(\d{3,4})-(\d{1,2})-(\d{1,2})$/.exec(text);
  if (iso) {
    const d = isoDate(+iso[1]!, +iso[2]!, +iso[3]!);
    return { ...base, earliest: d, latest: d, precision: 'day' };
  }

  // "约前50年" and "前约50年" both occur; peel the approximation marker off
  // first so the era marker is found wherever it sits.
  const approxMatch = /^(?:约|約|大约|大約|c\.?|ca\.?)\s*(.+)$/i.exec(text);
  const approximate = approxMatch != null;
  const { sign, rest: afterEra } = splitEra(approxMatch ? approxMatch[1]!.trim() : text);
  const innerApprox = /^(?:约|約|大约|大約)\s*(.+)$/.exec(afterEra);
  const rest = innerApprox ? innerApprox[1]!.trim() : afterEra;
  const isApproximate = approximate || innerApprox != null;
  const signed = (year: number) => sign * year;

  // Full date: 1086年5月21日 / 前6年4月15日
  const ymd = /^(\d{1,4})年(\d{1,2})月(\d{1,2})日?$/.exec(rest);
  if (ymd) {
    const d = isoDate(signed(+ymd[1]!), +ymd[2]!, +ymd[3]!);
    return { ...base, earliest: d, latest: d, precision: 'day' };
  }

  // Year-month: 1021-01 or 1021年1月
  const ym = /^(\d{1,4})[-年](\d{1,2})月?$/.exec(rest);
  if (ym) {
    const y = signed(+ym[1]!);
    const m = +ym[2]!;
    return {
      ...base,
      earliest: isoDate(y, m, 1),
      latest: isoDate(y, m, lastDayOfMonth(y, m)),
      precision: 'month',
    };
  }

  // Century: 3世纪, 前1世纪, 3rd century is not accepted (Chinese text only).
  const century = /^(\d{1,2})\s*世[纪紀]$/.exec(rest);
  if (century) {
    const c = +century[1]!;
    const first = sign === 1 ? (c - 1) * 100 + 1 : -(c * 100);
    const last = sign === 1 ? c * 100 : -((c - 1) * 100 + 1);
    return {
      ...base,
      earliest: isoDate(first, 1, 1),
      latest: isoDate(last, 12, 31),
      precision: 'century',
    };
  }

  // Decade: 1480年代, 前50年代, 1480s
  const decade = /^(\d{1,4})0\s*(?:年代|s)$/i.exec(rest);
  if (decade) {
    const start = signed(+`${decade[1]}0`);
    const lo = sign === 1 ? start : start - 9;
    const hi = sign === 1 ? start + 9 : start;
    return {
      ...base,
      earliest: isoDate(lo, 1, 1),
      latest: isoDate(hi, 12, 31),
      precision: 'decade',
    };
  }

  // Plain year: 1021, 1021年, 前208年, 3年 — widened to +/- 5 years when the
  // text said "about".
  const year = /^(\d{1,4})\s*年?$/.exec(rest);
  if (year) {
    const y = signed(+year[1]!);
    if (!isApproximate) {
      return { ...base, earliest: isoDate(y, 1, 1), latest: isoDate(y, 12, 31), precision: 'year' };
    }
    // Signed years already run earliest-to-latest, BCE included.
    return {
      ...base,
      earliest: isoDate(y - 5, 1, 1),
      latest: isoDate(y + 5, 12, 31),
      precision: 'year',
    };
  }

  // Unparseable (e.g. dynasty era text like 清光绪二十年): keep text, mark dynasty.
  const precision: DatePrecision = /[清明宋元唐汉漢晋晉隋秦魏]/.test(text) ? 'dynasty' : 'unknown';
  return { ...base, earliest: null, latest: null, precision };
}
