import { SubMaterial } from '..';

export type PowderType =
  | 'Sulphur'
  | 'Poison Powder'
  | 'Sleepy Powder'
  | 'Knockout Dust'
  | 'Rust'
  | 'Grave Dirt'
  | 'Ash';
export const Powders: SubMaterial[] = [
  {
    categoryType: 'Pellets',
    type: 'Sulphur',
    name: { en: 'Sulphur', ja: 'イオウ' },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Sorceror
  },
  {
    categoryType: 'Pellets',
    type: 'Poison Powder',
    name: { en: 'Poison Powder', ja: '毒の粉' },
    energy: 8,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (light-blue hat)
  },
  {
    categoryType: 'Pellets',
    type: 'Sleepy Powder',
    name: { en: 'Sleepy Powder', ja: 'ねむりのこな' },
    energy: 8,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (yellow hat)
  },
  {
    categoryType: 'Pellets',
    type: 'Knockout Dust',
    name: { en: 'Knockout Dust', ja: 'まひのこな' },
    energy: 8,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (purple hat)
  },
  {
    categoryType: 'Pellets',
    type: 'Rust',
    name: { en: 'Rust', ja: 'さび' },
    energy: 8,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (blue hat)
  },
  {
    categoryType: 'Pellets',
    type: 'Grave Dirt',
    name: { en: 'Grave Dirt', ja: '墓場の土' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Dying Earth
  },
  {
    categoryType: 'Pellets',
    type: 'Ash',
    name: { en: 'Ash', ja: '灰' },
    energy: 16,
    elementType: undefined,
    mysticPowerType: undefined, // Volcano
  },
];
