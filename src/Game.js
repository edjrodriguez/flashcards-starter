const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start() {
    let createCards = [];
    data.prototypeData.forEach((card) => {
      createCards.push(new Card(card.id, card.question, card.answers,card.correctAnswer));
   })
    let deck = new Deck(createCards);
    let newRound = new Round(deck);
    this.currentRound = newRound;
  
  }
}

module.exports = Game;