const { CardGroup } = require("poker-odds-calculator")

const getCardGroup = (playerCards) => {
  const str = playerCards.map(card => card.rank + card.suit[0]).join();
  return CardGroup.fromString(str)
}

const getOurPlayer = (gameState) => {
  return gameState.players.reverse().find(p => p.id === gameState.in_action)
}


module.exports = {
  getCardGroup,
  getOurPlayer
}