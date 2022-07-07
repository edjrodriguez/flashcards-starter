class Deck {
    constructor(cards) {
        this.stackOfCards = cards;
    }

    countCards() {
        return this.stackOfCards.length;
    }
}

module.exports = Deck;