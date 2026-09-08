import { z } from 'zod';

const personPath = /^content\/persons\/(p_[1-9A-HJ-NP-Za-km-z]{22})\.md$/;
const sha = /^[0-9a-f]{40}$/;

export function isPersonId(value: string): boolean {
  return /^p_[1-9A-HJ-NP-Za-km-z]{22}$/.test(value);
}

export const contributionSchema = z.object({
  submission_id: z.string().uuid(),
  base_sha: z.string().regex(sha),
  title: z.string().trim().min(1).max(120),
  body: z.string().max(10_000),
  changes: z.array(z.object({
    path: z.string().regex(personPath),
    content: z.string().min(1).max(512_000),
  })).min(1).max(4),
}).superRefine((input, context) => {
  const seen = new Set<string>();
  let total = 0;
  for (const [index, change] of input.changes.entries()) {
    if (seen.has(change.path)) {
      context.addIssue({ code: z.ZodIssueCode.custom, path: ['changes', index, 'path'], message: '同一路径不能重复。' });
    }
    seen.add(change.path);
    total += new TextEncoder().encode(change.content).byteLength;

    const expectedId = personPath.exec(change.path)?.[1];
    const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(change.content)?.[1] ?? '';
    const frontmatterId = /^id:\s*([^\s#]+)\s*$/m.exec(frontmatter)?.[1];
    const schema = /^schema:\s*wang-person\/v1\s*$/m.test(frontmatter);
    if (!schema) context.addIssue({ code: z.ZodIssueCode.custom, path: ['changes', index, 'content'], message: '缺少 wang-person/v1 schema。' });
    if (frontmatterId !== expectedId) context.addIssue({ code: z.ZodIssueCode.custom, path: ['changes', index, 'content'], message: '文件名必须与人物 id 一致。' });
  }
  if (total > 1_000_000) context.addIssue({ code: z.ZodIssueCode.custom, path: ['changes'], message: '提交内容总大小超过限制。' });
});

export type ContributionInput = z.infer<typeof contributionSchema>;

export function safeReturnTo(value: string | undefined, siteOrigin: string): string {
  if (!value) return '/contribute';
  try {
    const url = new URL(value, siteOrigin);
    if (url.origin !== siteOrigin || !url.pathname.startsWith('/')) return '/contribute';
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return '/contribute';
  }
}

export function contributionBranch(githubId: number, submissionId: string): string {
  return `contrib/${githubId}/${submissionId.toLowerCase()}`;
}
