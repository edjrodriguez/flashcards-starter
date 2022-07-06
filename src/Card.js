class Card {
    constructor(numberId, questionString, arrayOfPossibleAnswers, answer) {
        this.id = numberId;
        this.question = questionString;
        this.answers = arrayOfPossibleAnswers;
        this.correctAnswer = answer;
    }
}

module.exports = Card;