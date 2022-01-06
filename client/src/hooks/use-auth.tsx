import { createContext, useContext, useMemo, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { Auth, Token } from '../types';

interface AuthContextState extends Auth {
  setAuth: (data: Auth) => void;
  removeAuth: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const initialAuthState: Auth = {
  isAuthenticated: false,
  user: {},
};

export const AuthContext = createContext({} as AuthContextState);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authData, setAuthData] = useState<Auth>(initialAuthState);

  const setAuth = (data: Auth) => {
    if (!data.token) {
      return initialAuthState;
    }

    const decoded: Token = jwtDecode(data.token);
    setAuthData({ ...data, isAuthenticated: true, expiredIn: decoded.exp });
  };

  const removeAuth = () => {
    setAuthData(initialAuthState);
  };

  const contextValue: AuthContextState = useMemo(
    () => ({
      ...authData,
      setAuth: setAuth,
      removeAuth: removeAuth,
    }),

    // eslint-disable-next-line
    [authData],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}
