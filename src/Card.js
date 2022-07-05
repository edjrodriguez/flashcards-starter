class Card {
    constructor(num, questionString, arrayOfPossibleAnswers, answer) {
        this.question = questionString;
        this.answers = arrayOfPossibleAnswers;
        this.correctAnswer = answer;
    }
}

module.exports = Card;