---
# outline: deep
---
# Deck APIリファレンス

## デッキ取得

ポケモンカード公式サイトのデッキコードを使うとデッキレシピを取得できます

```
[GET] https://api.deck.poke-card.club/v1/deck/:code
```

### リクエスト例
```shell
curl -v -X GET 'https://api.deck.poke-card.club/v1/deck/FkvVFf-DQE1JH-kV5kFk'
```

### レスポンス

ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

```json
{
  "code": "FkvVFf-DQE1JH-kV5kFk",
  "image":	"https://cdn.deck.poke-card.club/public/deck/FkvVFf-DQE1JH-kV5kFk.png",
  "cards": [
    {
      "cardID": 43061,
      "img": "https://cdn.deck.poke-card.club/public/cards/043061_P_SANAITOEX.jpg",
      "name": "サーナイトex",
      "sheet": 1,
      "category": "pokemon"
    }
  ]
}
```

| キー | 型 | 説明 |
|--|--|--|
| code | `String` | 取得したデッキコード |
| image | `String` | デッキレシピの画像 |
| cards | `Array` | デッキレシピに使用しているカード |

#### Cards

| キー | 型 | 説明 |
|--|--|--|
| cardID | `Int` | 公式サイトのカードID |
| img | `String` | カードの画像 |
| name | `String` | カード名 |
| sheet | `Int` | 枚数 |
| category | `String` | カードのカテゴリー<br>`pokemon` ポケモン<br>`goods` グッズ<br>`tool` ポケモンのどうぐ<br>`support` サポート<br>`stadium` スタジアム<br>`energie` エネルギー |

