const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');


describe('Deck', function() {
    it('should be a function', function() {
        let deck = new Deck();
        expect(Deck).to.be.a('function');

    })

    it('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
      }); 
    
      it('should be able to hold a card', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const deck = new Deck([card1]);

        expect(deck.stackOfCards).to.deep.equal([card1]);
      })

      it('should be able to add multiple cards at once', function() {
       

        let cards = data.prototypeData;

        const deck = new Deck(cards)

        expect(deck.stackOfCards).to.deep.equal(cards);

      })

      it('should know how many cards are in the deck', function() {
       

       let cards =  data.prototypeData

        const deck = new Deck(cards);

        expect(deck.countCards()).to.equal(30);
      })

}) 