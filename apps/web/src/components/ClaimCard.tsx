import { Link } from 'react-router-dom';
import type { ClaimWithSources } from '@wang/domain';
import { predicateLabel } from '../labels';
import { claimValueDisplay } from '../format';
import { useScript } from '../i18n';
import { ClaimStatusBadge, ConfidenceBadge } from './badges';
import { SourceRefList } from './SourceRefList';
import { ZhText } from './ZhText';

interface ClaimCardProps {
  item: ClaimWithSources;
  /** Marks this card as the highlighted recommended value. */
  recommended?: boolean;
  /** When logged in, the person page passes a dispute handler. */
  onDispute?: (claimId: string) => void;
  disputeBusy?: boolean;
}

/**
 * One claim rendered with full provenance. Disputed / retracted claims are
 * visually flagged but NEVER hidden — minority views with valid sources stay
 * on the page per the domain invariants.
 *
 * The value is rendered in `evidence` mode: the text as the source recorded it,
 * with the other script offered alongside it rather than replacing it.
 */
export function ClaimCard({ item, recommended, onDispute, disputeBusy }: ClaimCardProps) {
  const { t } = useScript();
  const { claim } = item;
  const disputed = claim.status === 'disputed';
  const relationship = claim.claim_kind === 'relationship';
  const value = relationship ? null : claimValueDisplay(claim.value_json);

  return (
    <article
      className={[
        'claim-card',
        recommended ? 'claim-card-recommended' : '',
        disputed ? 'claim-card-disputed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <header className="claim-card-head">
        <span className="claim-predicate">{t(predicateLabel(claim.predicate))}</span>
        {recommended ? <span className="badge badge-recommended">{t('推薦值')}</span> : null}
        <ClaimStatusBadge status={claim.status} />
        <ConfidenceBadge confidence={claim.confidence} />
      </header>

      <div className="claim-value">
        {relationship ? (
          <RelationshipTarget item={item} />
        ) : (
          <>
            <ZhText
              text={value?.text}
              language={value?.language}
              mode="evidence"
              fallback={<span className="muted">{t('（無值）')}</span>}
            />
            {value?.note ? (
              <span className="claim-note">
                {/* Our annotation about the source's precision, not a quotation
                    from it — so it reads in the reader's script. */}
                <ZhText text={value.note} />
              </span>
            ) : null}
          </>
        )}
      </div>

      <SourceRefList sources={item.sources} />

      <footer className="claim-card-foot">
        <span className="claim-id">
          {t('主張')} {claim.id}
        </span>
        <span className="claim-rev">
          {t('版本')} {claim.current_revision}
        </span>
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
      </footer>
    </article>
  );
}

function RelationshipTarget({ item }: { item: ClaimWithSources }) {
  const { t } = useScript();
  const target = item.object_person;
  if (!target) return <span>{t('（關係物件未知）')}</span>;
  return (
    <Link to={`/persons/${encodeURIComponent(target.id)}`}>
      <ZhText text={target.display_name} fallback={target.id} />
    </Link>
  );
}
