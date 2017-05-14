'use strict';

class PhoneNumber {
    
    constructor(phoneNumber) {
        this.phoneNumber = this.sanitize(phoneNumber);
    }

    number() {
        if (!this.isValidLength()) {
            return '0000000000';
        }
        if (this.hasValidCountryCode()) {
            return this.phoneNumber.substring(1);
        }

        return this.phoneNumber;
    }

    areaCode() {
        if (this.hasAreaCode()) {
            return this.phoneNumber.slice(0, 3);
        }
    }

    toString() {
        let areaCode         = this.phoneNumber.slice(0, 3);
        let exchangeCode     = this.phoneNumber.slice(3, 6);
        let subscriberNumber = this.phoneNumber.slice(6, 10);

        return `(${areaCode}) ${exchangeCode}-${subscriberNumber}`;
    }

    sanitize(str) {
        return str.replace(/\D/g,'');
    }

    isValidLength() {
        if (this.phoneNumber.length === 10) {
            return true;
        }
        if (this.phoneNumber.length === 11 && this.phoneNumber[0] == 1) {
            return true;
        }
        return false;
    }

    hasValidCountryCode() {
        if (this.phoneNumber.length === 11 && this.phoneNumber[0] == 1) {
            return true;
        }
        return false;
    }

    hasAreaCode() {
        if (this.phoneNumber.length === 10) {
            return true;
        }
        return false;
    }
}

module.exports = PhoneNumber;