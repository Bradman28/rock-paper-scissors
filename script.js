/* 
- computer generates random 'rock', 'paper' 'scissor'
- user inputs their selection
- determine what beats what, if user select rock etc console.log "You win"
- message to determine result of round
- first to 5 wins the game */

let playerScore = 0
let computerScore = 0

//function that generates random choice for computer

function computerPlay () {
    let randomOptions = [
        "rock",
        "paper",
        "scissors",
    ];
    let computerRandom = randomOptions[Math.floor(Math.random()*randomOptions.length)];
    console.log(computerRandom);
    return computerRandom;
}

// function that gives input for player

function playerPlay () {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    console.log (input)
    return input;
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore++;
            console.log ("You Lose! Paper beats Rock!")
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            console.log ("You Win! Rock beats Scissors!")
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            console.log ("You Lose! Scissors beat Paper!")
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            console.log ("You Win! Paper beats Rock!")
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            console.log ("You Lose! Rock beats Scissors!")
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            console.log ("You Win! Scissors beat Paper!")
        }
        else if (playerSelection === computerSelection) {
            console.log ("Tie! No Winners for this round.")
        }
        else {
            console.log ("No good")
        }
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


function game() {
    for (let i = 0; i <= 5; i++) {
        playRound();
        if (i<5) {
            console.log ("My score" + " " + playerScore)
            console.log ("Computer score" + " " + computerScore)

        }
        else if (i >=5) {
            console.log ("Game Over")
        }
    }
}

game ()


