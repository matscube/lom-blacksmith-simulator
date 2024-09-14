import { SubMaterial } from '..';

export type CoinType =
  | `Wisp Gold`
  | `Shade Gold`
  | `Dryad Gold`
  | `Aura Gold`
  | `Salamander Gold`
  | `Gnome Gold`
  | `Jinn Gold`
  | `Undine Gold`
  | `Wisp Silver`
  | `Shade Silver`
  | `Dryad Silver`
  | `Aura Silver`
  | `Salamander Silver`
  | `Gnome Silver`
  | `Jinn Silver`
  | `Undine Silver`;
export const Coins: SubMaterial[] = [
  // Gold Coin
  {
    categoryType: `Coin`,
    type: `Wisp Gold`,
    name: {
      en: `Wisp Gold`,
      ja: `ウィスプの金貨`,
    },
    energy: 64,
    elementType: `wisp`,
    mysticPowerType: `Wisp`,
  },
  {
    categoryType: `Coin`,
    type: `Shade Gold`,
    name: {
      en: `Shade Gold`,
      ja: `シェイドの金貨`,
    },
    energy: 64,
    elementType: `shade`,
    mysticPowerType: `Shade`,
  },
  {
    categoryType: `Coin`,
    type: `Dryad Gold`,
    name: {
      en: `Dryad Gold`,
      ja: `ドリアードの金貨`,
    },
    energy: 64,
    elementType: `dryad`,
    mysticPowerType: `Dryad`,
  },
  {
    categoryType: `Coin`,
    type: `Aura Gold`,
    name: {
      en: `Aura Gold`,
      ja: `アウラの金貨`,
    },
    energy: 64,
    elementType: `aura`,
    mysticPowerType: `Aura`,
  },
  {
    categoryType: `Coin`,
    type: `Salamander Gold`,
    name: {
      en: `Salamander Gold`,
      ja: `サラマンダーの金貨`,
    },
    energy: 64,
    elementType: `salamander`,
    mysticPowerType: `Salamander`,
  },
  {
    categoryType: `Coin`,
    type: `Gnome Gold`,
    name: {
      en: `Gnome Gold`,
      ja: `ノームの金貨`,
    },
    energy: 64,
    elementType: `gnome`,
    mysticPowerType: `Gnome`,
  },
  {
    categoryType: `Coin`,
    type: `Jinn Gold`,
    name: {
      en: `Jinn Gold`,
      ja: `ジンの金貨`,
    },
    energy: 64,
    elementType: `jinn`,
    mysticPowerType: `Jinn`,
  },
  {
    categoryType: `Coin`,
    type: `Undine Gold`,
    name: {
      en: `Undine Gold`,
      ja: `ウンディーネの金貨`,
    },
    energy: 64,
    elementType: `undine`,
    mysticPowerType: `Undine`,
  },
  // Silver Coin
  {
    categoryType: `Coin`,
    type: `Wisp Silver`,
    name: {
      en: `Wisp Silver`,
      ja: `ウィスプの銀貨`,
    },
    energy: 48,
    elementType: `wisp`,
    mysticPowerType: `Wisp`,
  },
  {
    categoryType: `Coin`,
    type: `Shade Silver`,
    name: {
      en: `Shade Silver`,
      ja: `シェイドの銀貨`,
    },
    energy: 48,
    elementType: `shade`,
    mysticPowerType: `Shade`,
  },
  {
    categoryType: `Coin`,
    type: `Dryad Silver`,
    name: {
      en: `Dryad Silver`,
      ja: `ドリアードの銀貨`,
    },
    energy: 48,
    elementType: `dryad`,
    mysticPowerType: `Dryad`,
  },
  {
    categoryType: `Coin`,
    type: `Aura Silver`,
    name: {
      en: `Aura Silver`,
      ja: `アウラの銀貨`,
    },
    energy: 48,
    elementType: `aura`,
    mysticPowerType: `Aura`,
  },
  {
    categoryType: `Coin`,
    type: `Salamander Silver`,
    name: {
      en: `Salamander Silver`,
      ja: `サラマンダーの銀貨`,
    },
    energy: 48,
    elementType: `salamander`,
    mysticPowerType: `Salamander`,
  },
  {
    categoryType: `Coin`,
    type: `Gnome Silver`,
    name: {
      en: `Gnome Silver`,
      ja: `ノームの銀貨`,
    },
    energy: 48,
    elementType: `gnome`,
    mysticPowerType: `Gnome`,
  },
  {
    categoryType: `Coin`,
    type: `Jinn Silver`,
    name: {
      en: `Jinn Silver`,
      ja: `ジンの銀貨`,
    },
    energy: 48,
    elementType: `jinn`,
    mysticPowerType: `Jinn`,
  },
  {
    categoryType: `Coin`,
    type: `Undine Silver`,
    name: {
      en: `Undine Silver`,
      ja: `ウンディーネの銀貨`,
    },
    energy: 48,
    elementType: `undine`,
    mysticPowerType: `Undine`,
  },
];
