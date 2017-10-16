'use strict';

class Cipher {

    constructor(key) {
        this.validateKey(key);
        this.key = key || 'aaaaaaaaaaaaaaaaaa';
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
        this.keyShiftValues = this.setKeyShiftValues();
// console.log('key shift values:', this.keyShiftValues)
    }

    validateKey(key) {
        if (/[A-Z0-9]/.test(key) || key === '') {
            throw new Error('Bad key');
        }
    }

    encode(str) {

        let alphabetArray = this.alphabet.split('');
        let encodeArray = str.split('');
        let keyArray = this.key.split('');

        let encodeAlphaIndexMap = encodeArray.map((letter) => this.getShiftValue(letter));
        let keyAlphaIndexMap = keyArray.map((letter) => this.getShiftValue(letter));



        let lookup = encodeAlphaIndexMap.map((number, index) => {
            if (str == 'zzzzzzzzzz') {
                console.log(keyAlphaIndexMap[index], number);
            }
            return alphabetArray[keyAlphaIndexMap[index] - number];
        });
        
        if (str == 'zzzzzzzzzz') {
            // console.log(str,'->',encodeAlphaIndexMap, this.key, '->', alphabetArray[25]);
            // console.log(this.key, lookup, str);
        }
        // console.log(this.key, lookup, str);
        return lookup.join('');
    }

    decode(str) {
        let alphabetArray = this.alphabet.split('');
        let encodeArray = str.split('');
        let keyArray = this.key.split('');

        let encodeAlphaIndexMap = encodeArray.map((letter) => this.getShiftValue(letter));
        let keyAlphaIndexMap = keyArray.map((letter) => this.getShiftValue(letter));

        // console.log(str,'->',encodeAlphaIndexMap, this.key, '->', keyAlphaIndexMap);

        let lookup = encodeAlphaIndexMap.map((number, index) => {
            return alphabetArray[keyAlphaIndexMap[index] - number];
        });

        // console.log('decode return value', lookup, str);
        return lookup.join('');
    }

    getShiftValue(letter) {
        return this.alphabet.split('').indexOf(letter);
    }

    setKeyShiftValues() {
        return this.key.split('').map((letter) => {
            // console.log('letter:', letter, ' ->', this.getShiftValue(letter));
            return this.getShiftValue(letter);
        });
    }
}

module.exports = Cipher;