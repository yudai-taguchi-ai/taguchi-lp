# Taguchi Yudai — Personal LP

田口雄大 / Taguchi Yudai の個人ランディングページ。Next.js 15 (App Router) + Tailwind CSS。日本語/英語の言語切替対応。

## セットアップ

```powershell
npm install
npm run dev
```

→ http://localhost:3000 を開く。

## 主な構成

```
src/
  app/
    layout.tsx        # ルートレイアウト + LangProvider
    page.tsx          # トップページ（各セクション組み立て）
    globals.css       # Tailwind + 共通スタイル
  components/
    Header.tsx        # ナビ + 言語トグル
    Hero.tsx          # ヒーローセクション
    Section.tsx       # 共通セクション枠
    About.tsx
    Activities.tsx    # OIF / GDGoC / インターン
    Credentials.tsx   # E資格・松尾研講座
    Research.tsx      # 研究興味タグ
    Contact.tsx       # Email / X
    Footer.tsx
  i18n/
    dictionary.ts     # ja / en 辞書
    LangContext.tsx   # 言語コンテキスト（localStorage永続化）
```

## 編集

- プロフィール文言は `src/i18n/dictionary.ts` に集約。
- 連絡先は `src/components/Contact.tsx` の `EMAIL` / `X_HANDLE` 定数。
- デザインのアクセントカラーは `tailwind.config.ts` の `backgroundImage.grad-text` / `grad-hero` を編集。

## デプロイ（Vercel）

1. このディレクトリを GitHub リポジトリにプッシュ。
2. [vercel.com](https://vercel.com) で "New Project" → リポジトリを選択。
3. フレームワーク自動検出（Next.js）。そのまま Deploy。
4. 独自ドメインを使う場合は Vercel の Settings → Domains から追加。

## スクリプト

| コマンド | 用途 |
|---|---|
| `npm run dev` | 開発サーバ起動 |
| `npm run build` | 本番ビルド |
| `npm run start` | 本番ビルドのプレビュー |
| `npm run lint` | Lint |
