"use client";

import { useState } from "react";
import { useLang } from "@/i18n/LangContext";
import { Section } from "./Section";

const EMAIL = "ydi102143@gmail.com";
const X_HANDLE = "XBeyMzcWUu44818";

export function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — fall back silently
    }
  };

  return (
    <Section id="contact" title={t.contact.title}>
      <p className="max-w-2xl text-lg text-ink-soft">{t.contact.lead}</p>
      <div className="mt-8 grid gap-0 border border-black sm:grid-cols-2">
        <button
          type="button"
          onClick={handleCopy}
          className="group flex items-center justify-between border-b border-black bg-white p-6 text-left transition hover:bg-black hover:text-white sm:border-b-0 sm:border-r"
          aria-label={`${t.contact.emailLabel}: ${EMAIL} — ${t.contact.copy}`}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ink-mute group-hover:text-white/70">
              {t.contact.emailLabel}
            </p>
            <p className="mt-1 font-medium">{EMAIL}</p>
          </div>
          <span
            aria-hidden
            className="ml-4 shrink-0 text-xs font-medium uppercase tracking-wider text-ink-mute group-hover:text-white/80"
          >
            {copied ? `✓ ${t.contact.copied}` : t.contact.copy}
          </span>
        </button>
        <a
          href={`https://x.com/${X_HANDLE}`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between bg-white p-6 transition hover:bg-black hover:text-white"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ink-mute group-hover:text-white/70">
              {t.contact.xLabel}
            </p>
            <p className="mt-1 font-medium">@{X_HANDLE}</p>
          </div>
          <span aria-hidden className="ml-4 shrink-0 transition group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </Section>
  );
}
