import { useParams } from 'react-router-dom';
import type { ClaimWithSources, Source } from '@wang/domain';
import { api } from '../api';
import { useAsync } from '../hooks';
import { useScript } from '../i18n';
import { LICENSE_LABELS, SOURCE_TYPE_LABELS } from '../labels';
import { ClaimCard } from '../components/ClaimCard';
import { ZhText } from '../components/ZhText';

export function SourcePage() {
  const { id = '' } = useParams();
  const { t } = useScript();

  const source = useAsync<Source>(() => api.getSource(id), [id]);
  const claims = useAsync<ClaimWithSources[]>(() => api.getSourceClaims(id), [id]);

  if (source.loading) return <div className="page">{t('載入中…')}</div>;
  if (source.error) return <div className="page error">{t('載入失敗')}：{t(source.error)}</div>;
  if (!source.data) return <div className="page">{t('未找到來源。')}</div>;

  const s = source.data;

  return (
    <div className="page source-page">
      <header className="source-head">
        <h1>
          <ZhText text={s.title} />
        </h1>
        <span className="badge badge-source-type">{t(SOURCE_TYPE_LABELS[s.source_type])}</span>
      </header>

      <dl className="source-biblio">
        <Row label="著者/編者" value={s.creator} />
        <Row label="出版者" value={s.publisher} />
        <Row label="出版時間" value={s.published_at_text} />
        <Row label="外部標識" value={s.external_identifier} convert={false} />
        <Row label="許可" value={t(LICENSE_LABELS[s.license_code])} convert={false} />
        <Row label="訪問時間" value={s.accessed_at} convert={false} />
        {s.canonical_url ? (
          <>
            <dt>{t('連結')}</dt>
            <dd>
              <a href={s.canonical_url} target="_blank" rel="noreferrer noopener">
                {s.canonical_url}
              </a>
            </dd>
          </>
        ) : null}
      </dl>

      <section className="source-claims">
        <h2>{t('引用此來源的主張')}</h2>
        {claims.loading ? <p className="muted">{t('載入中…')}</p> : null}
        {claims.error ? <p className="error">{t(claims.error)}</p> : null}
        {claims.data ? (
          claims.data.length === 0 ? (
            <p className="muted">{t('尚無主張引用此來源。')}</p>
          ) : (
            claims.data.map((item) => <ClaimCard key={item.claim.id} item={item} />)
          )
        ) : null}
      </section>
    </div>
  );
}

function Row({
  label,
  value,
  convert = true,
}: {
  label: string;
  value: string | null | undefined;
  /** Identifiers, dates and license codes are shown verbatim. */
  convert?: boolean;
}) {
  const { t } = useScript();
  if (!value) return null;
  return (
    <>
      <dt>{t(label)}</dt>
      <dd>{convert ? <ZhText text={value} /> : value}</dd>
    </>
  );
}
