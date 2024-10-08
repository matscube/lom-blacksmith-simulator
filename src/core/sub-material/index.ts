import { ElementType } from '../element';
import { MultiLanguageText } from '../language';
import { MysticPowerType } from '../mystic-power';
import { BottleType, Bottles } from './items/bottles';
import { CoinType, Coins } from './items/coin';
import { EyeType, Eyes } from './items/eyes';
import { FangOrClawType, FangsAndClaws } from './items/fangs-and-claws';
import { FeatherType, Feathers } from './items/feathers';
import { ManaCrystalType, ManaCrystals } from './items/mana-crystal';
import { ManaStoneType, ManaStones } from './items/mana-stone';
import { MeatType, Meats } from './items/meat';
import { PelletType, Pellets } from './items/pellets';
import { PouchType, Pouches } from './items/pouches';
import { PowderType, Powders } from './items/powders';
import { ProduceType, Produces } from './items/produce';
import { SeedType, Seeds } from './items/seed';
import { UrnType, Urns } from './items/urns';
import { VialType, Vials } from './items/vials';

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

export type SubMaterialType =
  | CoinType
  | ManaStoneType
  | ManaCrystalType
  | SeedType
  | ProduceType
  | MeatType
  | FangOrClawType
  | EyeType
  | FeatherType
  | BottleType
  | VialType
  | UrnType
  | PelletType
  | PowderType
  | PouchType;

export type SubMaterial = {
  categoryType: SubMaterialCategoryType;
  type: SubMaterialType;
  name: MultiLanguageText;
  energy: number;
  elementType?: ElementType;
  mysticPowerType?: MysticPowerType;
};

export const AllSubMaterials: SubMaterial[] = [
  ...Coins,
  ...ManaStones,
  ...ManaCrystals,
  ...Seeds,
  ...Produces,
  ...Meats,
  ...FangsAndClaws,
  ...Eyes,
  ...Feathers,
  ...Bottles,
  ...Vials,
  ...Urns,
  ...Pellets,
  ...Powders,
  ...Pouches,
];
