import { describe, expect, it } from 'vitest';
import { Weapon } from '../src/core/weapon/index';

describe('Weapon', () => {
  it('can be forged', () => {
    const w = new Weapon('AltenaAlloy', 'Sword');
    expect(w.getAttack()).toBe(50);
  });

  it('can be tempered to salamander:9', () => {
    const w = new Weapon('AltenaAlloy', 'Sword');

    w.temper('Salamander Silver');
    expect(w.essence.salamander).toEqual(1);
    // expect(w.getAttack()).toBe(52);
    // w.temper("Sulpher");
    // expect(w.essence.salamander).toEqual(2);
    // expect(w.getAttack()).toBe(55);
    // w.temper("Sulpher");
    // expect(w.essence.salamander).toEqual(3);
    // expect(w.getAttack()).toBe(58);
    // w.temper("Sulpher");
    // expect(w.essence.salamander).toEqual(4);
    // expect(w.getAttack()).toBe(61);
  });
});

// -------------------------------------------------------------------------------
// Item Added   |SA GN|Sword Power|Observations
// -------------------------------------------------------------------------------
// Forging Sword|0  0 |50         |In this particular process, it's easy to
// Sala Silver  |1  0 |52         |observe how each step may or may not match the
// Sulpher      |2  0 |55         |energy requirements to achieve a level boost.
// Sulpher      |3  0 |58         |There are only a few steps in which wizard
// Sulpher      |4  0 |61         |cards are not taken into account, and you can
// Sala Silver  |5  0 |63         |easily observe how a Salamander card can taint
// Glow Crystal |6  0 |66         |the following items tempered, so that their own
// Glow Crystal |6  0 |66         |energy is attributed to Salamander. Even the
// Glow Crystal |6  0 |66         |first Glow Crystal keeps raising Salamander.
// Sulpher      |6  0 |66         |
// Sulpher      |6  0 |66         |Also, notice how none of the cards bestow their
// Sala Silver  |6  0 |66         |effects on the turn they leave. For example,
// Glow Crystal |7  0 |69         |when the first Sala card is in the third slot,
// Glow Crystal |7  0 |69         |you're about to temper a Sala Silver. Looking
// Glow Crystal |7  0 |69         |at the energy requirement charts, you need 32
// Glow Crystal |7  0 |69         |energy to gain a level. However, the Sala card
// Sulpher      |7  0 |69         |will leave on this turn, and thus make the
// Sulpher      |7  0 |69         |increase unattainable without a Sala TP.
// Sulpher      |7  0 |69         |
// Sala Silver  |8  0 |72         |To better understand this simple procedure, try
// Glow Crystal |8  0 |72         |to determine which factors are taken into
// Glow Crystal |8  0 |72         |consideration when each item is tempered. The
// Glow Crystal |8  0 |72         |optimization of materials can be done in an
// Glow Crystal |8  0 |72         |easier fashion by figuring out economic and
// Sulpher      |8  0 |72         |effective ways of reaching a particular level,
// Sulpher      |8  0 |72         |and more often than not, these techniques are
// Sulpher      |8  0 |72         |also made so that when you've just reached a
// Sala Gold    |9  0 |75         |new level, you're already working on the next.
// -------------------------------------------------------------------------------
// Chaos Crystal|9  0 |75         |When we first attempted this process, we began
// Gnome Silver |9  1 |77         |to wonder how tainting would affect an essence
// Glow Crystal |9  2 |80         |in conflict. After thorough tests, it seems a
// Sulpher      |9  2 |80         |conflicting essence can only taint while there
// Sulpher      |9  3 |83         |is a presence of the Ancient Moon. Note that
// Chaos Crystal|9  3 |83         |the Ancient Moon needs only be present when
// Gnome Silver |9  4 |86         |tempering an aligned item. Otherwise, a Chaos
// Glow Crystal |9  5 |88         |Crystal would be required every 5 items.
// Sulpher      |9  5 |88         |
// Sulpher      |9  6 |91         |Otherwise, there are a lot of similarities in
// Glow Crystal |9  6 |91         |the tempering of chaotic and non-chaotic
// Glow Crystal |9  6 |91         |essences. It's just that you have to fit some
// Glow Crystal |9  6 |91         |Chaos Crystals in between items every now and
// Glow Crystal |9  6 |91         |then.
// Chaos Crystal|9  6 |91         |
// Sulpher      |9  6 |91         |Gnome was only tempered to level 7 because this
// Sulpher      |9  6 |91         |is where Salamander can consume it.
// Gnome Silver |9  7 |94         |
// -------------------------------------------------------------------------------
// Sulpher      |9  7 |94         |Since the consumption must be done with only 1
// Sulpher      |9  7 |94         |aligned item, it's crucial to reduce the energy
// Sulpher      |9  7 |94         |cost. It seems the consumption here requires 48
// Sala Silver  |10 6 |94         |energy at the most, with 3 wizard cards.
// -------------------------------------------------------------------------------
// Chaos Crystal|10 5 |91         |As you can see, as soon as you keep tempering
// Gnome Silver |10 5 |91         |beyond the consumption, the consumed essence
// Sulpher      |10 5 |91         |keeps losing power. This will persist until the
// Sulpher      |10 5 |91         |Ancient Moon becomes active on the weapon or
// Glow Crystal |10 6 |94         |armor. This is why the initial Chaos Crystal
// Glow Crystal |10 6 |94         |results in a Gnome power loss. The apparition
// Glow Crystal |10 6 |94         |of the Ancient Moon on the following step stops
// Glow Crystal |10 6 |94         |that.
// Chaos Crystal|10 6 |94         |
// Sulpher      |10 6 |94         |Since Gnome was already at level 5, it's much
// Sulpher      |10 6 |94         |easier to coordinate the level 6 and level 7
// Gnome Silver |10 7 |97         |procedures.
// -------------------------------------------------------------------------------
