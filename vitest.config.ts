import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/**/*.test.ts', 'apps/**/*.test.ts', 'scripts/**/*.test.mjs'],
    environment: 'node',
    // Windows 盘符大小写不一致会让 Vitest runner 模块被加载两份，
    // 使 describe() 读不到 runner.config；VM 池可规避。
    // 其他平台不设置 pool，保持默认行为不变。
    ...(process.platform === 'win32' ? { pool: 'vmForks' as const } : {}),
  },
});
