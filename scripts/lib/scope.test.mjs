import { describe, expect, it } from 'vitest';
import { isWangScopeName, wasRetractedByScope } from './scope.mjs';

describe('isWangScopeName', () => {
  it('keeps Wang names and titles in full scope', () => {
    expect(isWangScopeName('王羲之')).toBe(true);
    expect(isWangScopeName('孝景王皇后')).toBe(true);
  });

  it('keeps the closed list of pre-surname progenitors in scope', () => {
    for (const name of ['姬晋', '姬晉', '太子晋', '王子喬', '宗敬', '毕公高', '畢公高']) {
      expect(isWangScopeName(name)).toBe(true);
    }
  });

  it('does not open the scope to other non-Wang relatives', () => {
    expect(isWangScopeName('汉元帝')).toBe(false);
    expect(isWangScopeName('郗璇')).toBe(false);
  });
});

describe('wasRetractedByScope', () => {
  it('allows the scope job to restore only its own retractions', () => {
    expect(
      wasRetractedByScope({
        status: 'retracted',
        current_change_summary: '范围调整：撤回超出收录范围的亲属关系',
      }),
    ).toBe(true);
  });

  it('never resurrects a factual-error retraction', () => {
    expect(
      wasRetractedByScope({
        status: 'retracted',
        current_change_summary: '撤回：人名子串误匹配：唐代王坦 → 东晋王國寶',
      }),
    ).toBe(false);
  });
});
