import { SubMaterial } from '..';

export type FeatherType =
  | 'Angel Feather'
  | 'Raven Feather'
  | 'Clear Feather'
  | 'Moth Wing'
  | 'Flaming Quill'
  | 'White Feather';
export const Feathers: SubMaterial[] = [
  {
    categoryType: 'Feathers',
    type: 'Angel Feather',
    name: { en: 'Angel Feather', ja: '天使のはね' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Fallen Angel (Wisp > 4, Shade = 0)
  },
  {
    categoryType: 'Feathers',
    type: 'Raven Feather',
    name: { en: 'Raven Feather', ja: '漆黒のはね' },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Raven
  },
  {
    categoryType: 'Feathers',
    type: 'Clear Feather',
    name: { en: 'Clear Feather', ja: '透明のはね' },
    energy: 24,
    elementType: undefined,
    mysticPowerType: undefined, // Lord of Flies (Jinn > 4, Gnome = 0)
  },
  {
    categoryType: 'Feathers',
    type: 'Moth Wing',
    name: { en: 'Moth Wing', ja: '蝶のはね' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Spirit of Forest
  },
  {
    categoryType: 'Feathers',
    type: 'Flaming Quill',
    name: { en: 'Flaming Quill', ja: '燃えさかるはね' },
    energy: 64,
    elementType: undefined,
    mysticPowerType: undefined, // Phoenix (Salamander, Jinn > 2)
  },
  {
    categoryType: 'Feathers',
    type: 'White Feather',
    name: { en: 'White Feather', ja: '天馬のはね' },
    energy: 32,
    elementType: undefined,
    mysticPowerType: undefined, // Nymph of the Sky (Wisp > 0, total > 2)
  },
];
