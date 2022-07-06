class Deck {
    constructor(card) {
        this.stackOfCards = card;
    }

    countCards() {
        return this.stackOfCards.length;
    }
}

module.exports = Deck;