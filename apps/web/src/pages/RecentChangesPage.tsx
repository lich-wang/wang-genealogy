import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { RecentChange } from '@wang/domain';
import { api } from '../api';
import { toMessage } from '../hooks';
import { useScript } from '../i18n';
import { formatDateTime } from '../format';
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
      <h1>{t('最近修改')}</h1>
      <p className="hint">{t('公開展示新增、修改、回滾、爭議和合併記錄。')}</p>

      {error ? <p className="error">{t(error)}</p> : null}

      <ul className="change-list">
        {items.map((c) => (
          <li key={c.contribution_id} className="change-item">
            <span className="change-action">{c.action}</span>
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

      {loading ? <p className="muted">{t('載入中…')}</p> : null}

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
        <ZhText text={change.target_display_name} fallback={change.subject_person_id} />
      </Link>
    );
  }
  if (change.target_type === 'source') {
    return <Link to={`/sources/${encodeURIComponent(change.target_id)}`}>{change.target_id}</Link>;
  }
  return <span className="change-target">{change.target_id}</span>;
}
