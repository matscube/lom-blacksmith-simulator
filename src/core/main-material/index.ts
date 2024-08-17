export * from './config';
export * from './type';
import { WeaponPerformanceStandardValueMap, WeaponType } from '../weapon';
import { MainMaterialsMap } from './config';
import { MainMaterialType } from './type';

export function calcAttack(props: {
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
