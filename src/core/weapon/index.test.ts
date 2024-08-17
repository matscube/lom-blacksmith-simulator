import { describe, it } from 'vitest';
import { Weapon } from '.';

describe('Weapon', () => {
  it('can be instantiated', () => {
    const w = new Weapon('MenosBronze', 'Knife');
    w.debug();
    w.essence.debug();
  });
});
