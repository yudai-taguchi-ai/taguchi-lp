"use client";

import { useLang } from "@/i18n/LangContext";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-black py-10">
      <div className="container-narrow flex items-center justify-between text-sm text-ink-mute">
        <p>{t.footer.copy}</p>
        <a href="#top" className="hover:text-ink">
          ↑ Top
        </a>
      </div>
    </footer>
  );
}
