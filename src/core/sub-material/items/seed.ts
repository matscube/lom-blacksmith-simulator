import { SubMaterial } from '..';

export type SeedType =
  | 'Round Seed'
  | 'Oblong Seed'
  | 'Crooked Seed'
  | 'Big Seed'
  | 'Small Seed'
  | 'Long Seed'
  | 'Flat Seed'
  | 'Spiny Seed';
export const Seeds: SubMaterial[] = [
  {
    categoryType: 'Seed',
    type: 'Round Seed',
    name: { en: 'Round Seed', ja: 'まるい種' },
    energy: 16,
    elementType: 'dryad',
    mysticPowerType: 'Dryad',
  },
  {
    categoryType: 'Seed',
    type: 'Oblong Seed',
    name: { en: 'Oblong Seed', ja: 'だえんの種' },
    energy: 16,
    elementType: 'dryad',
    mysticPowerType: 'Dryad',
  },
  {
    categoryType: 'Seed',
    type: 'Crooked Seed',
    name: { en: 'Crooked Seed', ja: 'ひしゃげた種' },
    energy: 16,
    elementType: 'dryad',
    mysticPowerType: 'Dryad',
  },
  {
    categoryType: 'Seed',
    type: 'Big Seed',
    name: { en: 'Big Seed', ja: 'おおきな種' },
    energy: 24,
    elementType: 'dryad',
    mysticPowerType: 'Dryad',
  },
  {
    categoryType: 'Seed',
    type: 'Small Seed',
    name: { en: 'Small Seed', ja: 'ちいさな種' },
    energy: 24,
    elementType: 'dryad',
    mysticPowerType: 'Dryad',
  },
  {
    categoryType: 'Seed',
    type: 'Long Seed',
    name: { en: 'Long Seed', ja: 'ほそながい種' },
    energy: 24,
    elementType: 'dryad',
    mysticPowerType: 'Dryad',
  },
  {
    categoryType: 'Seed',
    type: 'Flat Seed',
    name: { en: 'Flat Seed', ja: 'ひらたい種' },
    energy: 48,
    elementType: 'dryad',
    mysticPowerType: 'Dryad',
  },
  {
    categoryType: 'Seed',
    type: 'Spiny Seed',
    name: { en: 'Spiny Seed', ja: 'とげとげの種' },
    energy: 48,
    elementType: 'dryad',
    mysticPowerType: undefined, // 世界樹（木が5以上
  },
];
