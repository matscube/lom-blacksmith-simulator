import { Essence } from '.';
import { ElementType } from '../element';
import { ElementResist } from '../element-resist';

export class WeaponElement {
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
  elementLevelUpLocked: { [key in ElementType]: boolean } = {
    wisp: false,
    shade: false,
    dryad: false,
    aura: false,
    salamander: false,
    gnome: false,
    jinn: false,
    undine: false,
  };
  cleanUp() {
    this.resetEnergy();
    this.elementLevelUpLockedReset();
    this.elementLevelUpPossibilityReset();
  }

  /**
   * Energy
   */
  energy: number = 0;
  resetEnergy() {
    this.energy = 0;
  }
  poolEnergy(energy: number) {
    // console.log(`poolEnergy: ${energy}`);
    this.energy += energy;
  }
  useEnergy(energy: number) {
    // console.log(`useEnergy: ${energy}`);
    this.energy -= energy;
  }

  constructor() {}
  /**
   * Preprocess and level-up for wisp/shade
   */
  preProcessElementLevelUp(resist: ElementResist, elementType: ElementType) {
    switch (elementType) {
      case 'wisp':
      case 'shade':
        this.levelUpElementIfPossible(resist, elementType);
        break;
      case 'aura':
      case 'dryad':
        this.levelUpElementIfPossible(resist, elementType);
        break;
      case 'salamander':
      case 'gnome':
      case 'jinn':
      case 'undine':
        // book sub-material element level-up
        this.elementLevelUpPossibilityCountUp(resist, elementType);
        break;
    }
  }
  /**
   * Lock
   */
  lockElementLevelUp() {
    if (this.essence.salamander > 0) {
      this.elementLevelUpLocked.gnome = true;
    }
    if (this.essence.gnome > 0) {
      this.elementLevelUpLocked.jinn = true;
    }
    if (this.essence.jinn > 0) {
      this.elementLevelUpLocked.undine = true;
    }
    if (this.essence.undine > 0) {
      this.elementLevelUpLocked.salamander = true;
    }
  }
  elementLevelUpLockedReset() {
    this.elementLevelUpLocked = {
      wisp: false,
      shade: false,
      dryad: false,
      aura: false,
      salamander: false,
      gnome: false,
      jinn: false,
      undine: false,
    };
  }
  /**
   * Possibility count
   *
   * レベルアップ判定の予約をする
   * 強属性レベルアップ判定予約で、弱属性は即座にレベルダウンする
   * レベルダウンによる差分のエネルギーをプールする
   * レベルダウンで0になった場合は即座にロックを解除する
   */
  elementLevelUpPossibilityCountUp(resist: ElementResist, type?: ElementType) {
    if (!type) return;
    if (this.elementLevelUpLocked[type]) return;
    this.elementLevelUpPossibilityCount[type]++;

    switch (type) {
      case 'salamander':
        this.poolEnergy(resist.getEnergyForElementLevel('gnome', this.essence.gnome));
        this.essence.gnome = Math.max(this.essence.gnome - 1, 0);
        if (this.essence.gnome === 0) this.elementLevelUpLocked.jinn = false;
        break;
      case 'gnome':
        this.poolEnergy(resist.getEnergyForElementLevel('jinn', this.essence.jinn));
        this.essence.jinn = Math.max(this.essence.jinn - 1, 0);
        if (this.essence.jinn === 0) this.elementLevelUpLocked.gnome = false;
        break;
      case 'jinn':
        this.poolEnergy(resist.getEnergyForElementLevel('undine', this.essence.undine));
        this.essence.undine = Math.max(this.essence.undine - 1, 0);
        if (this.essence.undine === 0) this.elementLevelUpLocked.jinn = false;
        break;
      case 'undine':
        this.poolEnergy(resist.getEnergyForElementLevel('salamander', this.essence.salamander));
        this.essence.salamander = Math.max(this.essence.salamander - 1, 0);
        if (this.essence.salamander === 0) this.elementLevelUpLocked.gnome = false;
        break;
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
   * Levelup Process
   */
  elementLevelUpProcess(resist: ElementResist) {
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
        this.levelUpElementIfPossible(resist, element);
        count--;
      }
    });
  }
  private levelUpElementIfPossible(resist: ElementResist, element: ElementType): boolean {
    const currentLevel = this.essence[element];
    const nextLevelEnergy = resist.getEnergyForElementLevel(element, currentLevel + 1);
    if (this.energy >= nextLevelEnergy) {
      this.useEnergy(nextLevelEnergy);
      this.essence[element]++;
      return true;
    } else {
      return false;
    }
  }
}
