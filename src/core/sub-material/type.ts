import { ElementType } from '../element';
import { MultiLanguageText } from '../language';
import { MysticPowerType } from '../mystic-power';

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
  'Sharp Claw', // 鋭い爪
  'Poison Fang', // 毒の牙
  `Giant's Horn`, // 巨獣の角
  'Scissors', // ハサミ
  'Healing Claw', // いやしの爪
  'Zombie Claw', // 死者の爪
  'Vampire Fang', // 吸血牙
  // Eyes
  'Little Eye', // つぶらな瞳
  'Sleepy Eye', // ねむたい瞳
  'Silly Eye', // とぼけた瞳
  'Dangerous Eye', // あぶない瞳
  'Angry Eye', // けわしい瞳
  'Blank Eye', // うつろな瞳
  'Creepy Eye', // あやしい瞳
  'Wicked Eye', // よこしまな瞳
  // Feathers
  // Bottles
  // Vials
  'Mercury', // 水銀
  'Stinky Breath', // 臭い息
  `Ghost's Shriek`, // 絶望のさけび
  'Dragon Breath', // 竜の息
  `Virgin's Sigh`, // 乙女のため息
  // Urns
  // Pellets
  // Powders
  'Sulpher', // イオウ
  'Poison Powder', // 毒の粉
  'Sleepy Powder', // ねむりのこな
  'Paralysis Powder', // まひのこな
  'Rust', // さび
  'Graveyard Dirt', // 墓場の土
  'Ash', // 灰
  // Pouches
  // Miscellaneous
] as const;

export type SubMaterialType = (typeof SubMaterialTypes)[number];

export type SubMaterial = {
  categoryType: SubMaterialCategoryType;
  type: SubMaterialType;
  name: MultiLanguageText;
  energy: number;
  elementType?: ElementType;
  mysticPowerType?: MysticPowerType;
};
