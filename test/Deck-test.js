const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const data = require('../src/data');


describe('Deck', function() {
  let cards; 
  let deck;
  beforeEach(function() {
    cards = data.prototypeData;
    deck = new Deck(cards);
  })

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    })

    it('should be an instance of Deck', function() {
        expect(deck).to.be.an.instanceof(Deck);
    }); 
  
    it('should be able to add multiple cards at once', function() {
        expect(deck.stackOfCards).to.deep.equal(cards);
    })

    it('should know how many cards are in the deck', function() {
        expect(deck.countCards()).to.equal(30);
    })
}) 