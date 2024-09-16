import { describe, expect, it } from 'vitest';
import { Weapon } from '../src/core/weapon/index';

describe('Weapon', () => {
  // TODO: 暁の娘が2枚除外される場合
  /**
   * 実機検証済みフロー
   */
  it('暁の娘がSP1から外れる場合はエネルギーが発生しない', () => {
    const w = new Weapon('DiorWood', 'Knife');
    expect(w.getAttack()).toBe(35);

    // w.temper('Little Eye');
    // expect(w.getAttack()).toBe(38);
    // expect(w.element.essence.dryad).toEqual(1);

    // w.temper('Little Eye');
    // expect(w.getAttack()).toBe(42);
    // expect(w.element.essence.dryad).toEqual(2);
    // expect(w.mysticPower.getPower1()).toEqual('Pixie (red hat)');

    // w.temper('Glow Crystal');
    // expect(w.getAttack()).toBe(45);
    // expect(w.element.essence.dryad).toEqual(3);
    // expect(w.mysticPower.getPower1()).toEqual('Pixie (red hat)');
    // expect(w.mysticPower.getPower2()).toEqual('Pixie (red hat)');

    // w.temper('Glow Crystal');
    // expect(w.getAttack()).toBe(49);
    // expect(w.element.essence.dryad).toEqual(4);
    // expect(w.mysticPower.getPower1()).toEqual('Nymph of Dawn');
    // expect(w.mysticPower.getPower2()).toEqual('Pixie (red hat)');
    // expect(w.mysticPower.getPower3()).toEqual('Pixie (red hat)');

    // w.temper('Glow Crystal');
    // expect(w.getAttack()).toBe(52);
    // expect(w.element.essence.dryad).toEqual(5);
    // expect(w.mysticPower.getPower1()).toEqual('Nymph of Dawn');
    // expect(w.mysticPower.getPower2()).toEqual('Pixie (red hat)');
    // expect(w.mysticPower.getPower3()).toEqual('Pixie (red hat)');

    // // これ以降は常に同じ状態がキープされる
    // w.temper('Glow Crystal');
    // expect(w.getAttack()).toBe(52);
    // // SP1から破棄された暁の娘はエネルギーを発生しないので、木を6にあげることができない
    // expect(w.element.essence.dryad).toEqual(5);
    // expect(w.mysticPower.getPower1()).toEqual('Nymph of Dawn');
    // expect(w.mysticPower.getPower2()).toEqual('Pixie (red hat)');
    // expect(w.mysticPower.getPower3()).toEqual('Pixie (red hat)');

    // w.temper('Glow Crystal');
    // expect(w.getAttack()).toBe(52);
    // expect(w.element.essence.dryad).toEqual(5);
    // expect(w.mysticPower.getPower1()).toEqual('Nymph of Dawn');
    // expect(w.mysticPower.getPower2()).toEqual('Pixie (red hat)');
    // expect(w.mysticPower.getPower3()).toEqual('Pixie (red hat)');
  });
});
