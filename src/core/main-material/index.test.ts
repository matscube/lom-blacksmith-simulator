import { describe, expect, it } from 'vitest';
import { getBaseAttackPower } from '.';

describe('getBaseAttackPower', () => {
  it('for all weapons with MenosBronze', () => {
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: 'Knife' })).toBe(9);
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: 'Sword' })).toBe(10);
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: 'Axe' })).toBe(10);
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: '2H-Sword' })).toBe(
      12,
    );
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: '2H-Axe' })).toBe(12);
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: 'Hammer' })).toBe(12);
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: 'Spear' })).toBe(11);
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: 'Staff' })).toBe(7);
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: 'Glove' })).toBe(8);
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: 'Flail' })).toBe(8);
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: 'Bow' })).toBe(8);
  });

  it('for all weapons with DiorWood', () => {
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: 'Knife' })).toBe(35);
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: 'Sword' })).toBe(42);
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: 'Axe' })).toBe(48);
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: '2H-Sword' })).toBe(53);
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: '2H-Axe' })).toBe(62);
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: 'Hammer' })).toBe(57);
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: 'Spear' })).toBe(45);
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: 'Staff' })).toBe(25);
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: 'Glove' })).toBe(29);
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: 'Flail' })).toBe(31);
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: 'Bow' })).toBe(33);
  });

  it('for all Mineral materials', () => {
    expect(getBaseAttackPower({ mainMaterialType: 'MenosBronze', weaponType: 'Knife' })).toBe(9);
    expect(getBaseAttackPower({ mainMaterialType: 'ForsenaIron', weaponType: 'Knife' })).toBe(14);
    expect(getBaseAttackPower({ mainMaterialType: 'GranzSteel', weaponType: 'Knife' })).toBe(18);
    expect(getBaseAttackPower({ mainMaterialType: 'Mythril Silver', weaponType: 'Knife' })).toBe(
      23,
    );
    expect(getBaseAttackPower({ mainMaterialType: 'Astoria Silver', weaponType: 'Knife' })).toBe(
      28,
    );
    expect(getBaseAttackPower({ mainMaterialType: 'VizelGold', weaponType: 'Knife' })).toBe(32);
    expect(getBaseAttackPower({ mainMaterialType: 'IshePlatinum', weaponType: 'Knife' })).toBe(37);
    expect(getBaseAttackPower({ mainMaterialType: 'LorimarIron', weaponType: 'Knife' })).toBe(42);
    expect(getBaseAttackPower({ mainMaterialType: 'AltenaAlloy', weaponType: 'Knife' })).toBe(46);
    expect(getBaseAttackPower({ mainMaterialType: 'MaiaLead', weaponType: 'Knife' })).toBe(25);
    expect(getBaseAttackPower({ mainMaterialType: 'Orihalcon', weaponType: 'Knife' })).toBe(26);
  });

  it('for all Wood materials', () => {
    expect(getBaseAttackPower({ mainMaterialType: 'OakWood', weaponType: 'Knife' })).toBe(7);
    expect(getBaseAttackPower({ mainMaterialType: 'HollyWood', weaponType: 'Knife' })).toBe(10);
    expect(getBaseAttackPower({ mainMaterialType: 'BaobabWood', weaponType: 'Knife' })).toBe(14);
    expect(getBaseAttackPower({ mainMaterialType: 'EbonyWood', weaponType: 'Knife' })).toBe(17);
    expect(getBaseAttackPower({ mainMaterialType: 'Ashe Wood', weaponType: 'Knife' })).toBe(24);
    expect(getBaseAttackPower({ mainMaterialType: 'DiorWood', weaponType: 'Knife' })).toBe(35);
    expect(getBaseAttackPower({ mainMaterialType: 'Mistletoe Wood', weaponType: 'Knife' })).toBe(
      21,
    );
    expect(getBaseAttackPower({ mainMaterialType: 'FossilWood', weaponType: 'Knife' })).toBe(28);
  });

  it('for all Stone materials', () => {
    expect(getBaseAttackPower({ mainMaterialType: 'Marble', weaponType: 'Knife' })).toBe(12);
    expect(getBaseAttackPower({ mainMaterialType: 'Obsidian', weaponType: 'Knife' })).toBe(25);
    expect(getBaseAttackPower({ mainMaterialType: 'PedanStone', weaponType: 'Knife' })).toBe(38);
    expect(getBaseAttackPower({ mainMaterialType: "Gaeus'sTears", weaponType: 'Knife' })).toBe(50);
  });

  it('for all Hide materials', () => {
    expect(getBaseAttackPower({ mainMaterialType: 'AnimalHide', weaponType: 'Knife' })).toBe(4);
    expect(getBaseAttackPower({ mainMaterialType: 'GatorSkin', weaponType: 'Knife' })).toBe(6);
    expect(getBaseAttackPower({ mainMaterialType: 'CentaurHide', weaponType: 'Knife' })).toBe(9);
    expect(getBaseAttackPower({ mainMaterialType: 'DragonSkin', weaponType: 'Knife' })).toBe(12);
  });

  it('for all Scales materials', () => {
    expect(getBaseAttackPower({ mainMaterialType: 'FishScales', weaponType: 'Knife' })).toBe(7);
    expect(getBaseAttackPower({ mainMaterialType: 'LizardScales', weaponType: 'Knife' })).toBe(14);
    expect(getBaseAttackPower({ mainMaterialType: 'SnakeScales', weaponType: 'Knife' })).toBe(21);
    expect(getBaseAttackPower({ mainMaterialType: 'DragonScales', weaponType: 'Knife' })).toBe(54);
  });

  it('for all Bone materials', () => {
    expect(getBaseAttackPower({ mainMaterialType: 'AnimalBone', weaponType: 'Knife' })).toBe(11);
    expect(getBaseAttackPower({ mainMaterialType: 'Ivory', weaponType: 'Knife' })).toBe(23);
    expect(getBaseAttackPower({ mainMaterialType: 'CursedBone', weaponType: 'Knife' })).toBe(35);
    expect(getBaseAttackPower({ mainMaterialType: 'Fossil', weaponType: 'Knife' })).toBe(47);
  });

  it('for all Fabric materials', () => {
    expect(getBaseAttackPower({ mainMaterialType: 'ToppleCotton', weaponType: 'Knife' })).toBe(6);
    expect(getBaseAttackPower({ mainMaterialType: "Sultan'sSilk", weaponType: 'Knife' })).toBe(10);
    expect(getBaseAttackPower({ mainMaterialType: 'JuddHemp', weaponType: 'Knife' })).toBe(13);
    expect(getBaseAttackPower({ mainMaterialType: 'AltenaFelt', weaponType: 'Knife' })).toBe(17);
  });

  it('for all Aerolite materials', () => {
    /**
     * 隕石主原料は武器作成直後から火属性が4ついているので、実際にこの攻撃力になることはない
     * テスト上は火属性0の場合を想定して計算する
     */
    expect(getBaseAttackPower({ mainMaterialType: 'JacobiniRock', weaponType: 'Knife' })).toBe(17);
    expect(getBaseAttackPower({ mainMaterialType: 'HalleyRock', weaponType: 'Knife' })).toBe(23);
    expect(getBaseAttackPower({ mainMaterialType: 'AnkhRock', weaponType: 'Knife' })).toBe(29);
    expect(getBaseAttackPower({ mainMaterialType: 'VinekRock', weaponType: 'Knife' })).toBe(35);
    expect(getBaseAttackPower({ mainMaterialType: 'TuttleRock', weaponType: 'Knife' })).toBe(41);
    expect(getBaseAttackPower({ mainMaterialType: 'NemesisRock', weaponType: 'Knife' })).toBe(47);
    expect(getBaseAttackPower({ mainMaterialType: 'BiellaRock', weaponType: 'Knife' })).toBe(52);
    expect(getBaseAttackPower({ mainMaterialType: 'SwifteRock', weaponType: 'Knife' })).toBe(58);
  });

  it('for all Miscellaneous materials', () => {
    expect(getBaseAttackPower({ mainMaterialType: 'Adamantite', weaponType: 'Knife' })).toBe(72);
    expect(getBaseAttackPower({ mainMaterialType: 'Fullmetal', weaponType: 'Knife' })).toBe(55);
    expect(getBaseAttackPower({ mainMaterialType: 'Coral', weaponType: 'Knife' })).toBe(14);
    expect(getBaseAttackPower({ mainMaterialType: 'TortoiseShell', weaponType: 'Knife' })).toBe(21);
    expect(getBaseAttackPower({ mainMaterialType: 'Shell', weaponType: 'Knife' })).toBe(16);
    expect(getBaseAttackPower({ mainMaterialType: 'Emerald', weaponType: 'Knife' })).toBe(1);
    expect(getBaseAttackPower({ mainMaterialType: 'Pearl', weaponType: 'Knife' })).toBe(1);
    expect(getBaseAttackPower({ mainMaterialType: 'LapisLazuli', weaponType: 'Knife' })).toBe(1);
  });
});
