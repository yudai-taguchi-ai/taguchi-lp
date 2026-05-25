"use client";

import { useLang } from "@/i18n/LangContext";
import { Section } from "./Section";

export function Credentials() {
  const { t } = useLang();
  return (
    <Section id="credentials" title={t.credentials.title}>
      <ul className="grid gap-0 border border-black sm:grid-cols-3">
        {t.credentials.items.map((item, i) => (
          <li
            key={item.name}
            className={`bg-white p-6 ${
              i < t.credentials.items.length - 1
                ? "border-b border-black sm:border-b-0 sm:border-r"
                : ""
            }`}
          >
            <p className="text-base font-semibold">{item.name}</p>
            <p className="mt-1 text-sm text-ink-mute">{item.note}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
