const { CardGroup } = require("poker-odds-calculator");
const { getCardGroup, getOurPlayer, getOtherPlayers, getOdds } = require("../hand -strength-calc");
const { mockPlayer, mockGameState } = require("./mocks");

describe('Card group', () => {
  it('should return the right card group', () => {
    const g = getCardGroup(mockPlayer.hole_cards);
    expect(g.toString()).toBe('6h Ks')
  })

  it("should return our player", () => {
    expect(getOurPlayer(mockGameState).id).toBe(1)
    console.log(getOdds(mockGameState));
  })
});