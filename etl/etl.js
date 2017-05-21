'use strict';

class ETL {

    constructor() {
        this.letterValues;
    }

    transform(data) {
        this.letterValues = {};
        for (let property in data) {
            data[property].map(key => key.toLowerCase())
                .forEach(key => {
                    this.letterValues[key] = parseInt(property);
                }
            );
        }
        return this.letterValues;
    }

}

module.exports = ETL;