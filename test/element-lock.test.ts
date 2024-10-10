import { describe, expect, it } from 'vitest';
import { Weapon } from '../src/core/weapon/index';

/**
 * 下段属性ロックとカオス強化
 *
 * 火 > 土 > 風 > 水 > 火
 */
describe('下段属性のロック', () => {
  it('火が1以上あると土はあがらない', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Fire Stone');
    expect(w.elementResist.getEnergyForElementLevel('salamander', 1)).toEqual(8);
    expect(w.mysticPower.getBooked()).toEqual('Salamander');
    expect(w.element.essence.salamander).toEqual(1);
    w.temper('Earth Stone');
    expect(w.elementResist.getEnergyForElementLevel('salamander', 2)).toEqual(16);
    expect(w.mysticPower.getBooked()).toEqual('Gnome');
    expect(w.mysticPower.getPower1()).toEqual('Salamander');
    expect(w.element.essence.salamander).toEqual(2);
    expect(w.element.essence.gnome).toEqual(0);
    w.temper('Earth Stone');
    expect(w.elementResist.getEnergyForElementLevel('salamander', 3)).toEqual(32);
    expect(w.mysticPower.getBooked()).toEqual('Gnome');
    expect(w.mysticPower.getPower1()).toEqual('Gnome');
    expect(w.mysticPower.getPower2()).toEqual('Salamander');
    expect(w.element.essence.salamander).toEqual(2);
    expect(w.element.essence.gnome).toEqual(0);
  });

  it('土が1以上あると風はあがらない', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Earth Stone');
    expect(w.elementResist.getEnergyForElementLevel('gnome', 1)).toEqual(8);
    expect(w.mysticPower.getBooked()).toEqual('Gnome');
    expect(w.element.essence.gnome).toEqual(1);
    w.temper('Wind Stone');
    expect(w.elementResist.getEnergyForElementLevel('gnome', 2)).toEqual(16);
    expect(w.mysticPower.getBooked()).toEqual('Jinn');
    expect(w.mysticPower.getPower1()).toEqual('Gnome');
    expect(w.element.essence.gnome).toEqual(2);
    expect(w.element.essence.jinn).toEqual(0);
    w.temper('Wind Stone');
    expect(w.elementResist.getEnergyForElementLevel('gnome', 3)).toEqual(32);
    expect(w.mysticPower.getBooked()).toEqual('Jinn');
    expect(w.mysticPower.getPower1()).toEqual('Jinn');
    expect(w.mysticPower.getPower2()).toEqual('Gnome');
    expect(w.element.essence.gnome).toEqual(2);
    expect(w.element.essence.jinn).toEqual(0);
  });

  it('風が1以上あると水はあがらない', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Wind Stone');
    expect(w.elementResist.getEnergyForElementLevel('jinn', 1)).toEqual(8);
    expect(w.mysticPower.getBooked()).toEqual('Jinn');
    expect(w.element.essence.jinn).toEqual(1);
    w.temper('Water Stone');
    expect(w.elementResist.getEnergyForElementLevel('jinn', 2)).toEqual(16);
    expect(w.mysticPower.getBooked()).toEqual('Undine');
    expect(w.mysticPower.getPower1()).toEqual('Jinn');
    expect(w.element.essence.jinn).toEqual(2);
    expect(w.element.essence.undine).toEqual(0);
    w.temper('Water Stone');
    expect(w.elementResist.getEnergyForElementLevel('jinn', 3)).toEqual(32);
    expect(w.mysticPower.getBooked()).toEqual('Undine');
    expect(w.mysticPower.getPower1()).toEqual('Undine');
    expect(w.mysticPower.getPower2()).toEqual('Jinn');
    expect(w.element.essence.jinn).toEqual(2);
    expect(w.element.essence.undine).toEqual(0);
  });

  it('水が1以上あると火はあがらない', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Water Stone');
    expect(w.elementResist.getEnergyForElementLevel('undine', 1)).toEqual(8);
    expect(w.mysticPower.getBooked()).toEqual('Undine');
    expect(w.element.essence.undine).toEqual(1);
    w.temper('Fire Stone');
    expect(w.elementResist.getEnergyForElementLevel('undine', 2)).toEqual(16);
    expect(w.mysticPower.getBooked()).toEqual('Salamander');
    expect(w.mysticPower.getPower1()).toEqual('Undine');
    expect(w.element.essence.undine).toEqual(2);
    expect(w.element.essence.salamander).toEqual(0);
    w.temper('Fire Stone');
    expect(w.elementResist.getEnergyForElementLevel('undine', 3)).toEqual(32);
    expect(w.mysticPower.getBooked()).toEqual('Salamander');
    expect(w.mysticPower.getPower1()).toEqual('Salamander');
    expect(w.mysticPower.getPower2()).toEqual('Undine');
    expect(w.element.essence.undine).toEqual(2);
    expect(w.element.essence.salamander).toEqual(0);
  });

  it('水のLevelUp予約される度に火が1下がる', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Fire Stone');
    w.temper('Wisp Silver');
    w.temper('Wisp Silver');
    w.temper('Wisp Silver');
    expect(w.element.essence.salamander).toEqual(3);
    expect(w.element.essence.wisp).toEqual(3);
    w.temper('Water Stone');
    expect(w.element.essence.salamander).toEqual(2);
    expect(w.element.essence.undine).toEqual(1);
    w.temper('Water Stone');
    expect(w.element.essence.salamander).toEqual(0);
    expect(w.element.essence.undine).toEqual(3);
  });

  it('火が0に戻ると土のロックが解除される', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Fire Stone');
    expect(w.element.essence.salamander).toEqual(1);
    expect(w.element.essence.gnome).toEqual(0);
    w.temper('Wisp Silver');
    w.temper('Wisp Silver');
    w.temper('Wisp Silver');
    w.temper('Water Stone');
    w.temper('Water Stone');
    w.temper('Earth Stone');
    expect(w.element.essence.salamander).toEqual(0);
    expect(w.element.essence.gnome).toEqual(1);
  });

  it('強属性の予約により0になった瞬間にロックが解除される', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Fire Stone');
    w.temper('Wisp Silver');
    w.temper('Wisp Silver');
    w.temper('Earth Stone');
    w.temper('Water Stone');
    expect(w.element.essence.salamander).toEqual(1);
    expect(w.element.essence.gnome).toEqual(0);
    expect(w.element.essence.undine).toEqual(1);
    expect(w.mysticPower.getBooked()).toEqual('Undine');
    expect(w.mysticPower.getPower1()).toEqual('Gnome');
    expect(w.mysticPower.getPower2()).toEqual('Wisp');
    expect(w.mysticPower.getPower3()).toEqual('Wisp');

    w.temper('Water Stone');
    expect(w.element.elementLevelUpPossibilityCount.salamander).toEqual(0);
    expect(w.element.elementLevelUpPossibilityCount.gnome).toEqual(1);
    expect(w.element.elementLevelUpPossibilityCount.undine).toEqual(2);
    expect(w.element.essence.salamander).toEqual(0);
    expect(w.element.essence.gnome).toEqual(1);
    expect(w.element.essence.undine).toEqual(2);
  });
});

/**
 * 上段属性ロックとカオス強化
 * 光 > 闇
 * 木 > 金
 */
describe('上段属性のロック', () => {
  it('光が1以上あると闇はあがらない', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Wisp Silver');
    expect(w.mysticPower.getBooked()).toEqual('Wisp');
    expect(w.element.essence.wisp).toEqual(1);
    w.temper('Shade Silver');
    expect(w.mysticPower.getBooked()).toEqual('Shade');
    expect(w.mysticPower.getPower1()).toEqual('Wisp');
    expect(w.element.essence.wisp).toEqual(2);
    expect(w.element.essence.shade).toEqual(0);
  });
  it('光が0なら闇をあげられる', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    expect(w.element.essence.wisp).toEqual(0);
    w.temper('Shade Silver');
    expect(w.element.essence.wisp).toEqual(0);
    expect(w.element.essence.shade).toEqual(1);
  });
  it('光 <= 闇なら闇をあげられる', () => {
    // 実機検証済み
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Shade Silver');
    expect(w.element.essence.wisp).toEqual(0);
    expect(w.element.essence.shade).toEqual(1);
    w.temper('Wisp Silver');
    expect(w.mysticPower.getBooked()).toEqual('Wisp');
    expect(w.mysticPower.getPower1()).toEqual('Shade');
    expect(w.element.essence.wisp).toEqual(1);
    expect(w.element.essence.shade).toEqual(1);
    w.temper('Shade Silver');
    expect(w.mysticPower.getBooked()).toEqual('Shade');
    expect(w.mysticPower.getPower1()).toEqual('Wisp');
    expect(w.mysticPower.getPower2()).toEqual('Shade');
    expect(w.element.essence.wisp).toEqual(2);
    expect(w.element.essence.shade).toEqual(0);
  });
  it('光 > 闇のときに光の属性上昇判定処理をすると闇は0になる', () => {});
});
