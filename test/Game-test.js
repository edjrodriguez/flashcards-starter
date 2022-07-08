const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', () => {
  
    it('on game.start() it should start a new Round with 30 cards in its deck', () => {
        let game = new Game();
        game.start()
        expect(game.currentRound).to.be.an.instanceOf(Round);
        expect(game.currentRound.deck.stackOfCards[29].id).to.deep.equal(30);
    })
})