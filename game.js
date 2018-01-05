var inquirer = require('inquirer');
var Word = require('./word.js');
var Logic = require('./logic.js');

var game = {

    guess: "",

    guesses: [],

    // imported shuffle logic mixes options
    words: Logic.shuffleArray(["zero", "one", "two", "three", "four"]),

    wordCount: 0,

    current: {},

    init: function () {

        if (game.words[game.wordCount]) {

            game.current = new Word.Word(game.words[game.wordCount]);
            let display = [];
            for (let i = 0; i < game.current.letters.length; i++) {

                display.push("_");

            };
            console.log(display);
            game.wordCount++;

            game.prompt();
        } else {
            console.log("end");
            return;
        }
    },

    prompt: function () {

        inquirer.prompt([{
            type: "input",
            name: "guess",
            message: "Guess a letter: "
        }]).then(function (res) {
            game.guesses.push(" " + res.guess);

            game.eval(res.guess);
        })
    },


    eval: function (guess) {

        

        var display = [];

        for (let i = 0; i < game.current.letters.length; i++) {

            let letter = game.current.letters[i].letter;

            if (guess === letter) {
                game.current.letters[i].guessed = true;
                game.current.letters[i].display = letter;
            };

            display.push(game.current.letters[i].display);

        };
        console.log(" ");
        console.log("---------------------------------");
        console.log(display);
        console.log("---------------------------------");
        console.log(" ");
        console.log("Your guesses: " + game.guesses);
        game.check(display);

    },

    check: function (array) {

        if (game.guesses.length > 5) {
            console.log("you lose");
            game.guesses = [];
            game.init();
        } else {

            if (array.indexOf("_") < 0) {
                console.log("win");
                game.guesses = [];
                game.init();
            } else {
                game.prompt();
            }
        }

    }
};

game.init();

// game.prompt();