var inquirer = require('inquirer');

var game = {

    guess: "",

    prompt: function () {

        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Guess a letter: "
            }
        ]).then(function (res) {
            game.eval(res.guess);
        })
    },

    eval: function(guess) {

        console.log(guess);
    }
};

game.prompt();

