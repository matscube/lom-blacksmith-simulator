import { SubMaterial } from '..';

export type PelletType = 'Baked Roach' | 'Blackened Bat';
export const Pellets: SubMaterial[] = [
  {
    categoryType: 'Pellets',
    type: 'Baked Roach',
    name: { en: 'Baked Roach', ja: 'ケムシの黒焼き' },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Pellets',
    type: 'Blackened Bat',
    name: { en: 'Blackened Bat', ja: 'コウモリの黒焼き' },
    energy: 48,
    elementType: undefined,
    mysticPowerType: undefined, // Wings of Darkness (Shade > 4, Wisp = 0)
  },
];
