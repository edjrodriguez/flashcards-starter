const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turnsTaken = 0;
    }

    returnCurrentCard() {
        return this.deck.stackOfCards[0];
    }
    
    takeTurn() {
        this.turnsTaken += 1; 
        let turn = new Turn();
        // turn.evaluateGuess();
        return turn;
    }

}

module.exports = Round;