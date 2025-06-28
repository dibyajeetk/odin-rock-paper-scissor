const choices = ['rock' , 'paper', 'scissors'];
const initialSymbols = ["-", "-", "-", "-", "-"];
let rounds = 0;
let playerScore = 0;
let computerScore = 0;
const displayPlayerChoice = document.querySelector("#display-player-choice");
const displayComputerChoice = document.querySelector("#display-computer-choice")
const roundStatus = document.querySelector("#message");
const restartBtn = document.querySelector("#restartGame");
const playerRoundUI = Array.from(document.querySelectorAll("#player-score p")).slice(1, -1);
const playerTotalUI = Array.from(document.querySelectorAll("#player-score p")).slice(-1);
const computerRoundUI = Array.from(document.querySelectorAll("#computer-score p")).slice(1, -1);
const computerTotalUI = Array.from(document.querySelectorAll("#computer-score p")).slice(-1);


function computerChoice () {
    let rand = Math.round((Math.random() * 2));
    let choice = choices.at(rand)
    // console.log(rand);
    displayComputerChoice.textContent = choice;
    return choice;
};


let uiControls = document.querySelector("#controls");
let playerChoice = '';
uiControls.addEventListener("click", (e) => {
    playerChoice = e.target.textContent;
    if (choices.includes(playerChoice)) {
        displayPlayerChoice.textContent = playerChoice; // updates UI with player choice
        roundlogic()
        rounds++
        
        // update UI for Total score
        computerTotalUI[0].textContent = computerScore;
        playerTotalUI[0].textContent = playerScore;
    } else return;
    return playerChoice;
});

function roundlogic (player = playerChoice, computer = computerChoice()) {


    if (rounds < 4) {
        if (player === computer) {
            roundStatus.textContent = 'Tie!'

            // updates round specific ui 
            playerRoundUI[rounds].textContent = 'Tie';
            computerRoundUI[rounds].textContent = 'Tie';
        } else if (player === 'rock' && computer === 'scissors') {
            roundStatus.textContent = 'Round Won!';
            playerRoundUI[rounds].textContent = '1';
            computerRoundUI[rounds].textContent = '0';
            playerScore++;
        } else if (player === 'paper' && computer === 'rock') {
            roundStatus.textContent = 'Round Won!';
            playerRoundUI[rounds].textContent = '1';
            computerRoundUI[rounds].textContent = '0';
            playerScore++;
        } else if (player === 'scissors' && computer === 'paper') {
            roundStatus.textContent = 'Round Won!';
            playerRoundUI[rounds].textContent = '1';
            computerRoundUI[rounds].textContent = '0';
            playerScore++;
        } else {
            roundStatus.textContent = 'Round Lost!';
            playerRoundUI[rounds].textContent = '0';
            computerRoundUI[rounds].textContent = '1';
            computerScore++
        }
    } else showModal()
    console.log(rounds)
}

function showModal () {
    const modal = document.querySelector("#gameModal");
    const message = document.querySelector("#modalMessage");

    if (playerScore > computerScore) {
        message.textContent = "You won the game!";
    } else if (playerScore < computerScore) {
        message.textContent = "Computer won the game!";
    } else {
        message.textContent = "It's a tie!";
    }
    modal.classList.remove("hidden"); // removes the .hidden css for modal
};

restartBtn.addEventListener("click", () => {
    // reset variable
    rounds = 0;
    playerScore = 0;
    computerScore = 0;

    // reset text content
    playerRoundUI.forEach((p, i) => {
        p.textContent = '-';
    });
    playerTotalUI[0].textContent = '-';

    computerRoundUI.forEach((p, i) => {
        p.textContent = '-';
    });
    computerTotalUI[0].textContent = '-';

    displayPlayerChoice.textContent = '...';
    displayComputerChoice.textContent = 'Waiting..';
    roundStatus.textContent = '';


    document.querySelector("#gameModal").classList.add("hidden"); // removes modal
})

