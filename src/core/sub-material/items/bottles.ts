import { SubMaterial } from '..';

export type BottleType = 'Aroma Oil' | 'Dragon Blood' | 'Acid' | 'Holy Water' | 'Ether';
export const Bottles: SubMaterial[] = [
  {
    categoryType: 'Bottles',
    type: 'Aroma Oil',
    name: { en: 'Aroma Oil', ja: '香油' },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Wisdom Goddess (total > 5)
  },
  {
    categoryType: 'Bottles',
    type: 'Dragon Blood',
    name: { en: 'Dragon Blood', ja: '竜の血' },
    energy: 64,
    elementType: undefined,
    mysticPowerType: undefined, // God of War (Salamander > 2, total > 4)
  },
  {
    categoryType: 'Bottles',
    type: 'Acid',
    name: { en: 'Acid', ja: '強酸' },
    energy: 48,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Bottles',
    type: 'Holy Water',
    name: { en: 'Holy Water', ja: '聖水' },
    energy: 16,
    elementType: undefined,
    mysticPowerType: undefined, // Cleric
  },
  {
    categoryType: 'Bottles',
    type: 'Ether',
    name: { en: 'Ether', ja: 'エール' },
    energy: 8,
    elementType: undefined,
    mysticPowerType: undefined, // Blacksmith God (Aura, Gnome > 2) otherwise, Spirit of Mountain
  },
];
