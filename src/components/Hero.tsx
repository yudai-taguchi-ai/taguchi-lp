"use client";

import { useLang } from "@/i18n/LangContext";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative bg-white">
      <div className="container-narrow py-28 sm:py-36">
        <div className="animate-fade-up">
          <span className="chip">{t.hero.tagline}</span>
        </div>
        <h1 className="mt-6 animate-fade-up text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
          {t.hero.name}
        </h1>
        <p className="mt-2 animate-fade-up text-lg text-ink-mute">
          {t.hero.nameRoman}
        </p>
        <p className="mt-8 max-w-2xl animate-fade-up text-base text-ink-soft sm:text-lg">
          {t.hero.affiliation}
        </p>
        <p className="mt-4 max-w-2xl animate-fade-up text-base text-ink-soft sm:text-lg">
          {t.hero.lead}
        </p>
        <div className="mt-10 flex animate-fade-up flex-wrap gap-3">
          <a
            href="#contact"
            className="border border-black bg-black px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            {t.hero.ctaContact}
          </a>
          <a
            href="#activities"
            className="border border-black bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-black hover:text-white"
          >
            {t.hero.ctaActivities}
          </a>
        </div>
      </div>
    </section>
  );
}
