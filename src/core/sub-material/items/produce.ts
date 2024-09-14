import { SubMaterial } from '..';

export type ProduceType =
  | 'Bellgrapes'
  | 'Diceberry'
  | 'Mangolephant'
  | 'Loquat-Shoes'
  | "Pear o'Heels"
  | 'Squalphin'
  | 'Citrisquid'
  | 'Springanana'
  | 'Peach Puppy'
  | 'Apricat'
  | 'Applesocks'
  | 'Whalamato'
  | "Pine o'Clock"
  | 'Fishy Fruit'
  | 'Boarmelon'
  | 'Rhinoloupe'
  | 'Orcaplant'
  | 'Garlicrown'
  | 'Honey Onion'
  | 'Sweet Moai'
  | 'Spiny Carrot'
  | 'Conchurnip'
  | 'Cornflower'
  | 'Cabbadillo'
  | 'Needlettuce'
  | 'Cherry Bombs'
  | 'Masked Potato'
  | 'Lilipods'
  | 'Rocket Papaya'
  | "Orange'opus"
  | 'Bumpkin'
  | 'Heart Mint'
  | 'Spade Basil'
  | 'Dialaurel'
  | 'Gold Clover'
  | 'Mush-In-A-Box'
  | 'Toadstoolshed';
export const Produces: SubMaterial[] = [
  {
    categoryType: 'Produce',
    type: `Bellgrapes`,
    name: { en: `Bellgrapes`, ja: `すずぶどう` },
    energy: 64,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Diceberry`,
    name: { en: `Diceberry`, ja: `さいころいちご` },
    energy: 16,
    elementType: undefined,
    mysticPowerType: undefined, // Wind God (Jinn > 2, total > 4)
  },
  {
    categoryType: 'Produce',
    type: `Mangolephant`,
    name: { en: `Mangolephant`, ja: `エレファントマンゴー` },
    energy: 64,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Loquat-Shoes`,
    name: { en: `Loquat-Shoes`, ja: `シューズビワ` },
    energy: 16,
    elementType: undefined,
    mysticPowerType: undefined, // Spirit of shoes
  },
  {
    categoryType: 'Produce',
    type: `Pear o'Heels`,
    name: { en: `Pear o'Heels`, ja: `ハイヒールペア` },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Spirit of shoes
  },
  {
    categoryType: 'Produce',
    type: `Squalphin`,
    name: { en: `Squalphin`, ja: `イルカキューリ` },
    energy: 16,
    elementType: 'undine',
    mysticPowerType: undefined, // Ocean God (Undine > 2, total > 4)
  },
  {
    categoryType: 'Produce',
    type: `Citrisquid`,
    name: { en: `Citrisquid`, ja: `イカレモン` },
    energy: 8,
    elementType: 'undine',
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Springanana`,
    name: { en: `Springanana`, ja: `バネバナナ` },
    energy: 16,
    elementType: undefined,
    mysticPowerType: undefined, // Heaven's Scale
  },
  {
    categoryType: 'Produce',
    type: `Peach Puppy`,
    name: { en: `Peach Puppy`, ja: `ドッグピーチ` },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Wolf
  },
  {
    categoryType: 'Produce',
    type: `Apricat`,
    name: { en: `Apricat`, ja: `キャットアプリコット` },
    energy: 8,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Applesocks`,
    name: { en: `Applesocks`, ja: `サンタリンゴ` },
    energy: 64,
    elementType: undefined,
    mysticPowerType: undefined, // Nymph of Orchards (total > 4)
  },
  {
    categoryType: 'Produce',
    type: `Whalamato`,
    name: { en: `Whalamato`, ja: `クジラトマト` },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Unicorn (Gnome, Undine > 2)
  },
  {
    categoryType: 'Produce',
    type: `Pine o'Clock`,
    name: { en: `Pine o'Clock`, ja: `時計パイン` },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Ragnarok (Salamander, Gnome, Jinn, Undine > 0)
  },
  {
    categoryType: 'Produce',
    type: `Fishy Fruit`,
    name: { en: `Fishy Fruit`, ja: `フィッシュフルーツ` },
    energy: 32,
    elementType: 'undine',
    mysticPowerType: undefined, // Spring
  },
  {
    categoryType: 'Produce',
    type: `Boarmelon`,
    name: { en: `Boarmelon`, ja: `ウリぼうスイカ` },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Rhinoloupe`,
    name: { en: `Rhinoloupe`, ja: `サイメロン` },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Orcaplant`,
    name: { en: `Orcaplant`, ja: `シャチナス` },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Ocean God (Undine > 2, total > 4)
  },
  {
    categoryType: 'Produce',
    type: `Garlicrown`,
    name: { en: `Garlicrown`, ja: `クラウンガーリック` },
    energy: 8,
    elementType: 'aura',
    mysticPowerType: undefined, // King
  },
  {
    categoryType: 'Produce',
    type: `Honey Onion`,
    name: { en: `Honey Onion`, ja: `ハニーオニオン` },
    energy: 32,
    elementType: 'dryad',
    mysticPowerType: undefined, // Princess
  },
  {
    categoryType: 'Produce',
    type: `Sweet Moai`,
    name: { en: `Sweet Moai`, ja: `スウィートモアイ` },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Spiny Carrot`,
    name: { en: `Spiny Carrot`, ja: `ツノガイニンジン` },
    energy: 8,
    elementType: 'undine',
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Conchurnip`,
    name: { en: `Conchurnip`, ja: `マキガイカブ` },
    energy: 16,
    elementType: undefined,
    mysticPowerType: undefined, // Spirit of Ocean
  },
  {
    categoryType: 'Produce',
    type: `Cornflower`,
    name: { en: `Cornflower`, ja: `ひまわりとうもろこし` },
    energy: 24,
    elementType: 'wisp',
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Cabbadillo`,
    name: { en: `Cabbadillo`, ja: `アルマジロキャベツ` },
    energy: 8,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Needlettuce`,
    name: { en: `Needlettuce`, ja: `ハリネズミレタス` },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Bed of Thorns (Dryad > 0, Salamander = 0)
  },
  {
    categoryType: 'Produce',
    type: `Cherry Bombs`,
    name: { en: `Cherry Bombs`, ja: `ビーダマンベリー` },
    energy: 16,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Masked Potato`,
    name: { en: `Masked Potato`, ja: `マスクイモ` },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Lilipods`,
    name: { en: `Lilipods`, ja: `ユリグリンピース` },
    energy: 8,
    elementType: undefined,
    mysticPowerType: undefined, // Enticed Nymph
  },
  {
    categoryType: 'Produce',
    type: `Rocket Papaya`,
    name: { en: `Rocket Papaya`, ja: `ロケットパパイヤ` },
    energy: 64,
    elementType: undefined,
    mysticPowerType: undefined, // Tower (Wisp > 0, Salamander = 0)
  },
  {
    categoryType: 'Produce',
    type: `Orange'opus`,
    name: { en: `Orange'opus`, ja: `タコオレンジ` },
    energy: 64,
    elementType: undefined,
    mysticPowerType: undefined, // Leviathan (Gnome > 4, Salamander = 0)
  },
  {
    categoryType: 'Produce',
    type: `Bumpkin`,
    name: { en: `Bumpkin`, ja: `パンプキンボム` },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Clown
  },
  {
    categoryType: 'Produce',
    type: `Heart Mint`,
    name: { en: `Heart Mint`, ja: `ハートミント` },
    energy: 8,
    elementType: undefined,
    mysticPowerType: undefined, // Mother of Gods (Shade, Gnome, Undine > 1)
  },
  {
    categoryType: 'Produce',
    type: `Spade Basil`,
    name: { en: `Spade Basil`, ja: `スペードバジル` },
    energy: 16,
    elementType: undefined,
    mysticPowerType: undefined, // Ruler of the Sky (Wisp > 0, total > 5)
  },
  {
    categoryType: 'Produce',
    type: `Dialaurel`,
    name: { en: `Dialaurel`, ja: `ダイヤローレル` },
    energy: 64,
    elementType: undefined,
    mysticPowerType: undefined, // Metropolis (Shade > 0, Salamander = 0)
  },
  {
    categoryType: 'Produce',
    type: `Gold Clover`,
    name: { en: `Gold Clover`, ja: `ゴールドクローバー` },
    energy: 64,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Mush-In-A-Box`,
    name: { en: `Mush-In-A-Box`, ja: `ドッキリマッシュ` },
    energy: 32,
    elementType: 'shade',
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Produce',
    type: `Toadstoolshed`,
    name: { en: `Toadstoolshed`, ja: `小屋ダケ` },
    energy: 64,
    elementType: 'shade',
    mysticPowerType: undefined, // N/A
  },
];
