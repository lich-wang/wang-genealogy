import { chromium } from 'playwright';

const PAGES = process.env.PAGES_URL ?? 'https://wang-genealogy-web.pages.dev';
const failures = [];
const consoleErrors = [];
const netErrors = [];

const log = (ok, msg) => {
  console.log(`${ok ? '✅' : '❌'} ${msg}`);
  if (!ok) failures.push(msg);
};

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext();
const page = await ctx.newPage();

page.on('console', (m) => {
  if (m.type() === 'error') consoleErrors.push(m.text());
});
page.on('pageerror', (e) => consoleErrors.push(String(e)));
page.on('requestfailed', (r) =>
  netErrors.push(`${r.method()} ${r.url()} — ${r.failure()?.errorText}`),
);

try {
  // 1. Home loads
  const resp = await page.goto(PAGES, { waitUntil: 'networkidle', timeout: 30000 });
  log(resp?.ok() ?? false, `首页返回 ${resp?.status()}`);

  const bodyText = await page.locator('body').innerText();
  log(!/Failed to fetch/i.test(bodyText), '首页没有 "Failed to fetch"');
  log(bodyText.trim().length > 20, `首页有可见内容 (${bodyText.trim().length} 字符)`);

  // 2. Search for 王 and expect a result linking to a person
  const search = page.locator('input[type="search"], input[type="text"]').first();
  let hasResults = false;
  if (await search.count()) {
    await search.fill('王');
    await search.press('Enter');
    // Wait for the SEARCH RESULTS container (not the recent-changes feed).
    hasResults = await page
      .waitForSelector('.result-list a[href*="/persons/"]', { timeout: 15000 })
      .then(() => true)
      .catch(() => false);
    log(hasResults, '搜索“王”返回了人物结果');
  } else {
    log(false, '首页找不到搜索框');
  }

  // 3. Open the 王安石 search result and verify provenance content
  const personLink = page.locator('.result-list a[href*="/persons/"]', { hasText: '王安石' }).first();
  if (await personLink.count()) {
    await personLink.click();
    await page.waitForLoadState('networkidle');
    await page.waitForFunction(() => document.body.innerText.includes('王安石'), { timeout: 15000 }).catch(() => {});
    const pText = await page.locator('body').innerText();
    log(pText.includes('王安石'), '人物页显示“王安石”');
    log(/来源|CBDB/i.test(pText), '人物页显示来源信息(溯源)');
    log(/推荐值|已采纳/.test(pText), '人物页区分推荐值/已采纳状态');
    log(!/Failed to fetch/i.test(pText), '人物页没有 "Failed to fetch"');
  } else {
    log(false, '搜索结果中找不到“王安石”链接');
  }

  // 4. Script switch: the same page must render in 简体 and in 繁體, and the
  //    stored (Simplified) person name must follow the reader's choice.
  const toggle = page.locator('.script-toggle button');
  log((await toggle.count()) === 2, '页面提供简体/繁體两种字形切换');

  const hant = page.locator('.script-toggle button', { hasText: '繁體' }).first();
  const hans = page.locator('.script-toggle button', { hasText: '简体' }).first();

  if (await hant.count()) {
    await hans.click();
    await page.waitForFunction(() => document.documentElement.lang === 'zh-Hans');
    const hansText = await page.locator('body').innerText();
    log(/推荐值|已采纳/.test(hansText), '简体模式下界面用简体字（推荐值/已采纳）');

    await hant.click();
    await page.waitForFunction(() => document.documentElement.lang === 'zh-Hant');
    // The 简体→繁體 phrase dictionary loads as a separate chunk; wait for it.
    await page
      .waitForFunction(() => /推薦值|已採納/.test(document.body.innerText), { timeout: 20000 })
      .catch(() => {});
    const hantText = await page.locator('body').innerText();
    log(/推薦值|已採納/.test(hantText), '繁體模式下界面用繁體字（推薦值/已採納）');
    log(!/推荐值|已采纳/.test(hantText), '繁體模式下没有残留的简体界面文字');
    log(/王安石/.test(hantText), '繁體模式下人物姓名仍可显示');
  } else {
    log(false, '找不到繁體切换按钮');
  }

  // 5. Script-insensitive search: 繁體 query finds the 简体 record.
  await page.goto(PAGES, { waitUntil: 'networkidle' });
  const search2 = page.locator('input[type="search"]').first();
  if (await search2.count()) {
    await search2.fill('王賁');
    await search2.press('Enter');
    const found = await page
      .waitForSelector('.result-list a[href*="/persons/"]', { timeout: 15000 })
      .then(() => true)
      .catch(() => false);
    log(found, '搜索繁體“王賁”能找到简体录入的“王贲”');
  }

  // 6. Recent changes page
  await page.goto(`${PAGES}/changes`, { waitUntil: 'networkidle' });
  const cText = await page.locator('body').innerText();
  log(!/Failed to fetch/i.test(cText), '最近修改页没有 "Failed to fetch"');
} catch (e) {
  log(false, `脚本异常: ${e}`);
}

console.log('\n--- 浏览器控制台 error ---');
console.log(consoleErrors.length ? consoleErrors.join('\n') : '(无)');
console.log('--- 失败的网络请求 ---');
console.log(netErrors.length ? netErrors.join('\n') : '(无)');

await browser.close();

if (failures.length || consoleErrors.length) {
  console.log(`\n结果: 失败 ${failures.length} 项, 控制台错误 ${consoleErrors.length} 条`);
  process.exit(1);
}
console.log('\n结果: 全部通过 ✅');
