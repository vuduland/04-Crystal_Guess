var game = {
    guessedNumbers: [],
    wins: 0,
    losses: 0,
    lossPlayAgain: "You've lost. Insert floppy disk to continue. Just kidding. Press Ok.",
    winPlayAgain: "You won! Press Ok to play again!",

    numRandom: document.getElementById("#generatedNum"),
    cumulativeNum: document.getElementById("#cumulativeNum"),
    winCount: document.getElementById("win-box"),
    lossCount: document.getElementById("loss-box"),
};

var min = 1;
var max = 12;
var maxTwo = 120;
var minTwo = 19;
function crystalNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function generatedNum(minTwo, maxTwo) {
    minTwo = Math.ceil(minTwo);
    maxTwo = Math.floor(maxTwo);
    return Math.floor(Math.random() * (maxTwo - minTwo + 1)) + minTwo; //The maximum is inclusive and the minimum is inclusive 
}
$(game.numRandom).text("hello");//these aren't working D: 
$(game.numRandom).generatedNum(minTwo, maxTwo).append("hello");


// function buttonNum() {
//     for (var i = 0; i < 3; i++) {
        
        
//     }
// }



console.log(crystalNum(min, max));

console.log(generatedNum(minTwo, maxTwo));



  //crystalNum: document.getElementById("#")
    // functions:
    //   var buttonTime = function() {
    //     $('')
    //     }












//     3. Here's how the app works:

//         * There will be four crystals displayed as buttons on the page. done

//    * The player will be shown a random number at the start of the game. random function

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

//         * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//         * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number.Also, all the crystals will have four new hidden values.Of course, the user's score (and score counter) will reset to zero.

//         * The app should show the number of games the player wins and loses.To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

//     * The random number shown at the start of the game should be between 19 - 120.

//         * Each crystal should have a random hidden value between 1 - 12.









