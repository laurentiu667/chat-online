import React, { createContext, useContext, useState, useEffect } from 'react';
import { ReactNode } from 'react';
// Définir le type du contexte
interface HeaderContextType {
  isLoggedIn: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
}

// Créer le contexte avec une valeur par défaut
const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

// Provider pour gérer l'état du contexte
export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [username, setUsername] = useState<string | null>(() => {
    return localStorage.getItem('username');
  });

  const login = (username: string) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    setIsLoggedIn(true);
    setUsername(username);
  };


  const logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('username', "Invité");
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsername("Invité");
  };

  return (
    <HeaderContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </HeaderContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useHeader = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};
