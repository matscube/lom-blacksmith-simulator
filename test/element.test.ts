import { describe, expect, it } from 'vitest';
import { Weapon } from '../src/core/weapon';

describe(`'Weapon's essence of`, () => {
  it('Wisp can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Wisp Silver');
    expect(w.element.essence.wisp).toEqual(1);
    w.temper('Wisp Silver');
    expect(w.element.essence.wisp).toEqual(3);
    w.temper('Wisp Gold');
    expect(w.element.essence.wisp).toEqual(4);
    // // not enough energy
    w.temper('Wisp Gold');
    expect(w.element.essence.wisp).toEqual(4);
  });

  it('Shade can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Shade Silver');
    expect(w.element.essence.shade).toEqual(1);
    w.temper('Shade Silver');
    expect(w.element.essence.shade).toEqual(3);
    w.temper('Shade Gold');
    expect(w.element.essence.shade).toEqual(4);
    // not enough energy
    w.temper('Shade Gold');
    expect(w.element.essence.shade).toEqual(4);
  });

  it('Aura can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Aura Silver');
    expect(w.element.essence.aura).toEqual(1);
    w.temper('Aura Silver');
    expect(w.element.essence.aura).toEqual(3);
    w.temper('Aura Gold');
    expect(w.element.essence.aura).toEqual(4);
    // not enough energy
    w.temper('Aura Gold');
    expect(w.element.essence.aura).toEqual(4);
  });

  it('Dryad can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Dryad Silver');
    expect(w.element.essence.dryad).toEqual(1);
    w.temper('Dryad Silver');
    expect(w.element.essence.dryad).toEqual(3);
    w.temper('Dryad Gold');
    expect(w.element.essence.dryad).toEqual(4);
    // not enough energy
    w.temper('Dryad Gold');
    expect(w.element.essence.dryad).toEqual(4);
  });

  it('Salamander can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Salamander Silver');
    expect(w.element.essence.salamander).toEqual(1);
    w.temper('Salamander Silver');
    expect(w.element.essence.salamander).toEqual(3);
    w.temper('Salamander Gold');
    expect(w.element.essence.salamander).toEqual(4);
    // not enough energy
    w.temper('Salamander Gold');
    expect(w.element.essence.salamander).toEqual(4);
  });

  it('Gnome can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Gnome Silver');
    expect(w.element.essence.gnome).toEqual(1);
    w.temper('Gnome Silver');
    expect(w.element.essence.gnome).toEqual(3);
    w.temper('Gnome Gold');
    expect(w.element.essence.gnome).toEqual(4);
    // not enough energy
    w.temper('Gnome Gold');
    expect(w.element.essence.gnome).toEqual(4);
  });

  it('Jinn can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Jinn Silver');
    expect(w.element.essence.jinn).toEqual(1);
    w.temper('Jinn Silver');
    expect(w.element.essence.jinn).toEqual(3);
    w.temper('Jinn Gold');
    expect(w.element.essence.jinn).toEqual(4);
    // not enough energy
    w.temper('Jinn Gold');
    expect(w.element.essence.jinn).toEqual(4);
  });

  it('Undine can be changed', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.temper('Undine Silver');
    expect(w.element.essence.undine).toEqual(1);
    w.temper('Undine Silver');
    expect(w.element.essence.undine).toEqual(3);
    w.temper('Undine Gold');
    expect(w.element.essence.undine).toEqual(4);
    // not enough energy
    w.temper('Undine Gold');
    expect(w.element.essence.undine).toEqual(4);
  });
});
