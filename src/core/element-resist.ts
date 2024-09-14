import { ElementType } from './element';
import { getMainMaterialByType, MainMaterialType } from './main-material';

export type ElementResistValue = {
  [key in ElementType]: number;
};

export class ElementResist {
  value: ElementResistValue;
  constructor(mainMaterialType: MainMaterialType) {
    this.value = ElementResist.getBasicValue(mainMaterialType);
  }
  getResistValue(elementType: ElementType): number {
    return this.value[elementType];
  }
  getEnergyForElementLevel(elementType: ElementType, level: number): number {
    const resistValue = this.getResistValue(elementType);
    return resistValue * 2 ** (level - 1);
  }
  static getBasicValue(mainMaterialType: MainMaterialType): ElementResistValue {
    return getMainMaterialByType(mainMaterialType).elementResist;
  }
}
