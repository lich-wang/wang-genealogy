import { describe, expect, it } from 'vitest';
import { parentRoleFromLocators } from './parentRoleEvidence.ts';

describe('parentRoleFromLocators', () => {
  it('recognizes explicit father and mother locators', () => {
    expect(parentRoleFromLocators(['P22（父）'])).toEqual({ role: 'father', conflict: false });
    expect(parentRoleFromLocators(['親屬關係：母親'])).toEqual({ role: 'mother', conflict: false });
  });

  it('keeps neutral and conflicting evidence unresolved', () => {
    expect(parentRoleFromLocators(['P40（子女）'])).toEqual({ role: null, conflict: false });
    expect(parentRoleFromLocators(['P22（父）', 'P25（母）'])).toEqual({ role: null, conflict: true });
  });

  it('does not infer from unrelated locator text', () => {
    expect(parentRoleFromLocators(['人物生平', null])).toEqual({ role: null, conflict: false });
  });
});
