import { SubMaterial } from '..';

export type ManaStoneType = 'Fire Stone' | 'Earth Stone' | 'Wind Stone' | 'Water Stone';
export const ManaStones: SubMaterial[] = [
  {
    categoryType: 'Mana Stone',
    type: 'Fire Stone',
    name: { en: '', ja: '' },
    energy: 24,
    elementType: 'salamander',
    mysticPowerType: 'Undine',
  },
  {
    categoryType: 'Mana Stone',
    type: 'Earth Stone',
    name: { en: '', ja: '' },
    energy: 24,
    elementType: 'gnome',
    mysticPowerType: 'Gnome',
  },
  {
    categoryType: 'Mana Stone',
    type: 'Wind Stone',
    name: { en: '', ja: '' },
    energy: 24,
    elementType: 'jinn',
    mysticPowerType: 'Jinn',
  },
  {
    categoryType: 'Mana Stone',
    type: 'Water Stone',
    name: { en: '', ja: '' },
    energy: 24,
    elementType: 'undine',
    mysticPowerType: 'Undine',
  },
];
