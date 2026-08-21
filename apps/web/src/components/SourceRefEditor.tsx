import { CLAIM_SOURCE_STANCE } from '@wang/domain';
import type { SourceRefInput } from '../api';
import { useScript } from '../i18n';
import { STANCE_LABELS } from '../labels';

interface SourceRefEditorProps {
  value: SourceRefInput[];
  onChange: (next: SourceRefInput[]) => void;
}

/**
 * Editor for a claim's backing sources. Provenance is required for a public
 * claim, so this is surfaced directly in every claim-creating form.
 */
export function SourceRefEditor({ value, onChange }: SourceRefEditorProps) {
  const { t } = useScript();

  function update(index: number, patch: Partial<SourceRefInput>) {
    onChange(value.map((ref, i) => (i === index ? { ...ref, ...patch } : ref)));
  }
  function add() {
    onChange([...value, { source_id: '', stance: 'supports' }]);
  }
  function remove(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <fieldset className="source-editor">
      <legend>{t('來源（公開主張需至少一條來源）')}</legend>
      {value.length === 0 ? <p className="muted">{t('尚未新增來源。')}</p> : null}
      {value.map((ref, i) => (
        <div key={i} className="source-editor-row">
          <input
            type="text"
            placeholder={t('來源 ID（s_…）')}
            value={ref.source_id}
            onChange={(e) => update(i, { source_id: e.target.value })}
          />
          <select
            value={ref.stance ?? 'supports'}
            onChange={(e) => update(i, { stance: e.target.value as SourceRefInput['stance'] })}
          >
            {CLAIM_SOURCE_STANCE.map((st) => (
              <option key={st} value={st}>
                {t(STANCE_LABELS[st])}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder={t('定位（卷頁 / URL / 條目號）')}
            value={ref.locator ?? ''}
            onChange={(e) => update(i, { locator: e.target.value })}
          />
          <button type="button" className="btn btn-inline" onClick={() => remove(i)}>
            {t('移除')}
          </button>
        </div>
      ))}
      <button type="button" className="btn btn-inline" onClick={add}>
        + {t('新增來源')}
      </button>
    </fieldset>
  );
}

/** Drops empty source rows before submission. */
export function cleanSourceRefs(refs: SourceRefInput[]): SourceRefInput[] {
  return refs
    .filter((r) => r.source_id.trim().length > 0)
    .map((r) => ({
      source_id: r.source_id.trim(),
      stance: r.stance ?? 'supports',
      locator: r.locator?.trim() || undefined,
    }));
}
