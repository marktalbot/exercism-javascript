'use strict';

class Anagram {

    constructor(word) {
        this.word = word;
    }

    matches(...candidates) {
        return this.getAnagrams(candidates);
    }

    getAnagrams(candidates) {
        let anagrams = this.transformInput(candidates)
            .filter((candidate) => !this.isOwnAnagram(candidate, this.word))
            .filter((candidate) => this.isSameLength(candidate, this.word))
            .filter((candidate) => this.isMatch(candidate, this.word)
        );
        return anagrams;
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

    isMatch(str1, str2) {
        let wordArray      = str2.split('').sort((a,b) => a.toLowerCase() > b.toLowerCase());
        let candidateArray = str1.split('').sort((a,b) => a.toLowerCase() > b.toLowerCase());
        return wordArray.every((value, index) => {
            return value.match(new RegExp(candidateArray[index], 'i'));
        });
    }
}

module.exports = Anagram;