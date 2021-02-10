const calcPotOdds = (gameState) => {
  const { pot, in_action, players, current_buy_in } = gameState;

  const ourPlayer = players.find((player) => player.id == in_action);

  const amountToCall = current_buy_in - ourPlayer.bet;

  const potOdds = amountToCall / (pot + amountToCall);

  return { potOdds, amountToCall };
};

const { potOdds: test, amountToCall: test2 } = calcPotOdds({
  pot: 3000,
  in_action: 1,
  players: [
    {
      id: 1,
      bet: 100,
    },
  ],
  current_buy_in: 200,
});

console.log("test", test);
console.log("test2", test2);

module.exports = calcPotOdds;
