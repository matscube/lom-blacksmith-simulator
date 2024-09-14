import { ElementResist } from '../element-resist';
import { MysticPowerType } from '../mystic-power';
import { WeaponElement } from './weapon-element';

export class WeaponMysticPower {
  constructor() {}

  mysticPowers: MysticPowerType[] = []; // array of 5 items
  push(mysticPower: MysticPowerType) {
    this.mysticPowers.unshift(mysticPower);
    this.mysticPowers = this.mysticPowers.slice(0, 5);
  }
  getBooked() {
    return this.mysticPowers[0];
  }
  getPower1() {
    return this.mysticPowers[1];
  }
  getPower2() {
    return this.mysticPowers[2];
  }
  getPower3() {
    return this.mysticPowers[3];
  }
  getPopped() {
    return this.mysticPowers[4];
  }
  processActiveMysticPowers(weaponElement: WeaponElement, elementResist: ElementResist) {
    this.getPower3() && this.processMysticPower(weaponElement, elementResist, this.getPower3());
    this.getPower2() && this.processMysticPower(weaponElement, elementResist, this.getPower2());
    this.getPower1() && this.processMysticPower(weaponElement, elementResist, this.getPower1());
  }
  processMysticPower(
    weaponElement: WeaponElement,
    elementResist: ElementResist,
    mysticPower: MysticPowerType,
  ) {
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
  }
}
