'use strict';

class Isogram {

    constructor(word) {
        this.word = this.sanitizeInput(word);
        this.duplicateCount = 0;
    }

    isIsogram() {
        this.setDuplicateCounts();

        if (this.duplicateCount > 0) {
            return false;
        }
        return true;
    }

    setDuplicateCounts() {
        let letterCounts = this.getLetterCounts();

        for (let letter in letterCounts) {
            if (letterCounts[letter] > 1) {
                this.duplicateCount = letterCounts[letter];
            }
        }
    }

    sanitizeInput(str) {
        return str.toLowerCase().replace(/[ \-]/g, '');
    }

    getLetterCounts() {
        return this.word.split('').reduce((acc, next) => {
            if (acc[next]) {
                acc[next]++;
            } else {
                acc[next] = 1;
            }
            return acc;
        }, {});
    }
}

module.exports = Isogram;