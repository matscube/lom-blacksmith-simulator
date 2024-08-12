export type WeaponType =
  | "Knife"
  | "Sword"
  | "Axe"
  | "2H-Sword"
  | "2H-Axe"
  | "Hammer"
  | "Spear"
  | "Staff"
  | "Glove"
  | "Flail"
  | "Bow";

export type WeaponPerformanceStandardValue = {
  sharp: number; // A
  heavy: number; // B
  force: number; // C
  tech: number; // D
};
