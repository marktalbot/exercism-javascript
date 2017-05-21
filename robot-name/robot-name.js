'use strict';

const robotInventory = [];

class Robot {

    constructor() {
        this.name = this.generateName();
    }

    generateName() {
        let robotName = `${this.randomLetters()}${this.randomNumbers()}`;

        if (robotInventory.includes(robotName)) {
            return this.generateName();
        }

        robotInventory.push(robotName);

        return robotName;
    }

    randomLetters() {
        return String.fromCharCode(97 + Math.floor(Math.random() * 26), 97 + Math.floor(Math.random() * 26)).toUpperCase();
    }

    randomNumbers() {
        return Math.floor(Math.random() * 1000);
    }

    reset() {
        this.name = this.generateName();
    }
}

module.exports = Robot;