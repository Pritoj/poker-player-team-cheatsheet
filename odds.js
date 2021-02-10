const { calculateEquity } = require('poker-odds')
const { getCards, getOurPlayer, getOtherPlayers } = require('./hand -strength-calc');

// https://en.wikipedia.org/wiki/Poker_probability
const totalPossibilities = 2598960;
const prob = (possib) => 1 - (possib / totalPossibilities)
const multipliers = {
  "high card": prob(1302540),
  "one pair": prob(1098240),
  "two pair": prob(123552),
  "three of a kind": prob(54912),
  "straight": prob(10200),
  "flush": prob(5108),
  "full house": prob(3744),
  "four of a kind": prob(624),
  "straight flush": prob(36),
  "royal flush": prob(4)
}
const strength = (gameState) => {
  const totalIterations = 10000;

  const ourCards = getCards(getOurPlayer(gameState).hole_cards);
  const totalPlayers = getOtherPlayers(gameState).length + 1;
  const board = getCards(gameState.community_cards);
  const res = calculateEquity([ourCards], board, totalIterations);
  return res[0].handChances
    .map(hit => Math.pow(multipliers[hit.name], totalPlayers) * (hit.count / totalIterations))
    .reduce((f, v) => f + v);
}

module.exports = {
  strength
}