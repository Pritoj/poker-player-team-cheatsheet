const { CardGroup, OddsCalculator } = require("poker-odds-calculator")

const getCardGroup = (playerCards) => {
  const str = playerCards.map(card => card.rank + card.suit[0]).join();
  return CardGroup.fromString(str)
}

const getOurPlayer = (gameState) => {
  return gameState.players.find(p => p.id === gameState.in_action)
}

const getOtherPlayers = (gameState) => {
  return gameState.players.find(p => p.id !== gameState.in_action)
}

const getOdds = (gameState) => {
  const ourCards = getCardGroup(getOurPlayer(gameState).hole_cards);
  const otherPlayerCards = getOtherPlayers(gameState).map(player => getCardGroup(player.hole_cards));
  const boardCards = getCardGroup(gameState.community_cards);

  const result = OddsCalculator.calculate([ourCards, ...otherPlayerCards], board);
  return result.equities[0];
}


module.exports = {
  getCardGroup,
  getOurPlayer,
  getOtherPlayers
}