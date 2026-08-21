// Reader-selected Chinese script (繁體 / 简体).
//
// Two kinds of text are converted, and the difference matters:
//
//   * UI text — authored in 繁體 in the source files, projected to 简体 when the
//     reader asks for it. Purely cosmetic, always safe.
//   * Stored claim text — sourced evidence. It is converted for *display* only,
//     and the original form stays reachable (title attribute in summaries, shown
//     inline in the evidence view). We never send a converted value back to the
//     API, so no sourced claim is ever rewritten by a reader's script choice.
//
// In 繁體 mode data conversion waits for the phrase dictionary: character-level
// 简体→繁體 would render 王后 as 王後, which is exactly the kind of silent
// corruption a genealogy database cannot afford. Until it loads we show the
// stored text as-is.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import {
  DEFAULT_ZH_SCRIPT,
  convertTo,
  hasHantPhraseDict,
  isConvertibleLanguage,
  isZhScript,
  toHans,
} from '@wang/i18n';
import type { ZhScript } from '@wang/i18n';
import { loadHantPhrases } from '@wang/i18n/hant-phrases';

const SCRIPT_KEY = 'wang_script';

export const SCRIPT_LABELS: Record<ZhScript, string> = {
  'zh-Hans': '简体',
  'zh-Hant': '繁體',
};

interface ScriptState {
  script: ZhScript;
  setScript: (script: ZhScript) => void;
  /** UI string (authored in 繁體) → the reader's script. */
  t: (text: string) => string;
  /** Stored claim/source text → the reader's script, honoring its language tag. */
  tData: (text: string | null | undefined, language?: string | null) => string;
  /** Whether stored text is being converted right now (see module comment). */
  dataConversionReady: boolean;
}

const ScriptContext = createContext<ScriptState | null>(null);

function readStoredScript(): ZhScript | null {
  try {
    const raw = localStorage.getItem(SCRIPT_KEY);
    return isZhScript(raw) ? raw : null;
  } catch {
    return null;
  }
}

/** 繁體 for readers whose locale implies it (TW/HK/MO/Hant), 简体 otherwise. */
function scriptFromBrowser(): ZhScript {
  const tags = typeof navigator === 'undefined' ? [] : (navigator.languages ?? [navigator.language]);
  for (const tag of tags) {
    const lower = (tag ?? '').toLowerCase();
    if (!lower.startsWith('zh')) continue;
    if (/hant|-tw|-hk|-mo/.test(lower)) return 'zh-Hant';
    return 'zh-Hans';
  }
  return DEFAULT_ZH_SCRIPT;
}

export function ScriptProvider({ children }: { children: ReactNode }) {
  const [script, setScriptState] = useState<ZhScript>(() => readStoredScript() ?? scriptFromBrowser());
  const [phrasesReady, setPhrasesReady] = useState<boolean>(() => hasHantPhraseDict());

  // 繁體 rendering of stored 简体 text needs the phrase dictionary; fetch it on
  // demand (it is a separate, cached chunk) and re-render when it lands.
  useEffect(() => {
    if (script !== 'zh-Hant' || phrasesReady) return;
    let cancelled = false;
    void loadHantPhrases().then((ok) => {
      if (!cancelled && ok) setPhrasesReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [script, phrasesReady]);

  useEffect(() => {
    document.documentElement.lang = script;
  }, [script]);

  const setScript = useCallback((next: ZhScript) => {
    setScriptState(next);
    try {
      localStorage.setItem(SCRIPT_KEY, next);
    } catch {
      /* ignore storage failures (private mode etc.) */
    }
  }, []);

  const dataConversionReady = script === 'zh-Hans' || phrasesReady;

  const value = useMemo<ScriptState>(() => {
    const t = (text: string) => (script === 'zh-Hans' ? toHans(text) : text);
    const tData = (text: string | null | undefined, language?: string | null) => {
      if (!text) return '';
      if (!isConvertibleLanguage(language)) return text;
      if (!dataConversionReady) return text;
      return convertTo(script, text);
    };
    return { script, setScript, t, tData, dataConversionReady };
  }, [script, setScript, dataConversionReady]);

  return <ScriptContext.Provider value={value}>{children}</ScriptContext.Provider>;
}

export function useScript(): ScriptState {
  const ctx = useContext(ScriptContext);
  if (!ctx) throw new Error('useScript 必須在 <ScriptProvider> 內使用');
  return ctx;
}

/** Convenience hook for components that only translate UI strings. */
export function useT(): (text: string) => string {
  return useScript().t;
}
