import console from 'console';
import { ElementType } from '../element';
import { calcAttack, MainMaterialType } from '../main-material';
import { MysticPowerType } from '../mystic-power';
import { ElementResist, getElementResist, getEnergyForElementLevel } from '../resist';
import { SubMaterialsMap } from '../sub-material/config';
import { SubMaterialType } from '../sub-material/type';
import { WeaponType } from './type';

export * from './config';
export * from './type';

export class Weapon {
  constructor(
    private readonly mainMaterial: MainMaterialType,
    private readonly weaponType: WeaponType,
  ) {
    console.log('Weapon created');
  }

  getAttack(): number {
    return calcAttack({ mainMaterialType: this.mainMaterial, weaponType: this.weaponType });
  }

  temper(type: SubMaterialType) {
    this.history.push(type);

    const subMaterial = SubMaterialsMap.find((m) => m.type === type);
    if (!subMaterial) throw new Error('SubMaterial not found');

    // pool sub material energy
    this.setSubMaterialEnergy(subMaterial.energy);

    // push mystic power
    this.pushMysticPower(subMaterial.mysticPowerType);

    // book sub-material element level-up
    this.elementLevelUpPossibilityCountUp(subMaterial.elementType);

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
  pushMysticPower(mysticPower?: MysticPowerType) {
    if (mysticPower) {
      this.mysticPowers.unshift(mysticPower);
      this.mysticPowers = this.mysticPowers.slice(0, 5);
    }
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
      if (mysticPower === 'Salamander') {
        this.elementLevelUpPossibilityCountUp('salamander');
      }
      if (mysticPower === 'Gnome') {
        this.elementLevelUpPossibilityCountUp('gnome');
      }
    }
  }

  /**
   * Element Level Up
   */
  // TODO: change by main material
  resist: ElementResist = getElementResist('MenosBronze');
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
        const currentLevel = this.essence[element];
        const nextLevelEnergy = getEnergyForElementLevel(this.resist[element], currentLevel + 1);
        if (this.energy >= nextLevelEnergy) {
          this.useEnergy(nextLevelEnergy);
          this.essence[element]++;
        }
        count--;
      }
    });
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
