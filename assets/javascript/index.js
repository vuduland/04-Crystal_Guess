var game = {
    guessedNums: [],
    winCount: 0,
    lossCount: 0,
    playAgain: "You've lost. Insert floppy disk to continue. Just kidding. Press Ok.",
    winPlayAgain: "You won! Press Ok to play again!",
    randNum: $('#')
},

var min = 1;
var max = 12;
var maxTwo = 120;
var minTwo = 19;
function crystalNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


$('')