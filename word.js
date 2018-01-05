var Letter = require('./Letter.js');

module.exports = {
    Word: function (word) {
        this.word = word;
        this.letters = [];

        for (let x = 0; x < this.word.length; x++) {
    
            this.letters.push(new Letter.Letter(this.word, x))
        };


    }
}

