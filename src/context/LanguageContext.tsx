import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'en' | 'es';

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const toggle = useCallback(() => setLang(l => l === 'en' ? 'es' : 'en'), []);
  return (
    <LanguageContext.Provider value={{ lang, toggle, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
