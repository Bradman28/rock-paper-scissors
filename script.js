/* 
- computer generates random 'rock', 'paper' 'scissor'
- user inputs their selection
- determine what beats what, if user select rock etc console.log "You win"
- message to determine result of round
- first to 5 wins the game */

//function that generates random choice for computer
function computerPlay () {
    let randomOptions = [
        "Rock",
        "Paper",
        "Scissors",
    ];
    let computerRandom = randomOptions[Math.floor(Math.random()*randomOptions.length)];
    console.log(computerRandom);
    return computerRandom;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Paper") {
        console.log ("You Lose! Paper beats Rock!")
    }
    else if (playerSelection === "rock" && computerSelection === "Scissors") {
        console.log ("You Win! Rock beats Scissors!")
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        console.log ("You Lose! Scissors beat Paper!")
    }
    else if (playerSelection === "paper" && computerSelection === "Rock") {
        console.log ("You Win! Paper beats Rock!")
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        console.log ("You Lose! Rock beats Scissors!")
    }
    else if (playerSelection === "scissors" && computerSelection === "Paper") {
        console.log ("You Win! Scissors beat Paper!")
    }
    else {
        console.log ("Tie! No Winners for this round.")
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
