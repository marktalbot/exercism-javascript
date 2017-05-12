'use strict';

class Pangram {
    constructor(str) {
        this.alphabet = ['a','b','c','d','e','e','e','f','g','h','h','i','j','k','l','m','n','o','o','o','o','p','q','r','r','s','t','t','u','u','v','w','x','y','z'];
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