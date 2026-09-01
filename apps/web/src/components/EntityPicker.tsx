import { useEffect, useId, useState } from 'react';
import { BookOpen, Check, LoaderCircle, Search, UserRound, X } from 'lucide-react';
import type { PersonSummaryLite, Source } from '@wang/domain';
import { api } from '../api';
import { useScript } from '../i18n';
import { SOURCE_TYPE_LABELS } from '../labels';
import { ZhText } from './ZhText';

interface PersonPickerProps {
  label: string;
  value: string;
  onChange: (id: string) => void;
  excludeId?: string;
}

export function PersonPicker({ label, value, onChange, excludeId }: PersonPickerProps) {
  const { t } = useScript();
  const inputId = useId();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<PersonSummaryLite | null>(null);
  const [items, setItems] = useState<PersonSummaryLite[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!value) {
      setSelected(null);
      return;
    }
    if (selected?.id === value) return;
    let cancelled = false;
    api.getPerson(value).then((person) => {
      if (!cancelled) setSelected({
        id: person.person.id,
        status: person.person.status,
        display_name: person.display_name,
        merged_into_person_id: person.person.merged_into_person_id,
      });
    }).catch(() => {
      if (!cancelled) setSelected(null);
    });
    return () => { cancelled = true; };
  }, [selected?.id, value]);

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

  function choose(person: PersonSummaryLite) {
    setSelected(person);
    setQuery('');
    setItems([]);
    onChange(person.id);
  }

  function clear() {
    setSelected(null);
    setQuery('');
    onChange('');
  }

  return (
    <div className="field entity-picker">
      <label htmlFor={inputId}>{t(label)}</label>
      {selected ? (
        <div className="entity-selected">
          <span className="entity-icon"><UserRound size={18} /></span>
          <span>
            <strong><ZhText text={selected.display_name} fallback={t('未命名人物')} /></strong>
            <small><Check size={13} />{t('已选择')}</small>
          </span>
          <button type="button" onClick={clear} aria-label={t('更换人物')}><X size={17} /></button>
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
                  <span><strong><ZhText text={person.display_name} fallback={t('未命名人物')} /></strong><small>{t('查看并选择此人物')}</small></span>
                </button>
              )) : !loading ? <p>{t('没有找到匹配人物，请尝试完整姓名。')}</p> : null}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
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
