import { ElementResist } from '../element-resist';
import { MysticPowerType } from '../mystic-power';
import { WeaponElement } from './weapon-element';

export class WeaponMysticPower {
  constructor() {}
  cleanUp() {
    // nothing
  }

  mysticPowers: (MysticPowerType | undefined)[] = []; // array of 5 items
  push(mysticPower: MysticPowerType) {
    this.mysticPowers.unshift(mysticPower);
    this.mysticPowers = this.mysticPowers.slice(0, 5);
  }
  // Booked
  getBooked() {
    return this.mysticPowers[0];
  }
  // Power1
  getPower1() {
    return this.mysticPowers[1];
  }
  // Power2
  getPower2() {
    return this.mysticPowers[2];
  }
  removePower2() {
    this.mysticPowers[2] = undefined;
  }
  // Power3
  getPower3() {
    return this.mysticPowers[3];
  }
  removePower3() {
    this.mysticPowers[3] = undefined;
  }
  // Popped
  getPopped() {
    return this.mysticPowers[4];
  }
  setPopped(mysticPower: MysticPowerType) {
    this.mysticPowers[4] = mysticPower;
  }
  removePopped() {
    this.mysticPowers[4] = undefined;
  }
  /**
   * TODO: debug用に破棄欄を追加する（暁の娘の処理把握のために）
   * temper処理の最後に欄外と破棄欄をクリア処理する
   */
  processActiveMysticPowers(weaponElement: WeaponElement, elementResist: ElementResist) {
    this.getPower3() && this.processMysticPower(weaponElement, elementResist, this.getPower3());
    this.getPower2() && this.processMysticPower(weaponElement, elementResist, this.getPower2());
    this.getPower1() && this.processMysticPower(weaponElement, elementResist, this.getPower1());
  }
  processMysticPower(
    weaponElement: WeaponElement,
    elementResist: ElementResist,
    mysticPower?: MysticPowerType,
  ) {
    if (!mysticPower) return;

    // Element
    if (mysticPower === 'Wisp') {
      weaponElement.preProcessElementLevelUp(elementResist, 'wisp');
    }
    if (mysticPower === 'Shade') {
      weaponElement.preProcessElementLevelUp(elementResist, 'shade');
    }
    if (mysticPower === 'Aura') {
      weaponElement.preProcessElementLevelUp(elementResist, 'aura');
    }
    if (mysticPower === 'Dryad') {
      weaponElement.preProcessElementLevelUp(elementResist, 'dryad');
    }
    if (mysticPower === 'Salamander') {
      weaponElement.preProcessElementLevelUp(elementResist, 'salamander');
    }
    if (mysticPower === 'Gnome') {
      weaponElement.preProcessElementLevelUp(elementResist, 'gnome');
    }
    if (mysticPower === 'Jinn') {
      weaponElement.preProcessElementLevelUp(elementResist, 'jinn');
    }
    if (mysticPower === 'Undine') {
      weaponElement.preProcessElementLevelUp(elementResist, 'undine');
    }
    // Element Resist
    if (mysticPower === 'Sorcerer') {
      elementResist.setMysticPowerSorcererBonus();
    }
    if (mysticPower === 'Witch') {
      elementResist.setMysticPowerWitchBonus();
    }
  }
}
