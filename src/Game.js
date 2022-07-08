const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start() {
    let createdCards = [];
    data.prototypeData.forEach((card) => {
      createdCards.push(new Card(card.id, card.question, card.answers,card.correctAnswer));
   })
   
    let deck = new Deck(createdCards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(this.currentRound.deck)
    this.printQuestion(this.currentRound)
  }
}

module.exports = Game;