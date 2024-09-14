import { SubMaterial } from '..';

export type PouchType =
  | 'Hairball'
  | 'Needle'
  | 'Mirror Piece'
  | 'Wad of Wool'
  | 'Messy Scroll'
  | 'Greenball Bun'
  | 'Tako Bug';
export const Pouches: SubMaterial[] = [
  {
    categoryType: 'Pouches',
    type: 'Hairball',
    name: { en: 'Hairball', ja: 'ふさふさのけだま' },
    energy: 48,
    elementType: undefined,
    mysticPowerType: undefined, // Spirit of Housework
  },
  {
    categoryType: 'Pouches',
    type: 'Needle',
    name: { en: 'Needle', ja: '針' },
    energy: 48,
    elementType: undefined,
    mysticPowerType: undefined, // Bed of Thorns (Dryad > 0, Salamander = 0)
  },
  {
    categoryType: 'Pouches',
    type: 'Mirror Piece',
    name: { en: 'Mirror Piece', ja: '鏡のかけら' },
    energy: 48,
    elementType: undefined,
    mysticPowerType: undefined, // Mirrored World (total > 2)
  },
  {
    categoryType: 'Pouches',
    type: 'Wad of Wool',
    name: { en: 'Wad of Wool', ja: 'ひとふさのウール' },
    energy: 48,
    elementType: undefined,
    mysticPowerType: undefined, // Wanderer (Shade, Dryad > 0, total > 2)
  },
  {
    categoryType: 'Pouches',
    type: 'Messy Scroll',
    name: { en: 'Messy Scroll', ja: '読めない巻物' },
    energy: 48,
    elementType: undefined,
    mysticPowerType: undefined, // Sage (Jinn, Undine > 0, total > 2)
  },
  {
    categoryType: 'Pouches',
    type: 'Greenball Bun',
    name: { en: 'Greenball Bun', ja: '草ムシまんじゅう' },
    energy: 48,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Pouches',
    type: 'Tako Bug',
    name: { en: 'Tako Bug', ja: 'ヘバタのタコムシ' },
    energy: 48,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
];
