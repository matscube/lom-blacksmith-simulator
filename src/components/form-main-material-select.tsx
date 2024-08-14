import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { calcAttack } from "@/core/main-material";
import { MainMaterialType, MainMaterialTypes } from "@/core/main-material/type";
import { WeaponType, WeaponTypes } from "@/core/weapon";
import clsx from "clsx";
import { useState } from "react";

export function FormMainMaterialSelect() {
  const mainMaterials = MainMaterialTypes;
  const weaponTypes = WeaponTypes;
  const [materialType, setMaterialType] = useState<
    MainMaterialType | undefined
  >(undefined);
  const [weaponType, setWeaponType] = useState<WeaponType | undefined>(
    undefined
  );
  const attackValue =
    materialType !== undefined && weaponType !== undefined
      ? calcAttack({ mainMaterialType: materialType, weaponType: weaponType })
      : 0;
  return (
    <div
      className={clsx("w-full px-2 py-4 flex flex-wrap justify-start gap-x-4")}
    >
      <div className="w-full flex flex-col gap-y-2">
        <span className="text-lg">Attack: {attackValue}</span>
      </div>
      {/* MainMaterial */}
      <Select
        value={materialType}
        onValueChange={(value: MainMaterialType) => setMaterialType(value)}
      >
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a Main Material" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {mainMaterials.map((material) => (
              <SelectItem value={material}>{material}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        value={weaponType}
        onValueChange={(value: WeaponType) => setWeaponType(value)}
      >
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a Weapon Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {weaponTypes.map((weaponType) => (
              <SelectItem value={weaponType}>{weaponType}</SelectItem>
            ))}
          </SelectGroup>
          {/* TODO: grouping by mateiral type */}
          {/* <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup> */}
        </SelectContent>
      </Select>
    </div>
  );
}
