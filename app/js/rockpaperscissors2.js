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


    
    if ((playerMove==='rock' || computerMove==='rock') && (playerMove==='scissors' || computerMove==='scissors')) {
        if (playerMove==='rock') {
        winner = 'player wins'; 
        return winner;
        } else {
        winner = 'computer wins';
        return winner;
        }
    } 
    
    if ((playerMove==='scissors' || computerMove==='scissors') && (playerMove==='paper' || computerMove==='paper')) {
        if (playerMove==='scissors') {
        winner = 'player wins'; 
        return winner;
        } else {
        winner = 'computer wins';
        return winner;
        }
    }
    
    if ((playerMove==='paper' || computerMove==='paper') && (playerMove==='rock' || computerMove==='rock')) {
        if (playerMove==='paper') {
        winner = 'player wins'; 
        return winner;
        } else {
        winner = 'computer wins';
        return winner;
        }
    }
    
    if (playerMove===computerMove) {
        winner = 'tie';
        return winner;
    } 

    return winner;
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */


start: while(true) {

    if (getWinner(getPlayerMove(),getComputerMove())==='player wins') {
        playerWins=playerWins+1;
    } else { computerWins=computerWins+1;}

    if ((playerWins<x) && (computerWins<x)) continue start;
    break;
}

    return 'player won '+playerWins+' times'+' and computer won '+computerWins+' times';
}

playTo(5);