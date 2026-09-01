import { CalendarDays, MapPin, Network, Tags, Users } from 'lucide-react';
import type { PersonSearchResult } from '@wang/domain';
import { useScript } from '../i18n';
import { ZhText } from './ZhText';

/** Human-readable clues for distinguishing people who share the same name. */
export function PersonIdentityMeta({ person }: { person: PersonSearchResult }) {
  const { t } = useScript();
  const aliases = person.also_known_as ?? [];
  const relativeCount = person.relative_count ?? 0;
  const hasLife = person.birth_text || person.death_text;
  const hasIdentity = hasLife || person.origin_text || person.branch_text || aliases.length > 0;

  return (
    <span className="person-identity-meta">
      {hasLife ? (
        <span><CalendarDays size={13} /><ZhText text={person.birth_text} fallback={t('生年不詳')} /> — <ZhText text={person.death_text} fallback={t('卒年不詳')} /></span>
      ) : null}
      {person.origin_text ? <span><MapPin size={13} />{t('籍貫')}：<ZhText text={person.origin_text} /></span> : null}
      {person.branch_text ? <span><Network size={13} />{t('支派')}：<ZhText text={person.branch_text} /></span> : null}
      {aliases.length > 0 ? (
        <span><Tags size={13} />{t('又名')}：{aliases.slice(0, 3).map((name, index) => <span key={`${name}-${index}`}><ZhText text={name} />{index < Math.min(aliases.length, 3) - 1 ? '、' : ''}</span>)}</span>
      ) : null}
      {relativeCount > 0 ? <span><Users size={13} />{t(`已記錄 ${relativeCount} 位親屬`)}</span> : null}
      {!hasIdentity ? <span className="identity-missing">{t('暫無生卒或籍貫線索，建議打開人物頁核對')}</span> : null}
    </span>
  );
}
