import { ElementType } from '../element';
import { MultiLanguageText } from '../language';
import { MysticPowerType } from '../mystic-power';
import { SubMaterialType } from './items';
export * from './items';

const SubMaterialCategories = [
  { en: 'Coin', ja: 'コイン' },
  { en: 'Mana Stone', ja: 'マナストーン' },
  { en: 'Mana Crystal', ja: 'マナクリスタル' },
  { en: 'Seed', ja: '種' },
  { en: 'Produce', ja: '果実' },
  { en: 'Meat', ja: '肉' },
  { en: 'Fangs & Claws', ja: '爪牙' },
  { en: 'Eyes', ja: '瞳' },
  { en: 'Feathers', ja: '羽根' },
  { en: 'Bottles', ja: '酒瓶' },
  { en: 'Vials', ja: '小瓶' },
  { en: 'Urns', ja: '壺' },
  { en: 'Pellets', ja: '丸薬' },
  { en: 'Powders', ja: '粉末' },
  { en: 'Pouches', ja: '袋' },
] as const;
export type SubMaterialCategoryType = (typeof SubMaterialCategories)[number]['en'];

export type SubMaterial = {
  categoryType: SubMaterialCategoryType;
  type: SubMaterialType;
  name: MultiLanguageText;
  energy: number;
  elementType?: ElementType;
  mysticPowerType?: MysticPowerType;
};
