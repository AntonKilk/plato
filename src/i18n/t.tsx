import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import ru from './ru.json';
import et from './et.json';

export const translations = { ru, et } as const;
export type Lang = keyof typeof translations;

function deepGet(obj: any, path: string): any {
  return path.split('.').reduce((o, k) => (o && k in o ? (o as any)[k] : undefined), obj);
}

export function formatMessage(lang: Lang, key: string, vars?: Record<string, string | number>) {
  const raw = deepGet(translations[lang], key) ?? key;
  if (typeof raw !== 'string') return key;
  if (!vars) return raw;
  return raw.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<{ initialLang?: Lang; children: React.ReactNode }> = ({ initialLang = 'ru', children }) => {
  const [lang, setLang] = useState<Lang>(initialLang);

  // On mount: restore language from localStorage
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem('lang') as Lang | null) : null;
    if (stored && stored in translations) {
      setLang(stored);
    }
  }, []);

  // Persist & reflect in <html lang>
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      t: (key, vars) => formatMessage(lang, key, vars)
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export function useT() {
  const { t } = useI18n();
  return t;
}
