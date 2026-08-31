import { useEffect, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  CONFIDENCE,
  LICENSE_CODE,
  PROPERTY_PREDICATES,
  RELATIONSHIP_INPUT,
  SOURCE_TYPE,
} from '@wang/domain';
import type {
  Confidence,
  LicenseCode,
  PersonSummaryLite,
  PropertyPredicate,
  RelationshipInput,
  SourceType,
} from '@wang/domain';
import { detectScript, scriptVariants } from '@wang/i18n';
import { loginSchema, signupSchema } from '@wang/validation';
import { api } from '../api';
import type { SourceRefInput } from '../api';
import { toMessage } from '../hooks';
import { useAuth } from '../auth';
import { useScript } from '../i18n';
import {
  CONFIDENCE_LABELS,
  LICENSE_LABELS,
  SOURCE_TYPE_LABELS,
  predicateLabel,
} from '../labels';
import { SourceRefEditor, cleanSourceRefs } from '../components/SourceRefEditor';
import { ZhText } from '../components/ZhText';

/** Script tags a contributor can attach to a text value. */
const LANGUAGE_OPTIONS: Array<{ value: string; label: string }> = [
  { value: 'zh-Hans', label: '简体中文（zh-Hans）' },
  { value: 'zh-Hant', label: '繁體中文（zh-Hant）' },
  { value: 'zh-Latn-pinyin', label: '拼音（zh-Latn-pinyin）' },
  { value: '', label: '不標註' },
];

export function ContributePage() {
  const { isAuthenticated, user, logout } = useAuth();
  const { t } = useScript();
  const [params] = useSearchParams();

  return (
    <div className="page contribute-page">
      <h1>{t('貢獻')}</h1>
      {isAuthenticated ? (
        <>
          <p className="muted">
            {t('已登入')}：{user?.display_name}（{user?.role}）
            <button type="button" className="btn btn-inline" onClick={logout}>
              {t('退出')}
            </button>
          </p>
          <ContributorForms
            initialPerson={params.get('person') ?? ''}
            initialForm={params.get('form') ?? 'person'}
          />
        </>
      ) : (
        <AuthForms />
      )}
    </div>
  );
}

/* ------------------------------ auth ------------------------------ */

function AuthForms() {
  const { login, signup } = useAuth();
  const { t } = useScript();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      if (mode === 'login') {
        const parsed = loginSchema.safeParse({ email, password });
        if (!parsed.success) throw new Error(parsed.error.issues[0]?.message ?? '輸入無效');
        setBusy(true);
        await login(parsed.data);
      } else {
        const parsed = signupSchema.safeParse({ display_name: displayName, email, password });
        if (!parsed.success) throw new Error(parsed.error.issues[0]?.message ?? '輸入無效');
        setBusy(true);
        await signup(parsed.data);
      }
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="auth-forms">
      <div className="tabs">
        <button
          type="button"
          className={mode === 'login' ? 'tab tab-active' : 'tab'}
          onClick={() => setMode('login')}
        >
          {t('登入')}
        </button>
        <button
          type="button"
          className={mode === 'signup' ? 'tab tab-active' : 'tab'}
          onClick={() => setMode('signup')}
        >
          {t('註冊')}
        </button>
      </div>

      <form className="form" onSubmit={submit}>
        {mode === 'signup' ? (
          <label className="field">
            <span>{t('顯示名稱')}</span>
            <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
          </label>
        ) : null}
        <label className="field">
          <span>{t('電子郵件')}</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label className="field">
          <span>{t('密碼')}</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error ? <p className="error">{t(error)}</p> : null}
        <button className="btn" type="submit" disabled={busy}>
          {busy ? t('提交中…') : mode === 'login' ? t('登入') : t('註冊')}
        </button>
      </form>
    </section>
  );
}

/* -------------------------- contributor forms -------------------------- */

function ContributorForms({
  initialPerson,
  initialForm,
}: {
  initialPerson: string;
  initialForm: string;
}) {
  const { t } = useScript();
  const [form, setForm] = useState<string>(initialForm);

  return (
    <section className="contributor-forms">
      <div className="tabs">
        <TabButton current={form} value="person" onSelect={setForm}>
          {t('新建人物')}
        </TabButton>
        <TabButton current={form} value="claim" onSelect={setForm}>
          {t('新增資訊主張')}
        </TabButton>
        <TabButton current={form} value="relationship" onSelect={setForm}>
          {t('新增親屬關係')}
        </TabButton>
        <TabButton current={form} value="source" onSelect={setForm}>
          {t('新建來源')}
        </TabButton>
      </div>

      {form === 'person' ? <CreatePersonForm /> : null}
      {form === 'claim' ? <CreateClaimForm initialPerson={initialPerson} /> : null}
      {form === 'relationship' ? <CreateRelationshipForm initialPerson={initialPerson} /> : null}
      {form === 'source' ? <CreateSourceForm /> : null}
    </section>
  );
}

function TabButton({
  current,
  value,
  onSelect,
  children,
}: {
  current: string;
  value: string;
  onSelect: (v: string) => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={current === value ? 'tab tab-active' : 'tab'}
      onClick={() => onSelect(value)}
    >
      {children}
    </button>
  );
}

function FormResult({ error, ok }: { error: string | null; ok: string | null }) {
  const { t } = useScript();
  if (error) return <p className="error">{t(error)}</p>;
  if (ok) return <p className="success">{t(ok)}</p>;
  return null;
}

/** Existing persons recorded under the same name in either script. */
function DuplicateWarning({ candidates }: { candidates: PersonSummaryLite[] }) {
  const { t } = useScript();
  if (candidates.length === 0) return null;
  return (
    <div className="banner banner-duplicate" role="status">
      <p>
        {t('已存在同名人物（繁體與简体視為同名）。若指同一人，請不要重複建立，改用合併提案：')}
      </p>
      <ul>
        {candidates.map((p) => (
          <li key={p.id}>
            <Link to={`/persons/${encodeURIComponent(p.id)}`}>
              <ZhText text={p.display_name} fallback={p.id} />
            </Link>{' '}
            <span className="muted">{p.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CreatePersonForm() {
  const { t } = useScript();
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('zh-Hans');
  const [languageTouched, setLanguageTouched] = useState(false);
  const [confidence, setConfidence] = useState<Confidence>('unknown');
  const [sources, setSources] = useState<SourceRefInput[]>([]);
  const [duplicates, setDuplicates] = useState<PersonSummaryLite[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  // Tag the value with the script actually typed, so later readers get an exact
  // conversion instead of a guess. The contributor can always override.
  useEffect(() => {
    if (languageTouched) return;
    const detected = detectScript(name.trim());
    if (detected) setLanguage(detected);
  }, [name, languageTouched]);

  // Warn about an existing person with this name in EITHER script before the
  // contributor creates a second record for the same historical figure.
  useEffect(() => {
    const query = name.trim();
    if (query.length === 0) {
      setDuplicates([]);
      return;
    }
    let cancelled = false;
    const timer = setTimeout(() => {
      api
        .searchPersons(query)
        .then((res) => {
          if (cancelled) return;
          const forms = scriptVariants(query);
          setDuplicates(
            res.items.filter((p) => p.display_name != null && forms.includes(p.display_name)),
          );
        })
        .catch(() => {
          /* a failed duplicate hint must never block the form */
        });
    }, 400);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [name]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(null);
    setBusy(true);
    try {
      const res = await api.createPerson({
        name: {
          predicate: 'name.primary',
          value: { text: name.trim(), language: language.trim() || undefined },
          confidence,
          sources: cleanSourceRefs(sources),
        },
      });
      const pid = res.person_id ?? res.id;
      if (res.possible_duplicates?.length) setDuplicates(res.possible_duplicates);
      setOk(
        pid
          ? `已建立人物 ${pid}。${sources.length === 0 ? '（無來源，將保留為私有草稿）' : ''}`
          : '已提交。',
      );
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <p className="hint">
        {t('建立人物錨點需提交至少一個規範姓名主張；沒有來源時只能作為私有草稿儲存。')}
      </p>
      <p className="hint">
        {t('姓名按來源原文錄入，不要為了統一字形而改寫；字形轉換只發生在閱讀時。')}
      </p>
      <label className="field">
        <span>{t('規範姓名')}</span>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <DuplicateWarning candidates={duplicates} />
      <label className="field">
        <span>{t('語言/字形標記')}</span>
        <select
          value={language}
          onChange={(e) => {
            setLanguageTouched(true);
            setLanguage(e.target.value);
          }}
        >
          {LANGUAGE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <ConfidenceSelect value={confidence} onChange={setConfidence} />
      <SourceRefEditor value={sources} onChange={setSources} />
      <FormResult error={error} ok={ok} />
      <button className="btn" type="submit" disabled={busy || !name.trim()}>
        {busy ? t('提交中…') : t('建立人物')}
      </button>
    </form>
  );
}

function CreateClaimForm({ initialPerson }: { initialPerson: string }) {
  const { t } = useScript();
  const [personId, setPersonId] = useState(initialPerson);
  const [predicate, setPredicate] = useState<PropertyPredicate>('name.alias');
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('zh-Hans');
  const [languageTouched, setLanguageTouched] = useState(false);
  const [dateText, setDateText] = useState('');
  const [confidence, setConfidence] = useState<Confidence>('unknown');
  const [sources, setSources] = useState<SourceRefInput[]>([]);
  const [summary, setSummary] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const isDate = predicate === 'birth.date' || predicate === 'death.date';

  useEffect(() => {
    if (languageTouched) return;
    const detected = detectScript(text.trim());
    if (detected) setLanguage(detected);
  }, [text, languageTouched]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(null);
    setBusy(true);
    try {
      const res = await api.createClaim(personId.trim(), {
        claim_kind: 'property',
        predicate,
        value: isDate
          ? { date: { original_text: dateText.trim() } }
          : { text: text.trim(), language: language.trim() || undefined },
        confidence,
        sources: cleanSourceRefs(sources),
        change_summary: summary.trim() || undefined,
      });
      setOk(`已提交主張 ${res.claim_id ?? res.id ?? ''}。`);
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <label className="field">
        <span>{t('人物 ID')}</span>
        <input value={personId} onChange={(e) => setPersonId(e.target.value)} required />
      </label>
      <label className="field">
        <span>{t('欄位')}</span>
        <select value={predicate} onChange={(e) => setPredicate(e.target.value as PropertyPredicate)}>
          {PROPERTY_PREDICATES.map((p) => (
            <option key={p} value={p}>
              {t(predicateLabel(p))}（{p}）
            </option>
          ))}
        </select>
      </label>
      {isDate ? (
        <label className="field">
          <span>{t('時間原文（保留不確定表達，如“約北宋慶曆年間”）')}</span>
          <input value={dateText} onChange={(e) => setDateText(e.target.value)} required />
        </label>
      ) : (
        <>
          <label className="field">
            <span>{t('取值')}</span>
            <input value={text} onChange={(e) => setText(e.target.value)} required />
          </label>
          <label className="field">
            <span>{t('語言/字形標記')}</span>
            <select
              value={language}
              onChange={(e) => {
                setLanguageTouched(true);
                setLanguage(e.target.value);
              }}
            >
              {LANGUAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </>
      )}
      <ConfidenceSelect value={confidence} onChange={setConfidence} />
      <SourceRefEditor value={sources} onChange={setSources} />
      <label className="field">
        <span>{t('修改說明')}</span>
        <input value={summary} onChange={(e) => setSummary(e.target.value)} />
      </label>
      <FormResult error={error} ok={ok} />
      <button className="btn" type="submit" disabled={busy || !personId.trim()}>
        {busy ? t('提交中…') : t('提交主張')}
      </button>
    </form>
  );
}

function CreateRelationshipForm({ initialPerson }: { initialPerson: string }) {
  const { t } = useScript();
  const [personId, setPersonId] = useState(initialPerson);
  const [relationship, setRelationship] = useState<RelationshipInput>('parent');
  const [relatedId, setRelatedId] = useState('');
  const [confidence, setConfidence] = useState<Confidence>('unknown');
  const [sources, setSources] = useState<SourceRefInput[]>([]);
  const [summary, setSummary] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const relationshipLabels: Record<RelationshipInput, string> = {
    parent: '父/母（對方是當前人物的父母）',
    child: '子/女（對方是當前人物的子女）',
    adoptive_parent: '收養父母（對方收養當前人物）',
    adoptive_child: '收養子女（當前人物收養對方）',
    spouse: '配偶',
    // For a source that states descent without naming the generations between
    // ("太子晉後代"、"王元四世孫"). Put the stated generation in the locator.
    ancestor: '先祖（對方是當前人物的先祖，代數不明）',
    descendant: '後代（對方是當前人物的後代，代數不明）',
  };

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(null);
    setBusy(true);
    try {
      const res = await api.createRelationship(personId.trim(), {
        relationship,
        related_person_id: relatedId.trim(),
        confidence,
        sources: cleanSourceRefs(sources),
        change_summary: summary.trim() || undefined,
      });
      setOk(`已提交關係主張 ${res.claim_id ?? res.id ?? ''}。服務端會統一規範化為單向 *_of 關係。`);
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <p className="hint">
        {t('以自然語言方向填寫，服務端統一規範化為單向 *_of 關係；收養與生物學親子關係分開記錄。')}
      </p>
      <label className="field">
        <span>{t('當前人物 ID')}</span>
        <input value={personId} onChange={(e) => setPersonId(e.target.value)} required />
      </label>
      <label className="field">
        <span>{t('關係')}</span>
        <select
          value={relationship}
          onChange={(e) => setRelationship(e.target.value as RelationshipInput)}
        >
          {RELATIONSHIP_INPUT.map((r) => (
            <option key={r} value={r}>
              {t(relationshipLabels[r])}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>{t('對方人物 ID')}</span>
        <input value={relatedId} onChange={(e) => setRelatedId(e.target.value)} required />
      </label>
      <ConfidenceSelect value={confidence} onChange={setConfidence} />
      <SourceRefEditor value={sources} onChange={setSources} />
      <label className="field">
        <span>{t('修改說明')}</span>
        <input value={summary} onChange={(e) => setSummary(e.target.value)} />
      </label>
      <FormResult error={error} ok={ok} />
      <button className="btn" type="submit" disabled={busy || !personId.trim() || !relatedId.trim()}>
        {busy ? t('提交中…') : t('提交關係')}
      </button>
    </form>
  );
}

function CreateSourceForm() {
  const { t } = useScript();
  const [sourceType, setSourceType] = useState<SourceType>('book');
  const [title, setTitle] = useState('');
  const [creator, setCreator] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [url, setUrl] = useState('');
  const [externalId, setExternalId] = useState('');
  const [license, setLicense] = useState<LicenseCode>('unknown');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(null);
    setBusy(true);
    try {
      const created = await api.createSource({
        source_type: sourceType,
        title: title.trim(),
        creator: creator.trim() || undefined,
        publisher: publisher.trim() || undefined,
        published_at_text: publishedAt.trim() || undefined,
        canonical_url: url.trim() || undefined,
        external_identifier: externalId.trim() || undefined,
        license_code: license,
      });
      setOk(`已建立來源 ${created.source_id}。`);
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <p className="hint">
        {t('來源不接收影像；僅登記書目資訊、URL、外部 ID、定位與合理長度的摘錄。')}
      </p>
      <label className="field">
        <span>{t('類型')}</span>
        <select value={sourceType} onChange={(e) => setSourceType(e.target.value as SourceType)}>
          {SOURCE_TYPE.map((type) => (
            <option key={type} value={type}>
              {t(SOURCE_TYPE_LABELS[type])}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>{t('標題')}</span>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label className="field">
        <span>{t('著者/編者')}</span>
        <input value={creator} onChange={(e) => setCreator(e.target.value)} />
      </label>
      <label className="field">
        <span>{t('出版者')}</span>
        <input value={publisher} onChange={(e) => setPublisher(e.target.value)} />
      </label>
      <label className="field">
        <span>{t('出版時間（原文）')}</span>
        <input value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} />
      </label>
      <label className="field">
        <span>{t('連結 URL')}</span>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
      <label className="field">
        <span>{t('外部標識（如 CBDB ID）')}</span>
        <input value={externalId} onChange={(e) => setExternalId(e.target.value)} />
      </label>
      <label className="field">
        <span>{t('許可')}</span>
        <select value={license} onChange={(e) => setLicense(e.target.value as LicenseCode)}>
          {LICENSE_CODE.map((code) => (
            <option key={code} value={code}>
              {t(LICENSE_LABELS[code])}
            </option>
          ))}
        </select>
      </label>
      <FormResult error={error} ok={ok} />
      <button className="btn" type="submit" disabled={busy || !title.trim()}>
        {busy ? t('提交中…') : t('建立來源')}
      </button>
    </form>
  );
}

function ConfidenceSelect({
  value,
  onChange,
}: {
  value: Confidence;
  onChange: (v: Confidence) => void;
}) {
  const { t } = useScript();
  return (
    <label className="field">
      <span>{t('可信度')}</span>
      <select value={value} onChange={(e) => onChange(e.target.value as Confidence)}>
        {CONFIDENCE.map((c) => (
          <option key={c} value={c}>
            {t(CONFIDENCE_LABELS[c])}
          </option>
        ))}
      </select>
    </label>
  );
}
