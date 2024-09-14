import { ElementType } from './element';
import { getMainMaterialByType, MainMaterialType } from './main-material';

export type ElementResist = {
  [key in ElementType]: number;
};

export function getElementResist(mainMaterialType: MainMaterialType): ElementResist {
  return getMainMaterialByType(mainMaterialType).elementResist;
}
export function getEnergyForElementLevel(resist: number, level: number): number {
  return resist * 2 ** (level - 1);
}
