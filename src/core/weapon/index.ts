import { ElementResist } from '../element-resist';
import {
  getAttackPower,
  getMainMaterialByType,
  MainMaterial,
  MainMaterialType,
} from '../main-material';
import { NYMPH_OF_DAWN_ENERGY } from '../mystic-power';
import { AllSubMaterials, SubMaterialType } from '../sub-material';
import { WeaponElement } from './weapon-element';
import { WeaponMysticPower } from './weapon-mystic-power';

export * from './config';

export const WeaponTypes = [
  'Knife',
  'Sword',
  'Axe',
  '2H-Sword',
  '2H-Axe',
  'Hammer',
  'Spear',
  'Staff',
  'Glove',
  'Flail',
  'Bow',
] as const;

export type WeaponType = (typeof WeaponTypes)[number];

export type WeaponPerformanceStandardValue = {
  sharp: number; // A
  heavy: number; // B
  force: number; // C
  tech: number; // D
};

export class Weapon {
  mainMaterial: MainMaterial;
  elementResist: ElementResist;
  element: WeaponElement = new WeaponElement();
  mysticPower: WeaponMysticPower = new WeaponMysticPower();
  constructor(
    private readonly mainMaterialType: MainMaterialType,
    private readonly weaponType: WeaponType,
  ) {
    this.mainMaterial = getMainMaterialByType(mainMaterialType);
    this.elementResist = new ElementResist(mainMaterialType);
  }

  getAttack(): number {
    const totalElement = Object.values(this.element.essence).reduce((acc, cur) => acc + cur, 0);
    return getAttackPower({
      mainMaterialType: this.mainMaterialType,
      weaponType: this.weaponType,
      totalElement,
    });
  }

  temper(type: SubMaterialType) {
    this.history.push(type);
    this.elementResist.cleanUp();
    this.element.cleanUp();
    this.mysticPower.cleanUp();

    const subMaterial = AllSubMaterials.find((m) => m.type === type);
    if (!subMaterial) throw new Error('SubMaterial not found');

    // check lock
    this.element.lockElementLevelUp();

    // pool sub material energy
    this.element.poolEnergy(subMaterial.energy);
    if (subMaterial.elementType !== undefined) {
      this.element.preProcessElementLevelUp(this.elementResist, subMaterial.elementType);
    }

    // push mystic power
    if (subMaterial.mysticPowerType !== undefined) {
      this.mysticPower.push(subMaterial.mysticPowerType);
    }

    // pool popped mystic power energy
    if (this.mysticPower.getPopped() === 'Nymph of Dawn') {
      this.element.poolEnergy(NYMPH_OF_DAWN_ENERGY);
    }

    // remove Nymph of Dawn by low energy
    if (this.mysticPower.getPopped() !== 'Nymph of Dawn') {
      if (this.element.energy <= 24) {
        if (this.mysticPower.getPower3() === 'Nymph of Dawn') {
          this.mysticPower.removePower3();
          // this.mysticPower.setPopped('Nymph of Dawn'); // チャート上だと欄外へ移動となるが、それだと他のカードを上書きしてシミュレータと齟齬がでるので、ここでは破棄する、それでも矛盾はないはず
          this.element.poolEnergy(NYMPH_OF_DAWN_ENERGY);
        } else if (this.mysticPower.getPower2() === 'Nymph of Dawn') {
          this.mysticPower.removePower2();
          // this.mysticPower.setPopped('Nymph of Dawn'); // チャート上だと欄外へ移動となるが、それだと他のカードを上書きしてシミュレータと齟齬がでるので、ここでは破棄する
          this.element.poolEnergy(NYMPH_OF_DAWN_ENERGY);
        }
      }
    }
    if (this.mysticPower.getPopped() === 'Nymph of Dawn') {
      this.mysticPower.removePopped();
    }
    // console.log(`energy before mystic-power processing: ${this.element.energy}`);

    // book mystic-power element level-up
    this.mysticPower.processActiveMysticPowers(this.element, this.elementResist);

    // process element level-up
    this.element.elementLevelUpProcess(this.elementResist);
  }

  /**
   * Information
   */
  history: SubMaterialType[] = [];

  /**
   * Debug
   */
  debug() {
    console.log('Weapon debug start ----------------');
    console.log({ mainMaterial: this.mainMaterial, weaponType: this.weaponType });
    console.log('----------------');
  }
}
export class Essence {
  wisp: number = 0;
  shade: number = 0;
  dryad: number = 0;
  aura: number = 0;
  salamander: number = 0;
  gnome: number = 0;
  jinn: number = 0;
  undine: number = 0;
  constructor() {}
  debug() {
    console.log('Essence debug start ----------------');
    console.log({
      wisp: this.wisp,
      shade: this.shade,
      dryad: this.dryad,
      aura: this.aura,
      salamander: this.salamander,
      gnome: this.gnome,
      jinn: this.jinn,
      undine: this.undine,
    });
    console.log('----------------');
  }
}
