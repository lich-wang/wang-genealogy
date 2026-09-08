import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { api } from './api';
import type { GitHubAccount } from './api';

interface AuthState {
  user: GitHubAccount | null;
  csrfToken: string | null;
  canSubmit: boolean;
  loading: boolean;
  isAuthenticated: boolean;
  login: (returnTo?: string) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<GitHubAccount | null>(null);
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [canSubmit, setCanSubmit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    api.me()
      .then((session) => {
        if (cancelled) return;
        setUser(session.user);
        setCsrfToken(session.csrf_token);
        setCanSubmit(session.can_submit);
      })
      .catch(() => {
        if (cancelled) return;
        setUser(null);
        setCsrfToken(null);
        setCanSubmit(false);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const value = useMemo<AuthState>(() => ({
    user,
    csrfToken,
    canSubmit,
    loading,
    isAuthenticated: Boolean(user),
    login(returnTo = '/contribute') {
      window.location.assign(`/api/auth/github/start?return_to=${encodeURIComponent(returnTo)}`);
    },
    async logout() {
      if (csrfToken) await api.logout(csrfToken);
      setUser(null);
      setCsrfToken(null);
      setCanSubmit(false);
    },
  }), [user, csrfToken, canSubmit, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth 必须在 <AuthProvider> 内使用');
  return context;
}
