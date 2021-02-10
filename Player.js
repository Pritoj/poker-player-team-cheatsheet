const { calcPotOdds } = require("./util");
const { strength } = require("./odds");
const { getOurPlayer } = require("./hand -strength-calc");
class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    try {
      const strengthofhand = strength(gameState);
      const { potOdds,
        amountToCall } = calcPotOdds(gameState);

      if ( strengthofhand > 0.001) {
        if (strengthofhand > 0.05) {
          const ourPlayer = getOurPlayer(gameState);
          bet(ourPlayer.stack)
        }
        if (bet_index > 20) {
          return bet(gameState.current_buy_in)
        }

        return bet(gameState.current_buy_in * (1 + strengthofhand));
      }

      bet(0);
    } catch (e) {
      bet(0);
    }
  }

  static showdown(gameState) { }
}

module.exports = Player;
