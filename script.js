"use-strict";

const player = document.querySelector(".player img");
const enemy = document.querySelector(".opponent img");
const message = document.querySelector(".message");
const playerScore = document.querySelector(".player .score");
const opponentScore = document.querySelector(".opponent .score");
let winner = false;

function resetGame() {
    playerScore.textContent = 0;
    opponentScore.textContent = 0;
    player.src = `images/image1.webp`;
    enemy.src = `images/image1.webp`;
    winner = false;
    message.textContent = "Make a move";
}

function setImage(playerChoice, computerChoice) {

    player.src = `images/image${playerChoice}.webp`;
    enemy.src = `images/image${computerChoice}.webp`;
}

function computer_plays(playerChoice) {
    const computerMove = Math.trunc(Math.random() * 3 + 1);
    let playerWins = true;
    let draw = false;
    setImage(playerChoice, computerMove);
    if (playerChoice == computerMove) {
        message.textContent = "It's a draw";
        draw = true;
    } else if (playerChoice === 1) {
        if (computerMove === 2) {
            message.textContent = "Computer Wins";
            playerWins = false;
        } else if (computerMove === 3) {
            message.textContent = "You Win";
        }
    } else if (playerChoice === 2) {
        if (computerMove === 3) {
            message.textContent = "Computer Wins";
            playerWins = false;
        } else if (computerMove === 1) {
            message.textContent = "You Win";
        }
    } else if (playerChoice === 3) {
        if (computerMove === 1) {
            playerWins = false;
            message.textContent = "Computer Wins";
        } else if (computerMove === 2) {
            message.textContent = "You Win";
        }
    }


    if (!draw) {
        if (playerWins) {
            playerScore.textContent = Number(playerScore.textContent) + 1;
        } else {
            opponentScore.textContent = Number(opponentScore.textContent) + 1;
        }
    }

    const finalPlayerScore = Number(playerScore.textContent);
    const finalOpponentScore = Number(opponentScore.textContent);

    if (finalPlayerScore === 5) {
        winner = true;
        message.textContent = "You've won the game";
    } else if (finalOpponentScore === 5) {
        winner = true;
        message.textContent = "Computer has won this game";
    }
}

window.addEventListener("click", (e) => {
    if (winner) {
        resetGame();
        return;
    }
    const playerChoice = Number(e.target.attributes[0].value);
    if (playerChoice) {
        computer_plays(playerChoice);
    }
})



resetGame();