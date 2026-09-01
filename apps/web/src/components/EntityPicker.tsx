import { useEffect, useId, useState } from 'react';
import { BookOpen, Check, ExternalLink, LoaderCircle, Search, UserRound, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { PersonSearchResult, PersonSummary, Source } from '@wang/domain';
import { sameScriptInsensitive } from '@wang/i18n';
import { api } from '../api';
import { useScript } from '../i18n';
import { SOURCE_TYPE_LABELS } from '../labels';
import { ZhText } from './ZhText';
import { PersonIdentityMeta } from './PersonIdentityMeta';

interface PersonPickerProps {
  label: string;
  value: string;
  onChange: (id: string) => void;
  excludeId?: string;
  onSelect?: (person: PersonSearchResult | null) => void;
}

export function PersonPicker({ label, value, onChange, excludeId, onSelect }: PersonPickerProps) {
  const { t } = useScript();
  const inputId = useId();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<PersonSearchResult | null>(null);
  const [items, setItems] = useState<PersonSearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!value) {
      setSelected(null);
      return;
    }
    if (selected?.id === value) return;
    let cancelled = false;
    api.getPerson(value).then((person) => {
      if (!cancelled) {
        const result = searchResultFromSummary(person);
        setSelected(result);
        onSelect?.(result);
      }
    }).catch(() => {
      if (!cancelled) setSelected(null);
    });
    return () => { cancelled = true; };
  }, [onSelect, selected?.id, value]);

  useEffect(() => {
    const q = query.trim();
    if (selected || q.length === 0) {
      setItems([]);
      return;
    }
    let cancelled = false;
    const timer = setTimeout(() => {
      setLoading(true);
      api.searchPersons(q).then((page) => {
        if (!cancelled) setItems(page.items.filter((person) => person.id !== excludeId));
      }).catch(() => {
        if (!cancelled) setItems([]);
      }).finally(() => {
        if (!cancelled) setLoading(false);
      });
    }, 250);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [excludeId, query, selected]);

  function choose(person: PersonSearchResult) {
    setSelected(person);
    setQuery('');
    setItems([]);
    onChange(person.id);
    onSelect?.(person);
  }

  function clear() {
    setSelected(null);
    setQuery('');
    onChange('');
    onSelect?.(null);
  }

  return (
    <div className="field entity-picker">
      <label htmlFor={inputId}>{t(label)}</label>
      {selected ? (
        <div className="entity-selected">
          <span className="entity-icon"><UserRound size={18} /></span>
          <span>
            <strong><ZhText text={selected.display_name} fallback={t('未命名人物')} /></strong>
            <small><Check size={13} />{t('已選擇')}</small>
            <PersonIdentityMeta person={selected} />
          </span>
          <Link className="entity-open-link" to={`/persons/${encodeURIComponent(selected.id)}`} target="_blank" aria-label={t('打開人物頁核對')}><ExternalLink size={16} /></Link>
          <button type="button" onClick={clear} aria-label={t('更換人物')}><X size={17} /></button>
        </div>
      ) : (
        <div className="picker-input-wrap">
          <Search size={18} />
          <input
            id={inputId}
            type="search"
            value={query}
            placeholder={t('输入姓名搜索，不需要填写编号')}
            autoComplete="off"
            onChange={(event) => setQuery(event.target.value)}
          />
          {loading ? <LoaderCircle className="spin" size={17} /> : null}
          {query.trim() ? (
            <div className="picker-popover" role="listbox">
              {items.length > 0 ? items.map((person) => (
                <button key={person.id} type="button" role="option" onClick={() => choose(person)}>
                  <span className="entity-icon"><UserRound size={17} /></span>
                  <span>
                    <strong><ZhText text={person.display_name} fallback={t('未命名人物')} />{sameNameLabel(items, person, t)}</strong>
                    <PersonIdentityMeta person={person} />
                  </span>
                </button>
              )) : !loading ? <p>{t('没有找到匹配人物，请尝试完整姓名。')}</p> : null}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

function sameNameLabel(
  items: PersonSearchResult[],
  person: PersonSearchResult,
  t: (value: string) => string,
) {
  const matches = items.filter((item) =>
    item.display_name && person.display_name
      ? sameScriptInsensitive(item.display_name, person.display_name)
      : item.display_name === person.display_name,
  );
  if (matches.length < 2) return null;
  return <small className="namesake-label">{t(`同名人物 ${matches.indexOf(person) + 1}/${matches.length}`)}</small>;
}

function searchResultFromSummary(summary: PersonSummary): PersonSearchResult {
  const values = (predicate: string): string[] => {
    const field = summary.properties.find((item) => item.predicate === predicate);
    if (!field) return [];
    return [field.recommended, ...field.alternatives]
      .map((item) => item?.claim.value_json)
      .map((value) => value?.text ?? value?.date?.original_text ?? '')
      .filter((value): value is string => Boolean(value));
  };
  const relationGroups = Object.values(summary.relationships);
  return {
    id: summary.person.id,
    status: summary.person.status,
    display_name: summary.display_name,
    merged_into_person_id: summary.person.merged_into_person_id,
    birth_text: values('birth.date')[0] ?? null,
    death_text: values('death.date')[0] ?? null,
    origin_text: values('place.origin')[0] ?? null,
    branch_text: values('lineage.branch')[0] ?? null,
    also_known_as: [
      ...values('name.alias'),
      ...values('name.courtesy'),
      ...values('name.pseudonym'),
      ...values('name.genealogical'),
    ],
    relative_count: relationGroups.reduce((count, group) => count + group.length, 0),
  };
}

interface SourcePickerProps {
  value: string;
  onChange: (id: string) => void;
}

export function SourcePicker({ value, onChange }: SourcePickerProps) {
  const { t } = useScript();
  const inputId = useId();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Source | null>(null);
  const [items, setItems] = useState<Source[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!value) { setSelected(null); return; }
    if (selected?.id === value) return;
    let cancelled = false;
    api.getSource(value).then((source) => { if (!cancelled) setSelected(source); }).catch(() => {
      if (!cancelled) setSelected(null);
    });
    return () => { cancelled = true; };
  }, [selected?.id, value]);

  useEffect(() => {
    const q = query.trim();
    if (selected || q.length === 0) { setItems([]); return; }
    let cancelled = false;
    const timer = setTimeout(() => {
      setLoading(true);
      api.searchSources(q).then((sources) => { if (!cancelled) setItems(sources); }).catch(() => {
        if (!cancelled) setItems([]);
      }).finally(() => { if (!cancelled) setLoading(false); });
    }, 250);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [query, selected]);

  function choose(source: Source) {
    setSelected(source); setQuery(''); setItems([]); onChange(source.id);
  }

  return (
    <div className="source-picker entity-picker">
      {selected ? (
        <div className="entity-selected">
          <span className="entity-icon"><BookOpen size={18} /></span>
          <span><strong><ZhText text={selected.title} /></strong><small>{t(SOURCE_TYPE_LABELS[selected.source_type])}{selected.creator ? ` · ${selected.creator}` : ''}</small></span>
          <button type="button" onClick={() => { setSelected(null); onChange(''); }} aria-label={t('更换来源')}><X size={17} /></button>
        </div>
      ) : (
        <div className="picker-input-wrap">
          <Search size={18} />
          <input id={inputId} type="search" value={query} placeholder={t('按书名、作者或外部标识搜索来源')} autoComplete="off" onChange={(event) => setQuery(event.target.value)} />
          {loading ? <LoaderCircle className="spin" size={17} /> : null}
          {query.trim() ? (
            <div className="picker-popover" role="listbox">
              {items.length > 0 ? items.map((source) => (
                <button key={source.id} type="button" role="option" onClick={() => choose(source)}>
                  <span className="entity-icon"><BookOpen size={17} /></span>
                  <span><strong><ZhText text={source.title} /></strong><small>{t(SOURCE_TYPE_LABELS[source.source_type])}{source.creator ? ` · ${source.creator}` : ''}</small></span>
                </button>
              )) : !loading ? <p>{t('没有找到此来源，可先在“新建来源”中添加。')}</p> : null}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
