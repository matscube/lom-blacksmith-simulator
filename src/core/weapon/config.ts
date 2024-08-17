import { WeaponType, WeaponPerformanceStandardValue } from '.';

export const WeaponPerformanceStandardValueMap: {
  [key in WeaponType]: WeaponPerformanceStandardValue;
} = {
  Knife: {
    sharp: 44,
    heavy: 16,
    force: 12,
    tech: 48,
  },
  Sword: {
    sharp: 32,
    heavy: 32,
    force: 32,
    tech: 32,
  },
  Axe: {
    sharp: 28,
    heavy: 36,
    force: 48,
    tech: 16,
  },
  '2H-Sword': {
    sharp: 40,
    heavy: 40,
    force: 40,
    tech: 40,
  },
  '2H-Axe': {
    sharp: 40,
    heavy: 40,
    force: 64,
    tech: 16,
  },
  Hammer: {
    sharp: 8,
    heavy: 72,
    force: 64,
    tech: 16,
  },
  Spear: {
    sharp: 52,
    heavy: 20,
    force: 24,
    tech: 48,
  },
  Staff: {
    sharp: 4,
    heavy: 44,
    force: 16,
    tech: 32,
  },
  Glove: {
    sharp: 0,
    heavy: 32,
    force: 24,
    tech: 56,
  },
  Flail: {
    sharp: 0,
    heavy: 40,
    force: 28,
    tech: 44,
  },
  Bow: {
    sharp: 40,
    heavy: 4,
    force: 20,
    tech: 40,
  },
};
