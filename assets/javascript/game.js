var game = {
  crystals: [0, 0, 0, 0],
  wins: 0,
  losses: 0,
  currentScore: 0,

  lossPlayAgain: "You've lost. Insert floppy disk to continue. Just kidding. Press Ok.",
  winPlayAgain: 'You won! Press Ok to play again!',

  // methods
  cumulativeNum: function (crystal) {
    currentScore += crystal;
    return this.currentScore;
  },
  generatedNum: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

var min = 1;
var max = 12;
var maxTwo = 120;
var minTwo = 19;

// var generatedNum = function (min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
// }

// append functions
$('#generatedNum').append(game.generatedNum(minTwo, maxTwo)),
  $('#wins').append(game.wins),
  $('#losses').append(game.losses),
  $('#cumulativeNum').append(game.cumulativeNum);

// on-click button functions
$('#button1').click(function () {
  game.cumulativeNum += game.crystals[0];
  console.log(game.cumulativeNum + ' button1');
  $('#cumulativeNum').html('Your number: ' + game.cumulativeNum);
}),
  $('#button2').click(function () {
    game.cumulativeNum += game.crystals[1];
    console.log(game.cumulativeNum + ' button2');
    $('#cumulativeNum').html('Your number: ' + game.cumulativeNum);

  }),
  $('#button3').click(function () {
    game.cumulativeNum += game.crystals[2];
    console.log(game.cumulativeNum + ' button3');
    $('#cumulativeNum').html('Your number: ' + game.cumulativeNum);

  }),
  $('#button4').click(function () {
    game.cumulativeNum += game.crystals[3];
    console.log(game.cumulativeNum + ' button4');
    $('#cumulativeNum').html('Your number: ' + game.cumulativeNum);
  }),

  // on-click start button
  $('#getStarted').click(function () {
    for (let i = 0; i < 4; i++) {
      var num = game.generatedNum(min, max);
      if (game.crystals.includes(num)) {
        game.crystals.push(num);
        console.log(game.crystals + ' first log');
      }
    };
  },
  )

/*
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

4// ##### Option 1 Game design notes

//     * The random number shown at the start of the game should be between 19 - 120.

//         * Each crystal should have a random hidden value between 12
*/
