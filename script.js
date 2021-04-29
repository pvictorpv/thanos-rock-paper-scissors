// Player choice
const playerSelection = prompt('Choose: rock, paper or scissors?').toLowerCase();
console.log(`You chose ${playerSelection}.`)

// Computer random choice function
function computerPlay() {
    let play = Math.floor(Math.random() * 3) + 1;
    if (play === 1) {
        return 'rock';
    } else if (play === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
//console.log(`The computer chose ${computerPlay()}.`);
const computerSelection = computerPlay();
console.log(`The computer chose ${computerSelection}.`);

// Score variables
let humanScore = 0;
let computerScore = 0;

// One Round function
function playRound (playerSelection, computerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'rock') {
        console.log('Draw!');
    }   else if (computerSelection === 'rock' && playerSelection === 'paper') {
        console.log('You win! Congratulations!');
        humanScore++;
    }   else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log('You lose! :( Try again!');
        computerScore++;
    }

    if (computerSelection === 'paper' && playerSelection === 'paper') {
        console.log('Draw!');
    }   else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        console.log('You win! Congratulations!')
        humanScore++;
    }   else if (computerSelection === 'paper' && playerSelection === 'rock') {
        console.log('You lose! :( Try again!')
        computerScore++;
    }

    if (computerSelection === 'scissors' && playerSelection === 'scissors') {
        console.log('Draw!');
    }   else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        console.log('You win! Congratulations!')
        humanScore++;
    }   else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log('You lose! :( Try again!')
        computerScore++;
    }
}

// Five rounds funciton (pending loop)
function game() {
    playRound (playerSelection, computerSelection);
    console.log (`Score: You ${humanScore} X ${computerScore} Computer`);
}

game();

