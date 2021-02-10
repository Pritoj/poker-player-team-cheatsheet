const { calcPotOdds } = require("./util");
const { strength } = require("./odds");
const { getOurPlayer } = require("./hand -strength-calc");
class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const strengthofhand = strength(gameState);
    const { potOdds } = calcPotOdds(gameState);


    if (gameState.bet_index > 20) {
      if (strengthofhand > 0.1 || potOdds < 0.5) {
        return bet(gameState.current_buy_in)
      }
      return bet(0)
    }

    if (strengthofhand > 0.5) {
      if (strengthofhand > 0.6) {
        const ourPlayer = getOurPlayer(gameState);
        return bet(ourPlayer.stack)
      }

      return bet(gameState.current_buy_in * (1 + potOdds))
    }

    bet(0);

  }

  static showdown(gameState) { }
}

module.exports = Player;
