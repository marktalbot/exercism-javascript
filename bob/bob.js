'use strict';

class Conversation {

    constructor(speech) {
        this.speech = speech.trim();
    }

    isSilence() {
        return this.speech.length === 0;
    }

    isQuestion() {
        return this.speech.substr(-1, 1) === '?';
    }

    isYelling() {
        return this.speech.match(/[a-zA-Z]/g) && this.speech === this.speech.toUpperCase();
    }

    getResponse() {
        if (this.isYelling()) {
            return 'Whoa, chill out!';
        } else if (this.isQuestion()) {
            return 'Sure.';
        } else if (this.isSilence()) {
            return 'Fine. Be that way!'
        } else {
            return 'Whatever.';            
        }
    }
}

class Bob {
    
    hey(input) {
        let conversation = new Conversation(input);
        return conversation.getResponse();
    }
}

module.exports = Bob;