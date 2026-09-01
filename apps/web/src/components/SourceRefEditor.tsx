import { CLAIM_SOURCE_STANCE } from '@wang/domain';
import { BookPlus, Trash2 } from 'lucide-react';
import type { SourceRefInput } from '../api';
import { useScript } from '../i18n';
import { STANCE_LABELS } from '../labels';
import { SourcePicker } from './EntityPicker';

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
      <p className="source-editor-help">{t('按标题搜索已有史料，再填写原文所在卷、页或条目。')}</p>
      {value.length === 0 ? <p className="source-empty-state">{t('尚未关联来源，此资料只能保存为待核实草稿。')}</p> : null}
      {value.map((ref, i) => (
        <div key={i} className="source-editor-row">
          <SourcePicker value={ref.source_id} onChange={(sourceId) => update(i, { source_id: sourceId })} />
          <div className="source-ref-details">
            <label>
              <span>{t('这份来源如何支持资料')}</span>
              <select
                value={ref.stance ?? 'supports'}
                onChange={(e) => update(i, { stance: e.target.value as SourceRefInput['stance'] })}
              >
                {CLAIM_SOURCE_STANCE.map((st) => (
                  <option key={st} value={st}>{t(STANCE_LABELS[st])}</option>
                ))}
              </select>
            </label>
            <label>
              <span>{t('原文位置（选填）')}</span>
              <input
                type="text"
                placeholder={t('例如：卷三，第 24 页')}
                value={ref.locator ?? ''}
                onChange={(e) => update(i, { locator: e.target.value })}
              />
            </label>
          </div>
          <button type="button" className="source-remove" onClick={() => remove(i)}>
            <Trash2 size={16} />{t('移除此来源')}
          </button>
        </div>
      ))}
      <button type="button" className="btn btn-secondary source-add" onClick={add}>
        <BookPlus size={17} />{t('关联一份来源')}
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
