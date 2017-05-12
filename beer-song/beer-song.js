'use strict';

class BeerSong {

    constructor() {
        this.start = 99;
        this._num;
    }

    // sing(startingVerse, endingVerse = null) {}

    verse(num) {
        this._num = num;
        return this.buildVerse(this.num);
        // return `${this.num} ${this.pluralize('bottle', 'bottles', this.num)} of beer on the wall, ${this.num} ${this.pluralize('bottle', 'bottles', this.num)} of beer.\nTake one down and pass it around, ${this.num = this.num - 1} ${this.pluralize('bottle', 'bottles', this.num = this.num - 1)} of beer on the wall.\n`;
    }

    buildVerse(verseNumber) {
        let str1 = `${verseNumber} ${this.pluralize('bottle', 'bottles', verseNumber)} of beer on the wall, ${verseNumber} ${this.pluralize('bottle', 'bottles', verseNumber)} of beer.\n`       
        let str2 = `Take ${verseNumber - 1 == 0 ? 'it' : 'one'} down and pass it around, ${verseNumber - 1 ? verseNumber - 1 : 'no more'} ${this.pluralize('bottle', 'bottles', verseNumber - 1)} of beer on the wall.\n`;

        return str1.concat(str2);
    }

    set num(value) {
        this._num = value;
    }

    get num() {
        return this._num;
    }

    pluralize(singular, plural, count) {
        if (count > 1 || count === 0) {
            return plural;
        }
        return singular;
    }

}

module.exports = BeerSong;