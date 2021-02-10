const { calculateEquity } = require('poker-odds');
const { strength } = require('../odds');
const { mockGameState } = require('./mocks');
const Player = require('../Player');
describe('Poker odds', () => {
  it('does something', () => {
    expect(() => Player.betRequest(mockGameState, console.log)).not.toThrow()
  })
});