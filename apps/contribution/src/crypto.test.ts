import { describe, expect, it } from 'vitest';
import { openJson, safeEqual, sealJson } from './crypto.ts';

describe('sealed values', () => {
  it('加密后可还原，错误密钥不能打开', async () => {
    const sealed = await sealJson({ state: 'example' }, 'test-secret');
    expect(sealed).not.toContain('example');
    await expect(openJson(sealed, 'test-secret')).resolves.toEqual({ state: 'example' });
    await expect(openJson(sealed, 'wrong-secret')).resolves.toBeNull();
  });
});

describe('safeEqual', () => {
  it('比较 OAuth state', async () => {
    await expect(safeEqual('same', 'same')).resolves.toBe(true);
    await expect(safeEqual('same', 'different')).resolves.toBe(false);
  });
});
