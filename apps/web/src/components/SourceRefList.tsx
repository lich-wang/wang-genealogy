import { Link } from 'react-router-dom';
import type { ClaimSource, Source } from '@wang/domain';
import { useScript } from '../i18n';
import { STANCE_LABELS } from '../labels';
import { ZhText } from './ZhText';

type ClaimSourceWithSource = ClaimSource & { source: Source | null };

/**
 * Provenance strip for a single claim: every backing source with its stance,
 * locator, and a link to the source page. This is the core provenance-first UX
 * requirement — a claim never renders without exposing what backs it.
 *
 * Quotations are shown in `evidence` mode: an excerpt must stay in the script
 * the source used.
 */
export function SourceRefList({ sources }: { sources: ClaimSourceWithSource[] }) {
  const { t } = useScript();

  if (sources.length === 0) {
    return <p className="source-empty">{t('尚無來源（無來源的主張僅作私有草稿，不會公開）')}</p>;
  }

  return (
    <ul className="source-list">
      {sources.map((cs) => (
        <li key={cs.id} className={`source-ref stance-${cs.stance}`}>
          <span className={`badge badge-stance badge-stance-${cs.stance}`}>
            {t(STANCE_LABELS[cs.stance])}
          </span>{' '}
          <Link to={`/sources/${encodeURIComponent(cs.source_id)}`}>
            <ZhText text={cs.source?.title} fallback={t('未命名来源')} />
          </Link>
          {cs.locator ? (
            <span className="source-locator">
              ·{t('定位')}：<ZhText text={cs.locator} />
            </span>
          ) : null}
          {cs.quotation ? (
            <blockquote className="source-quote">
              “<ZhText text={cs.quotation} mode="evidence" />”
            </blockquote>
          ) : null}
          {cs.interpretation_note ? (
            <p className="source-note">
              {t('按')}：<ZhText text={cs.interpretation_note} />
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
