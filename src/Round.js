const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turnsTaken = 0;
    }

    returnCurrentCard() {
        return this.deck.stackOfCards[this.turnsTaken];
    }
    
    takeTurn(guess) {
        let turn = new Turn(guess, this.returnCurrentCard());
        turn.evaluateGuess(); 
        if(turn.evaluateGuess === false){
            
        }
        this.turnsTaken += 1; 
        return turn.giveFeedback();
    }

}

module.exports = Round;