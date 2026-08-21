import { describe, expect, it } from 'vitest';
import {
  detectScript,
  foldKey,
  isConvertibleLanguage,
  isZhScript,
  sameScriptInsensitive,
  scriptVariants,
  toHans,
  toHant,
} from './script.ts';

describe('script conversion', () => {
  it('folds 繁體 to 简体', () => {
    expect(toHans('王賁')).toBe('王贲');
    expect(toHans('譜名')).toBe('谱名');
  });

  it('raises 简体 to 繁體 at character level', () => {
    expect(toHant('王贲')).toBe('王賁');
    expect(toHant('关中频阳东乡')).toBe('關中頻陽東鄉');
  });

  it('leaves script-neutral and romanized text untouched', () => {
    expect(toHans('王安石')).toBe('王安石');
    expect(toHant('王安石')).toBe('王安石');
    expect(toHant('Wang Ben')).toBe('Wang Ben');
  });
});

describe('detectScript', () => {
  it('recognizes each script by characters unique to it', () => {
    expect(detectScript('王賁')).toBe('zh-Hant');
    expect(detectScript('王贲')).toBe('zh-Hans');
    expect(detectScript('戰國末期秦國名將')).toBe('zh-Hant');
    expect(detectScript('战国末期秦国名将')).toBe('zh-Hans');
  });

  it('returns null rather than guessing on script-neutral text', () => {
    expect(detectScript('王安石')).toBeNull();
    expect(detectScript('王翦')).toBeNull();
    expect(detectScript('')).toBeNull();
  });
});

describe('script-insensitive identity', () => {
  it('treats the two script forms of a name as one person', () => {
    expect(sameScriptInsensitive('王賁', '王贲')).toBe(true);
    expect(sameScriptInsensitive(' 王賁 ', '王贲')).toBe(true);
    expect(foldKey('王賁')).toBe(foldKey('王贲'));
  });

  it('does not merge genuinely different names', () => {
    expect(sameScriptInsensitive('王賁', '王翦')).toBe(false);
  });
});

describe('scriptVariants', () => {
  it('expands a query into both script forms, input first', () => {
    expect(scriptVariants('王賁')).toEqual(['王賁', '王贲']);
    expect(scriptVariants('王贲')).toEqual(['王贲', '王賁']);
  });

  it('collapses to a single form when the text is script-neutral', () => {
    expect(scriptVariants('王安石')).toEqual(['王安石']);
  });

  it('ignores blank input', () => {
    expect(scriptVariants('   ')).toEqual([]);
  });
});

describe('language tags', () => {
  it('converts untagged and zh-Han* text', () => {
    expect(isConvertibleLanguage(undefined)).toBe(true);
    expect(isConvertibleLanguage('zh-Hans')).toBe(true);
    expect(isConvertibleLanguage('zh-Hant')).toBe(true);
  });

  it('never converts romanizations or non-Chinese text', () => {
    expect(isConvertibleLanguage('zh-Latn-pinyin')).toBe(false);
    expect(isConvertibleLanguage('en')).toBe(false);
    expect(isConvertibleLanguage('ja')).toBe(false);
  });
});

describe('isZhScript', () => {
  it('accepts only the two supported scripts', () => {
    expect(isZhScript('zh-Hans')).toBe(true);
    expect(isZhScript('zh-Hant')).toBe(true);
    expect(isZhScript('zh-TW')).toBe(false);
    expect(isZhScript(null)).toBe(false);
  });
});
