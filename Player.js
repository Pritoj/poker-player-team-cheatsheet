import { calcPotOdds } from "util";

class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const podOdds,
      amountToCall = calcPotOdds(gameState);

    if (podOdds < 0.5) {
      bet(amountToCall);
    }

    bet(0);
  }

  static showdown(gameState) {}
}

module.exports = Player;
