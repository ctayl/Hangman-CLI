var Letter = require('./Letter.js');

module.exports = {
    Word: function (word) {
        this.word = word;
        this.letters = [];

        console.log(this.word.length);
        for (let x = 0; x < this.word.length; x++) {
            console.log(x);
            this.letters.push(new Letter.Letter(this.word, x))
        };


    }
}

// Word.prototype.populate = function (input) {
//     for (let i = 0; i < input.word.legth; i++) {
//         this.letters.pop(new Letter(input.word, i))
//     }
// };
// var test = new Word("test");

// console.log(test);
// if (test.letters[0].guessed === false) {
//     test.letters[0].guessed = true
// };

// function show() {
//     for (let x = 0; x < this.word.length; x++) {


//         if (test.letters[0].guessed === false) {
//             console.log("_")
//         } else {
//             console.log(test.letters[0].letter)
//         }
//     };
// };
// show();