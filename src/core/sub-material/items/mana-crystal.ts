import { SubMaterial } from '..';

export type ManaCrystalType = 'Sun Crystal' | 'Moon Crystal' | 'Glow Crystal' | 'Chaos Crystal';
export const ManaCrystals: SubMaterial[] = [
  {
    categoryType: 'Mana Crystal',
    type: 'Sun Crystal',
    name: { en: 'Sun Crystal', ja: '陽光のクリスタル' },
    energy: 48,
    elementType: 'wisp',
    mysticPowerType: undefined, // 太陽神（光が3以上、合計5以上）
  },
  {
    categoryType: 'Mana Crystal',
    type: 'Moon Crystal',
    name: { en: 'Moon Crystal', ja: '月光のクリスタル' },
    energy: 48,
    elementType: 'shade',
    mysticPowerType: undefined, // 月の女神（闇が3以上、合計5以上）
  },
  {
    categoryType: 'Mana Crystal',
    type: 'Glow Crystal',
    name: { en: 'Glow Crystal', ja: '輝きのクリスタル' },
    energy: 96,
    elementType: 'salamander',
    mysticPowerType: 'Nymph of Dawn', // 暁の娘
  },
  {
    categoryType: 'Mana Crystal',
    type: 'Chaos Crystal',
    name: { en: 'Chaos Crystal', ja: 'カオスのクリスタル' },
    energy: 24,
    elementType: undefined,
    mysticPowerType: 'Ancient Moon (World Card)', // 太古の月
  },
];
