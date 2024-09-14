import { SubMaterial } from '..';

export type VialType =
  | `Mercury`
  | `Stinky Breath`
  | `Ghost's Howl`
  | `Dragon Breath`
  | `Damsel's Sigh`;
export const Vials: SubMaterial[] = [
  {
    categoryType: `Vials`,
    type: `Mercury`,
    name: {
      en: `Mercury`,
      ja: `水銀`,
    },
    energy: 24,
    elementType: undefined,
    mysticPowerType: `Witch`,
  },
  {
    categoryType: 'Vials',
    type: `Stinky Breath`,
    name: { en: `Stinky Breath`, ja: '臭い息' },
    energy: 16,
    elementType: undefined,
    mysticPowerType: undefined, // Pixie (black hat)
  },
  {
    categoryType: 'Vials',
    type: `Ghost's Howl`,
    name: { en: `Ghost's Howl`, ja: '絶望のさけび' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Sacrificed Nymph
  },
  {
    categoryType: 'Vials',
    type: `Dragon Breath`,
    name: { en: `Dragon Breath`, ja: '竜の息' },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Man of Valor (Wisp, Salamander > 0, total > 2 )
  },
  {
    categoryType: 'Vials',
    type: `Damsel's Sigh`,
    name: { en: `Damsel's Sigh`, ja: '乙女のため息' },
    energy: 16,
    elementType: undefined,
    mysticPowerType: undefined, // Goddess of Love (Shade, Dryad > 2)
  },
];
