const calcPotOdds = (gameState) => {
  const { pot, in_action, players, current_buy_in } = gameState;

  const ourPlayer = players.find((player) => player.id == in_action);

  const amountToCall = current_buy_in - ourPlayer.bet;

  const potOdds = amountToCall / (pot + amountToCall);

  return { potOdds, amountToCall };
};


module.exports = { calcPotOdds };
