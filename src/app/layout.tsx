import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/i18n/LangContext";

export const metadata: Metadata = {
  title: "Taguchi Yudai — 田口 雄大",
  description:
    "戦略AI・強化学習・マルチエージェント・LLM。大阪公立大学 情報工学科 2年。OIF代表 / GDGoC OMU Founder。",
  openGraph: {
    title: "Taguchi Yudai — 田口 雄大",
    description:
      "Strategic AI × Multi-Agent × LLM. Osaka Metropolitan University.",
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
