'use strict';

class Anagram {

    constructor(word) {
        this.word = word;
    }

    matches(...candidates) {
        return this.getAnagrams(candidates);
    }

    getAnagrams(candidates) {
        let words = this.transformInput(candidates)
            .filter((candidate) => !this.isOwnAnagram(candidate, this.word))
            .filter((candidate) => this.isSameLength(candidate, this.word))
            .filter((candidate) => {
                let wordArray      = this.word.split('').sort((a,b) => a.toLowerCase() > b.toLowerCase());
                let candidateArray = candidate.split('').sort((a,b) => a.toLowerCase() > b.toLowerCase());
                return wordArray.every((value, index) => {
                    return value.match(new RegExp(candidateArray[index], 'i'));
                });
            }
        );
        return words;
    }

    transformInput(candidates) {
        let input = candidates.length === 1 ? candidates[0] : candidates;

        if (typeof input === 'string') {
            return [input];
        }
        return input;
    }

    isSameLength(str1, str2) {
        return str1.length === str2.length;
    }

    isOwnAnagram(str1, str2) {
        return !!str1.match(new RegExp(str2, 'i'));
    }
}

module.exports = Anagram;