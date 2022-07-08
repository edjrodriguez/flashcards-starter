const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
    let turn;
    let turn2
    let card;
    let card2;

    beforeEach(() => {
        card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        turn = new Turn('rooster', card)
        turn2 = new Turn('sea otter', card)
    })

    it('should be a function', () => { 
        expect(Turn).to.be.a('function'); 
    })

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceof(Turn);
      }); 

    it('should be able to guess answer', () => { 
        expect(turn.guess).to.equal('rooster'); 
    })

    it('should hold the current Card in play', () => {
        expect(turn.guess).to.equal('rooster'); 
        expect(turn.heldCard).to.equal(card);   
    })

    it('should return the users guess', () => {
        expect(turn.guess).to.equal('rooster'); 
        expect(turn.returnGuess()).to.equal('rooster'); 
    })

    it('should return the users card', () => {
        expect(turn.guess).to.equal('rooster'); 
        expect(turn.returnCard()).to.equal(card); 
    })

    it('should indicate if the users guess is true or false', () => {
        expect(turn.evaluateGuess()).to.equal(false); 
        expect(turn2.evaluateGuess()).to.equal(true); 
    })

    it('should give user feedback back on answer', () => {
        expect(turn.giveFeedback()).to.equal('incorrect!'); 
        expect(turn2.giveFeedback()).to.equal('correct!'); 
    })
})