1.

意外と知らない地図サービス
スタジオカッキー

#自己紹介

2.

- Webのフロントエンドエンジニア
- フリーランス
- 昨年11月からなので、まだまだ新人です。

FaceBook 本名：柿内 暢昌
twitter:ほとんどつぶやいてないので割愛

2.


2月から6月までずっと地図の実装で食べてました。


3.

っていうか今も続いてます（QA的なやつ。）



4.


その結果。。。


5.


Code Gridから連載記事の依頼がありました。
Webマップの実装手法
https://app.codegrid.net/entry/map-1


6.

CMUの登壇が決まりました。

# 今日話すこと

7.今日ははなすこと

■ 「Webサイトへの地図埋め込み」の再入門

  - Google Maps Embed API
  - Google Maps JavaScript API V3
  - OpenStreetMapとLeaflet

  でできること

注意）コーディング手法とかは詳しく話しません。
知りたい人は、https://app.codegrid.net/を見てください。

# 最も簡単な埋め込み

8.

Google Mapsの場合

9.

これ
画像：img1
画像 : img2

# 実はいろいろできる。

11.

マーカー
画像：img3

12.

経路表示
画像：img4

13.

ストリートビューアー
画像：img5

14.

クライアント担当者：「じゃあ、今もってる100件の物件全部に最寄り駅からの経路を表示したいんですよね〜。なんかGoogle Maps のページからコード取得できるし。」


15.

エ。。。。(；´∀｀)
（100件もあのUIから始点と終点いれんの？だれが？絶対君やらないよね？バーカバーカ）

15.

そりゃいくらなんでも無理だから、独自に実装すっか。

16.

と、その前に

# Google Maps Embed API

16.

Google Maps Embed API
(API KEYが必要です。取得は無料)

17.

Google Maps Embed APIとは、Google Mapsをiframeで埋め込むときに、src属性のクエリパラメターで表示する地図を制御できるもの。

18.

マーカー
img6

```
<iframe width="600" height="450" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place
?q=東京駅
&key=API_KEY" allowfullscreen></iframe>
```

19.

経路表示
img7
```
<iframe width="600" height="450" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/directions
?origin=東京駅
&destination=日本東京都台東区浅草１丁目
&key=API_KEY" allowfullscreen></iframe>
```

20

?origin=[最寄り駅]
&destination=[物件住所]

とすれば解決！

21.

とまあ、ライブラリ使わなくても結構いけます。
