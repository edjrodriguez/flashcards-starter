const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const data = require('../src/data');

describe('Deck', () => {
  let cards; 
  let deck;
  beforeEach(() => {
    cards = data.prototypeData;
    deck = new Deck(cards);
  })

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    })

    it('should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceof(Deck);
    }); 
  
    it('should be able to add multiple cards at once', () => {
        expect(deck.stackOfCards).to.deep.equal(cards);
    })

    it('should know how many cards are in the deck', () => {
        expect(deck.countCards()).to.equal(30);
    })
}) 