export * from './config';
export * from './type';
import { WeaponPerformanceStandardValueMap, WeaponType } from '../weapon';
import { MainMaterialsMap } from './config';
import { MainMaterialType } from './type';

export function getBaseAttackPower(props: {
  mainMaterialType: MainMaterialType;
  weaponType: WeaponType;
}): number {
  // Math.floor( (A*a + B*b + C*c + D*d) / 128 )
  const weaponValue = WeaponPerformanceStandardValueMap[props.weaponType];
  const materialValue = MainMaterialsMap.find(
    (m) => m.type === props.mainMaterialType,
  )?.standardValue;
  if (!materialValue) throw new Error('Material not found');
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
  const suppressionValue = MainMaterialsMap.find(
    (m) => m.type === props.mainMaterialType,
  )?.suppressionValue;
  if (!suppressionValue) throw new Error('Material not found');
  return Math.floor((baseValue * (suppressionValue + props.totalElement)) / suppressionValue);
}
