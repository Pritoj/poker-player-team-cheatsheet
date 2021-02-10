const { calcPotOdds } = require("./util");
const { getOdds } = require('./hand -strength-calc');
class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    try {
      const oddsCalc = getOdds(gameState);
      console.log({oddsCalc});
      const { podOdds,
        amountToCall } = calcPotOdds(gameState);

      if (podOdds < 0.5) {
        return bet(amountToCall);
      }

      bet(0);
    } catch (e) {
      bet(0);
    }
  }

  static showdown(gameState) { }
}

module.exports = Player;
