'use strict';

class DnaTranscriber {

    constructor() {
        this.dictionary = new Map();
        this.dictionary.set('G', 'C');
        this.dictionary.set('C', 'G');
        this.dictionary.set('T', 'A');
        this.dictionary.set('A', 'U');
    }

    toRna(str) {
        return str.split('').map(item => {
            if (!this.dictionary.has(item)) {
                throw new Error('Invalid input');
            }
            return this.dictionary.get(item);
        }).join('');
    }
}

module.exports = DnaTranscriber;