# Green Labo - ポートフォリオサイト

Vue.js 3 + Viteで構築された造園企業のポートフォリオサイトです。

## 開発環境

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## GitHub Pagesへのデプロイ

### 自動デプロイ（推奨）

1. GitHubにリポジトリを作成
2. このプロジェクトをpush
3. リポジトリの Settings > Pages で「GitHub Actions」を選択
4. mainブランチにpushすると自動でデプロイされます

### 手動デプロイ

```bash
# ビルド
npm run build

# distフォルダの内容をgh-pagesブランチにpush
# または、Settings > Pagesでdistフォルダを指定
```

## 技術スタック

- Vue.js 3
- Vue Router 4
- Vite 5
- Swiper 11

## ディレクトリ構成

```
vue-app/
├── public/
│   └── img/          # 画像ファイル
├── src/
│   ├── assets/       # CSS
│   ├── components/   # コンポーネント
│   ├── router/       # ルーティング設定
│   └── views/        # ページコンポーネント
├── index.html
├── package.json
└── vite.config.js
```
