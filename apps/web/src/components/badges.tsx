import type { ClaimStatus, Confidence, PersonStatus } from '@wang/domain';
import { useScript } from '../i18n';
import {
  CLAIM_STATUS_LABELS,
  CONFIDENCE_LABELS,
  PERSON_STATUS_LABELS,
} from '../labels';

export function ClaimStatusBadge({ status }: { status: ClaimStatus }) {
  const { t } = useScript();
  return (
    <span className={`badge badge-status badge-status-${status}`}>
      {t(CLAIM_STATUS_LABELS[status])}
    </span>
  );
}

export function ConfidenceBadge({ confidence }: { confidence: Confidence }) {
  const { t } = useScript();
  return (
    <span className={`badge badge-confidence badge-confidence-${confidence}`}>
      {t(CONFIDENCE_LABELS[confidence])}
    </span>
  );
}

export function PersonStatusBadge({ status }: { status: PersonStatus }) {
  const { t } = useScript();
  return (
    <span className={`badge badge-person badge-person-${status}`}>
      {t(PERSON_STATUS_LABELS[status])}
    </span>
  );
}
