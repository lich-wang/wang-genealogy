import type { ClaimValue, ClaimWithSources, ParentRole, UncertainDate } from '@wang/domain';
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

/** Friendly audit-feed labels; internal action codes never need user decoding. */
export function contributionActionLabel(action: string): string {
  const labels: Record<string, string> = {
    'person.create': '添加人物',
    'claim.create': '补充资料',
    'claim.revise': '修改资料',
    'claim.dispute': '标记争议',
    'claim.retract': '撤回资料',
    'claim.revert': '回滚修改',
    'source.create': '添加来源',
    'merge.propose': '提出合并',
    'merge.approve': '确认合并',
    'merge.revert': '撤销合并',
  };
  return labels[action] ?? '更新资料';
}

/** Exact descent distance, with a locator fallback for pre-migration records. */
export function relationshipGenerationCount(item: ClaimWithSources): number | null {
  if (item.claim.generation_count) return item.claim.generation_count;
  const chinese: Record<string, number> = {
    一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10,
  };
  for (const ref of item.sources) {
    if (ref.stance !== 'supports') continue;
    const match = /[（(]\s*([一二三四五六七八九十百\d]+)\s*[世代]\s*[）)]/.exec(ref.locator ?? '');
    if (!match) continue;
    const count = chinese[match[1]!] ?? Number(match[1]);
    if (Number.isInteger(count) && count >= 2 && count <= 100) return count;
  }
  return null;
}

/** Explicit stored parent role, with a conservative fallback for legacy citations. */
export function relationshipParentRole(item: ClaimWithSources): ParentRole | null {
  if (item.claim.parent_role) return item.claim.parent_role;
  let father = false;
  let mother = false;
  for (const ref of item.sources) {
    if (ref.stance !== 'supports') continue;
    const evidence = `${ref.locator ?? ''}\n${ref.quotation ?? ''}`;
    father ||= /P22|父親|父亲|生父|養父|养父|嫡父|親父|亲父|[（(]父[）)]/.test(evidence);
    mother ||= /P25|母親|母亲|生母|養母|养母|嫡母|親母|亲母|[（(]母[）)]/.test(evidence);
  }
  return father === mother ? null : father ? 'father' : 'mother';
}
