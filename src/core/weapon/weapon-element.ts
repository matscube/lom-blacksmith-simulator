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
  cleanUp() {
    this.resetEnergy();
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
        this.elementLevelUpPossibilityCountUp(elementType);
        break;
    }
  }
  /**
   * Possibility count
   */
  elementLevelUpPossibilityCountUp(type?: ElementType) {
    if (type) {
      this.elementLevelUpPossibilityCount[type]++;
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
