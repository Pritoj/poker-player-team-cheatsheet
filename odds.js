const { calculateEquity } = require('poker-odds')
const { getCards, getOurPlayer, getOtherPlayers } = require('./hand -strength-calc');

// https://en.wikipedia.org/wiki/Poker_probability
var NodeTtl = require( "node-ttl" );

var ttl = new NodeTtl({
  ttl: 60
});

const totalPossibilities = 2598960;
const prob = (possib) => (1 - (possib / totalPossibilities))
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

const memoizedEquity = (ourCards,board, iterations) => {
  const key = `${ourCards.sort().join()}-${board.sort().join()}`;
  const memoizedVal = ttl.get(key)
  if(memoizedVal) {
    return memoizedVal;
  }
  const res = calculateEquity([ourCards], board, totalIterations);
  ttl.push(key, res);
  return res;
}

const strength = (gameState) => {
  const totalIterations = 1000;

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