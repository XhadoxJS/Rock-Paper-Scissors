//Rock Paper Scissors Game
function computerPlay() {
    let selectionNumber = getRandomIntInclusive(1,3);
    let selectionChoice = (selectionNumber == 1) ? "rock" : (selectionNumber == 2) ? "paper" : "scissors";
    return(selectionChoice)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return 'tie'
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return 'loser'
    }
    else if ((playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'rock' && computerSelection == 'scissors')) {
       return 'winner'
    }
    else {
        return 'invalid'
    }
  }
  

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rockRound() {
    let computerSelection = computerPlay();
    return playRound('rock',computerSelection)
}
function paperRound() {
    let computerSelection = computerPlay();
    return playRound('paper',computerSelection)
}
function scissorsRound() {
    let computerSelection = computerPlay();
    return playRound('scissors',computerSelection)
}
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const buttons = document.querySelectorAll('button');
const pScore = document.getElementById('span1');
const cScore = document.getElementById('span2');
const winner = document.getElementById('roundWinner')
const rPlayed = document.getElementById('span3');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (e.target.id == 'reset' || computerScore == 5 || playerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            roundsPlayed = 0
            pScore.textContent = `${playerScore}`;
            cScore.textContent = `${computerScore}`;
            winner.textContent = 'Begin!';
            rPlayed.textContent = `${roundsPlayed}`;
            return
        }
        let playerSelection = (e.target.id == 'rockBtn') ? 'rock' : (e.target.id == paperBtn) ? 'paper' : 'scissors';
        let computerSelection = computerPlay();
        let roundWinner = playRound(playerSelection, computerSelection);
        ++roundsPlayed;
        switch (roundWinner) {
            case 'tie':
                winner.textContent = `This round is a tie! You and the computer have picked ${playerSelection}!`;
                rPlayed.textContent = `${roundsPlayed}`;
            case 'invalid':
                break
            case 'loser':
                ++computerScore;
                cScore.textContent = `${computerScore}`;
                rPlayed.textContent = `${roundsPlayed}`;
                winner.textContent = `You lose this round! You picked ${playerSelection} and the computer picked ${computerSelection}!`;
                if (computerScore == 5) {
                    winner.textContent = `You lose with a score of ${playerScore} to ${computerScore}!!!`
                }
                break
            case 'winner':
                ++playerScore;
                pScore.textContent = `${playerScore}`;
                rPlayed.textContent = `${roundsPlayed}`;
                winner.textContent = `You win this round! You picked ${playerSelection} and the computer picked ${computerSelection}!`;
                if (playerScore == 5) {
                    winner.textContent = `You win with a score of ${playerScore} to ${computerScore}!!!`
                }
                break
        }
    });
});