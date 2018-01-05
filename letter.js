module.exports = {
    Letter: function (letter, index) {
        this.letter = letter[index];
        this.guessed = false;
    }
}
// console.log(new Letter("hi", 0));