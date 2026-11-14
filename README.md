# maguro-standard-kinshicho.com

マグロスタンダード 錦糸町本店 の公式サイト（静的 HTML/CSS/JS 版）です。
既存の WordPress サイト（https://maguro-standard-kinshicho.com/）の文章・写真をもとに、GitHub Pages で公開できる形に作り直しています。

## 構成

```
index.html                トップページ（ヒーロー / こだわり / お食事 / お飲み物 / 席・空間 / お知らせ / Instagram / 店舗情報 / 姉妹店バナー）
concept/index.html        こだわり
course/index.html         コース（MSスタンダード / MSマグロ堪能 / MS極み / 飲み放題メニュー / キャンセルポリシー）
food/index.html           お食事メニュー
drink/index.html          お飲み物メニュー
table/index.html          席・空間
special/index.html        公式サイト限定特典
sister-store/index.html   姉妹店紹介
media/index.html          メディア掲載実績
information/index.html    お知らせ（直近 6 件の本文 + 過去のお知らせタイトル）
privacy/index.html        個人情報保護方針
css/style.css             共通スタイル（外部フレームワーク不使用。Google Fonts の Noto Sans JP / Noto Serif JP のみ使用）
js/main.js                ハンバーガーメニュー・サブメニュー開閉・現在ページのハイライト
images/                   既存サイトから取り込んだ写真・ロゴ（hero.jpg, logo-white.svg, food-01.webp ... など）
site.config.json          店名・住所・電話・営業時間・各種 URL などのサイト情報
CNAME                     GitHub Pages の独自ドメイン設定（maguro-standard-kinshicho.com）
```

- 各ページは同じヘッダー（ロゴ / グローバルナビ / WEB予約ボタン / スマホ用ハンバーガー）とフッター、スマホ用の固定ボトムバー（電話 / 地図 / WEB予約）を持ちます。
- リンクはすべてルート相対（`/concept/`, `/images/hero.jpg`）です。独自ドメイン直下で公開する前提です。
- 既存サイトのヒーローは動画（約 7.7MB）だったため、静的版では店舗外観写真（`images/hero.jpg`）を使用しています。
- 既存サイトの Google レビュー / Instagram フィード（プラグイン埋め込み）は取り込まず、Instagram は「フォロー」ボタン + アカウント名の表示にしています。

## ローカルで確認

```bash
python -m http.server 8000
```

ブラウザで http://localhost:8000 を開きます（ルート相対リンクのため、リポジトリ直下で起動してください）。

## 更新のしかた

- 営業時間・住所など: `index.html` の店舗情報セクションと `site.config.json` を合わせて更新します。
- お知らせ: `information/index.html` に記事（`<article class="article" id="news-YYYYMMDD">`）を追加し、`index.html` の「お知らせ」一覧（直近 3 件）も合わせて更新します。
- メニュー・価格: `food/index.html`, `drink/index.html`, `course/index.html` を直接編集します（価格は税込表記）。

## 公開までの流れ

1. GitHub にこのリポジトリを push する
2. Settings → Pages で `main` ブランチ / ルートを公開元に設定する
3. ドメイン管理側で DNS を GitHub Pages に向ける（A レコード 4 件 + www の CNAME）
4. Pages 設定で "Enforce HTTPS" を有効にする
