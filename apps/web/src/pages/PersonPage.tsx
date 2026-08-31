import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { ClaimWithSources, PersonSummary } from '@wang/domain';
import { api } from '../api';
import { useAsync, toMessage } from '../hooks';
import { useAuth } from '../auth';
import { useScript } from '../i18n';
import { PersonStatusBadge } from '../components/badges';
import { SummaryFieldView } from '../components/SummaryFieldView';
import { Provenance } from '../components/Provenance';
import { ZhText } from '../components/ZhText';

/** Name, dates and origin first — the things a reader came for. */
const HEADLINE_ORDER = [
  'name.primary',
  'name.courtesy',
  'name.pseudonym',
  'name.alias',
  'birth.date',
  'death.date',
  'place.origin',
  'place.residence',
  'bio.summary',
];

function byHeadlineOrder(a: { predicate: string }, b: { predicate: string }) {
  const rank = (p: string) => {
    const i = HEADLINE_ORDER.indexOf(p);
    return i === -1 ? HEADLINE_ORDER.length : i;
  };
  return rank(a.predicate) - rank(b.predicate) || a.predicate.localeCompare(b.predicate);
}

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
  const properties = [...summary.properties].sort(byHeadlineOrder);

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
          <Link className="btn btn-inline" to={`/persons/${encodeURIComponent(person.id)}/tree`}>
            {t('家族树')}
          </Link>
          <span className="muted" title={`${t('當前版本')} ${summary.current_revision}`}>
            {person.id}
          </span>
        </div>
      </header>

      {actionError ? <p className="error">{t(actionError)}</p> : null}

      <section className="person-summary">
        <h2>{t('基本資訊')}</h2>
        {properties.length === 0 ? (
          <p className="muted">{t('尚無基礎資訊主張。')}</p>
        ) : (
          <div className="fact-list">
            {properties.map((field) => (
              <SummaryFieldView
                key={field.predicate}
                field={field}
                onDispute={isAuthenticated ? onDispute : undefined}
                disputeBusy={disputeBusy}
              />
            ))}
          </div>
        )}
        <p className="hint">
          {t('数值由当前已采纳的主张计算得出；点「来源」查看依据，争议说法就并列在旁边，不会被隐藏。')}
        </p>
      </section>

      <section className="person-relationships">
        <h2>{t('親屬關係')}</h2>
        <div className="fact-list">
          <RelationshipGroup
            title="父母"
            items={summary.relationships.parents}
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
            title="子女"
            items={summary.relationships.children}
            onDispute={isAuthenticated ? onDispute : undefined}
            disputeBusy={disputeBusy}
          />
          <RelationshipGroup
            title="收養父母"
            items={summary.relationships.adoptive_parents}
            onDispute={isAuthenticated ? onDispute : undefined}
            disputeBusy={disputeBusy}
          />
          <RelationshipGroup
            title="收養子女"
            items={summary.relationships.adoptive_children}
            onDispute={isAuthenticated ? onDispute : undefined}
            disputeBusy={disputeBusy}
          />
          <RelationshipGroup
            title="先祖（代數不明）"
            items={summary.relationships.ancestors}
            onDispute={isAuthenticated ? onDispute : undefined}
            disputeBusy={disputeBusy}
          />
          <RelationshipGroup
            title="後代（代數不明）"
            items={summary.relationships.descendants}
            onDispute={isAuthenticated ? onDispute : undefined}
            disputeBusy={disputeBusy}
          />
          <RelationshipGroup
            title="其他關係"
            items={summary.relationships.other}
            onDispute={isAuthenticated ? onDispute : undefined}
            disputeBusy={disputeBusy}
          />
        </div>
      </section>

      <footer className="person-actions">
        {isAuthenticated ? (
          <>
            <Link className="btn btn-secondary" to={`/contribute?person=${encodeURIComponent(person.id)}&form=claim`}>
              {t('新增基礎資訊主張')}
            </Link>
            <Link className="btn btn-secondary" to={`/contribute?person=${encodeURIComponent(person.id)}&form=relationship`}>
              {t('新增親屬關係')}
            </Link>
          </>
        ) : (
          <p className="muted">
            <Link to="/contribute">{t('登入')}</Link> {t('後可新增主張、補充來源或標記爭議。')}
          </p>
        )}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => void onExport(person.id, setActionError)}
        >
          {t('匯出（JSON）')}
        </button>
      </footer>
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

/** Kin of one kind, one line each: who they are, with the citation folded away. */
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
  if (items.length === 0) return null;

  return (
    <div className="fact">
      <div className="fact-label">
        {t(title)}
        {items.length > 1 ? `（${items.length}）` : ''}
      </div>
      <div className="fact-body">
        {items.map((item) => (
          <div
            key={item.claim.id}
            className={item.claim.status === 'disputed' ? 'fact-line fact-line-disputed' : 'fact-line'}
          >
            <span className="fact-value">
              {item.object_person ? (
                <Link to={`/persons/${encodeURIComponent(item.object_person.id)}`}>
                  <ZhText text={item.object_person.display_name} fallback={item.object_person.id} />
                </Link>
              ) : (
                <span className="muted">{t('（關係物件未知）')}</span>
              )}
            </span>
            <Provenance item={item} onDispute={onDispute} disputeBusy={disputeBusy} />
          </div>
        ))}
      </div>
    </div>
  );
}
