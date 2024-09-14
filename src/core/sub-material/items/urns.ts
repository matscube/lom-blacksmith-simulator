import { SubMaterial } from '..';

export type UrnType = 'Electricity' | 'Moss' | 'Ear of Wheat';
export const Urns: SubMaterial[] = [
  {
    categoryType: 'Urns',
    type: 'Electricity',
    name: { en: 'Electricity', ja: '電気の素' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Thunder God (Wisp, Salamander, Jinn > 2)
  },
  {
    categoryType: 'Urns',
    type: 'Moss',
    name: { en: 'Moss', ja: 'こけ' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Urns',
    type: 'Ear of Wheat',
    name: { en: 'Ear of Wheat', ja: 'ムギの穂' },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Fertility Goddess (Dryad > 2, total > 4)
  },
];
