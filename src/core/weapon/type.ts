export const WeaponTypes = [
  'Knife',
  'Sword',
  'Axe',
  '2H-Sword',
  '2H-Axe',
  'Hammer',
  'Spear',
  'Staff',
  'Glove',
  'Flail',
  'Bow',
] as const;

export type WeaponType = (typeof WeaponTypes)[number];

export type WeaponPerformanceStandardValue = {
  sharp: number; // A
  heavy: number; // B
  force: number; // C
  tech: number; // D
};
