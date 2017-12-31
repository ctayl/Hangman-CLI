var inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "input",
        name: "test",
        message: "test-0",
    }
]).then(function(res){
    console.log(res);
})