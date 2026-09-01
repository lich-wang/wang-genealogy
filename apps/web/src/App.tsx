import { lazy, Suspense } from 'react';
import { BookOpen, Clock3, GitFork, Menu, PenLine, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './auth';
import { ScriptProvider, useScript } from './i18n';
import { ScriptToggle } from './components/ScriptToggle';
import { HomePage } from './pages/HomePage';
import { PersonPage } from './pages/PersonPage';
import { SourcePage } from './pages/SourcePage';
import { RecentChangesPage } from './pages/RecentChangesPage';
import { ContributePage } from './pages/ContributePage';

const FamilyTreePage = lazy(() =>
  import('./pages/FamilyTreePage').then((module) => ({ default: module.FamilyTreePage })),
);

export function App() {
  return (
    <ScriptProvider>
      <AuthProvider>
        <div className="app-shell">
          <SiteHeader />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/persons/:id" element={<PersonPage />} />
              <Route path="/persons/:id/tree" element={<FamilyTreeRoute />} />
              <Route path="/sources/:id" element={<SourcePage />} />
              <Route path="/changes" element={<RecentChangesPage />} />
              <Route path="/contribute" element={<ContributePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <SiteFooter />
        </div>
      </AuthProvider>
    </ScriptProvider>
  );
}

function FamilyTreeRoute() {
  const { t } = useScript();
  return (
    <Suspense fallback={<div className="page">{t('載入中…')}</div>}>
      <FamilyTreePage />
    </Suspense>
  );
}

function SiteHeader() {
  const { isAuthenticated, user } = useAuth();
  const { t } = useScript();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={closeMenu} aria-label={t('王氏譜系首頁')}>
          <span className="brand-seal" aria-hidden="true">王</span>
          <span className="brand-copy">
            <strong>{t('王氏譜系')}</strong>
            <small>{t('可溯源的家族知识库')}</small>
          </span>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? t('關閉選單') : t('開啟選單')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? 'site-nav site-nav-open' : 'site-nav'} aria-label={t('主選單')}>
          <NavLink to="/" onClick={closeMenu} end>
            <BookOpen size={17} />
            {t('首页')}
          </NavLink>
          <Link to="/#search" onClick={closeMenu}>
            <Search size={17} />
            {t('查人物')}
          </Link>
          <NavLink to="/changes" onClick={closeMenu}>
            <Clock3 size={17} />
            {t('最近修改')}
          </NavLink>
          <NavLink className="nav-contribute" to="/contribute" onClick={closeMenu}>
            <PenLine size={17} />
            {isAuthenticated ? (user?.display_name ?? t('貢獻')) : t('参与共建')}
          </NavLink>
          <ScriptToggle />
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  const { t } = useScript();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-seal" aria-hidden="true">王</span>
          <div>
            <strong>{t('王氏譜系')}</strong>
            <p>{t('让每一段家族记忆都有据可查。')}</p>
          </div>
        </div>
        <div className="footer-principles">
          <p><GitFork size={15} />{t('只收錄已故歷史人物，爭議說法並列展示。')}</p>
          <p className="footer-note">{t('来源原文始终按录入字形保存，简繁转换仅用于阅读。')}</p>
        </div>
      </div>
    </footer>
  );
}

function NotFound() {
  const { t } = useScript();
  return (
    <div className="page">
      <h1>{t('頁面不存在')}</h1>
      <p>
        <Link to="/">{t('返回首頁')}</Link>
      </p>
    </div>
  );
}
