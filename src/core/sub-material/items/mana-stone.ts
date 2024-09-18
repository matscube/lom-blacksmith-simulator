import { SubMaterial } from '..';

export type ManaStoneType = 'Fire Stone' | 'Earth Stone' | 'Wind Stone' | 'Water Stone';
export const ManaStones: SubMaterial[] = [
  {
    categoryType: 'Mana Stone',
    type: 'Fire Stone',
    name: { en: 'Fire Stone', ja: '火のマナストーン' },
    energy: 24,
    elementType: 'salamander',
    mysticPowerType: 'Salamander',
  },
  {
    categoryType: 'Mana Stone',
    type: 'Earth Stone',
    name: { en: 'Earth Stone', ja: '土のマナストーン' },
    energy: 24,
    elementType: 'gnome',
    mysticPowerType: 'Gnome',
  },
  {
    categoryType: 'Mana Stone',
    type: 'Wind Stone',
    name: { en: 'Wind Stone', ja: '風のマナストーン' },
    energy: 24,
    elementType: 'jinn',
    mysticPowerType: 'Jinn',
  },
  {
    categoryType: 'Mana Stone',
    type: 'Water Stone',
    name: { en: 'Water Stone', ja: '水のマナストーン' },
    energy: 24,
    elementType: 'undine',
    mysticPowerType: 'Undine',
  },
];
