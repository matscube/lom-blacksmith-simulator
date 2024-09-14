export * from './config';
export * from './type';
import { WeaponPerformanceStandardValueMap, WeaponType } from '../weapon';
import { AllMainMaterials, MainMaterial } from './config';
import { MainMaterialType } from './type';

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
