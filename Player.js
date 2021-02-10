const { calcPotOdds } = require("./util");
const { strength } = require("./odds");
class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    try {
      const odds = strength(gameState);
      const { podOdds,
        amountToCall } = calcPotOdds(gameState);

      if (podOdds < 0.5) {
        return bet(amountToCall * (1 + odds));
      }

      bet(0);
    } catch (e) {
      bet(0);
    }
  }

  static showdown(gameState) { }
}

module.exports = Player;
