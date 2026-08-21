import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import type { PersonSummaryLite, RecentChange } from '@wang/domain';
import { scriptVariants } from '@wang/i18n';
import { api } from '../api';
import { useAsync, toMessage } from '../hooks';
import { useScript } from '../i18n';
import { PersonStatusBadge } from '../components/badges';
import { ZhText } from '../components/ZhText';
import { formatDateTime } from '../format';

export function HomePage() {
  const { t, script } = useScript();
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [results, setResults] = useState<PersonSummaryLite[] | null>(null);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const recent = useAsync<RecentChange[]>(
    () => api.listRecentChanges().then((c) => c.items),
    [],
  );

  async function onSearch(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setSearching(true);
    setSearchError(null);
    setSubmitted(q);
    try {
      const res = await api.searchPersons(q);
      setResults(res.items);
    } catch (err) {
      setSearchError(toMessage(err));
    } finally {
      setSearching(false);
    }
  }

  // The API matches both script forms; say so when the query actually has one,
  // so a reader typing 王賁 understands why 王贲 came back.
  const expanded = submitted ? scriptVariants(submitted).slice(1) : [];

  return (
    <div className="page home-page">
      <section className="hero">
        <h1>{t('王氏譜系知識庫')}</h1>
        <p className="lead">
          {t(
            '以來源與版本為核心的王姓歷史人物公開知識庫。每條姓名、生卒、籍貫與譜系關係都可追溯到具體來源，爭議說法並列呈現，不隱藏少數意見。',
          )}
        </p>
      </section>

      <section className="search-block">
        <form className="search-form" onSubmit={onSearch}>
          <input
            className="search-input"
            type="search"
            value={query}
            placeholder={t('搜尋人物、支派、地點或來源…')}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={t('搜尋')}
            lang={script}
          />
          <button className="btn" type="submit" disabled={searching}>
            {searching ? t('搜尋中…') : t('搜尋')}
          </button>
        </form>

        <p className="hint">{t('繁體與简体視為同一寫法，搜尋任一字形都能找到同一人物。')}</p>

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
              <ul className="result-list">
                {results.map((p) => (
                  <li key={p.id} className="result-item">
                    <Link to={`/persons/${encodeURIComponent(p.id)}`}>
                      <ZhText text={p.display_name} fallback={t('（未命名人物）')} />
                    </Link>{' '}
                    <PersonStatusBadge status={p.status} />
                    <span className="muted"> · {p.id}</span>
                  </li>
                ))}
              </ul>
            </>
          )
        ) : null}
      </section>

      <section className="recent-block">
        <div className="section-head">
          <h2>{t('最近修改')}</h2>
          <Link to="/changes">{t('檢視全部 →')}</Link>
        </div>
        {recent.loading ? <p className="muted">{t('載入中…')}</p> : null}
        {recent.error ? <p className="error">{t(recent.error)}</p> : null}
        {recent.data ? <RecentList items={recent.data.slice(0, 10)} /> : null}
      </section>
    </div>
  );
}

function RecentList({ items }: { items: RecentChange[] }) {
  const { t, script } = useScript();
  if (items.length === 0) return <p className="muted">{t('暫無記錄。')}</p>;
  return (
    <ul className="change-list">
      {items.map((c) => (
        <li key={c.contribution_id} className="change-item">
          <span className="change-action">{c.action}</span>
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
        <ZhText text={change.target_display_name} fallback={change.subject_person_id} />
      </Link>
    );
  }
  if (change.target_type === 'source') {
    return (
      <Link to={`/sources/${encodeURIComponent(change.target_id)}`}>{change.target_id}</Link>
    );
  }
  return <span className="change-target">{change.target_id}</span>;
}
