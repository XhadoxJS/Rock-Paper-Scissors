//Rock Paper Scissors Game
function computerPlay() {
    let selectionNumber = getRandomIntInclusive(1,3);
    let selectionChoice = (selectionNumber == 1) ? "rock" : (selectionNumber == 2) ? "paper" : "scissors";
    return(selectionChoice)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        console.log(`This round is a tie! You and the computer have picked ${playerSelection}!`);
        alert(`This round is a tie! You and the computer have picked ${playerSelection}!`);
        return 'tie'
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        console.log(`You lose this round! You picked ${playerSelection} and the computer picked ${computerSelection}!`);
        alert(`You lose this round! You picked ${playerSelection} and the computer picked ${computerSelection}!`)
        return 'loser'
    }
    else if ((playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'rock' && computerSelection == 'scissors')) {
        console.log(`You win this round! You picked ${playerSelection} and the computer picked ${computerSelection}!`);
        alert(`You win this round! You picked ${playerSelection} and the computer picked ${computerSelection}!`);
        return 'winner'
    }
    else {
        console.log('You have entered an invalid option! Please try again.');
        alert('You have entered an invalid option! Please try again.');
        return 'invalid'
    }
  }
  

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Do you pick rock, paper, or scissors?');
        let computerSelection = computerPlay();
        let roundWInner = playRound(playerSelection,computerSelection);
        switch (roundWInner) {
            case 'tie':
            case 'invalid':
                i--;
                break
            case 'loser':
                computerScore++;
                break
            case 'winner':
                playerScore++;
                break
        }
    }

    let gameWinner = (playerScore > computerScore) ? `You win the game with a score of ${playerScore} to ${computerScore}.` : `You lose the game with a score of ${playerScore} to ${computerScore}.`;
    alert(gameWinner);
    return(gameWinner)
}

console.log(game());