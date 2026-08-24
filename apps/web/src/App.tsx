import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './auth';
import { ScriptProvider, useScript } from './i18n';
import { ScriptToggle } from './components/ScriptToggle';
import { HomePage } from './pages/HomePage';
import { PersonPage } from './pages/PersonPage';
import { FamilyTreePage } from './pages/FamilyTreePage';
import { SourcePage } from './pages/SourcePage';
import { RecentChangesPage } from './pages/RecentChangesPage';
import { ContributePage } from './pages/ContributePage';

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
              <Route path="/persons/:id/tree" element={<FamilyTreePage />} />
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

function SiteHeader() {
  const { isAuthenticated, user } = useAuth();
  const { t } = useScript();
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        {t('王氏譜系')}
      </Link>
      <nav className="site-nav">
        <NavLink to="/changes">{t('最近修改')}</NavLink>
        <NavLink to="/contribute">
          {isAuthenticated ? (user?.display_name ?? t('貢獻')) : t('登入/貢獻')}
        </NavLink>
        <ScriptToggle />
      </nav>
    </header>
  );
}

function SiteFooter() {
  const { t } = useScript();
  return (
    <footer className="site-footer">
      <p>
        {t('本站只收錄已故歷史人物；每條資料均可追溯來源，爭議說法並列展示，不隱藏少數意見。')}
      </p>
      <p className="footer-note">
        {t('字形（繁體／简体）為閱讀時的顯示轉換，來源原文始終按錄入時的字形保存。')}
      </p>
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
