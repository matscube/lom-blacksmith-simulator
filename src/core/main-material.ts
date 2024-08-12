import { MultiLanguageText } from "./language";

// TODO: check on game
type MainMaterialType =
  // Metal
  | "MenosBronze"
  | "ForsenaIron"
  | "GranzSteel"
  | "Mythril Silver"
  | "Astoria Silver"
  | "VizelGold"
  | "IshePlatinum"
  | "LorimarIron"
  | "AltenaAlloy"
  | "MaiaLead"
  | "Orihalcon"
  // Wood
  | "OakWood"
  | "HollyWood"
  | "BaobabWood"
  | "EbonyWood"
  | "Ashe Wood"
  | "DiorWood"
  | "Mistletoe Wood"
  | "FossilWood"
  // Stone
  | "Marble"
  | "Obsidian"
  | "PedanStone"
  | "Gaeus'sTears"
  // Hide
  | "AnimalHide"
  | "GatorSkin"
  | "CentaurHide"
  | "DragonSkin"
  // Scales
  | "FishScales"
  | "LizardScales"
  | "SnakeScales"
  | "DragonScales"
  // Bone
  | "AnimalBone"
  | "Ivory"
  | "CursedBone"
  | "Fossil"
  // Fabric
  | "ToppleCotton"
  | "Sultan'sSilk"
  | "JuddHemp"
  | "AltenaFelt"
  // Aerolite
  | "JacobiniRock"
  | "HalleyRock"
  | "AnkhRock"
  | "VinekRock"
  | "TuttleRock"
  | "NemesisRock"
  | "BiellaRock"
  | "SwifteRock"
  // Miscellaneous
  | "Adamantite"
  | "Fullmetal"
  | "Coral"
  | "TortoiseShell"
  | "Shell"
  | "Emerald"
  | "Pearl"
  | "LapisLazuli";

export type MainMaterial = {
  type: MainMaterialType;
  name: MultiLanguageText;
};
