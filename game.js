var inquirer = require('inquirer');
var Word = require('./word.js');
var Logic = require('./logic.js');

var game = {

    guess: "",

    words: ["zero", "one", "two", "three", "four"],

    current: {},

    init: function () {

        // imported shuffle logic mixes options
        game.words = Logic.shuffleArray(game.words);

        console.log(game.words);

        game.current = new Word.Word(game.words[0]);

        console.log(game.current);

        

        game.prompt();
    },

    prompt: function () {

        inquirer.prompt([{
            type: "input",
            name: "guess",
            message: "Guess a letter: "
        }]).then(function (res) {
            game.eval(res.guess);
        })
    },

    eval: function (guess) {

        console.log(guess);

        for (let i = 0; i < game.current.letters.length; i++) {
            console.log(game.current.letters[i]);
            // if (guess === game.current[i].Letter) {

            // }
        };


    }
};

game.init();

// game.prompt();