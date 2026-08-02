"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "@/lib/ui-strings";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "renal-home-care-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("vi");
  const [hydrated, setHydrated] = useState(false);

  // Read saved preference on first mount (client only).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "vi" || saved === "en") {
        setLangState(saved);
      } else {
        // Fall back to browser language if nothing saved yet.
        const browserLang = window.navigator.language?.toLowerCase() ?? "";
        setLangState(browserLang.startsWith("vi") ? "vi" : "en");
      }
    } catch {
      // localStorage unavailable — keep default.
    } finally {
      setHydrated(true);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore write errors (private browsing, etc.)
    }
  };

  // Keep <html lang="..."> in sync for accessibility / screen readers.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(lang === "vi" ? "en" : "vi");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      <div style={{ visibility: hydrated ? "visible" : "hidden" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
