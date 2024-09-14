import { SubMaterial } from '..';

export type FangOrClawType =
  | 'Sharp Claw'
  | 'Poison Fang'
  | `Giant's Horn`
  | 'Pincer'
  | 'Healing Claw'
  | 'Zombie Claw'
  | 'Vampire Fang';
export const FangsAndClaws: SubMaterial[] = [
  {
    categoryType: 'Fangs & Claws',
    type: `Sharp Claw`,
    name: { en: 'Sharp Claw', ja: '鋭い爪' },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // God of Destruction (Salamnder > 4, Undine = 0)
  },
  {
    categoryType: 'Fangs & Claws',
    type: `Poison Fang`,
    name: { en: 'Poison Fang', ja: '毒の牙' },
    energy: 8,
    elementType: undefined,
    mysticPowerType: undefined, // Beast-headed God (Dryad > 4, Aura = 0)
  },
  {
    categoryType: 'Fangs & Claws',
    type: `Giant's Horn`,
    name: { en: `Giant's Horn`, ja: '巨獣の角' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Leviathan (Gnome > 4, Salamandr = 0)
  },
  {
    categoryType: 'Fangs & Claws',
    type: `Pincer`, // LOM OriginalだとScissors
    name: { en: 'Pincer', ja: 'ハサミ' },
    energy: 16,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Fangs & Claws',
    type: `Healing Claw`,
    name: { en: 'Healing Claw', ja: 'いやしの爪' },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Tower (Wisp > 0, Salamnder=0)
  },
  {
    categoryType: 'Fangs & Claws',
    type: `Zombie Claw`,
    name: { en: 'Zombie Claw', ja: '死者の爪' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // N/A
  },
  {
    categoryType: 'Fangs & Claws',
    type: `Vampire Fang`,
    name: { en: 'Vampire Fang', ja: '吸血牙' },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Witch of the Moon (Undine > 4, Jinn = 0)
  },
];
