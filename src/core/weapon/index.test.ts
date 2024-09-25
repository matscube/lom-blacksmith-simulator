import { describe, expect, it } from 'vitest';
import { Weapon } from '.';

describe('Weapon', () => {
  it('can be forged', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    expect(w.getAttack()).toBe(9);
  });

  it('can be tempered with sub materials', () => {
    const w = new Weapon('MenosBronze', 'Knife');

    w.temper('Salamander Silver');
    w.temper('Salamander Gold');
    expect(w.history).toEqual(['Salamander Silver', 'Salamander Gold']);
  });
});
