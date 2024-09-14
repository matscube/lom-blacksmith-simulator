import { SubMaterial } from '..';

export type EyeType =
  | 'Little Eye'
  | 'Sleepy Eye'
  | 'Silly Eye'
  | 'Dangerous Eye'
  | 'Angry Eye'
  | 'Blank Eye'
  | 'Creepy Eye'
  | 'Wicked Eye';
export const Eyes: SubMaterial[] = [
  {
    categoryType: 'Eyes',
    type: 'Little Eye',
    name: { en: 'Little Eye', ja: 'つぶらな瞳' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (red hat)
  },
  {
    categoryType: 'Eyes',
    type: 'Sleepy Eye',
    name: { en: 'Sleepy Eye', ja: 'ねむたい瞳' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (blue hat)
  },
  {
    categoryType: 'Eyes',
    type: 'Silly Eye',
    name: { en: 'Silly Eye', ja: 'とぼけた瞳' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (purple hat)
  },
  {
    categoryType: 'Eyes',
    type: 'Dangerous Eye',
    name: { en: 'Dangerous Eye', ja: 'あぶない瞳' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (no hat)
  },
  {
    categoryType: 'Eyes',
    type: 'Angry Eye',
    name: { en: 'Angry Eye', ja: 'けわしい瞳' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (light-blue hat)
  },
  {
    categoryType: 'Eyes',
    type: 'Blank Eye',
    name: { en: 'Blank Eye', ja: 'うつろな瞳' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (yellow hat)
  },
  {
    categoryType: 'Eyes',
    type: 'Creepy Eye',
    name: { en: 'Creepy Eye', ja: 'あやしい瞳' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (black hat)
  },
  {
    categoryType: 'Eyes',
    type: 'Wicked Eye',
    name: { en: 'Wicked Eye', ja: 'よこしまな瞳' },
    energy: 48,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
];
