import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface AuthState {
  user: null;
  loading: false;
  isAuthenticated: false;
  logout: () => void;
}

const readOnlyAuth: AuthState = { user: null, loading: false, isAuthenticated: false, logout() {} };
const AuthContext = createContext<AuthState>(readOnlyAuth);

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={readOnlyAuth}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  return useContext(AuthContext);
}
