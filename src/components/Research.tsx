"use client";

import { useLang } from "@/i18n/LangContext";
import { Section } from "./Section";

export function Research() {
  const { t } = useLang();
  return (
    <Section id="research" title={t.research.title}>
      <div className="flex flex-wrap gap-3">
        {t.research.items.map((item) => (
          <span
            key={item}
            className="border border-black bg-white px-4 py-2 text-sm font-medium text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
