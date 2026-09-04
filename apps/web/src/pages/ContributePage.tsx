import { useEffect, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AlertTriangle, ArrowLeftRight, ArrowRight, Baby, BookOpen, CheckCircle2, GitFork, HeartHandshake, LogOut, Network, Plus, ScrollText, UserRound, UserPlus, UsersRound } from 'lucide-react';
import {
  CONFIDENCE,
  LICENSE_CODE,
  PROPERTY_PREDICATES,
  RELATIONSHIP_INPUT,
  SOURCE_TYPE,
} from '@wang/domain';
import type {
  Confidence,
  ClaimWithSources,
  LicenseCode,
  PersonSearchResult,
  PersonSummary,
  PropertyPredicate,
  RelationshipInput,
  SourceType,
} from '@wang/domain';
import { detectScript, scriptVariants } from '@wang/i18n';
import { loginSchema, requestEmailVerificationSchema, signupSchema } from '@wang/validation';
import { api } from '../api';
import type { EmailVerificationChallenge, SourceRefInput } from '../api';
import { relationshipGenerationCount, relationshipParentRole } from '../format';
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
import { PersonIdentityMeta } from '../components/PersonIdentityMeta';

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
  const [challenge, setChallenge] = useState<EmailVerificationChallenge | null>(null);
  const [challengeEmail, setChallengeEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    if (!challenge || emailVerified) return;
    let cancelled = false;
    const check = async () => {
      try {
        const status = await api.getEmailVerificationStatus(challenge.verification_token);
        if (!cancelled && status.verified) setEmailVerified(true);
      } catch {
        // The visible expiry and a later registration error explain stale challenges.
      }
    };
    void check();
    const timer = window.setInterval(() => void check(), 3000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [challenge, emailVerified]);

  async function startEmailVerification() {
    setError(null);
    const parsed = requestEmailVerificationSchema.safeParse({ email });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? '電子郵件無效');
      return;
    }
    setBusy(true);
    try {
      setChallenge(await api.requestEmailVerification(parsed.data.email));
      setChallengeEmail(parsed.data.email.trim().toLowerCase());
      setEmailVerified(false);
    } catch (err) {
      setError(toMessage(err));
    } finally {
      setBusy(false);
    }
  }

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
        if (!challenge || !emailVerified || challengeEmail !== email.trim().toLowerCase()) {
          throw new Error('請先用此電子郵件完成驗證');
        }
        const parsed = signupSchema.safeParse({
          display_name: displayName,
          email,
          password,
          verification_token: challenge.verification_token,
        });
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
        {mode === 'signup' ? (
          <div className="email-verification">
            <button className="btn btn-inline" type="button" disabled={busy} onClick={startEmailVerification}>
              {challenge ? t('重新生成驗證郵件') : t('生成驗證郵件')}
            </button>
            {challenge && challengeEmail === email.trim().toLowerCase() ? (
              emailVerified ? (
                <p className="success form-notice"><CheckCircle2 size={17} />{t('電子郵件已驗證，可以註冊')}</p>
              ) : (
                <div className="banner email-verification-instructions" role="status">
                  <p>{t('請務必使用上面填寫的電子郵件，向以下地址發送一封郵件：')}</p>
                  <a href={`mailto:${challenge.recipient}?subject=${encodeURIComponent(challenge.subject)}`}>
                    {challenge.recipient}
                  </a>
                  <small>{t('郵件內容可以留空。本頁會自動等待驗證結果，驗證地址 30 分鐘內有效。')}</small>
                </div>
              )
            ) : null}
          </div>
        ) : null}
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
        <button className="btn" type="submit" disabled={busy || (mode === 'signup' && !emailVerified)}>
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
          <GitFork size={18} /><span><strong>{t('添加关系')}</strong><small>{t('父亲、母亲、配偶等')}</small></span>
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
function DuplicateWarning({ candidates }: { candidates: PersonSearchResult[] }) {
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
            <PersonIdentityMeta person={p} />
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
  const [duplicates, setDuplicates] = useState<PersonSearchResult[]>([]);
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
  const [generationCount, setGenerationCount] = useState('');
  const [newParentRole, setNewParentRole] = useState<'father' | 'mother' | ''>('');
  const [confidence, setConfidence] = useState<Confidence>('unknown');
  const [sources, setSources] = useState<SourceRefInput[]>([]);
  const [summary, setSummary] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);
  const [currentPerson, setCurrentPerson] = useState<PersonSearchResult | null>(null);
  const [relatedPerson, setRelatedPerson] = useState<PersonSearchResult | null>(null);
  const [existingRelations, setExistingRelations] = useState<PersonSummary | null>(null);

  useEffect(() => {
    if (!personId) {
      setExistingRelations(null);
      return;
    }
    let cancelled = false;
    api.getPerson(personId).then((summary) => {
      if (!cancelled) setExistingRelations(summary);
    }).catch(() => {
      if (!cancelled) setExistingRelations(null);
    });
    return () => { cancelled = true; };
  }, [personId]);

  const relationshipOptions: Record<RelationshipInput, { title: string; description: string; icon: ReactNode }> = {
    father: { title: '父亲', description: '第二位人物是第一位人物的父亲', icon: <UsersRound size={18} /> },
    mother: { title: '母亲', description: '第二位人物是第一位人物的母亲', icon: <UsersRound size={18} /> },
    parent: { title: '父母未详', description: '来源只确认是父母之一，不能判断父亲或母亲', icon: <UsersRound size={18} /> },
    child: { title: '子女', description: '第二位人物是第一位人物的兒子或女兒', icon: <Baby size={18} /> },
    spouse: { title: '配偶', description: '兩位人物互為配偶', icon: <HeartHandshake size={18} /> },
    adoptive_parent: { title: '收養父母', description: '第二位人物收養了第一位人物', icon: <UserRound size={18} /> },
    adoptive_child: { title: '收養子女', description: '第一位人物收養了第二位人物', icon: <UserPlus size={18} /> },
    ancestor: { title: '先祖', description: '第二位人物是第一位人物的先祖，可記錄相隔代數', icon: <Network size={18} /> },
    descendant: { title: '後代', description: '第二位人物是第一位人物的後代，可記錄相隔代數', icon: <GitFork size={18} /> },
  };

  function swapPeople() {
    const firstId = personId;
    const firstPerson = currentPerson;
    setPersonId(relatedId);
    setRelatedId(firstId);
    setCurrentPerson(relatedPerson);
    setRelatedPerson(firstPerson);
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(null);
    const isDescent = relationship === 'ancestor' || relationship === 'descendant';
    const parsedGeneration = generationCount.trim() ? Number(generationCount) : undefined;
    if (
      isDescent &&
      parsedGeneration !== undefined &&
      (!Number.isInteger(parsedGeneration) || parsedGeneration < 2 || parsedGeneration > 100)
    ) {
      setError('相隔代数需为 2 至 100 的整数；相隔 1 代请改用父母或子女。');
      return;
    }
    setBusy(true);
    try {
      await api.createRelationship(personId.trim(), {
        relationship,
        related_person_id: relatedId.trim(),
        parent_role: relationship === 'father'
          ? 'father'
          : relationship === 'mother'
            ? 'mother'
            : ['child', 'adoptive_parent', 'adoptive_child'].includes(relationship)
              ? newParentRole || null
              : relationship === 'parent' ? null : undefined,
        generation_count: isDescent ? parsedGeneration : undefined,
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
      <div className="relationship-person-step">
        <span className="step-number">1</span>
        <PersonPicker label="第一位人物" value={personId} onChange={setPersonId} onSelect={setCurrentPerson} excludeId={relatedId} />
      </div>
      {existingRelations ? (
        <ExistingRelationships
          summary={existingRelations}
          onChanged={async () => {
            const refreshed = await api.getPerson(personId);
            setExistingRelations(refreshed);
          }}
        />
      ) : null}
      <fieldset className="relationship-kind-fieldset">
        <legend><span className="step-number">2</span>{t('第二位人物與第一位人物是什麼關係？')}</legend>
        <div className="relationship-kind-grid" role="radiogroup" aria-label={t('選擇親屬關係')}>
          {RELATIONSHIP_INPUT.map((option) => {
            const content = relationshipOptions[option];
            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={relationship === option}
                className={relationship === option ? 'relationship-kind relationship-kind-active' : 'relationship-kind'}
                onClick={() => setRelationship(option)}
              >
                <span>{content.icon}</span>
                <span><strong>{t(content.title)}</strong><small>{t(content.description)}</small></span>
                {relationship === option ? <CheckCircle2 size={17} /> : null}
              </button>
            );
          })}
        </div>
      </fieldset>
      <div className="relationship-person-step">
        <span className="step-number">3</span>
        <PersonPicker label="第二位人物" value={relatedId} onChange={setRelatedId} onSelect={setRelatedPerson} excludeId={personId} />
      </div>
      {personId && relatedId ? (
        <button type="button" className="swap-people" onClick={swapPeople}><ArrowLeftRight size={16} />{t('交換兩位人物')}</button>
      ) : null}
      <RelationshipPreview
        relationship={relationship}
        current={currentPerson}
        related={relatedPerson}
        generationCount={generationCount}
        parentRole={newParentRole}
      />
      {relationship === 'ancestor' || relationship === 'descendant' ? (
        <label className="field generation-count-field">
          <span>{t('相隔幾代（能夠確認時填寫）')}</span>
          <input
            type="number"
            inputMode="numeric"
            min="2"
            max="100"
            step="1"
            value={generationCount}
            placeholder={t('留空表示代數不詳，例如四世孫填 4')}
            onChange={(event) => setGenerationCount(event.target.value)}
          />
          <small>{t('相隔 1 代請改用父母或子女；只有來源能確認時才填寫，請勿自行推算。')}</small>
        </label>
      ) : null}
      {relationship === 'child' || relationship === 'adoptive_parent' || relationship === 'adoptive_child' ? (
        <label className="field">
          <span>{t(relationship === 'adoptive_parent' ? '第二位人物是第一位人物的' : '第一位人物是这个孩子的')}</span>
          <select value={newParentRole} onChange={(event) => setNewParentRole(event.target.value as 'father' | 'mother' | '')}>
            <option value="">{t('父母之一（来源未详）')}</option>
            <option value="father">{t(relationship.startsWith('adoptive_') ? '养父' : '父亲')}</option>
            <option value="mother">{t(relationship.startsWith('adoptive_') ? '养母' : '母亲')}</option>
          </select>
          <small>{t('只按来源选择；不能确认时保留“父母之一”。')}</small>
        </label>
      ) : null}
      {currentPerson?.display_name && currentPerson.display_name === relatedPerson?.display_name ? (
        <p className="namesake-warning"><AlertTriangle size={16} />{t('兩位人物同名，請再次核對生卒、籍貫與支派後再提交。')}</p>
      ) : null}
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

function ExistingRelationships({
  summary,
  onChanged,
}: {
  summary: PersonSummary;
  onChanged: () => Promise<void>;
}) {
  const { t } = useScript();
  const [editingClaimId, setEditingClaimId] = useState<string | null>(null);
  const [generationDraft, setGenerationDraft] = useState('');
  const [parentRoleDraft, setParentRoleDraft] = useState<'father' | 'mother' | ''>('');
  const [generationBusy, setGenerationBusy] = useState(false);
  const [generationMessage, setGenerationMessage] = useState<string | null>(null);
  const fathers = summary.relationships.parents.filter((item) => relationshipParentRole(item) === 'father');
  const mothers = summary.relationships.parents.filter((item) => relationshipParentRole(item) === 'mother');
  const unspecifiedParents = summary.relationships.parents.filter((item) => relationshipParentRole(item) === null);
  const adoptiveFathers = summary.relationships.adoptive_parents.filter((item) => relationshipParentRole(item) === 'father');
  const adoptiveMothers = summary.relationships.adoptive_parents.filter((item) => relationshipParentRole(item) === 'mother');
  const unspecifiedAdoptiveParents = summary.relationships.adoptive_parents.filter((item) => relationshipParentRole(item) === null);
  const groups: Array<{ label: string; items: PersonSummary['relationships'][keyof PersonSummary['relationships']] }> = [
    { label: '父亲', items: fathers },
    { label: '母亲', items: mothers },
    { label: '父母未详', items: unspecifiedParents },
    { label: '配偶', items: summary.relationships.spouses },
    { label: '子女', items: summary.relationships.children },
    { label: '养父', items: adoptiveFathers },
    { label: '养母', items: adoptiveMothers },
    { label: '收养父母未详', items: unspecifiedAdoptiveParents },
    { label: '收養子女', items: summary.relationships.adoptive_children },
    { label: '先祖', items: summary.relationships.ancestors },
    { label: '後代', items: summary.relationships.descendants },
  ].filter((group) => group.items.length > 0);

  function beginGenerationEdit(item: ClaimWithSources) {
    setEditingClaimId(item.claim.id);
    setGenerationDraft(relationshipGenerationCount(item)?.toString() ?? '');
    setGenerationMessage(null);
  }

  function beginParentRoleEdit(item: ClaimWithSources) {
    setEditingClaimId(item.claim.id);
    setParentRoleDraft(relationshipParentRole(item) ?? '');
    setGenerationMessage(null);
  }

  async function saveParentRole(item: ClaimWithSources) {
    setGenerationBusy(true);
    setGenerationMessage(null);
    try {
      await api.reviseClaim(item.claim.id, {
        expected_revision: item.claim.current_revision,
        patch: { parent_role: parentRoleDraft || null },
        change_summary: parentRoleDraft === 'father'
          ? '明确亲属角色为父亲'
          : parentRoleDraft === 'mother' ? '明确亲属角色为母亲' : '将亲属角色改为父母未详',
      });
      await onChanged();
      setEditingClaimId(null);
      setGenerationMessage('父母角色已更新。');
    } catch (err) {
      setGenerationMessage(toMessage(err));
    } finally {
      setGenerationBusy(false);
    }
  }

  async function saveGeneration(item: ClaimWithSources) {
    const count = generationDraft.trim() ? Number(generationDraft) : null;
    if (count !== null && (!Number.isInteger(count) || count < 2 || count > 100)) {
      setGenerationMessage('相隔代数需为 2 至 100 的整数。');
      return;
    }
    setGenerationBusy(true);
    setGenerationMessage(null);
    try {
      await api.reviseClaim(item.claim.id, {
        expected_revision: item.claim.current_revision,
        patch: { generation_count: count },
        change_summary: count === null ? '将世系代数改为不详' : `补充世系相隔 ${count} 代`,
      });
      await onChanged();
      setEditingClaimId(null);
      setGenerationMessage(count === null ? '已改为代数不详。' : `已记录相隔 ${count} 代。`);
    } catch (err) {
      setGenerationMessage(toMessage(err));
    } finally {
      setGenerationBusy(false);
    }
  }

  return (
    <details className="existing-relationships" open={groups.length > 0}>
      <summary>{t('已記錄的親屬關係')}<span>{groups.reduce((count, group) => count + group.items.length, 0)}</span></summary>
      {groups.length === 0 ? <p>{t('目前尚未記錄親屬，可繼續新增。')}</p> : (
        <div className="existing-relationship-groups">
          {groups.map((group) => (
            <div key={group.label}>
              <strong>{t(group.label)}</strong>
              <span>{group.items.map((item) => item.object_person ? (
                <span className="existing-relationship-item" key={item.claim.id}>
                  <Link to={`/persons/${encodeURIComponent(item.object_person.id)}`} target="_blank">
                    <ZhText text={item.object_person.display_name} fallback={t('未命名人物')} />
                    {item.claim.predicate === 'kinship.ancestor_of' ? (
                      <small>{relationshipGenerationCount(item) ? t(`相隔 ${relationshipGenerationCount(item)} 代`) : t('代數不詳')}</small>
                    ) : null}
                  </Link>
                  {item.claim.predicate === 'kinship.ancestor_of' ? (
                    <button type="button" onClick={() => beginGenerationEdit(item)}>{t(relationshipGenerationCount(item) ? '修改代數' : '補充代數')}</button>
                  ) : null}
                  {[
                    'kinship.parent_of', 'kinship.father_of', 'kinship.mother_of',
                    'kinship.adoptive_parent_of', 'kinship.adoptive_father_of', 'kinship.adoptive_mother_of',
                  ].includes(item.claim.predicate) ? (
                    <button type="button" onClick={() => beginParentRoleEdit(item)}>{t(relationshipParentRole(item) ? '修改父母角色' : '标记父亲或母亲')}</button>
                  ) : null}
                  {editingClaimId === item.claim.id ? (
                    <span className="generation-inline-editor">
                      {item.claim.predicate === 'kinship.ancestor_of' ? (
                        <input
                          type="number"
                          min="2"
                          max="100"
                          step="1"
                          inputMode="numeric"
                          value={generationDraft}
                          placeholder={t('留空表示不詳')}
                          onChange={(event) => setGenerationDraft(event.target.value)}
                          aria-label={t('相隔代數')}
                        />
                      ) : (
                        <select value={parentRoleDraft} onChange={(event) => setParentRoleDraft(event.target.value as 'father' | 'mother' | '')} aria-label={t('父母角色')}>
                          <option value="father">{t('父亲')}</option>
                          <option value="mother">{t('母亲')}</option>
                          <option value="">{t('父母未详')}</option>
                        </select>
                      )}
                      <button type="button" disabled={generationBusy} onClick={() => void (item.claim.predicate === 'kinship.ancestor_of' ? saveGeneration(item) : saveParentRole(item))}>{generationBusy ? t('保存中…') : t('保存')}</button>
                      <button type="button" disabled={generationBusy} onClick={() => setEditingClaimId(null)}>{t('取消')}</button>
                    </span>
                  ) : null}
                </span>
              ) : null)}</span>
            </div>
          ))}
        </div>
      )}
      {generationMessage ? <p className="generation-edit-message" role="status">{t(generationMessage)}</p> : null}
      <small>{t('若現有關係有誤，請打開人物頁查看來源並標記爭議；新說法會保留版本記錄。')}</small>
    </details>
  );
}

function RelationshipPreview({
  relationship,
  current,
  related,
  generationCount,
  parentRole,
}: {
  relationship: RelationshipInput;
  current: PersonSearchResult | null;
  related: PersonSearchResult | null;
  generationCount: string;
  parentRole: 'father' | 'mother' | '';
}) {
  const { t } = useScript();
  if (!current || !related) {
    return <div className="relationship-preview relationship-preview-empty"><GitFork size={19} /><span><strong>{t('關係預覽')}</strong><small>{t('選好兩位人物後，這裡會用一句話確認關係方向。')}</small></span></div>;
  }
  const relationText: Record<RelationshipInput, string> = {
    father: '的父亲',
    mother: '的母亲',
    parent: '的父母之一',
    child: '的子女',
    adoptive_parent: '的收養父母',
    adoptive_child: '的收養子女',
    spouse: '的配偶',
    ancestor: '的先祖',
    descendant: '的後代',
  };
  const parsedGeneration = Number(generationCount);
  const generationText =
    (relationship === 'ancestor' || relationship === 'descendant') &&
    Number.isInteger(parsedGeneration) &&
    parsedGeneration >= 2
      ? t(`（相隔 ${parsedGeneration} 代）`)
      : relationship === 'ancestor' || relationship === 'descendant'
        ? t('（代數不詳）')
        : '';
  return (
    <div className="relationship-preview" role="status">
      <CheckCircle2 size={20} />
      <span>
        <small>{t('即將記錄')}</small>
        <strong><ZhText text={related.display_name} fallback={t('第二位人物')} /> {t('是')} <ZhText text={current.display_name} fallback={t('第一位人物')} /> {t(relationText[relationship])}{generationText}</strong>
        {(relationship === 'child' || relationship === 'adoptive_child') && parentRole ? (
          <small><ZhText text={current.display_name} fallback={t('第一位人物')} /> {t(`在这段关系中是${parentRole === 'father' ? (relationship === 'adoptive_child' ? '养父' : '父亲') : (relationship === 'adoptive_child' ? '养母' : '母亲')}`)}</small>
        ) : null}
      </span>
    </div>
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
