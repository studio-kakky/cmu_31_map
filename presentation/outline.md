# 意外と知らない地図サービス

## 説明
みんなが当たり前に使っている地図サービス。でも、いざ地図サービスを利用したアプリケーションを作ると意外としらないことばかり。
地図サービスを利用してどんなことができるのか、どんな実装方法があるのかについてお話しします。

#発表の目的
- Webサイトへ地図を埋め込み時に、どんな方法があるのか、またそれぞれの特長について理解できる
  - コードの詳細などは発表しない  

# 話す内容の羅列

- 埋め込みコードについて
  - Embed APIを利用した方法
    - 普通に埋め込む
    - マーカーを建てる
    - StreetViewを埋め込む
    - 検索結果を埋め込む

- ライブラリを利用した方法について
  - ライブラリの種類
    - Google Maps API
      - スタイルの変更
        - http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html?utm_medium=twitter
          - ヤバイ使いづらい。。。
        - https://snazzymaps.com/
      - 複数のマーカーを建てる
      - 吹き出しの設置
      - カスタムオーバーレイ
      - 動的な経路案内
      - ジオコーディング
      - マーカークラスター

    - 実は厳しい利用規約

    - OpenStreetMap

    - Leaflet (with OpenStreetMap)
      - タダだよ
      - Google Maps JavaScript APIでできることは、、、
        - ジオコーディング：微妙
        - 経路検索 : まあOK
        - 航空写真うーんんん。。。。

  - Google Maps APIでできること
    - スタイルの変更変えられる
    - カスタムオーバーレイ
    -
