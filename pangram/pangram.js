'use strict';

class Pangram {
    constructor(str) {
        this.alphabet = ['a','b','c','d','e','e','e','f','g','h','h','i','j','k','l','m','n','o','o','o','o','p','q','r','r','s','t','t','u','u','v','w','x','y','z'];
        this.str = str;
    }

    isPangram() {
        if (this.str.length === 0) {
            return false;
        }

        this.alphabet.forEach((letter) => {
            if (!this.str.includes(letter)) {
                return false;
            };
        });

        return true;
    }
}

module.exports = Pangram;