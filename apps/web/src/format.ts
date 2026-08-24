import type { ClaimValue, UncertainDate } from '@wang/domain';
import type { ZhScript } from '@wang/i18n';

/**
 * Human-readable rendering of an uncertain historical date — the date text
 * only. The calendar note travels separately (see ClaimValueDisplay.note): it
 * annotates the source's precision rather than being part of the value, and
 * gluing it in made short dates read like paragraphs.
 */
export function formatUncertainDate(date: UncertainDate): string {
  if (date.original_text) return date.original_text;
  const lo = date.earliest ?? '?';
  const hi = date.latest ?? '?';
  return lo === hi ? lo : `${lo} ～ ${hi}`;
}

/**
 * Displayable form of a property claim value, carrying the language tag so the
 * renderer knows whether script conversion applies (a pinyin alias must not be
 * "converted", and neither must a raw JSON payload).
 */
export interface ClaimValueDisplay {
  text: string;
  language: string | null;
  /** Calendar/precision note about the date, shown as an annotation. */
  note?: string | null;
}

export function claimValueDisplay(value: ClaimValue | null): ClaimValueDisplay | null {
  if (!value) return null;
  if (value.date) {
    return {
      text: formatUncertainDate(value.date),
      language: null,
      note: value.date.calendar_note ?? null,
    };
  }
  if (typeof value.text === 'string' && value.text.length > 0) {
    return { text: value.text, language: value.language ?? null };
  }
  // Unusual payload: show a compact JSON view, and never script-convert it.
  const { text: _t, language: _l, date: _d, ...rest } = value;
  const keys = Object.keys(rest);
  return keys.length ? { text: JSON.stringify(rest), language: 'zxx' } : null;
}

/** Short local date-time for feed/history rows. */
export function formatDateTime(iso: string, script: ZhScript = 'zh-Hans'): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString(script === 'zh-Hant' ? 'zh-TW' : 'zh-CN', { hour12: false });
}
