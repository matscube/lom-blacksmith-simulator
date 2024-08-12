import { MultiLanguageText } from "./language";

export type ArmorType =
  | "Shield"
  | "Helm"
  | "Hat"
  | "Hauberk"
  | "Robe"
  | "Gauntlet"
  | "Ring"
  | "Boots"
  | "Shoes"
  | "Armor"
  | "Mantle"
  | "Pendant";

export type ArmorPerformanceStandardValue = {
  strike: number; // E
  slash: number; // F
  thrust: number; // G
  magic: number; // H
};

export class Armor {
  type: ArmorType;
  name: MultiLanguageText;
  performanceStandarValue: ArmorPerformanceStandardValue;
  constructor(props: { type: ArmorType; name: MultiLanguageText }) {
    this.type = props.type;
    this.name = props.name;
    this.performanceStandarValue = {
      strike: armorPerformanceStandardValues[props.type][0],
      slash: armorPerformanceStandardValues[props.type][1],
      thrust: armorPerformanceStandardValues[props.type][2],
      magic: armorPerformanceStandardValues[props.type][3],
    };
  }
}

const armorPerformanceStandardValues: {
  [key in ArmorType]: [number, number, number, number];
} = {
  Shield: [8, 8, 8, 4],
  Helm: [8, 7, 6, 2],
  Hat: [4, 2, 2, 4],
  Hauberk: [12, 16, 16, 2],
  Robe: [6, 6, 6, 8],
  Gauntlet: [7, 6, 8, 2],
  Ring: [1, 1, 1, 16],
  Boots: [6, 8, 7, 2],
  Shoes: [2, 4, 2, 4],
  Armor: [26, 26, 26, 4],
  Mantle: [4, 4, 4, 12],
  Pendant: [0, 0, 0, 24],
};
