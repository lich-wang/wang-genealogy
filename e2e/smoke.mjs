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

  // 2. The home page must offer a way into the tree view without knowing a name.
  const treeEntries = page.locator('.tree-entry-list a');
  const entryCount = await treeEntries
    .first()
    .waitFor({ timeout: 15000 })
    .then(() => treeEntries.count())
    .catch(() => 0);
  log(entryCount > 0, `首页有家族树入口（${entryCount} 个起点）`);
  if (entryCount > 0) {
    const href = await treeEntries.first().getAttribute('href');
    log(Boolean(href?.endsWith('/tree')), '首页家族树入口直接指向家族树页');
  }

  // 3. Search for 王 and expect a result linking to a person
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

  // 4. Open the 王安石 search result and verify provenance content
  const personLink = page.locator('.result-list a[href*="/persons/"]', { hasText: '王安石' }).first();
  if (await personLink.count()) {
    await personLink.click();
    await page.waitForLoadState('networkidle');
    await page.waitForFunction(() => document.body.innerText.includes('王安石'), { timeout: 15000 }).catch(() => {});
    const pText = await page.locator('body').innerText();
    log(pText.includes('王安石'), '人物页显示“王安石”');
    log(/规范姓名|規範姓名/.test(pText), '人物页以字段形式展示基本信息');
    log(!/Failed to fetch/i.test(pText), '人物页没有 "Failed to fetch"');

    // Provenance is folded away but reachable: a summary that opens into the
    // citation list. Hiding it entirely would break the point of the project.
    const provenance = page.locator('.provenance > summary').first();
    const hasProvenance = await provenance.count();
    log(Boolean(hasProvenance), '人物页把来源折叠为「来源 N」而不是直接铺开');
    if (hasProvenance) {
      // <details> keeps its content in the DOM, so ask about visibility.
      const list = page.locator('.provenance .source-list').first();
      const beforeOpen = await list.isVisible();
      await provenance.click();
      await page.waitForTimeout(300);
      const afterOpen = await list.isVisible();
      log(!beforeOpen && afterOpen, '折叠时来源不可见，展开后显示完整来源列表');
    }
  } else {
    log(false, '搜索结果中找不到“王安石”链接');
  }

  // 5. Script switch: the same page must render in 简体 and in 繁體, and the
  //    stored (Simplified) person name must follow the reader's choice.
  const toggle = page.locator('.script-toggle button');
  log((await toggle.count()) === 2, '页面提供简体/繁體两种字形切换');

  const hant = page.locator('.script-toggle button', { hasText: '繁體' }).first();
  const hans = page.locator('.script-toggle button', { hasText: '简体' }).first();

  if (await hant.count()) {
    await hans.click();
    await page.waitForFunction(() => document.documentElement.lang === 'zh-Hans');
    const hansText = await page.locator('body').innerText();
    log(/基本资讯/.test(hansText) && /亲属关系/.test(hansText), '简体模式下界面用简体字（基本资讯/亲属关系）');

    await hant.click();
    await page.waitForFunction(() => document.documentElement.lang === 'zh-Hant');
    // The 简体→繁體 phrase dictionary loads as a separate chunk; wait for it.
    await page
      .waitForFunction(() => /基本資訊/.test(document.body.innerText), { timeout: 20000 })
      .catch(() => {});
    const hantText = await page.locator('body').innerText();
    log(/基本資訊/.test(hantText) && /親屬關係/.test(hantText), '繁體模式下界面用繁體字（基本資訊/親屬關係）');
    log(!/基本资讯|亲属关系/.test(hantText), '繁體模式下没有残留的简体界面文字');
    log(/王安石/.test(hantText), '繁體模式下人物姓名仍可显示');
  } else {
    log(false, '找不到繁體切换按钮');
  }

  // 6. Script-insensitive search: 繁體 query finds the 简体 record.
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

  // 7. Family tree: ancestors above, descendants below, expandable per person.
  //    Open a person first; the entry point lives on their page. Match on the
  //    href, since the label itself is script-converted (家族树 / 家族樹).
  await page.locator('.result-list a[href*="/persons/"]').first().click();
  await page.waitForSelector('a[href$="/tree"]', { timeout: 15000 }).catch(() => {});
  const treeLink = page.locator('a[href$="/tree"]').first();
  if (await treeLink.count()) {
    await treeLink.click();
    await page.waitForSelector('.tree-root-row', { timeout: 15000 }).catch(() => {});
    const treeText = await page.locator('body').innerText();
    log(/的家族树/.test(treeText), '家族树页面打开');
    log(/祖先/.test(treeText) && /后代/.test(treeText), '家族树分为祖先与后代两向');
    log((await page.locator('.tree-person').count()) > 1, '家族树渲染了多个人物节点');

    const expandButton = page.locator('.tree-more button').first();
    if (await expandButton.count()) {
      const before = {
        people: await page.locator('.tree-person').count(),
        buttons: await page.locator('.tree-more button').count(),
      };
      await expandButton.click();
      // Either another generation appears, or that person turns out to have no
      // further relatives and the button is replaced by a note — both mean the
      // expansion resolved rather than hung.
      const resolved = await page
        .waitForFunction(
          (b) =>
            document.querySelectorAll('.tree-person').length > b.people ||
            document.querySelectorAll('.tree-more button').length < b.buttons,
          before,
          { timeout: 20000 },
        )
        .then(() => true)
        .catch(() => false);
      log(resolved, '点“展开”后家族树向外推进了一代（或确认该支到头）');
    } else {
      log(true, '家族树已完整展开，无需再展开（无展开按钮）');
    }
    log(!/Failed to fetch/i.test(treeText), '家族树页没有 "Failed to fetch"');
  } else {
    log(false, '人物页找不到家族树入口');
  }

  // 8. Source page — the provenance surface every claim links to.
  await page.goto(PAGES, { waitUntil: 'networkidle' });
  const s3 = page.locator('input[type="search"]').first();
  await s3.fill('王安石');
  await s3.press('Enter');
  await page.waitForSelector('.result-list a[href*="/persons/"]', { timeout: 15000 }).catch(() => {});
  await page.locator('.result-list a[href*="/persons/"]').first().click();
  await page.waitForSelector('.provenance > summary', { timeout: 15000 }).catch(() => {});
  await page.locator('.provenance > summary').first().click();
  await page
    .waitForSelector('.provenance[open] .source-list a[href*="/sources/"]', { timeout: 15000 })
    .catch(() => {});
  const sourceLink = page.locator('.provenance[open] .source-list a[href*="/sources/"]').first();
  if (await sourceLink.count()) {
    await sourceLink.click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    const srcText = await page.locator('body').innerText();
    log(/引用此来源的主张|引用此來源的主張/.test(srcText), '来源页渲染了引用该来源的主张');
    log(!/Failed to fetch/i.test(srcText), '来源页没有 "Failed to fetch"');
  } else {
    log(false, '人物页找不到来源链接');
  }

  // 9. Recent changes page
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
