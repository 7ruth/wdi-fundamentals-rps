/////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    alert("Please choose either 'rock', 'paper', or 'scissors'.");
    
    var response=prompt();
    
    if (response!=='rock' && response!=='paper' && response!=='scissors') {
        while (response!=='rock' && response!=='paper' && response!=='scissors') {
            alert("C'mon, please please choose only 'rock', 'paper', or 'scissors'.");
            response=prompt();}
    }
    
    return response;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        console.log('computer picked: rock');
        return "rock";
    } else if (randomNumber < 0.66) {
        console.log('computer picked: paper');
        return "paper";
    } else {
        console.log('computer picked: scissors');
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////



function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === undefined || move === null) {
        return getInput();
    } else { 
        return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === undefined || move === null) {
        return randomPlay();
    } else { 
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */


    // set up an array of choices possible//
    var choices = ["rock", "paper", "scissors"];
    //make empty object//
    var map = {};
    
    //start ForEach//
    choices.forEach(function(choice, i) {

    //create an empty object for each choice on each iteration of ForEach//
    map[choice] = {};
    //start a loop that defines half; goes up to choices array length;//
    for (var j = 0, half = (choices.length-1)/2; j < choices.length; j++) {
        // opposition is i(index of the array)+j (for loop iteration), % of array lenght//
        var opposition = (i+j)%choices.length;
        if (!j)
        // when j =0, map choice against itself as a tie//
            map[choice][choice] = "tie";
        else if (j <= half)
        // if j=1 (which is below or equal to half in this array), than map choice against choice which is equal to index of choice from array choices plus J % choices.length//
            map[choice][choices[opposition]] = "computer wins";
        else
            map[choice][choices[opposition]] = "player wins";
    }
});

    winner= map[playerMove][computerMove];
    return winner;
}




function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var tie = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times

    

    while (playerWins<x && computerWins<x) {
    var winner =getWinner(getPlayerMove(),getComputerMove());
    if (winner==='player wins') {
        playerWins=playerWins+1;
    } else if (winner==='computer wins') { computerWins=computerWins+1;
    } else { tie = tie+1; }
}



    return 'player won '+playerWins + (playerWins>1 && playerWins!==0 ? ' times':' time')
            +' and computer won '+computerWins+(computerWins>1 && computerWins!==0 ? ' times':' time')
            +', while tying '+tie+(tie>1 && tie!==0 ? ' times':' time');
}

playTo(5); 