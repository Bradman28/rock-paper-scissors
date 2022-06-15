/* 
- computer generates random 'rock', 'paper' 'scissor'
- user inputs their selection
- determine what beats what, if user select rock etc console.log "You win"
- message to determine result of round */

//function that generates random choice for computer
function computerPlay () {
    let computerRandom = [
        "Rock",
        "Paper",
        "Scissors",
    ];
    let randomChoice = computerRandom[Math.floor(Math.random()*computerRandom.length)];
    console.log(randomChoice);
    return randomChoice;
}

const computerTurn = computerPlay()
