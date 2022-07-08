const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turnsTaken = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck.stackOfCards[this.turnsTaken];
    }
    
    takeTurn(guess) {
            let turn = new Turn(guess, this.returnCurrentCard()); 

            if(turn.evaluateGuess() === false){
            this.incorrectGuesses.push(this.deck.stackOfCards[this.turnsTaken].id)
             }
            this.turnsTaken += 1; 
            return turn.giveFeedback();
    }

    calculatePercentCorrect() {
        return parseInt(((this.turnsTaken - this.incorrectGuesses.length)/this.turnsTaken * 100).toFixed(0));
    }
    
    endRound() {
       console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }

}

module.exports = Round;