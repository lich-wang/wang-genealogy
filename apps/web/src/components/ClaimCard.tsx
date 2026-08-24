import { Link } from 'react-router-dom';
import type { ClaimWithSources } from '@wang/domain';
import { predicateLabel } from '../labels';
import { claimValueDisplay } from '../format';
import { useScript } from '../i18n';
import { ClaimStatusBadge } from './badges';
import { Provenance } from './Provenance';
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
 * One claim with its predicate — used where a claim appears outside a person's
 * summary (the source page). Disputed and retracted claims are visually flagged
 * but NEVER hidden: a minority view with valid sources stays on the page.
 *
 * The value is rendered in `evidence` mode (the text as the source recorded it)
 * and the citations sit in a disclosure rather than under every card.
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
        {claim.status !== 'accepted' ? <ClaimStatusBadge status={claim.status} /> : null}
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
            {value?.note ? <span className="claim-note">{t(value.note)}</span> : null}
          </>
        )}
      </div>

      <Provenance item={item} onDispute={onDispute} disputeBusy={disputeBusy} />
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
