import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/i18n/LangContext";

export const metadata: Metadata = {
  title: "田口 雄大 — 中小企業のAI業務実装",
  description:
    "中小企業の現場にAIを実装。要件整理から開発・運用まで一貫して伴走します。田口雄大 / Taguchi Yudai の個人ページ。",
  openGraph: {
    title: "田口 雄大 — 中小企業のAI業務実装",
    description:
      "中小企業の現場にAIを実装。要件整理から開発・運用まで一貫して伴走します。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
