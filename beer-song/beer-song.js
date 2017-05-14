'use strict';

class Verse {

    constructor() {
        this._verseText = [];
    }

    compute(number, stopNumber = null) {
        if (number < 0) {
            return;
        }

        if(number === stopNumber) {
            return;
        }

        let versePart1 = `${this.parseNumber(number)} ${this.pluralize('bottle', 'bottles', number)} of beer on the wall, ${this.parseNumber(number)} ${this.pluralize('bottle', 'bottles', number)} of beer.\n`;
        let versePart2 = `Take ${number - 1 == 0 ? 'it' : 'one'} down and pass it around, ${this.parseNumber(number - 1)} ${this.pluralize('bottle', 'bottles', number - 1)} of beer on the wall.\n`;

        this._verseText.push(versePart1.concat(versePart2));

        if (stopNumber != null && number - 1 !== stopNumber) {
            this._verseText.push(`\n`)
        }

        if (stopNumber != null) {
            this.compute(number - 1, stopNumber);
        }
    }

    get verseText() {
        return this._verseText.join('');
    }

    parseNumber(number) {
        if (number === 0) {
            return 'no more';
        }

        return number;
    }

    pluralize(singular, plural, count) {
        if (count > 1 || count === 0) {
            return plural;
        }
        return singular;
    }
}

class BeerSong {

    sing(start, stop) {
        let verse = new Verse;
        verse.compute(start, stop - 1);

        return verse.verseText;
    }

    verse(verseNumber) {
        let verse = new Verse;
        verse.compute(verseNumber);

        return verse.verseText;
    }

}

module.exports = BeerSong;