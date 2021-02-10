const { calcPotOdds } = require("./util");
const { strength } = require("./odds");
class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    try {
      const strengthofhand = strength(gameState);
      const { potOdds,
        amountToCall } = calcPotOdds(gameState);

      if (potOdds < strengthofhand) {
        if (bet_index > 20) {
          return bet(gameState.current_buy_in)
        }
        
        return bet(amountToCall * (1 + strengthofhand));
      }

      bet(0);
    } catch (e) {
      bet(0);
    }
  }

  static showdown(gameState) { }
}

module.exports = Player;
