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
  // Seeds
  // Fruits
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
