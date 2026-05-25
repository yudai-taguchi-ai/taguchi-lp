"use client";

import { useLang } from "@/i18n/LangContext";
import { Section } from "./Section";

export function About() {
  const { t } = useLang();
  return (
    <Section id="about" title={t.about.title}>
      <p className="max-w-3xl text-lg leading-relaxed text-ink-soft">
        {t.about.body}
      </p>
    </Section>
  );
}
