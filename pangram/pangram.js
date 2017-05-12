'use strict';

class Pangram {
    constructor(str) {
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        this.str = str.toLowerCase();
    }

    isPangram() {
        let missingLetters = this.alphabet.filter((letter) => !this.str.includes(letter));

        if (missingLetters.length > 0) {
            return false;
        }

        return true;
    }
}

module.exports = Pangram;