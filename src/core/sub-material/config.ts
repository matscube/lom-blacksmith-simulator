import { Coins } from './items/coins';
import { Powders } from './items/powders';
import { SubMaterial } from './type';

export const AllSubMaterials: SubMaterial[] = [...Coins, ...Powders];
