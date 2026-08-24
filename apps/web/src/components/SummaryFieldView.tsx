import type { ClaimWithSources, SummaryField } from '@wang/domain';
import { claimValueDisplay } from '../format';
import { useScript } from '../i18n';
import { predicateLabel } from '../labels';
import { Provenance } from './Provenance';
import { ZhText } from './ZhText';

interface SummaryFieldViewProps {
  field: SummaryField;
  onDispute?: (claimId: string) => void;
  disputeBusy?: boolean;
}

/**
 * One line of basic information: the label, the recommended value, and — right
 * beside it, never folded away — any other sourced value that disagrees.
 *
 * The citations behind each value live in a disclosure (see Provenance). What
 * must stay visible is the disagreement itself: a minority reading with valid
 * sources is shown next to the recommended one, which is the whole point of
 * storing claims instead of fields.
 */
export function SummaryFieldView({ field, onDispute, disputeBusy }: SummaryFieldViewProps) {
  const { t } = useScript();
  const hasAlternatives = field.alternatives.length > 0;

  return (
    <div className="fact">
      <div className="fact-label">{t(predicateLabel(field.predicate))}</div>
      <div className="fact-body">
        {field.recommended ? (
          <ClaimValueLine
            item={field.recommended}
            recommended={hasAlternatives}
            onDispute={onDispute}
            disputeBusy={disputeBusy}
          />
        ) : (
          <p className="muted">{t('暫無已採納的主張。')}</p>
        )}

        {hasAlternatives ? (
          <div className="fact-alternatives">
            <span className="alternatives-label">{t('另有说法')}：</span>
            {field.alternatives.map((alt) => (
              <ClaimValueLine
                key={alt.claim.id}
                item={alt}
                onDispute={onDispute}
                disputeBusy={disputeBusy}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ClaimValueLine({
  item,
  recommended = false,
  onDispute,
  disputeBusy,
}: {
  item: ClaimWithSources;
  recommended?: boolean;
  onDispute?: (claimId: string) => void;
  disputeBusy?: boolean;
}) {
  const { t } = useScript();
  const value = claimValueDisplay(item.claim.value_json);

  return (
    <div className={item.claim.status === 'disputed' ? 'fact-line fact-line-disputed' : 'fact-line'}>
      <span className="fact-value">
        <ZhText
          text={value?.text}
          language={value?.language}
          mode="evidence"
          fallback={<span className="muted">{t('（無值）')}</span>}
        />
        {value?.note ? <span className="claim-note">{t(value.note)}</span> : null}
      </span>
      {recommended ? <span className="badge badge-recommended">{t('推薦值')}</span> : null}
      <Provenance item={item} onDispute={onDispute} disputeBusy={disputeBusy} />
    </div>
  );
}
