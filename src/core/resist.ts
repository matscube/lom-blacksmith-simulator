import { ElementType } from './element';
import { MainMaterialType } from './main-material';

export type ElementResist = {
  [key in ElementType]: number;
};

export function getElementResist(_mainMaterial: MainMaterialType): ElementResist {
  return {
    wisp: 8,
    shade: 8,
    dryad: 8,
    aura: 8,
    salamander: 8,
    gnome: 8,
    jinn: 8,
    undine: 8,
  };
}
export function getEnergyForElementLevel(resist: number, level: number): number {
  return resist * 2 ** (level - 1);
}
