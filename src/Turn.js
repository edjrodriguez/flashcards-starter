class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.heldCard = card;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.heldCard;
    }
    evaluateGuess() {
      if(this.guess != this.heldCard.correctAnswer){
        return false;
      } else
      return true; 
    }

    giveFeedback() {
        if(this.guess != this.heldCard.correctAnswer){
            return 'incorrect!';
          } else
          return 'correct!'; 
    }
}

module.exports = Turn;