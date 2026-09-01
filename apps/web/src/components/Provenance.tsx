import type { ClaimWithSources } from '@wang/domain';
import { useScript } from '../i18n';
import { CLAIM_STATUS_LABELS, CONFIDENCE_LABELS } from '../labels';
import { SourceRefList } from './SourceRefList';

interface ProvenanceProps {
  item: ClaimWithSources;
  onDispute?: (claimId: string) => void;
  disputeBusy?: boolean;
}

/**
 * Where a value came from, one click (or one hover) away.
 *
 * Reading a person's page should be about the person, so citations are folded
 * into a disclosure rather than printed under every line. Folded is not hidden:
 * the count is always on screen, the source titles are in the hover text, and
 * opening it shows the full citation list with the claim's id, revision and
 * review status — provenance stays reachable without a page of footnotes.
 */
export function Provenance({ item, onDispute, disputeBusy }: ProvenanceProps) {
  const { t } = useScript();
  const { claim, sources } = item;

  const titles = sources
    .map((s) => {
      const title = s.source?.title ?? '未命名来源';
      return s.locator ? `${title}（${s.locator}）` : title;
    })
    .join('\n');

  return (
    <details className="provenance">
      <summary title={titles || t('尚無來源')}>
        {sources.length > 0 ? `${t('來源')} ${sources.length}` : t('尚無來源')}
        {claim.status !== 'accepted' ? (
          <span className={`badge badge-status badge-status-${claim.status}`}>
            {t(CLAIM_STATUS_LABELS[claim.status])}
          </span>
        ) : null}
      </summary>
      <div className="provenance-body">
        <SourceRefList sources={sources} />
        <div className="claim-meta">
          <span>
            {t('版本')} {claim.current_revision}
          </span>
          <span>{t(CONFIDENCE_LABELS[claim.confidence])}</span>
          {onDispute && claim.status !== 'disputed' && claim.status !== 'retracted' ? (
            <button
              type="button"
              className="btn btn-inline"
              disabled={disputeBusy}
              onClick={() => onDispute(claim.id)}
            >
              {t('標記爭議')}
            </button>
          ) : null}
        </div>
      </div>
    </details>
  );
}
