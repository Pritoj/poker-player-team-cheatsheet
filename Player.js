class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const highestBet =
      gameState.players.reduce((f, v) => (f > v.bet ? f : v.bet), 0) + 10;

    bet(highestBet);
  }

  static showdown(gameState) {}
}

module.exports = Player;
