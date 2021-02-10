const { CardGroup, OddsCalculator } = require("poker-odds-calculator")

const getCards = (playerCards) => playerCards.map(card => card.rank + card.suit[0])
const getCardGroup = (playerCards) => {
  const str = getCards(playerCards).join();
  return CardGroup.fromString(str);
}

const getOurPlayer = (gameState) => {
  return gameState.players.find(p => p.id === gameState.in_action)
}

const getOtherPlayers = (gameState) => {
  return gameState.players.filter(p => p.id !== gameState.in_action)
}

const getOdds = (gameState) => {
  const ourCards = getCardGroup(getOurPlayer(gameState).hole_cards);
  // const otherPlayerCards = getOtherPlayers(gameState).map(player => getCardGroup(player.hole_cards));
  const boardCards = getCardGroup(gameState.community_cards);

  const result = OddsCalculator.calculate([ourCards,], boardCards);
  return result.equities[0].getEquity();
}


module.exports = {
  getCardGroup,
  getOurPlayer,
  getOtherPlayers,
  getOdds,
  getCards
}