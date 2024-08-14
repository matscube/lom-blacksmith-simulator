export const MainMaterialCategoryTypes = [
  "Metal",
  "Wood",
  "Stone",
  "Hide",
  "Scales",
  "Bone",
  "Fabric",
  "Aerolite",
  "Miscellaneous",
] as const;
export type MainMaterialCategoryType =
  (typeof MainMaterialCategoryTypes)[number];

export const MainMaterialTypes = [
  // Metal
  "MenosBronze",
  "ForsenaIron",
  "GranzSteel",
  "Mythril Silver",
  "Astoria Silver",
  "VizelGold",
  "IshePlatinum",
  "LorimarIron",
  "AltenaAlloy",
  "MaiaLead",
  "Orihalcon",
  // Wood
  "OakWood",
  "HollyWood",
  "BaobabWood",
  "EbonyWood",
  "Ashe Wood",
  "DiorWood",
  "Mistletoe Wood",
  "FossilWood",
  // Stone
  "Marble",
  "Obsidian",
  "PedanStone",
  "Gaeus'sTears",
  // Hide
  "AnimalHide",
  "GatorSkin",
  "CentaurHide",
  "DragonSkin",
  // Scales
  "FishScales",
  "LizardScales",
  "SnakeScales",
  "DragonScales",
  // Bone
  "AnimalBone",
  "Ivory",
  "CursedBone",
  "Fossil",
  // Fabric
  "ToppleCotton",
  "Sultan'sSilk",
  "JuddHemp",
  "AltenaFelt",
  // Aerolite
  "JacobiniRock",
  "HalleyRock",
  "AnkhRock",
  "VinekRock",
  "TuttleRock",
  "NemesisRock",
  "BiellaRock",
  "SwifteRock",
  // Miscellaneous
  "Adamantite",
  "Fullmetal",
  "Coral",
  "TortoiseShell",
  "Shell",
  "Emerald",
  "Pearl",
  "LapisLazuli",
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
