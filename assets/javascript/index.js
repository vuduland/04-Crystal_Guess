var game = {
    guessedNums: [],
    winCount: 0,
    lossCount: 0,
    playAgain: "You've lost. Insert floppy disk to continue. Just kidding. Press Ok.",
    winPlayAgain: "You won! Press Ok to play again!",
},

var minNum = 1;
var maxNum = 12;
var minTwo = 19;
var maxTwo = 120;
function randNum(min, max) {
    min = Math.ceil(minTwo);
    max = Math.floor(maxTwo);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
console.log(randNum(minTwo, maxTwo));

$('')



