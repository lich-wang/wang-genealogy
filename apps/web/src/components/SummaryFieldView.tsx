import type { SummaryField } from '@wang/domain';
import { useScript } from '../i18n';
import { predicateLabel } from '../labels';
import { ClaimCard } from './ClaimCard';

interface SummaryFieldViewProps {
  field: SummaryField;
  onDispute?: (claimId: string) => void;
  disputeBusy?: boolean;
}

/**
 * Renders one computed summary field: the recommended (accepted, top-ranked)
 * claim highlighted, and every coexisting alternative shown side by side. This
 * is where "conflicts coexist, minority views never hidden" is made visible.
 */
export function SummaryFieldView({ field, onDispute, disputeBusy }: SummaryFieldViewProps) {
  const { t } = useScript();
  const hasAlternatives = field.alternatives.length > 0;

  return (
    <section className="summary-field">
      <h3 className="summary-field-title">{t(predicateLabel(field.predicate))}</h3>

      {field.recommended ? (
        <ClaimCard
          item={field.recommended}
          recommended
          onDispute={onDispute}
          disputeBusy={disputeBusy}
        />
      ) : (
        <p className="muted">{t('暫無已採納的主張。')}</p>
      )}

      {hasAlternatives ? (
        <div className="summary-alternatives">
          <p className="alternatives-label">
            {t('其他並存說法')}（{field.alternatives.length}）—{' '}
            {t('有來源的少數說法不會被隱藏：')}
          </p>
          {field.alternatives.map((alt) => (
            <ClaimCard
              key={alt.claim.id}
              item={alt}
              onDispute={onDispute}
              disputeBusy={disputeBusy}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
