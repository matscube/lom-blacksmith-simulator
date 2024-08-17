import { describe, expect, it, test } from 'vitest';
import { calcAttack } from '.';

export function sum(a: number, b: number) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('calcAttack', () => {
  it('for all weapons with MenosBronze', () => {
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: 'Knife' })).toBe(9);
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: 'Sword' })).toBe(10);
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: 'Axe' })).toBe(10);
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: '2H-Sword' })).toBe(12);
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: '2H-Axe' })).toBe(12);
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: 'Hammer' })).toBe(12);
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: 'Spear' })).toBe(11);
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: 'Staff' })).toBe(7);
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: 'Glove' })).toBe(8);
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: 'Flail' })).toBe(8);
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: 'Bow' })).toBe(8);
  });

  it('for all weapons with DiorWood', () => {
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: 'Knife' })).toBe(35);
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: 'Sword' })).toBe(42);
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: 'Axe' })).toBe(48);
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: '2H-Sword' })).toBe(53);
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: '2H-Axe' })).toBe(62);
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: 'Hammer' })).toBe(57);
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: 'Spear' })).toBe(45);
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: 'Staff' })).toBe(25);
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: 'Glove' })).toBe(29);
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: 'Flail' })).toBe(31);
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: 'Bow' })).toBe(33);
  });

  it('for all Mineral materials', () => {
    expect(calcAttack({ mainMaterialType: 'MenosBronze', weaponType: 'Knife' })).toBe(9);
    expect(calcAttack({ mainMaterialType: 'ForsenaIron', weaponType: 'Knife' })).toBe(14);
    expect(calcAttack({ mainMaterialType: 'GranzSteel', weaponType: 'Knife' })).toBe(18);
    expect(calcAttack({ mainMaterialType: 'Mythril Silver', weaponType: 'Knife' })).toBe(23);
    expect(calcAttack({ mainMaterialType: 'Astoria Silver', weaponType: 'Knife' })).toBe(28);
    expect(calcAttack({ mainMaterialType: 'VizelGold', weaponType: 'Knife' })).toBe(32);
    expect(calcAttack({ mainMaterialType: 'IshePlatinum', weaponType: 'Knife' })).toBe(37);
    expect(calcAttack({ mainMaterialType: 'LorimarIron', weaponType: 'Knife' })).toBe(42);
    expect(calcAttack({ mainMaterialType: 'AltenaAlloy', weaponType: 'Knife' })).toBe(46);
    expect(calcAttack({ mainMaterialType: 'MaiaLead', weaponType: 'Knife' })).toBe(25);
    expect(calcAttack({ mainMaterialType: 'Orihalcon', weaponType: 'Knife' })).toBe(26);
  });

  it('for all Wood materials', () => {
    expect(calcAttack({ mainMaterialType: 'OakWood', weaponType: 'Knife' })).toBe(7);
    expect(calcAttack({ mainMaterialType: 'HollyWood', weaponType: 'Knife' })).toBe(10);
    expect(calcAttack({ mainMaterialType: 'BaobabWood', weaponType: 'Knife' })).toBe(14);
    expect(calcAttack({ mainMaterialType: 'EbonyWood', weaponType: 'Knife' })).toBe(17);
    expect(calcAttack({ mainMaterialType: 'Ashe Wood', weaponType: 'Knife' })).toBe(24);
    expect(calcAttack({ mainMaterialType: 'DiorWood', weaponType: 'Knife' })).toBe(35);
    expect(calcAttack({ mainMaterialType: 'Mistletoe Wood', weaponType: 'Knife' })).toBe(21);
    expect(calcAttack({ mainMaterialType: 'FossilWood', weaponType: 'Knife' })).toBe(28);
  });

  it('for all Stone materials', () => {
    expect(calcAttack({ mainMaterialType: 'Marble', weaponType: 'Knife' })).toBe(12);
    expect(calcAttack({ mainMaterialType: 'Obsidian', weaponType: 'Knife' })).toBe(25);
    expect(calcAttack({ mainMaterialType: 'PedanStone', weaponType: 'Knife' })).toBe(38);
    expect(calcAttack({ mainMaterialType: "Gaeus'sTears", weaponType: 'Knife' })).toBe(50);
  });

  it('for all Hide materials', () => {
    expect(calcAttack({ mainMaterialType: 'AnimalHide', weaponType: 'Knife' })).toBe(4);
    expect(calcAttack({ mainMaterialType: 'GatorSkin', weaponType: 'Knife' })).toBe(6);
    expect(calcAttack({ mainMaterialType: 'CentaurHide', weaponType: 'Knife' })).toBe(9);
    expect(calcAttack({ mainMaterialType: 'DragonSkin', weaponType: 'Knife' })).toBe(12);
  });

  it('for all Scales materials', () => {
    expect(calcAttack({ mainMaterialType: 'FishScales', weaponType: 'Knife' })).toBe(7);
    expect(calcAttack({ mainMaterialType: 'LizardScales', weaponType: 'Knife' })).toBe(14);
    expect(calcAttack({ mainMaterialType: 'SnakeScales', weaponType: 'Knife' })).toBe(21);
    expect(calcAttack({ mainMaterialType: 'DragonScales', weaponType: 'Knife' })).toBe(54);
  });

  it('for all Bone materials', () => {
    expect(calcAttack({ mainMaterialType: 'AnimalBone', weaponType: 'Knife' })).toBe(11);
    expect(calcAttack({ mainMaterialType: 'Ivory', weaponType: 'Knife' })).toBe(23);
    expect(calcAttack({ mainMaterialType: 'CursedBone', weaponType: 'Knife' })).toBe(35);
    expect(calcAttack({ mainMaterialType: 'Fossil', weaponType: 'Knife' })).toBe(47);
  });

  it('for all Fabric materials', () => {
    expect(calcAttack({ mainMaterialType: 'ToppleCotton', weaponType: 'Knife' })).toBe(6);
    expect(calcAttack({ mainMaterialType: "Sultan'sSilk", weaponType: 'Knife' })).toBe(10);
    expect(calcAttack({ mainMaterialType: 'JuddHemp', weaponType: 'Knife' })).toBe(13);
    expect(calcAttack({ mainMaterialType: 'AltenaFelt', weaponType: 'Knife' })).toBe(17);
  });

  it('for all Aerolite materials', () => {
    /**
     * 隕石主原料は武器作成直後から火属性が4ついているので、実際にこの攻撃力になることはない
     * テスト上は火属性0の場合を想定して計算する
     */
    expect(calcAttack({ mainMaterialType: 'JacobiniRock', weaponType: 'Knife' })).toBe(17);
    expect(calcAttack({ mainMaterialType: 'HalleyRock', weaponType: 'Knife' })).toBe(23);
    expect(calcAttack({ mainMaterialType: 'AnkhRock', weaponType: 'Knife' })).toBe(29);
    expect(calcAttack({ mainMaterialType: 'VinekRock', weaponType: 'Knife' })).toBe(35);
    expect(calcAttack({ mainMaterialType: 'TuttleRock', weaponType: 'Knife' })).toBe(41);
    expect(calcAttack({ mainMaterialType: 'NemesisRock', weaponType: 'Knife' })).toBe(47);
    expect(calcAttack({ mainMaterialType: 'BiellaRock', weaponType: 'Knife' })).toBe(52);
    expect(calcAttack({ mainMaterialType: 'SwifteRock', weaponType: 'Knife' })).toBe(58);
  });

  it('for all Miscellaneous materials', () => {
    expect(calcAttack({ mainMaterialType: 'Adamantite', weaponType: 'Knife' })).toBe(72);
    expect(calcAttack({ mainMaterialType: 'Fullmetal', weaponType: 'Knife' })).toBe(55);
    expect(calcAttack({ mainMaterialType: 'Coral', weaponType: 'Knife' })).toBe(14);
    expect(calcAttack({ mainMaterialType: 'TortoiseShell', weaponType: 'Knife' })).toBe(21);
    expect(calcAttack({ mainMaterialType: 'Shell', weaponType: 'Knife' })).toBe(16);
    expect(calcAttack({ mainMaterialType: 'Emerald', weaponType: 'Knife' })).toBe(1);
    expect(calcAttack({ mainMaterialType: 'Pearl', weaponType: 'Knife' })).toBe(1);
    expect(calcAttack({ mainMaterialType: 'LapisLazuli', weaponType: 'Knife' })).toBe(1);
  });
});
