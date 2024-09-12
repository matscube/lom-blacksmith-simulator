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
  it('Wisp can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper("Wisp's Silver");
    expect(w.essence.wisp).toEqual(1);
    w.temper("Wisp's Silver");
    expect(w.essence.wisp).toEqual(3);
    w.temper("Wisp's Gold");
    expect(w.essence.wisp).toEqual(4);
    // // not enough energy
    w.temper("Wisp's Gold");
    expect(w.essence.wisp).toEqual(4);
  });

  it('Shade can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper("Shade's Silver");
    expect(w.essence.shade).toEqual(1);
    w.temper("Shade's Silver");
    expect(w.essence.shade).toEqual(3);
    w.temper("Shade's Gold");
    expect(w.essence.shade).toEqual(4);
    // not enough energy
    w.temper("Shade's Gold");
    expect(w.essence.shade).toEqual(4);
  });

  it('Aura can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper("Aura's Silver");
    expect(w.essence.aura).toEqual(1);
    w.temper("Aura's Silver");
    expect(w.essence.aura).toEqual(3);
    w.temper("Aura's Gold");
    expect(w.essence.aura).toEqual(4);
    // not enough energy
    w.temper("Aura's Gold");
    expect(w.essence.aura).toEqual(4);
  });

  it('Dryad can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper("Dryad's Silver");
    expect(w.essence.dryad).toEqual(1);
    w.temper("Dryad's Silver");
    expect(w.essence.dryad).toEqual(3);
    w.temper("Dryad's Gold");
    expect(w.essence.dryad).toEqual(4);
    // not enough energy
    w.temper("Dryad's Gold");
    expect(w.essence.dryad).toEqual(4);
  });

  it('Salamander can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper("Salamander's Silver");
    expect(w.essence.salamander).toEqual(1);
    w.temper("Salamander's Silver");
    expect(w.essence.salamander).toEqual(3);
    w.temper("Salamander's Gold");
    expect(w.essence.salamander).toEqual(4);
    // not enough energy
    w.temper("Salamander's Gold");
    expect(w.essence.salamander).toEqual(4);
  });

  it('Gnome can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper("Gnome's Silver");
    expect(w.essence.gnome).toEqual(1);
    w.temper("Gnome's Silver");
    expect(w.essence.gnome).toEqual(3);
    w.temper("Gnome's Gold");
    expect(w.essence.gnome).toEqual(4);
    // not enough energy
    w.temper("Gnome's Gold");
    expect(w.essence.gnome).toEqual(4);
  });

  it('Jinn can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper("Jinn's Silver");
    expect(w.essence.jinn).toEqual(1);
    w.temper("Jinn's Silver");
    expect(w.essence.jinn).toEqual(3);
    w.temper("Jinn's Gold");
    expect(w.essence.jinn).toEqual(4);
    // not enough energy
    w.temper("Jinn's Gold");
    expect(w.essence.jinn).toEqual(4);
  });

  it('Undine can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper("Undine's Silver");
    expect(w.essence.undine).toEqual(1);
    w.temper("Undine's Silver");
    expect(w.essence.undine).toEqual(3);
    w.temper("Undine's Gold");
    expect(w.essence.undine).toEqual(4);
    // not enough energy
    w.temper("Undine's Gold");
    expect(w.essence.undine).toEqual(4);
  });
});
