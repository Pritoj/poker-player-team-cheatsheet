const { calculateEquity } = require('poker-odds');
const { strength } = require('../odds');
const { mockGameState } = require('./mocks');
describe('Poker odds', () => {
  it('does something', () => {
    const result = strength(mockGameState);
    console.log("result", result)
  })
});