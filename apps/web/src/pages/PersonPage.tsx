import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Download, GitFork, Home, Info, PenLine, Plus, Users } from 'lucide-react';
import type { ClaimWithSources, PersonSummary } from '@wang/domain';
import { api } from '../api';
import { relationshipGenerationCount } from '../format';
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
            {t('合并后的主要人物页')}
          </Link>
          {t('。舊連結將永久重定向到目標人物；合併可被回滾。')}
        </div>
      ) : null}

      <header className="person-head">
        <nav className="breadcrumbs" aria-label={t('面包屑导航')}>
          <Link to="/"><Home size={14} />{t('首页')}</Link><span>/</span><span>{t('人物')}</span>
        </nav>
        <div className="person-title-row">
          <span className="person-monogram" aria-hidden="true">{(summary.display_name ?? '王').slice(0, 1)}</span>
          <div>
            <p className="section-kicker">{t('王氏历史人物')}</p>
            <h1><ZhText text={summary.display_name} fallback={t('未命名人物')} /></h1>
            <div className="person-meta">
              <PersonStatusBadge status={person.status} />
              <span className="revision-label">{t(`资料版本 ${summary.current_revision}`)}</span>
            </div>
          </div>
          <Link className="btn person-tree-action" to={`/persons/${encodeURIComponent(person.id)}/tree`}>
            <GitFork size={17} />{t('查看家族树')}
          </Link>
        </div>
      </header>

      {actionError ? <p className="error">{t(actionError)}</p> : null}

      <section className="person-summary">
        <div className="content-section-head"><span><Info size={19} /></span><div><h2>{t('基本资料')}</h2><p>{t('姓名、生卒与籍贯等可核实信息')}</p></div></div>
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
        <div className="content-section-head"><span><Users size={19} /></span><div><h2>{t('亲属关系')}</h2><p>{t('点击姓名可继续浏览相关人物')}</p></div></div>
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
            title="先祖"
            items={summary.relationships.ancestors}
            showGeneration
            onDispute={isAuthenticated ? onDispute : undefined}
            disputeBusy={disputeBusy}
          />
          <RelationshipGroup
            title="後代"
            items={summary.relationships.descendants}
            showGeneration
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
              <Plus size={16} />{t('补充人物资料')}
            </Link>
            <Link className="btn btn-secondary" to={`/contribute?person=${encodeURIComponent(person.id)}&form=relationship`}>
              <PenLine size={16} />{t('添加亲属关系')}
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
          <Download size={16} />{t('导出资料')}
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
  showGeneration,
  onDispute,
  disputeBusy,
}: {
  title: string;
  items: ClaimWithSources[];
  showGeneration?: boolean;
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
                  <ZhText text={item.object_person.display_name} fallback={t('未命名人物')} />
                </Link>
              ) : (
                <span className="muted">{t('（關係物件未知）')}</span>
              )}
              {showGeneration ? (
                <small className={relationshipGenerationCount(item) ? 'generation-badge' : 'generation-badge generation-unknown'}>
                  {relationshipGenerationCount(item)
                    ? t(`相隔 ${relationshipGenerationCount(item)} 代`)
                    : t('代數不詳')}
                </small>
              ) : null}
            </span>
            <Provenance item={item} onDispute={onDispute} disputeBusy={disputeBusy} />
          </div>
        ))}
      </div>
    </div>
  );
}
