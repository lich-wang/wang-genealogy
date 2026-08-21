import { ZH_SCRIPTS } from '@wang/i18n';
import { SCRIPT_LABELS, useScript } from '../i18n';

/**
 * 繁體 / 简体 switch. Labels are deliberately NOT run through the converter —
 * each button must read in the script it selects.
 */
export function ScriptToggle() {
  const { script, setScript, t } = useScript();

  return (
    <div className="script-toggle" role="group" aria-label={t('字形')}>
      {ZH_SCRIPTS.map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          className={option === script ? 'script-option script-option-active' : 'script-option'}
          aria-pressed={option === script}
          onClick={() => setScript(option)}
        >
          {SCRIPT_LABELS[option]}
        </button>
      ))}
    </div>
  );
}
