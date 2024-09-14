import console from 'console';
import { ElementType } from '../element';
import {
  getAttackPower,
  getMainMaterialByType,
  MainMaterial,
  MainMaterialType,
} from '../main-material';
import { MysticPowerType } from '../mystic-power';
import { ElementResist } from '../resist';
import { AllSubMaterials, SubMaterialType } from '../sub-material';
import { WeaponType } from './type';

export * from './config';
export * from './type';

export class Weapon {
  mainMaterial: MainMaterial;
  elementResist: ElementResist;
  constructor(
    private readonly mainMaterialType: MainMaterialType,
    private readonly weaponType: WeaponType,
  ) {
    this.mainMaterial = getMainMaterialByType(mainMaterialType);
    this.elementResist = new ElementResist(mainMaterialType);
  }

  getAttack(): number {
    const totalElement = Object.values(this.essence).reduce((acc, cur) => acc + cur, 0);
    return getAttackPower({
      mainMaterialType: this.mainMaterialType,
      weaponType: this.weaponType,
      totalElement,
    });
  }

  temper(type: SubMaterialType) {
    this.history.push(type);

    const subMaterial = AllSubMaterials.find((m) => m.type === type);
    if (!subMaterial) throw new Error('SubMaterial not found');

    // pool sub material energy
    this.setSubMaterialEnergy(subMaterial.energy);
    if (subMaterial.elementType !== undefined) {
      this.preProcessElementLevelUp(subMaterial.elementType);
    }

    // push mystic power
    if (subMaterial.mysticPowerType !== undefined) {
      this.pushMysticPower(subMaterial.mysticPowerType);
    }

    // book mystic-power element level-up
    this.processActiveMysticPowers();

    // process element level-up
    this.elementLevelUpProcess();
  }

  /**
   * Energy
   */
  energy: number = 0;
  setSubMaterialEnergy(energy: number) {
    this.energy = energy;
  }
  useEnergy(energy: number) {
    this.energy -= energy;
  }

  /**
   * Mystic Power
   */
  mysticPowers: MysticPowerType[] = []; // array of 5 items
  hasMysticPower(mysticPower?: MysticPowerType) {
    return mysticPower;
  }
  pushMysticPower(mysticPower: MysticPowerType) {
    this.mysticPowers.unshift(mysticPower);
    this.mysticPowers = this.mysticPowers.slice(0, 5);
  }
  getMysticPowerBooked() {
    return this.mysticPowers[0];
  }
  getMysticPower1() {
    return this.mysticPowers[1];
  }
  getMysticPower2() {
    return this.mysticPowers[2];
  }
  getMysticPower3() {
    return this.mysticPowers[3];
  }
  getMysticPowerPopped() {
    return this.mysticPowers[4];
  }
  processActiveMysticPowers() {
    this.processMysticPower(this.getMysticPower3());
    this.processMysticPower(this.getMysticPower2());
    this.processMysticPower(this.getMysticPower1());
  }
  processMysticPower(mysticPower?: MysticPowerType) {
    if (mysticPower) {
      if (mysticPower === 'Wisp') {
        this.preProcessElementLevelUp('wisp');
      }
      if (mysticPower === 'Shade') {
        this.preProcessElementLevelUp('shade');
      }
      if (mysticPower === 'Aura') {
        this.preProcessElementLevelUp('aura');
      }
      if (mysticPower === 'Dryad') {
        this.preProcessElementLevelUp('dryad');
      }
      if (mysticPower === 'Salamander') {
        this.preProcessElementLevelUp('salamander');
      }
      if (mysticPower === 'Gnome') {
        this.preProcessElementLevelUp('gnome');
      }
      if (mysticPower === 'Jinn') {
        this.preProcessElementLevelUp('jinn');
      }
      if (mysticPower === 'Undine') {
        this.preProcessElementLevelUp('undine');
      }
    }
  }

  /**
   * Element Level Up
   */
  essence: Essence = new Essence();
  elementLevelUpPossibilityCount: { [key in ElementType]: number } = {
    wisp: 0,
    shade: 0,
    dryad: 0,
    aura: 0,
    salamander: 0,
    gnome: 0,
    jinn: 0,
    undine: 0,
  };
  preProcessElementLevelUp(elementType: ElementType) {
    switch (elementType) {
      case 'wisp':
      case 'shade':
        this.levelUpElementIfPossible(elementType);
        break;
      case 'aura':
      case 'dryad':
        this.levelUpElementIfPossible(elementType);
        break;
      case 'salamander':
      case 'gnome':
      case 'jinn':
      case 'undine':
        // book sub-material element level-up
        this.elementLevelUpPossibilityCountUp(elementType);
        break;
    }
  }
  elementLevelUpPossibilityCountUp(type?: ElementType) {
    if (type) {
      this.elementLevelUpPossibilityCount[type]++;
    }
  }
  getElementLevelUpPossibilityCount(type: ElementType) {
    return this.elementLevelUpPossibilityCount[type];
  }
  elementLevelUpProcess() {
    // 光と闇は専用フローになる
    const elementTypesOrderedForProcessing: ElementType[] = [
      'dryad',
      'aura',
      'salamander',
      'gnome',
      'jinn',
      'undine',
    ];
    elementTypesOrderedForProcessing.forEach((element) => {
      let count = this.elementLevelUpPossibilityCount[element];
      while (count > 0) {
        this.levelUpElementIfPossible(element);
        count--;
      }
    });
  }
  levelUpElementIfPossible(element: ElementType): boolean {
    const currentLevel = this.essence[element];
    const nextLevelEnergy = this.elementResist.getEnergyForElementLevel(element, currentLevel + 1);
    if (this.energy >= nextLevelEnergy) {
      this.useEnergy(nextLevelEnergy);
      this.essence[element]++;
      return true;
    } else {
      return false;
    }
  }
  elementLevelUpPossibilityReset() {
    this.elementLevelUpPossibilityCount = {
      wisp: 0,
      shade: 0,
      dryad: 0,
      aura: 0,
      salamander: 0,
      gnome: 0,
      jinn: 0,
      undine: 0,
    };
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
