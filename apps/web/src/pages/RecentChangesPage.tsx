import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock3, LoaderCircle } from 'lucide-react';
import type { RecentChange } from '@wang/domain';
import { api } from '../api';
import { toMessage } from '../hooks';
import { useScript } from '../i18n';
import { contributionActionLabel, formatDateTime } from '../format';
import { ZhText } from '../components/ZhText';

export function RecentChangesPage() {
  const { t, script } = useScript();
  const [items, setItems] = useState<RecentChange[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  const loadMore = useCallback(async (next: string | null) => {
    setLoading(true);
    setError(null);
    try {
      const page = await api.listRecentChanges(next ?? undefined);
      setItems((prev) => (next ? [...prev, ...page.items] : page.items));
      setCursor(page.next_cursor);
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialized) return;
    setInitialized(true);
    void loadMore(null);
  }, [initialized, loadMore]);

  return (
    <div className="page changes-page">
      <header className="changes-head"><span><Clock3 size={23} /></span><div><p className="section-kicker">{t('透明协作')}</p><h1>{t('最近修改')}</h1><p>{t('公开展示新增、修改、回滚、争议与合并记录。')}</p></div></header>

      {error ? <p className="error">{t(error)}</p> : null}

      <ul className="change-list">
        {items.map((c) => (
          <li key={c.contribution_id} className="change-item">
            <span className="change-action">{t(contributionActionLabel(c.action))}</span>
            <span className="change-actor">
              <ZhText text={c.actor_display_name} />
            </span>
            <TargetLink change={c} />
            {c.change_summary ? (
              <span className="change-summary">
                — <ZhText text={c.change_summary} />
              </span>
            ) : null}
            <time className="change-time">{formatDateTime(c.created_at, script)}</time>
          </li>
        ))}
      </ul>

      {loading ? <p className="muted loading-line"><LoaderCircle className="spin" size={16} />{t('載入中…')}</p> : null}

      {cursor ? (
        <button className="btn" type="button" disabled={loading} onClick={() => loadMore(cursor)}>
          {t('載入更多')}
        </button>
      ) : items.length > 0 ? (
        <p className="muted">{t('已到末尾。')}</p>
      ) : null}
    </div>
  );
}

function TargetLink({ change }: { change: RecentChange }) {
  if (change.subject_person_id) {
    return (
      <Link to={`/persons/${encodeURIComponent(change.subject_person_id)}`}>
        <ZhText text={change.target_display_name} fallback="未命名人物" />
      </Link>
    );
  }
  if (change.target_type === 'source') {
    return <Link to={`/sources/${encodeURIComponent(change.target_id)}`}>一份史料来源</Link>;
  }
  return <span className="change-target">{change.target_type}</span>;
}
