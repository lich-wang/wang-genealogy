import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpenText, Clock3, Database, GitFork, Library, Search, ShieldCheck, Sparkles, UserPlus, Users } from 'lucide-react';
import type { KinshipHighlight, PersonSearchResult, RecentChange } from '@wang/domain';
import { scriptVariants } from '@wang/i18n';
import { api } from '../api';
import type { SystemStatus } from '../api';
import { useAsync, toMessage } from '../hooks';
import { useScript } from '../i18n';
import { PersonStatusBadge } from '../components/badges';
import { ZhText } from '../components/ZhText';
import { contributionActionLabel, formatDateTime } from '../format';
import { PersonIdentityMeta } from '../components/PersonIdentityMeta';

export function HomePage() {
  const { t, script } = useScript();
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [results, setResults] = useState<PersonSearchResult[] | null>(null);
  const [cursor, setCursor] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const recent = useAsync<RecentChange[]>(
    () => api.listRecentChanges().then((c) => c.items),
    [],
  );

  // A tree has to start somewhere, and a first-time reader has no way to guess
  // which record has a family worth walking — surname progenitors come first,
  // then the server ranks the remaining records by recorded kinship.
  const overview = useAsync<{ items: KinshipHighlight[]; status: SystemStatus | null }>(() => api.getHomeOverview(8), []);

  // A common surname matches far more than one page, so the result list is
  // paged: `next` continues the previous page instead of restarting it.
  async function runSearch(q: string, next: string | null) {
    setSearching(true);
    setSearchError(null);
    try {
      const res = await api.searchPersons(q, next ?? undefined);
      setResults((prev) => (next && prev ? [...prev, ...res.items] : res.items));
      setCursor(res.next_cursor);
    } catch (err) {
      setSearchError(toMessage(err));
    } finally {
      setSearching(false);
    }
  }

  async function onSearch(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setSubmitted(q);
    setCursor(null);
    await runSearch(q, null);
  }

  // The API matches both script forms; say so when the query actually has one,
  // so a reader typing 王賁 understands why 王贲 came back.
  const expanded = submitted ? scriptVariants(submitted).slice(1) : [];

  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><BookOpenText size={16} />{t('开放 · 可追溯 · 持续共建')}</p>
          <h1>{t('从一个名字，走进一段')}<span>{t('有据可查的家族历史')}</span></h1>
          <p className="lead">
          {t(
            '查询王姓历史人物、亲属关系与支派脉络。每条姓名、生卒、籍贯和谱系关系都能回到具体来源，不确定的地方也会如实呈现。',
          )}
          </p>
          <div className="hero-trust">
            <span><ShieldCheck size={16} />{t('来源可查')}</span>
            <span><GitFork size={16} />{t('争议并列')}</span>
            <span><Clock3 size={16} />{t('修改留痕')}</span>
          </div>
        </div>
        <div className="hero-emblem" aria-hidden="true">
          <span>王</span>
          <small>{t('百家姓')}</small>
        </div>
      </section>

      {overview.data?.status ? <SystemStatusPanel status={overview.data.status} /> : null}

      <section className="search-block" id="search">
        <div className="search-heading">
          <div>
            <span className="section-kicker">{t('人物检索')}</span>
            <h2>{t('你想了解哪位王氏人物？')}</h2>
          </div>
          <span className="search-tip">{t('支持简体、繁體与别名')}</span>
        </div>
        <form className="search-form" onSubmit={onSearch}>
          <Search className="search-icon" size={21} aria-hidden="true" />
          <input
            className="search-input"
            type="search"
            value={query}
            placeholder={t('输入姓名，例如：王羲之、王安石…')}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={t('搜尋')}
            lang={script}
          />
          <button className="btn" type="submit" disabled={searching}>
            {searching ? t('搜尋中…') : t('查找人物')}
          </button>
        </form>

        {searchError ? <p className="error">{t(searchError)}</p> : null}

        {results ? (
          results.length === 0 ? (
            <p className="muted">{t('沒有匹配的人物。')}</p>
          ) : (
            <>
              {expanded.length > 0 ? (
                <p className="muted">
                  {t('同時匹配字形')}：{expanded.join('、')}
                </p>
              ) : null}
              <ul className="result-list search-results">
                {results.map((p) => (
                  <li key={p.id} className="result-item">
                    <span className="result-avatar" aria-hidden="true">
                      {(p.display_name ?? '王').slice(0, 1)}
                    </span>
                    <span className="result-main">
                      <Link to={`/persons/${encodeURIComponent(p.id)}`}>
                        <ZhText text={p.display_name} fallback={t('（未命名人物）')} />
                      </Link>
                      <PersonIdentityMeta person={p} />
                    </span>
                    <PersonStatusBadge status={p.status} />
                    <Link className="result-tree" to={`/persons/${encodeURIComponent(p.id)}/tree`}>
                      <GitFork size={15} />{t('家族树')}
                    </Link>
                  </li>
                ))}
              </ul>
              {cursor ? (
                <>
                  <p className="muted">
                    {t('結果不止這些，可載入更多，或輸入更具體的姓名。')}
                  </p>
                  <button
                    className="btn"
                    type="button"
                    disabled={searching}
                    onClick={() => void runSearch(submitted, cursor)}
                  >
                    {t('載入更多')}
                  </button>
                </>
              ) : (
                <p className="muted">{t(`共 ${results.length} 條結果。`)}</p>
              )}
            </>
          )
        ) : null}
      </section>

      <section className="tree-entry-block">
        <div className="section-head">
          <div>
            <span className="section-kicker"><Sparkles size={14} />{t('值得探索')}</span>
            <h2>{t('先从得姓先祖开始')}</h2>
          </div>
          <span className="section-note">{t('得姓先祖优先，其余按已收录亲属关系推荐')}</span>
        </div>
        {overview.loading ? <p className="muted">{t('載入中…')}</p> : null}
        {overview.error ? <p className="error">{t(overview.error)}</p> : null}
        {overview.data ? (
          <ul className="tree-entry-list highlight-grid">
            {overview.data.items.map((person, index) => (
              <li key={person.id}>
                <Link
                  className={person.is_surname_progenitor ? 'highlight-card highlight-card-progenitor' : 'highlight-card'}
                  to={`/persons/${encodeURIComponent(person.id)}/tree`}
                >
                  <span className="highlight-rank">{String(index + 1).padStart(2, '0')}</span>
                  <span className="highlight-avatar">{(person.display_name ?? '王').slice(0, 1)}</span>
                  <span className="highlight-copy">
                    {person.is_surname_progenitor ? (
                      <span className="progenitor-badge"><Sparkles size={12} />{t('得姓先祖')}</span>
                    ) : null}
                    <strong><ZhText text={person.display_name} fallback={t('未命名人物')} /></strong>
                    <small><Users size={14} />{t(`已收录 ${person.relative_count} 位亲属`)}</small>
                  </span>
                  <ArrowRight size={18} />
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      <section className="recent-block">
        <div className="section-head">
          <div>
            <span className="section-kicker"><Clock3 size={14} />{t('共同维护')}</span>
            <h2>{t('最近更新')}</h2>
          </div>
          <Link className="text-link" to="/changes">{t('查看全部')}<ArrowRight size={16} /></Link>
        </div>
        {recent.loading ? <p className="muted">{t('載入中…')}</p> : null}
        {recent.error ? <p className="error">{t(recent.error)}</p> : null}
        {recent.data ? <RecentList items={recent.data.slice(0, 10)} /> : null}
      </section>

      <section className="contribute-callout">
        <div className="callout-icon"><UserPlus size={25} /></div>
        <div>
          <span className="section-kicker">{t('一起完善谱系')}</span>
          <h2>{t('发现遗漏的人物或关系？')}</h2>
          <p>{t('使用引导式表单添加人物、亲属关系与史料来源，无需了解数据库编号。')}</p>
        </div>
        <Link className="btn" to="/contribute">{t('开始贡献')}<ArrowRight size={17} /></Link>
      </section>
    </div>
  );
}

function SystemStatusPanel({ status }: { status: SystemStatus }) {
  const { t, script } = useScript();
  const number = new Intl.NumberFormat(script === 'zh-Hant' ? 'zh-Hant' : 'zh-Hans');
  return (
    <section className="system-status" aria-label={t('系统状态')}>
      <div className="system-status-heading">
        <span className="status-live-dot" aria-hidden="true" />
        <span>{t('系统状态')}</span>
        <strong>{t('数据服务正常')}</strong>
      </div>
      <div className="system-status-grid">
        <div><Users size={19} /><span><strong>{number.format(status.people)}</strong><small>{t('位历史人物')}</small></span></div>
        <div><GitFork size={19} /><span><strong>{number.format(status.relationships)}</strong><small>{t('条谱系关系')}</small></span></div>
        <div><Library size={19} /><span><strong>{number.format(status.sources)}</strong><small>{t('项史料来源')}</small></span></div>
        <div><Database size={19} /><span><strong>{number.format(status.claims)}</strong><small>{t('条可追溯主张')}</small></span></div>
      </div>
      <time dateTime={status.generated_at}>{t('数据更新于')} {formatDateTime(status.generated_at, script)}</time>
    </section>
  );
}

function RecentList({ items }: { items: RecentChange[] }) {
  const { t, script } = useScript();
  if (items.length === 0) return <p className="muted">{t('暫無記錄。')}</p>;
  return (
    <ul className="change-list">
      {items.map((c) => (
        <li key={c.contribution_id} className="change-item">
          <span className="change-action">{t(contributionActionLabel(c.action))}</span>
          <span className="change-actor">
            <ZhText text={c.actor_display_name} />
          </span>
          <ChangeTarget change={c} />
          {c.change_summary ? (
            <span className="change-summary">
              — <ZhText text={c.change_summary} />
            </span>
          ) : null}
          <time className="change-time">{formatDateTime(c.created_at, script)}</time>
        </li>
      ))}
    </ul>
  );
}

function ChangeTarget({ change }: { change: RecentChange }) {
  // Person and claim changes both link to the resolved person, showing its name.
  if (change.subject_person_id) {
    return (
      <Link to={`/persons/${encodeURIComponent(change.subject_person_id)}`}>
        <ZhText text={change.target_display_name} fallback="未命名人物" />
      </Link>
    );
  }
  if (change.target_type === 'source') {
    return (
      <Link to={`/sources/${encodeURIComponent(change.target_id)}`}>史料来源</Link>
    );
  }
  return <span className="change-target">{change.target_type}</span>;
}
