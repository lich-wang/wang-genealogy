import { useEffect, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, GitFork, LogOut, Plus, ScrollText, UserPlus } from 'lucide-react';
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
import { PersonPicker } from '../components/EntityPicker';

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
      <header className="page-heading contribute-heading">
        <span className="section-kicker"><Plus size={15} />{t('参与共建')}</span>
        <h1>{t('把可靠的家族资料，留给更多人')}</h1>
        <p>{t('从姓名开始，按引导补充人物、关系和来源。所有修改都会留下记录，不需要接触任何数据库编号。')}</p>
      </header>
      {isAuthenticated ? (
        <>
          <div className="signed-in-bar">
            <span className="signed-in-avatar">{(user?.display_name ?? '王').slice(0, 1)}</span>
            <span><small>{t('当前贡献者')}</small><strong>{user?.display_name}</strong></span>
            <button type="button" className="btn btn-inline" onClick={logout}>
              <LogOut size={14} />{t('退出')}
            </button>
          </div>
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
          <UserPlus size={18} /><span><strong>{t('添加人物')}</strong><small>{t('从姓名开始')}</small></span>
        </TabButton>
        <TabButton current={form} value="claim" onSelect={setForm}>
          <ScrollText size={18} /><span><strong>{t('补充资料')}</strong><small>{t('生卒、籍贯等')}</small></span>
        </TabButton>
        <TabButton current={form} value="relationship" onSelect={setForm}>
          <GitFork size={18} /><span><strong>{t('添加关系')}</strong><small>{t('父母、配偶等')}</small></span>
        </TabButton>
        <TabButton current={form} value="source" onSelect={setForm}>
          <BookOpen size={18} /><span><strong>{t('新建来源')}</strong><small>{t('登记书目信息')}</small></span>
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
  if (ok) return <p className="success form-notice"><CheckCircle2 size={17} />{t(ok)}</p>;
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
              <ZhText text={p.display_name} fallback={t('未命名人物')} />
            </Link>
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
  const [createdPersonId, setCreatedPersonId] = useState<string | null>(null);

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
    setCreatedPersonId(null);
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
      setCreatedPersonId(pid ?? null);
      if (res.possible_duplicates?.length) setDuplicates(res.possible_duplicates);
      setOk(
        pid
          ? `人物已建立。${sources.length === 0 ? '目前没有来源，将作为待核实草稿保存。' : '你可以继续补充生卒、籍贯或亲属关系。'}`
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
      <div className="form-intro"><span><UserPlus size={20} /></span><div><h2>{t('添加一位历史人物')}</h2><p>{t('先填写史料中的姓名。没有来源也可以保存，但只会作为待核实草稿。')}</p></div></div>
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
      {createdPersonId ? (
        <Link className="created-link" to={`/persons/${encodeURIComponent(createdPersonId)}`}>
          {t('打开刚建立的人物页')}<ArrowRight size={16} />
        </Link>
      ) : null}
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
      await api.createClaim(personId.trim(), {
        claim_kind: 'property',
        predicate,
        value: isDate
          ? { date: { original_text: dateText.trim() } }
          : { text: text.trim(), language: language.trim() || undefined },
        confidence,
        sources: cleanSourceRefs(sources),
        change_summary: summary.trim() || undefined,
      });
      setOk('资料已提交，并已记录本次修改。');
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-intro"><span><ScrollText size={20} /></span><div><h2>{t('补充人物资料')}</h2><p>{t('先按姓名选择人物，再填写一条能够独立核实的资料。')}</p></div></div>
      <PersonPicker label="要补充哪位人物" value={personId} onChange={setPersonId} />
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
      await api.createRelationship(personId.trim(), {
        relationship,
        related_person_id: relatedId.trim(),
        confidence,
        sources: cleanSourceRefs(sources),
        change_summary: summary.trim() || undefined,
      });
      setOk('亲属关系已提交，并已记录本次修改。');
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-intro"><span><GitFork size={20} /></span><div><h2>{t('连接两位家族人物')}</h2><p>{t('按姓名选择双方，再用自然语言说明他们的关系。')}</p></div></div>
      <PersonPicker label="从哪位人物出发" value={personId} onChange={setPersonId} excludeId={relatedId} />
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
      <PersonPicker label="选择关系中的另一位人物" value={relatedId} onChange={setRelatedId} excludeId={personId} />
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
  const [createdSourceId, setCreatedSourceId] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(null);
    setCreatedSourceId(null);
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
      setCreatedSourceId(created.source_id);
      setOk('来源已建立。现在可以在人物资料表单中按标题搜索并引用它。');
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-intro"><span><BookOpen size={20} /></span><div><h2>{t('登记一份史料来源')}</h2><p>{t('填写读者能识别的书名、作者或网页信息；本站不接收影像附件。')}</p></div></div>
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
      {createdSourceId ? (
        <Link className="created-link" to={`/sources/${encodeURIComponent(createdSourceId)}`}>
          {t('查看刚建立的来源')}<ArrowRight size={16} />
        </Link>
      ) : null}
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
