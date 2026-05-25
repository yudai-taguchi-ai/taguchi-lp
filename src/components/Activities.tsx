"use client";

import { useLang } from "@/i18n/LangContext";
import { Section } from "./Section";

export function Activities() {
  const { t } = useLang();
  const items = t.activities.items;
  return (
    <Section id="activities" title={t.activities.title}>
      <div className="grid gap-0 border border-black sm:grid-cols-2">
        {items.map((item, i) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className={`group flex flex-col bg-white p-6 transition hover:bg-black hover:text-white ${
              i % 2 === 0 ? "sm:border-r sm:border-black" : ""
            } ${i < items.length - 2 ? "border-b border-black" : ""}`}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-ink-mute group-hover:text-white/70">
              {item.role}
            </p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <span
                aria-hidden
                className="text-ink-mute transition group-hover:translate-x-1 group-hover:text-white"
              >
                ↗
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft group-hover:text-white/80">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </Section>
  );
}
