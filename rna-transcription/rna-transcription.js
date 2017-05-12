'use strict';

class DnaTranscriber {

    constructor() {
        this.dictionary = new Map([
            ['G', 'C'],
            ['C', 'G'],
            ['T', 'A'],
            ['A', 'U']
        ]);
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