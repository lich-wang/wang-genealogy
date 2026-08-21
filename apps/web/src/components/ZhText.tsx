import type { ReactNode } from 'react';
import { SCRIPT_LABELS, useScript } from '../i18n';

interface ZhTextProps {
  /** Stored text exactly as recorded in the claim / source. */
  text: string | null | undefined;
  /** The claim value's `language` tag, if any (romanizations are never converted). */
  language?: string | null;
  /**
   * `summary` — a computed projection (person heading, search hit, relationship
   * link): show the reader's script, keep the original in the tooltip.
   * `evidence` — a sourced claim value or quotation: show the original verbatim
   * and append the converted form as a clearly-labelled aid.
   */
  mode?: 'summary' | 'evidence';
  fallback?: ReactNode;
}

/**
 * Up to this length the converted form is shown inline next to the original —
 * names and dates are short and identity-critical, so seeing both is worth the
 * space. Longer prose would double in size, so the original moves to a tooltip.
 */
const INLINE_VARIANT_MAX = 16;

/**
 * Renders stored Chinese text in the reader's script without ever losing the
 * form the source actually used. Script conversion is a display projection, not
 * an edit: nothing here is written back to the API.
 */
export function ZhText({ text, language, mode = 'summary', fallback = null }: ZhTextProps) {
  const { script, tData, t } = useScript();

  const original = text?.trim() ?? '';
  if (!original) return <>{fallback}</>;

  const display = tData(original, language) || original;
  const converted = display !== original;

  if (mode === 'summary') {
    return (
      <span lang={converted ? script : (language ?? undefined)} title={converted ? `${t('原文')}：${original}` : undefined}>
        {display}
      </span>
    );
  }

  if (!converted) return <span lang={language ?? undefined}>{original}</span>;

  // Short value: source text first, converted form beside it.
  if (original.length <= INLINE_VARIANT_MAX) {
    return (
      <>
        <span lang={language ?? undefined}>{original}</span>
        <span className="script-variant" lang={script} title={t('自動字形轉換，非來源原文')}>
          （{SCRIPT_LABELS[script]}：{display}）
        </span>
      </>
    );
  }

  // Long prose: read it in the reader's script, with the source text one hover
  // (or one export) away — printing both would double the paragraph.
  return (
    <>
      <span lang={script}>{display}</span>
      <span
        className="script-variant"
        title={`${t('自動字形轉換，非來源原文')}\n${t('原文')}：${original}`}
      >
        （{t('字形轉換')}）
      </span>
    </>
  );
}
