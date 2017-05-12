'use strict';

class Gigasecond {

    constructor(start) {
        this.start = start;
        this.giga = 1000000000;
    }

    date() {
        return this.dateToGiga(this.start);
    }

    dateToGiga(start) {
        return new Date(((start.getTime() / 1000) + this.giga) * 1000);
    }
}

module.exports = Gigasecond;