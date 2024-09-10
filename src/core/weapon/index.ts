import console from 'console';
import { calcAttack, MainMaterialType } from '../main-material';
import { ElementResist, getElementResist, getEnergyForElementLevel } from '../resist';
import { SubMaterialsMap } from '../sub-material/config';
import { SubMaterialType } from '../sub-material/type';
import { WeaponType } from './type';

export * from './config';
export * from './type';

export class Weapon {
  essence: Essence = new Essence();
  // TODO: change by main material
  resist: ElementResist = getElementResist('MenosBronze');
  constructor(
    private readonly mainMaterial: MainMaterialType,
    private readonly weaponType: WeaponType,
  ) {
    console.log('Weapon created');
  }

  getAttack(): number {
    return calcAttack({ mainMaterialType: this.mainMaterial, weaponType: this.weaponType });
  }

  history: SubMaterialType[] = [];
  temper(type: SubMaterialType) {
    this.history.push(type);
    console.log('Weapon tempered');

    const subMaterial = SubMaterialsMap.find((m) => m.type === type);
    if (!subMaterial) throw new Error('SubMaterial not found');
    let energy = subMaterial.energy || 0;
    let element = subMaterial.elementType || 'salamander';
    let currentLevel = this.essence[element];
    let nextLevelEnergy = getEnergyForElementLevel(this.resist[element], currentLevel + 1);
    if (energy >= nextLevelEnergy) {
      energy -= nextLevelEnergy;
      this.essence[element]++;
    }
  }

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
