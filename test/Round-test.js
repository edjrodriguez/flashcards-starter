const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Round', function() {
    it('should be a function', function() {
        expect(Round).to.be.a('function')
    })

    it('should be an instance of Round', function() {
        let round = new Round();

        expect(round).to.be.an.instanceOf(Round)
    })

    it('should start with a deck of cards', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        expect(round.deck).to.equal(deck)
    })
    
    it('should show first card in the deck', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        expect(round.returnCurrentCard()).to.equal(deck.stackOfCards[0])
    })

    it('should start with 0 turns being taken', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        expect(round.turnsTaken).to.equal(0)
    })

    // it('should instantiate a new turn', function() {
    //     const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    //     const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    //     const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    //     const deck = new Deck([card1, card2, card3]);
    //     let round = new Round(deck);
    
        
    //     round.takeTurn('sea otter');
    //     expect(round.takeTurn()).to.be.an.instanceOf(Turn)
    
    // })

    it('should keep track of each turn', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        expect(round.turnsTaken).to.equal(0)

        round.takeTurn('gallbladder');
        expect(round.turnsTaken).to.equal(1)

        round.takeTurn('gallbladder');
        round.takeTurn('gallbladder');
        expect(round.turnsTaken).to.equal(3)
    })


   

    it('should give feedback after guess is made', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1, card2, card3]);
        let round = new Round(deck);

        expect(round.turnsTaken).to.equal(0)

        let turn1 = round.takeTurn('gallbladder');
        expect(turn1).to.equal('incorrect!')

       let turn2 =  round.takeTurn('gallbladder');
        expect(turn2).to.equal('correct!')
        let turn3 = round.takeTurn('gallbladder');
        expect(turn3).to.equal('incorrect!')        
    })

    it.skip('should store ids of incorrect guesses in an array', function() {
        
    })

})