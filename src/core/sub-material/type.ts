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
  // Meat
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
