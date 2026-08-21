import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { ClaimWithSources, PersonSummary } from '@wang/domain';
import { api } from '../api';
import { useAsync, toMessage } from '../hooks';
import { useAuth } from '../auth';
import { useScript } from '../i18n';
import { PersonStatusBadge } from '../components/badges';
import { SummaryFieldView } from '../components/SummaryFieldView';
import { ClaimCard } from '../components/ClaimCard';
import { ZhText } from '../components/ZhText';

export function PersonPage() {
  const { id = '' } = useParams();
  const { isAuthenticated } = useAuth();
  const { t } = useScript();
  const [disputeBusy, setDisputeBusy] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);

  const state = useAsync<PersonSummary>(() => api.getPerson(id), [id]);

  async function onDispute(claimId: string) {
    setActionError(null);
    setDisputeBusy(true);
    try {
      await api.disputeClaim(claimId, { reason: '前端標記：需要複核' });
      state.reload();
    } catch (err) {
      setActionError(toMessage(err));
    } finally {
      setDisputeBusy(false);
    }
  }

  if (state.loading) return <div className="page">{t('載入中…')}</div>;
  if (state.error) return <div className="page error">{t('載入失敗')}：{t(state.error)}</div>;
  if (!state.data) return <div className="page">{t('未找到人物。')}</div>;

  const summary = state.data;
  const { person } = summary;
  const merged = person.status === 'merged' && summary.redirect_to_person_id;

  return (
    <div className="page person-page">
      {merged ? (
        <div className="banner banner-merged" role="alert">
          {t('該人物已合併到')}{' '}
          <Link to={`/persons/${encodeURIComponent(summary.redirect_to_person_id!)}`}>
            {t('另一條記錄')}（{summary.redirect_to_person_id}）
          </Link>
          {t('。舊連結將永久重定向到目標人物；合併可被回滾。')}
        </div>
      ) : null}

      <header className="person-head">
        <h1>
          <ZhText text={summary.display_name} fallback={t('（未命名人物）')} />
        </h1>
        <div className="person-meta">
          <PersonStatusBadge status={person.status} />
          <span className="muted">ID：{person.id}</span>
          <span className="muted">
            {t('當前版本')}：{summary.current_revision}
          </span>
        </div>
      </header>

      {actionError ? <p className="error">{t(actionError)}</p> : null}

      {isAuthenticated ? (
        <nav className="person-actions">
          <Link className="btn btn-secondary" to={`/contribute?person=${encodeURIComponent(person.id)}&form=claim`}>
            {t('新增基礎資訊主張')}
          </Link>
          <Link className="btn btn-secondary" to={`/contribute?person=${encodeURIComponent(person.id)}&form=relationship`}>
            {t('新增親屬關係')}
          </Link>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => void onExport(person.id, setActionError)}
          >
            {t('匯出（JSON）')}
          </button>
        </nav>
      ) : (
        <p className="muted">
          <Link to="/contribute">{t('登入')}</Link> {t('後可新增主張、補充來源或標記爭議。')}
        </p>
      )}

      <section className="person-summary">
        <h2>{t('當前摘要')}</h2>
        <p className="hint">
          {t('以下數值均由當前已採納的主張計算得出；每個欄位都會展示推薦值與全部並存說法，並附來源。')}
        </p>
        {summary.properties.length === 0 ? (
          <p className="muted">{t('尚無基礎資訊主張。')}</p>
        ) : (
          summary.properties.map((field) => (
            <SummaryFieldView
              key={field.predicate}
              field={field}
              onDispute={isAuthenticated ? onDispute : undefined}
              disputeBusy={disputeBusy}
            />
          ))
        )}
      </section>

      <section className="person-relationships">
        <h2>{t('親屬關係')}</h2>
        <RelationshipGroup
          title="父母"
          items={summary.relationships.parents}
          onDispute={isAuthenticated ? onDispute : undefined}
          disputeBusy={disputeBusy}
        />
        <RelationshipGroup
          title="子女"
          items={summary.relationships.children}
          onDispute={isAuthenticated ? onDispute : undefined}
          disputeBusy={disputeBusy}
        />
        <RelationshipGroup
          title="配偶"
          items={summary.relationships.spouses}
          onDispute={isAuthenticated ? onDispute : undefined}
          disputeBusy={disputeBusy}
        />
        <RelationshipGroup
          title="其他關係"
          items={summary.relationships.other}
          onDispute={isAuthenticated ? onDispute : undefined}
          disputeBusy={disputeBusy}
        />
      </section>
    </div>
  );
}

async function onExport(id: string, setError: (msg: string | null) => void) {
  setError(null);
  try {
    const data = await api.exportPerson(id);
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  } catch (err) {
    setError(toMessage(err));
  }
}

function RelationshipGroup({
  title,
  items,
  onDispute,
  disputeBusy,
}: {
  title: string;
  items: ClaimWithSources[];
  onDispute?: (claimId: string) => void;
  disputeBusy?: boolean;
}) {
  const { t } = useScript();

  if (items.length === 0) {
    return (
      <div className="relationship-group">
        <h3>{t(title)}</h3>
        <p className="muted">{t('暫無記錄。')}</p>
      </div>
    );
  }
  return (
    <div className="relationship-group">
      <h3>
        {t(title)}（{items.length}）
      </h3>
      {items.map((item) => (
        <ClaimCard
          key={item.claim.id}
          item={item}
          onDispute={onDispute}
          disputeBusy={disputeBusy}
        />
      ))}
    </div>
  );
}
