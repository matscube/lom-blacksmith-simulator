import { ElementType } from './element';
import { getMainMaterialByType, MainMaterialType } from './main-material';

export type ElementResistValue = {
  [key in ElementType]: number;
};

export class ElementResist {
  value: ElementResistValue;
  /**
   * Bonus for Wisp, Dryad, Salamander, Gnome
   */
  mysticPowerSorcererBonus: number = 0;
  /**
   * Bonus for Shade, Aura, Jinn, Undine
   */
  mysticPowerWitchBonus: number = 0;
  constructor(mainMaterialType: MainMaterialType) {
    this.value = ElementResist.getBasicValue(mainMaterialType);
  }
  cleanUp() {
    this.mysticPowerWitchBonus = 0;
    this.mysticPowerSorcererBonus = 0;
  }
  setMysticPowerSorcererBonus() {
    this.mysticPowerSorcererBonus++;
  }
  setMysticPowerWitchBonus() {
    this.mysticPowerWitchBonus++;
  }
  getResistValue(elementType: ElementType): number {
    return this.value[elementType];
  }
  getEnergyForElementLevel(elementType: ElementType, level: number): number {
    if (level === 0) return 0;

    let resistValue = this.getResistValue(elementType);
    if (resistValue <= 7) {
      if (this.mysticPowerSorcererBonus === 1) {
        resistValue = 3;
      } else if (this.mysticPowerSorcererBonus >= 2) {
        resistValue = 1;
      }
    } else if (resistValue <= 11) {
      if (this.mysticPowerSorcererBonus === 1) {
        resistValue = 6;
      } else if (this.mysticPowerSorcererBonus === 2) {
        resistValue = 3;
      } else if (this.mysticPowerSorcererBonus === 3) {
        resistValue = 1;
      }
    } else {
      // マイア鉛: 32 only
      if (this.mysticPowerSorcererBonus === 1) {
        resistValue = 24;
      } else if (this.mysticPowerSorcererBonus === 2) {
        resistValue = 18;
      } else if (this.mysticPowerSorcererBonus === 3) {
        resistValue = 12;
      }
    }

    return resistValue * 2 ** (level - 1);
  }
  static getBasicValue(mainMaterialType: MainMaterialType): ElementResistValue {
    return getMainMaterialByType(mainMaterialType).elementResist;
  }
}
