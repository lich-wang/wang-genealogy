import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { CircleUserRound, ExternalLink, FileDiff, GitPullRequest, LogOut, ShieldCheck } from 'lucide-react';
import { generateId, webRandom } from '@wang/domain';
import { useSearchParams } from 'react-router-dom';
import { api, REPOSITORY_URL } from '../api';
import type { ContributionBase } from '../api';
import { useAuth } from '../auth';
import { toMessage } from '../hooks';
import { useScript } from '../i18n';

export function ContributePage() {
  const { t } = useScript();
  const auth = useAuth();
  const [params] = useSearchParams();
  const personId = params.get('person');

  return (
    <div className="page contribute-page">
      <header className="page-heading contribute-heading">
        <span className="section-kicker"><GitPullRequest size={15} />{t('通过 Pull Request 共建')}</span>
        <h1>{t('在网站填写，由你的 GitHub 账号提交')}</h1>
        <p>{t('网站只帮助生成 Markdown、创建分支和 Pull Request；维护者在 GitHub 合并 PR，才代表审核通过并进入正式资料。')}</p>
      </header>

      {auth.loading ? <p className="muted">{t('正在检查 GitHub 登录状态…')}</p> : null}
      {!auth.loading && !auth.isAuthenticated ? <GitHubLogin onLogin={auth.login} /> : null}
      {!auth.loading && auth.user ? (
        <>
          <div className="signed-in-bar">
            {auth.user.avatar_url ? <img className="signed-in-avatar" src={auth.user.avatar_url} alt="" /> : <span className="signed-in-avatar"><CircleUserRound size={18} /></span>}
            <span><small>{t('当前 GitHub 贡献者')}</small><strong>@{auth.user.login}</strong></span>
            <button type="button" className="btn btn-inline" onClick={() => void auth.logout()}><LogOut size={14} />{t('退出')}</button>
          </div>
          {auth.canSubmit && auth.csrfToken ? (
            <PullRequestEditor personId={personId} csrfToken={auth.csrfToken} />
          ) : (
            <section className="auth-forms">
              <p>{t('当前授权没有 public_repo 权限，无法用你的账号写入公开 fork。')}</p>
              <button className="btn" type="button" onClick={() => auth.login(currentReturnTo())}><CircleUserRound size={16} />{t('重新授权 GitHub')}</button>
            </section>
          )}
        </>
      ) : null}
    </div>
  );
}

function GitHubLogin({ onLogin }: { onLogin: (returnTo?: string) => void }) {
  const { t } = useScript();
  return (
    <section className="auth-forms github-auth-card">
      <div className="callout-icon"><CircleUserRound size={25} /></div>
      <div>
        <h2>{t('使用 GitHub 登录或注册')}</h2>
        <p>{t('没有站内邮箱和密码账号。首次 GitHub 授权会自动建立登录绑定；提交时 PR 作者仍是你本人。')}</p>
        <p className="muted">{t('站内提交需要 public_repo，用于创建你的公开 fork、分支、commit 和 Pull Request；不会申请私有仓库权限。')}</p>
        <button className="btn" type="button" onClick={() => onLogin(currentReturnTo())}><CircleUserRound size={16} />{t('使用 GitHub 继续')}</button>
      </div>
    </section>
  );
}

function PullRequestEditor({ personId, csrfToken }: { personId: string | null; csrfToken: string }) {
  const { t } = useScript();
  const [newPersonId] = useState(() => generateId('person', webRandom));
  const [base, setBase] = useState<ContributionBase | null>(null);
  const [original, setOriginal] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState(personId ? `content: 更新 ${personId}` : 'content: 新增历史人物');
  const [body, setBody] = useState('');
  const [submissionId, setSubmissionId] = useState<string>(() => crypto.randomUUID());
  const [licenseConfirmed, setLicenseConfirmed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pullRequest, setPullRequest] = useState<{ number: number; url: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    setBase(null);
    setError(null);
    api.getContributionBase(personId ? { personId } : { newPersonId })
      .then((result) => {
        if (cancelled) return;
        const draft = readDraft(result.path);
        setBase(result);
        setOriginal(result.content);
        setContent(draft?.content ?? result.content);
        if (draft) setSubmissionId(draft.submissionId);
      })
      .catch((reason) => { if (!cancelled) setError(toMessage(reason)); });
    return () => { cancelled = true; };
  }, [personId, newPersonId]);

  useEffect(() => {
    if (base && content && content !== original) writeDraft(base.path, { content, submissionId });
  }, [base, content, original, submissionId]);

  const diff = useMemo(() => compactDiff(original, content), [original, content]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!base) return;
    setBusy(true);
    setError(null);
    setPullRequest(null);
    try {
      const result = await api.createPullRequest({
        submission_id: submissionId,
        base_sha: base.base_sha,
        title: title.trim(),
        body: `${body.trim()}\n\n- [x] 我确认投稿不包含在世人物或敏感信息，并同意按项目投稿许可公开审阅。`,
        changes: [{ path: base.path, content }],
      }, csrfToken);
      sessionStorage.removeItem(draftKey(base.path));
      setPullRequest(result.pull_request);
    } catch (reason) {
      setError(toMessage(reason));
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="contributor-forms">
      <form className="form" onSubmit={submit}>
        <div className="form-intro"><span><FileDiff size={20} /></span><div><h2>{personId ? t('更新历史人物') : t('新增历史人物')}</h2><p>{t('编辑最终 Markdown，确认差异后创建 PR。内容和草稿不会写入 D1。')}</p></div></div>
        {error ? <p className="error">{t(error)}</p> : null}
        {!base && !error ? <p className="muted">{t('正在从 GitHub main 载入基线…')}</p> : null}
        {base ? (
          <>
            <p className="contribution-path"><code>{base.path}</code><small>base {base.base_sha.slice(0, 8)}</small></p>
            <label className="field">
              <span>{t('Pull Request 标题')}</span>
              <input value={title} maxLength={120} onChange={(event) => setTitle(event.target.value)} required />
            </label>
            <label className="field">
              <span>{t('最终人物 Markdown')}</span>
              <textarea className="markdown-editor" value={content} onChange={(event) => setContent(event.target.value)} spellCheck={false} required />
            </label>
            <details className="contribution-diff" open>
              <summary>{t('预览本次差异')}</summary>
              <pre>{diff || t('尚未修改')}</pre>
            </details>
            <label className="field">
              <span>{t('修改原因、来源 URL 与定位')}</span>
              <textarea value={body} maxLength={10_000} onChange={(event) => setBody(event.target.value)} required />
            </label>
            <label className="license-confirmation">
              <input type="checkbox" checked={licenseConfirmed} onChange={(event) => setLicenseConfirmed(event.target.checked)} required />
              <span>{t('我确认投稿不包含在世人物或敏感信息，并同意公开审阅、修改和再分发。')}</span>
            </label>
            {pullRequest ? (
              <p className="success form-notice"><GitPullRequest size={17} />{t('Pull Request 已创建：')}<a href={pullRequest.url} target="_blank" rel="noreferrer noopener">#{pullRequest.number} <ExternalLink size={13} /></a></p>
            ) : null}
            <button className="btn" type="submit" disabled={busy || Boolean(pullRequest) || !licenseConfirmed || !title.trim() || !body.trim() || content === original}>
              <GitPullRequest size={16} />{busy ? t('正在创建 PR…') : t('以我的 GitHub 账号提交 PR')}
            </button>
          </>
        ) : null}
      </form>
      <div className="contribution-rules"><ShieldCheck size={18} /><p>{t('Worker 只能修改 content/persons/*.md 和创建 PR，不能合并 PR 或绕过分支保护。')} <a href={`${REPOSITORY_URL}/blob/main/docs/COLLABORATION.md`} target="_blank" rel="noreferrer noopener">{t('查看审核规则')} <ExternalLink size={13} /></a></p></div>
    </section>
  );
}

function compactDiff(before: string, after: string): string {
  if (before === after) return '';
  const oldLines = before.split('\n');
  const newLines = after.split('\n');
  let prefix = 0;
  while (prefix < oldLines.length && prefix < newLines.length && oldLines[prefix] === newLines[prefix]) prefix += 1;
  let suffix = 0;
  while (
    suffix < oldLines.length - prefix && suffix < newLines.length - prefix &&
    oldLines[oldLines.length - 1 - suffix] === newLines[newLines.length - 1 - suffix]
  ) suffix += 1;
  const oldChanged = oldLines.slice(prefix, oldLines.length - suffix);
  const newChanged = newLines.slice(prefix, newLines.length - suffix);
  return [
    `@@ line ${prefix + 1} @@`,
    ...oldChanged.map((line) => `- ${line}`),
    ...newChanged.map((line) => `+ ${line}`),
  ].join('\n');
}

function draftKey(path: string): string {
  return `wang-contribution-draft:${path}`;
}

interface ContributionDraft {
  content: string;
  submissionId: string;
}

function readDraft(path: string): ContributionDraft | null {
  const stored = sessionStorage.getItem(draftKey(path));
  if (!stored) return null;
  try {
    const draft = JSON.parse(stored) as Partial<ContributionDraft>;
    if (typeof draft.content === 'string' && typeof draft.submissionId === 'string') {
      return { content: draft.content, submissionId: draft.submissionId };
    }
  } catch {
    // Older drafts stored the Markdown directly; preserve them during this migration.
    return { content: stored, submissionId: crypto.randomUUID() };
  }
  sessionStorage.removeItem(draftKey(path));
  return null;
}

function writeDraft(path: string, draft: ContributionDraft): void {
  sessionStorage.setItem(draftKey(path), JSON.stringify(draft));
}

function currentReturnTo(): string {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}
