"use client";

import { useLang } from "@/i18n/LangContext";

export function Header() {
  const { t, lang, setLang } = useLang();

  return (
    <header className="sticky top-0 z-40 border-b border-black bg-white">
      <div className="container-narrow flex h-14 items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          Taguchi Yudai
        </a>
        <nav className="hidden gap-6 text-sm text-ink-soft md:flex">
          <a href="#about" className="hover:text-ink">{t.nav.about}</a>
          <a href="#activities" className="hover:text-ink">{t.nav.activities}</a>
          <a href="#credentials" className="hover:text-ink">{t.nav.credentials}</a>
          <a href="#research" className="hover:text-ink">{t.nav.research}</a>
          <a href="#contact" className="hover:text-ink">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center border border-black text-xs">
          <button
            type="button"
            onClick={() => setLang("ja")}
            className={`px-3 py-1 transition ${
              lang === "ja" ? "bg-black text-white" : "bg-white text-ink hover:bg-black hover:text-white"
            }`}
            aria-pressed={lang === "ja"}
          >
            JA
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`border-l border-black px-3 py-1 transition ${
              lang === "en" ? "bg-black text-white" : "bg-white text-ink hover:bg-black hover:text-white"
            }`}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
