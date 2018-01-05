var inquirer = require('inquirer');
var Word = require('./word.js');
var Logic = require('./logic.js');
var Topics = require('./topic.js');

var game = {

    guess: "",

    guesses: [],

    // imported shuffle logic mixes options
    words: Logic.shuffleArray(Topics.programming),

    wordCount: 0,

    current: {},

    init: function () {

        if (game.words[game.wordCount]) {

            game.current = new Word.Word(game.words[game.wordCount]);
            let display = [];
            for (let i = 0; i < game.current.letters.length; i++) {

                display.push("_");

            };
            console.log(" ");
            console.log("~~~ New round!! ~~~");
            console.log("---------------------------------");
            console.log(display);
            console.log("---------------------------------");
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

            if (game.guess === res.guess) {
                console.log(res.guess + " has already been chosen");
                game.prompt();
            } else {
                game.guess = res.guess;

                game.eval(res.guess);
            };

        })
    },


    eval: function (guess) {

        game.guesses.push(" " + game.guess);

        var display = [];

        for (let i = 0; i < game.current.letters.length; i++) {

            let letter = game.current.letters[i].letter;

            if (guess === letter) {
                game.current.letters[i].guessed = true;
                game.current.letters[i].display = letter;
                game.guesses.pop();
            };

            display.push(game.current.letters[i].display);

        };
        console.log(" ");
        console.log("~~~ You guessed " + guess + " ~~~");
        console.log("---------------------------------");
        console.log(display);
        console.log("---------------------------------");
        console.log("Your guesses: " + game.guesses);
        game.check(display);

    },

    check: function (array) {

        if (game.guesses.length > 7) {
            console.log("you lose");
            console.log("The answer was: " + game.current.word);
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