---
# outline: deep
---
# Deck APIリファレンス

## カード情報取得

ポケモンカード公式サイトのカードIDを使うとカード情報を取得できます

```
[GET] https://api.deck.poke-card.club/v1/cards?=id
```

### リクエスト例
```shell
curl -v -X GET 'https://api.deck.poke-card.club/v1/cards?id=45134'
```

### クエリパラメータ

| キー | 型 | 説明 |
|--|--|--|
| id | string | `,`区切りで複数取得可能 |


### レスポンス

ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

```json
[
    {
        "id": 45134,
        "ability": {
            "name": "サイコエンブレイス",
            "text": "自分の番に何回でも使える。自分のトラッシュから「基本超エネルギー」を1枚選び、自分の超ポケモンにつける。その後、つけたポケモンにダメカンを2個のせる。（きぜつするポケモンに、この特性は使えない。）"
        },
        "addRule": "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。",
        "Attacks": [
            {
                "convertedCost": 3,
                "costs": [
                    "psychic",
                    "psychic",
                    "colorless"
                ],
                "damage": "190",
                "name": "ミラクルフォース",
                "text": "このポケモンの特殊状態を、すべて回復する。"
            }
        ],
        "color": [
            "psychic"
        ],
        "hp": "310",
        "imageUrl": "public/cards/045134_P_SANAITOEX.jpg",
        "name": "サーナイトex",
        "resistances": {
            "calc": "minus",
            "color": "fighting",
            "value": "30"
        },
        "retreats": {
            "convertedCost": 2,
            "costs": [
                "colorless",
                "colorless"
            ]
        },
        "rule": [
            ""
        ],
        "subtypes": [
            "Stage 2"
        ],
        "supertype": "Pokémon",
        "weaknesses": {
            "calc": "multiply",
            "color": "dark",
            "value": "2"
        }
    }
]
```

| キー | 型 | 説明 |
|--|--|--|
| id | `Int` | カードID |
| imageUrl | `String` | カードの画像 |
| name | `String` | カード名 |
| subtypes | `String[]` | `Basic` タネ<br>`Stage 1` 1進化<br>`Stage 2` 2進化<br>`Item` グッズ<br>`Supporter`サポート<br>`Tool` ポケモンのどうぐ<br>`Stadium` スタジアム |
| supertype | `String` | `Trainer` トレーナーズ<br>`Energy` エネルギー<br>`Pokémon` ポケモン |
| ability | `Ability` | ポケモン｜特性 |
| addRule | `String` | ポケモン｜exなどのルール |
| Attacks | `Attack[]` | ポケモン｜ワザ |
| color | `String[]` | ポケモン｜タイプ |
| hp | `String` | ポケモン｜HP |
| resistances | `Resistances` | ポケモン｜抵抗 |
| retreats | `Retreats` | ポケモン｜にげる |
| weaknesses | `Weaknesses` | ポケモン｜弱点 |
| rule | `String[]` | トレーナーズ｜効果 |

#### Ability

| キー | 型 | 説明 |
|--|--|--|
| name | `String` | 特性名 |
| text | `String` | 効果 |

#### Attack

| キー | 型 | 説明 |
|--|--|--|
| convertedCost | `Int` | 必要なエネルギーの数 |
| costs | `String[]` | 必要なエネルギーの色 |
| name | `String` | ワザ名 |
| text | `String` | ワザの効果 |

#### Resistances

| キー | 型 | 説明 |
|--|--|--|
| calc | `String` | 算術演算子（マイナス） |
| color | `String` | 抵抗するタイプ |
| value | `String` | 抵抗するダメージ数 |

#### Retreats

| キー | 型 | 説明 |
|--|--|--|
| convertedCost | `Int` | にげるためのエネルギー |
| costs | `String[]` | にげるためのエネルギーのタイプ |


#### Weaknesses

| キー | 型 | 説明 |
|--|--|--|
| calc | `String` | 算術演算子（乗算） |
| color | `String` | 弱点タイプ |
| value | `String` | 計算する値 |



