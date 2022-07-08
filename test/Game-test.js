const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {
  
    it('should create a Round when game starts', function() {
        let game = new Game();
        game.start()
        expect(game.currentRound).to.be.an.instanceOf(Round);
    })


})