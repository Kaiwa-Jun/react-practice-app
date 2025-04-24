This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 開発環境での実行

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Docker 環境での実行

```bash
# イメージのビルドと起動
docker-compose up --build

# バックグラウンドで実行する場合
docker-compose up -d

# コンテナの停止
docker-compose down
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## GitHub Issueの対応手順

このプロジェクトでは、GitHub上のIssueを使用してタスク管理を行っています。以下は、Issueに取り組む際の基本的な手順です。

### 1. Issueの確認と割り当て

1. GitHub上のプロジェクトページから「Issues」タブを開きます
2. 取り組むIssueを選択し、自分に割り当てます（Assigneesに自分を追加）

### 2. 作業用ブランチの作成

```bash
# 最新のmainブランチを取得
git checkout main
git pull origin main

# 作業用ブランチの作成
git checkout -b feature/issue-番号_簡単な説明
# 例: git checkout -b feature/issue-42_add-login-form
```

ブランチ名の規則:
- `feature/issue-[Issue番号]_[簡単な説明]` - 新機能の追加
- `bugfix/issue-[Issue番号]_[簡単な説明]` - バグ修正
- `refactor/issue-[Issue番号]_[簡単な説明]` - リファクタリング

### 3. こまめなコミット

コードの変更は小さな単位で頻繁にコミットするといいです。
これにより、変更履歴が明確になり、問題が発生した場合に特定しやすくなります。

```bash
# 変更したファイルをステージングに追加
git add ファイル名
# または全ての変更をステージングに追加
git add .

# コミットメッセージを付けてコミット
git commit -m "わかりやすいコミットメッセージ"
```

良いコミットメッセージの例:
- 「ログインフォームのHTMLとCSSを追加」
- 「ユーザー認証機能を実装」

### 4. リモートリポジトリへのプッシュ

```bash
# 最初のプッシュ
git push -u origin ブランチ名

# 以降のプッシュ
git push
```

### 5. プルリクエスト（PR）の作成

1. GitHubのリポジトリページに移動します
2. 「Pull requests」タブを開きます
3. 「New pull request」ボタンをクリックします
4. 比較するブランチを選択します:
   - base: main (マージ先)
   - compare: あなたの作業ブランチ
5. 「Create pull request」をクリックします
6. タイトルと説明を入力します:
   - タイトル: 「Fix #[Issue番号]: [簡単な説明]」
   - 説明: 変更内容の詳細、テスト方法などを記載
7. 「Create pull request」をクリックして完了します

### 6. レビューと修正

1. チームメンバーにレビューを依頼します
2. レビューコメントに基づいて修正を行います
3. 修正後、再度コミットとプッシュを行います
4. 必要に応じてレビュー・修正のプロセスを繰り返します

### 7. マージと完了

1. 承認されたら、「Merge pull request」ボタンでマージします
2. Issue側で、PRがマージされたことを報告しましょう
3. Issueがクローズされたことを確認します
