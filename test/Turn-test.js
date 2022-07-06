const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    it('should be a function', function() {
        let turn = new Turn();
        expect(Turn).to.be.a('function'); 
    })

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
      }); 

    it('should be able to guess answer', function() {
        let turn = new Turn('pug')

        expect(turn.guess).to.equal('pug'); 
    })

    it('should hold the current Card in play', function() {
        let card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        let turn = new Turn('rooster', card)

        expect(turn.guess).to.equal('rooster'); 
        expect(turn.heldCard).to.equal(card);   
    })

    it('should return the users guess', function() {
        let card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        let turn = new Turn('rooster', card)

        expect(turn.guess).to.equal('rooster'); 
        expect(turn.returnGuess()).to.equal('rooster'); 
    })

    it('should return the users card', function() {
        let card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        let turn = new Turn('rooster', card)

        expect(turn.guess).to.equal('rooster'); 
        expect(turn.returnCard()).to.equal(card); 
    })

    it('should indicate if the users guess is true or false', function() {
        let card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        let turn = new Turn('rooster', card)
        let card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        let turn2 = new Turn('sea otter', card)

        expect(turn.evaluateGuess()).to.equal(false); 
        expect(turn2.evaluateGuess()).to.equal(true); 
    })

    it('should give user feedback back on answer', function() {
        let card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        let turn = new Turn('rooster', card)
        let card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        let turn2 = new Turn('sea otter', card)

        expect(turn.giveFeedback()).to.equal('incorrect!'); 
        expect(turn2.giveFeedback()).to.equal('correct!'); 
    })
})