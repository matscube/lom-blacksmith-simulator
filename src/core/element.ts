export const AllElementTypes = [
  'wisp',
  'shade',
  'dryad',
  'aura',
  'salamander',
  'gnome',
  'jinn',
  'undine',
] as const;
export type ElementType = (typeof AllElementTypes)[number];
