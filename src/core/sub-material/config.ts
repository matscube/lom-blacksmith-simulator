import { ElementType } from '../element';
import { MultiLanguageText } from '../language';
import { SubMaterialCategoryType, SubMaterialType } from './type';

export const SubMaterialsMap: {
  categoryType: SubMaterialCategoryType;
  type: SubMaterialType;
  name: MultiLanguageText;
  energy: number;
  elementType?: ElementType;
}[] = [
  // Coins
  {
    categoryType: `Coins`,
    type: `Salamander's Gold`,
    name: {
      en: `Salamander's Gold`,
      ja: `サラマンダーの金貨`,
    },
    energy: 64,
    elementType: `salamander`,
  },
  {
    categoryType: `Coins`,
    type: `Salamander's Silver`,
    name: {
      en: `Salamander's Silver`,
      ja: `サラマンダーの銀貨`,
    },
    energy: 48,
    elementType: `salamander`,
  },
];
