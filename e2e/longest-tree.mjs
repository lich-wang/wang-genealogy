import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const repository = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const audit = JSON.parse(execFileSync(process.execPath, ['scripts/longest-tree-path.mjs'], {
  cwd: repository,
  encoding: 'utf8',
}));
const pages = process.env.PAGES_URL ?? 'https://wang-genealogy-web.pages.dev';
const startId = audit.path[0].id;
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];

page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text());
});
page.on('pageerror', (error) => errors.push(String(error)));
page.on('requestfailed', (request) => errors.push(`${request.method()} ${request.url()}: ${request.failure()?.errorText}`));

try {
  await page.goto(`${pages}/persons/${startId}/tree`, { waitUntil: 'networkidle', timeout: 30_000 });
  await page.locator('.tree-box-root').waitFor({ timeout: 15_000 });

  const fullTreeResponse = page.waitForResponse(
    (response) => response.url().includes('/relatives?scope=all') && response.status() === 200,
    { timeout: 30_000 },
  );
  await page.locator('.tree-toolbar button').click();
  const response = await fullTreeResponse;
  await page.getByRole('button', { name: /已展开全部|已展開全部/ }).waitFor({ timeout: 30_000 });
  await page.waitForTimeout(500);

  const status = await page.locator('.tree-head .muted').innerText();
  if (!status.includes(String(audit.longest_path_component_people))) {
    throw new Error(`expected ${audit.longest_path_component_people} people after expanding, got: ${status}`);
  }
  if (response.headers()['x-wang-data-source'] !== 'public-tree-snapshot') {
    throw new Error('anonymous full tree did not use the public snapshot');
  }

  const positions = [];
  for (const person of audit.path) {
    const node = page.locator(`[data-id="${person.id}"]`);
    await node.waitFor({ state: 'attached', timeout: 10_000 });
    const box = await node.boundingBox();
    if (!box) throw new Error(`${person.name} was not rendered`);
    positions.push({ ...person, top: box.y });
  }
  for (let index = 1; index < positions.length; index += 1) {
    if (positions[index].top <= positions[index - 1].top) {
      throw new Error(`${positions[index].name} was not below parent ${positions[index - 1].name}`);
    }
  }

  const focus = audit.path[Math.floor(audit.path.length / 2)];
  await page.locator(`[data-id="${focus.id}"]`).dispatchEvent('click');
  await page.locator('.tree-focus-note').waitFor({ timeout: 15_000 });
  const focusedStatus = await page.locator('.tree-head .muted').innerText();
  const focusedPeople = Number(/(?:当前显示|當前顯示)\s*(\d+)/.exec(focusedStatus)?.[1]);
  if (!(focusedPeople >= audit.longest_path_people && focusedPeople < audit.longest_path_component_people)) {
    throw new Error(`focus should retain the main lineage and fold collateral branches, got: ${focusedStatus}`);
  }
  if (errors.length > 0) throw new Error(`browser errors:\n${errors.join('\n')}`);

  console.log(JSON.stringify({
    url: page.url(),
    snapshot: response.headers()['x-wang-data-source'],
    total_published_people: audit.people,
    rendered_people: audit.longest_path_component_people,
    longest_path_people: audit.longest_path_people,
    longest_path_generations: audit.longest_path_generations,
    first: audit.path[0].name,
    last: audit.path.at(-1).name,
    focused_on: focus.name,
    focused_people: focusedPeople,
    vertical_order: 'passed',
    browser_errors: 0,
  }, null, 2));
} finally {
  await browser.close();
}
