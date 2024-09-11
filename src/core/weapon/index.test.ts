import { describe, expect, it } from 'vitest';
import { Weapon } from '.';

describe('Weapon', () => {
  it('can be forged', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    expect(w.getAttack()).toBe(9);
  });

  it('can be tempered with sub materials', () => {
    const w = new Weapon('MenosBronze', 'Knife');

    w.temper("Salamander's Silver");
    w.temper("Salamander's Gold");
    expect(w.history).toEqual(["Salamander's Silver", "Salamander's Gold"]);
  });
});

describe(`'Weapon's essence of`, () => {
  it('Salamander can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    // TODO: implement this
    w.temper("Salamander's Silver");
    expect(w.essence.salamander).toEqual(1);
    w.temper("Salamander's Silver");
    expect(w.essence.salamander).toEqual(3);
    w.temper("Salamander's Gold");
    expect(w.essence.salamander).toEqual(4);
  });
});
