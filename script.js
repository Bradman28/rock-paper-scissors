/* 
- computer generates random 'rock', 'paper' 'scissor'
- user inputs their selection
- determine what beats what, if user select rock etc console.log "You win"
- message to determine result of round
- first to 5 wins the game */

let playerScore = 0
let computerScore = 0


// function that gives input for player

function playerPlay () {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    console.log (input);
    return input;
}

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

function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore++;
            console.log ("You Lose! Paper beats Rock!");
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            console.log ("You Win! Rock beats Scissors!");
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            console.log ("You Lose! Scissors beat Paper!");
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            console.log ("You Win! Paper beats Rock!");
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            console.log ("You Lose! Rock beats Scissors!");
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            console.log ("You Win! Scissors beat Paper!");
        }
        else if (playerSelection === computerSelection) {
            console.log ("Tie! No Winners for this round.");
        }
        else {
            return "Not an available choice";
        }
}

function declareWinner() {
    if (computerScore > playerScore) {
        console.log ("You lose the game!")
        console.log ("Your score:" + " " + playerScore + " " + "Computer score:" + " " + computerScore)
}

    else if (computerScore < playerScore) {
            console.log ("You win the game!")
            console.log ("Your score:" + " " + playerScore + " " + "Computer score:" + " " + computerScore)
    }
}


function game() {
    for (let i = 0; i <= 5; i++) {
        if (i<5) {
            const computerSelection = computerPlay();
            const playerSelection = playerPlay();
            playRound(playerSelection, computerSelection);
            console.log ("My score:" + " " + playerScore)
            console.log ("Computer score:" + " " + computerScore)
        }
        else if (i >=5) {
            console.log ("Game Over")
            console.log(declareWinner())
        }
    }
}

game ()


