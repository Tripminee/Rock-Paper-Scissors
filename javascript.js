const resultDiv = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
const startgame = document.querySelector("#gameStart");

let playerScore = 0;
let opponentScore = 0;
let gameStart = false;

startgame.addEventListener("click", () => {
    gameStart = true;
    updateScore()
});

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (!gameStart) {
            return;
        }

        const playerSelection = button.dataset.choice;
        playRound(playerSelection);
    });
});

function updateScore(resultMessage) {
    resultDiv.textContent = `${playerScore} - ${opponentScore} (${resultMessage})`;
}

function computerChose() {
    const choice = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function resetGame() {
    playerScore = 0;
    opponentScore = 0;
}

function playRound(playerSelection) {
    const opponent = computerChose();
    let resultMessage = "";

    if (playerSelection === opponent) {
        resultMessage = "this is a draw";
    } else if (
        playerSelection === "Rock" && opponent === "Scissor" ||
        playerSelection === "Paper" && opponent === "Rock" ||
        playerSelection === "Scissor" && opponent === "Paper"
    ) {
        playerScore++;
        resultMessage = "You WIN!!";
    } else if (
        playerSelection === "Rock" && opponent === "Paper" ||
        playerSelection === "Paper" && opponent === "Scissor" ||
        playerSelection === "Scissor" && opponent === "Rock"
    ) {
        opponentScore++;
        resultMessage = "You LOSS!!";
    }

    updateScore(resultMessage);
    // resultDiv.textContent = `${playerScore} - ${opponentScore} (${resultMessage})`;

    if (playerScore >= 5) {
        alert("Player Win the game!");
        resetGame();
    } else if (opponentScore >= 5) {
        alert("Opponent Win the game!");
        resetGame();
    }
}