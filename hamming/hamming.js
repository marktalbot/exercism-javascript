'use strict';

class Hamming {
    
    compute(dna1, dna2) {
        if (dna1.length !== dna2.length) {
            throw new Error('DNA strands must be of equal length.');
        }

        return dna1.split('')
                   .filter((acid, index) => acid !== dna2[index])
                   .length;
    }
}

module.exports = Hamming;