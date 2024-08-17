import console from 'console';
import { MainMaterialType } from '../main-material';

export * from './config';
export * from './type';

export class Weapon {
  essence: Essence = new Essence();
  constructor(
    private readonly mainMaterial: MainMaterialType,
    private readonly weaponType: string,
  ) {
    console.log('Weapon created');
  }

  debug() {
    console.log('Weapon debug start ----------------');
    console.log({ mainMaterial: this.mainMaterial, weaponType: this.weaponType });
    console.log('----------------');
  }
}

export type EssenceType =
  | 'Wisp'
  | 'Shade'
  | 'Dryad'
  | 'Aura'
  | 'Salamander'
  | 'Gnome'
  | 'Jinn'
  | 'Undine';
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
