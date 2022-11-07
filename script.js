"use-strict";

function setImage(playerChoice, computerChoice) {
    const player = document.querySelector(".player img");
    const enemy = document.querySelector(".opponent img");
    player.src = `images/image${playerChoice}.webp`;
    enemy.src = `images/image${computerChoice}.webp`;
}

function computer_plays(playerChoice) {
    const message = document.querySelector(".message");
    const computerMove = Math.trunc(Math.random() * 3 + 1);
    const playerScore = document.querySelector(".player .score");
    const opponentScore = document.querySelector(".opponent .score");

    let playerWins = true;
    let draw = false;
    setImage(playerChoice, computerMove);
    if (playerChoice == computerMove) {
        message.textContent = "It's a draw";
        draw = true;
    } else if (playerChoice === 1) {
        if (computerMove === 2) {
            message.textContent = "You Lose";
            playerWins = false;
        } else if (computerMove === 3) {
            message.textContent = "You Win";
        }
    } else if (playerChoice === 2) {
        if (computerMove === 3) {
            message.textContent = "You Lose";
            playerWins = false;
        } else if (computerMove === 1) {
            message.textContent = "You Win";
        }
    } else if (playerChoice === 3) {
        if (computerMove === 1) {
            playerWins = false;
            message.textContent = "You Lose";
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

}

window.addEventListener("click", (e) => {
    const playerChoice = Number(e.target.attributes[0].value);
    if (playerChoice) {
        computer_plays(playerChoice);
    }
})
