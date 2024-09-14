import { SubMaterial } from '..';
import { Bottles, BottleType } from './bottles';
import { Coins, CoinType } from './coin';
import { Eyes, EyeType } from './eyes';
import { FangOrClawType, FangsAndClaws } from './fangs-and-claws';
import { Feathers, FeatherType } from './feathers';
import { ManaCrystals, ManaCrystalType } from './mana-crystal';
import { ManaStones, ManaStoneType } from './mana-stone';
import { Meats, MeatType } from './meat';
import { Pellets, PelletType } from './pellets';
import { Pouches, PouchType } from './pouches';
import { Powders, PowderType } from './powders';
import { Produces, ProduceType } from './produce';
import { Seeds, SeedType } from './seed';
import { Urns, UrnType } from './urns';
import { Vials, VialType } from './vials';

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
