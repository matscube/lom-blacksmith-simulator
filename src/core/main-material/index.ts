export * from './config';
import { WeaponPerformanceStandardValueMap, WeaponType } from '../weapon';
import { AllMainMaterials, MainMaterial } from './config';

export const MainMaterialCategoryTypes = [
  'Metal',
  'Wood',
  'Stone',
  'Hide',
  'Scales',
  'Bone',
  'Fabric',
  'Aerolite',
  'Miscellaneous',
] as const;
export type MainMaterialCategoryType = (typeof MainMaterialCategoryTypes)[number];

export const MainMaterialTypes = [
  // Metal
  'MenosBronze',
  'ForsenaIron',
  'GranzSteel',
  'Mythril Silver',
  'Astoria Silver',
  'VizelGold',
  'IshePlatinum',
  'LorimarIron',
  'AltenaAlloy',
  'MaiaLead',
  'Orihalcon',
  // Wood
  'OakWood',
  'HollyWood',
  'BaobabWood',
  'EbonyWood',
  'Ashe Wood',
  'DiorWood',
  'Mistletoe Wood',
  'FossilWood',
  // Stone
  'Marble',
  'Obsidian',
  'PedanStone',
  "Gaeus'sTears",
  // Hide
  'AnimalHide',
  'GatorSkin',
  'CentaurHide',
  'DragonSkin',
  // Scales
  'FishScales',
  'LizardScales',
  'SnakeScales',
  'DragonScales',
  // Bone
  'AnimalBone',
  'Ivory',
  'CursedBone',
  'Fossil',
  // Fabric
  'ToppleCotton',
  "Sultan'sSilk",
  'JuddHemp',
  'AltenaFelt',
  // Aerolite
  'JacobiniRock',
  'HalleyRock',
  'AnkhRock',
  'VinekRock',
  'TuttleRock',
  'NemesisRock',
  'BiellaRock',
  'SwifteRock',
  // Miscellaneous
  'Adamantite',
  'Fullmetal',
  'Coral',
  'TortoiseShell',
  'Shell',
  'Emerald',
  'Pearl',
  'LapisLazuli',
] as const;

export type MainMaterialType = (typeof MainMaterialTypes)[number];

export type MainMaterialPerformanceStandardValue = {
  // attack
  sharp: number; // a
  heavy: number; // b
  force: number; // c
  tech: number; // d
  // defense
  strike: number; // e
  slash: number; // f
  thrust: number; // g
  magic: number; // h
};

export function getMainMaterialByType(type: MainMaterialType): MainMaterial {
  const material = AllMainMaterials.find((m) => m.type === type);
  if (!material) throw new Error('MainMaterial not found');
  return material;
}

export function getBaseAttackPower(props: {
  mainMaterialType: MainMaterialType;
  weaponType: WeaponType;
}): number {
  // Math.floor( (A*a + B*b + C*c + D*d) / 128 )
  const weaponValue = WeaponPerformanceStandardValueMap[props.weaponType];
  const materialValue = getMainMaterialByType(props.mainMaterialType).standardValue;
  return Math.floor(
    (weaponValue.sharp * materialValue.sharp +
      weaponValue.heavy * materialValue.heavy +
      weaponValue.force * materialValue.force +
      weaponValue.tech * materialValue.tech) /
      128,
  );
}

export function getAttackPower(props: {
  mainMaterialType: MainMaterialType;
  weaponType: WeaponType;
  totalElement: number;
}): number {
  const baseValue = getBaseAttackPower({
    mainMaterialType: props.mainMaterialType,
    weaponType: props.weaponType,
  });
  const suppressionValue = getMainMaterialByType(props.mainMaterialType).suppressionValue;
  if (!suppressionValue) throw new Error('Material not found');
  return Math.floor((baseValue * (suppressionValue + props.totalElement)) / suppressionValue);
}
