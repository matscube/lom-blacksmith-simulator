export const SubMaterialCategoryTypes = [
  'ManaStone',
  'ManaCrystal',
  'Coins',
  'Seeds',
  'Fruits',
  'Meat',
  'Fangs&Claws',
  'Eyes',
  'Feathers',
  'Bottles',
  'Vials',
  'Urns',
  'Pellets',
  'Powders',
  'Pouches',
  'Miscellaneous',
] as const;
export type SubMaterialCategoryType = (typeof SubMaterialCategoryTypes)[number];

export const SubMaterialTypes = [
  // ManaStone
  'Mana Stone of Fire',
  'Mana Stone of Water',
  'Mana Stone of Wind',
  'Mana Stone of Water',
  // ManaCrystal
  'Sunlight Crystal',
  'Moonglow Crystal',
  'Sparkle Crystal',
  'Chaos Crystal',
  // Coins
  `Wisp's Gold`,
  `Shade's Gold`,
  `Dryad's Gold`,
  `Aura's Gold`,
  `Salamander's Gold`,
  `Gnome's Gold`,
  `Jinn's Gold`,
  `Undine's Gold`,
  `Wisp's Silver`,
  `Shade's Silver`,
  `Dryad's Silver`,
  `Aura's Silver`,
  `Salamander's Silver`,
  `Gnome's Silver`,
  `Jinn's Silver`,
  `Undine's Silver`,
  // Seeds
  'Round Seed',
  'Oblong Seed',
  'Crooked Seed',
  'Big Seed',
  'Small Seed',
  'Long Seed',
  'Flat Seed',
  'Spiny Seed',
  // Fruits
  'Bellgrapes', // すずぶどう
  'Diceberry', // さいころいちご
  'Mangolephant', // エレファントマンゴー
  'Loquat-Shoes', // シューズビワ
  `Pear o'Heels`, // ハイヒールペア
  'Dolphin Squash', // イルカキューリ
  'Citrisquid', // イカレモン
  'Springanana', // バネバナナ
  'Peach Puppy', // ドッグピーチ
  'Apricat', // キャットアプリコット
  'Applesocks', // サンタリンゴ
  `Pine o'Clock`, // 時計パイン
  'Fishy Fruit', // フィッシュフルーツ
  'Boarmelon', // ウリぼうスイカ
  'Rhinoloupe', // サイメロン
  'Orcaplant', // シャチナス
  'Garlicrown', // クラウンガーリック
  'Honey Onion', // ハニーオニオン
  'Sweet Moai', // スウィートモアイ
  'Spiny Carrot', // ツノガイニンジン
  'Conchurnip', // マキガイカブ
  'Cornflower', // ひまわりとうもろこし
  'Cabbadillo', // アルマジロキャベツ
  'Needlettuce', // ハリネズミレタス
  'Cherry Bombs', // ビーダマンベリー
  'Masked Potato', // マスクイモ
  'Lilipods', // ユリグリンピース
  'Rocket Papaya', // ロケットパパイヤ
  `Orange'opus`, // タコオレンジ
  'Bumpkin', // パンプキンボム
  'Heart Mint', // ハートミント
  'Spade Basil', // スペードバジル
  'Diamond Laurel', // ダイヤローレル
  'Gold Clover', // ゴールドクローバー
  'Mush-in-a-Box', // ドッキリマッシュ
  'Toadstoolshed', // 小屋ダケ
  // Meat
  'Animal Meat', // 獣肉
  'Bug Meat', // 虫肉
  'Lizard Meat', // トカゲの肉
  'Fish Meat', // 魚肉
  'Bird Meat', // 鳥肉
  'Morph Meat', // 変な肉
  'Demon Meat', // 悪魔の肉
  'Dragon Steak', // ドラゴンステーキ
  'Odd Meat', // 不思議な肉
  'Magical Meat', // 魔法の肉
  'Rotten Meat', // くさった肉
  // Fangs&Claws
  // Eyes
  // Feathers
  // Bottles
  // Vials
  // Urns
  // Pellets
  // Powders
  // Pouches
  // Miscellaneous
] as const;

export type SubMaterialType = (typeof SubMaterialTypes)[number];
