'use strict';

class Anagram {

    constructor(word) {
        this.word = word;
        this.wordsArray = [];
    }

    matches(candidates) {
        this.getWordsOfEqualLength(candidates);
        this.getAnagrams(this.wordsArray);
        console.log(this.wordsArray);

        return this.wordsArray;
    }

    getWordsOfEqualLength(candidates) {
        let words = candidates.filter((candidate) => candidate.length === this.word.length);
        this.wordsArray = [...this.wordsArray, ...words];

        return this;
    }

    getAnagrams(candidates) {
        let words = candidates.filter((candidate) => {
            let letterArray = candidate.split('');
            return letterArray.every((letter) => this.word.includes(letter));
        });

        return this;
    }
}

module.exports = Anagram;