import { describe, expect, it } from 'vitest';
import { contributionBranch, contributionSchema, safeReturnTo } from './contracts.ts';

const personId = 'p_123456789ABCDEFGHJKLMN';

describe('safeReturnTo', () => {
  it('只允许同源路径', () => {
    expect(safeReturnTo('/contribute?person=p_1', 'https://history.wang')).toBe('/contribute?person=p_1');
    expect(safeReturnTo('https://evil.example/steal', 'https://history.wang')).toBe('/contribute');
    expect(safeReturnTo('//evil.example/steal', 'https://history.wang')).toBe('/contribute');
  });
});

describe('contributionSchema', () => {
  it('接受文件名与 front matter id 一致的 Markdown', () => {
    const result = contributionSchema.safeParse({
      submission_id: '01994f07-8a50-7a1f-89af-6ddf3ab614d8',
      base_sha: 'a'.repeat(40),
      title: 'content: 新增人物',
      body: '来源与判断依据',
      changes: [{
        path: `content/persons/${personId}.md`,
        content: `---\nschema: wang-person/v1\nid: ${personId}\nstatus: active\n---\n`,
      }],
    });
    expect(result.success).toBe(true);
  });

  it('拒绝越界路径和不匹配的 id', () => {
    const base = {
      submission_id: '01994f07-8a50-7a1f-89af-6ddf3ab614d8',
      base_sha: 'a'.repeat(40),
      title: 'content: 修改',
      body: '',
    };
    expect(contributionSchema.safeParse({ ...base, changes: [{ path: '../deploy.yml', content: 'x' }] }).success).toBe(false);
    expect(contributionSchema.safeParse({
      ...base,
      changes: [{
        path: `content/persons/${personId}.md`,
        content: '---\nschema: wang-person/v1\nid: p_123456789ABCDEFGHJKLMo\n---\n',
      }],
    }).success).toBe(false);
  });

  it('schema 和 id 必须位于真正的 YAML front matter 内', () => {
    const result = contributionSchema.safeParse({
      submission_id: '01994f07-8a50-7a1f-89af-6ddf3ab614d8',
      base_sha: 'a'.repeat(40),
      title: 'content: 伪造 front matter',
      body: '',
      changes: [{
        path: `content/persons/${personId}.md`,
        content: `---\nstatus: active\n---\nschema: wang-person/v1\nid: ${personId}\n`,
      }],
    });
    expect(result.success).toBe(false);
  });
});

describe('contributionBranch', () => {
  it('由不可变 GitHub id 和 submission id 确定', () => {
    expect(contributionBranch(8718, '01994F07-8A50-7A1F-89AF-6DDF3AB614D8'))
      .toBe('contrib/8718/01994f07-8a50-7a1f-89af-6ddf3ab614d8');
  });
});
