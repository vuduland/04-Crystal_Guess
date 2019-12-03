var game = {
  crystals: [0, 0, 0, 0],
  crysParams: [1, 12],
  targetParams: [19, 120],
  wins: 0,
  losses: 0,
  currentScore: 0,
  crystal: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  lossPlayAgain: "You've lost. Insert floppy disk to continue. Just kidding. Press Ok.",
  winPlayAgain: 'You won! Press Ok to play again!',

  // methods
  cumulativeNum: function (crystalsIndex) {
    this.currentScore += crystalsIndex;
    return this.currentScore;
  },
  generatedNum: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  updateGame: function () { //add params?
    $('#generatedNum').append(this.generatedNum(this.targetParams[0], this.targetParams[1])),
      $('#wins').append(this.wins),
      $('#losses').append(this.losses),
      $('#cumulativeNum').append(this.cumulativeNum);
    for (let i = 0; i <= 3; i++) {
      this.crystal[i].value = game.generatedNum(this.crysParams[0], this.crysParams[1]);

    }
    console.log(this.crystal);

  },

};
game.updateGame();

$('#button1').click(function () {
  game.currentScore += game.crystal[0].value;
  console.log(game.currentScore + ' currentScore');
  console.log(game.crystal[0].value + ' button1');
  $('#cumulativeNum').html('Your number: ' + game.currentScore);
}),
  $('#button2').click(function () {
    game.currentScore += game.crystal[1].value;
    console.log(game.currentScore + ' currentScore');
    console.log(game.crystal[1].value + ' button2');
    $('#cumulativeNum').html('Your number: ' + game.currentScore);
  }),
  $('#button3').click(function () {
    game.currentScore += game.crystal[2].value;
    console.log(game.currentScore + ' currentScore');
    console.log(game.crystal[2].value + ' button3');
    $('#cumulativeNum').html('Your number: ' + game.currentScore);
  }),
  $('#button4').click(function () {
    game.currentScore += game.crystal[3].value;
    console.log(game.currentScore + ' currentScore');
    console.log(game.crystal[3].value + ' button2');
    $('#cumulativeNum').html('Your number: ' + game.currentScore);
  })



  // on-click start button
  // $('#getStarted').click(function () {
  //   for (let i = 0; i < 4; i++) {
  //     var num = game.generatedNum(min, max);
  //     if (game.crystals.includes(num)) {
  //       game.crystals.push(num);
  //       console.log(game.crystals + ' first log');
  //     }
  //   };
  // },
  // )

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
