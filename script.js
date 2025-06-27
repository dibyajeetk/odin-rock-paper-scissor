// By Dibyajeet Kirttania
let gameMessage = document.querySelector("#message");
let userTotalScore = document.querySelector("#user-total");
let computerTotalScore = document.querySelector("#computer-total");

let playerScore = 0;
let computerScore = 0;

// Player Input
let userControls = document.querySelector(".controls");
    
    let userInput = '';

    userControls.addEventListener("click", (element) => {
        let target = element.target;
        if (target.textContent === "rock") {
            userInput = target.textContent;
            playRound();
        } else if (target.textContent === "paper") {
            userInput = target.textContent;
            playRound();
        } else if (target.textContent == "scissors") {
            userInput = target.textContent;
            playRound();
        } else {
            return;
        }
        let displayUserChoice = document.querySelector("#displayUserChoice")
        return displayUserChoice.textContent = userInput.toLowerCase();
    });

// Computer Input

function computerChoice () {
    let computerInput = '';
    let randomInt = Math.floor(Math.random() * 3);
    let displayComputerChoice = document.querySelector("#displayComputerChoice");
    if (randomInt === 0) {
        computerInput = "rock"
    } else if (randomInt === 1) {
        computerInput = "scissors"
    } else {
        computerInput = "paper"
    }
    return displayComputerChoice.textContent = computerInput;
};

function playRound (player, computer) {
    
    player = userInput;
    computer = computerChoice();
    
    if (player === 'scissors' && computer === 'paper') {
        gameMessage.textContent = "You win!";
        playerScore++;
        userTotalScore.textContent = playerScore;
    } else if (player === 'rock' && computer === 'scissors') {
        gameMessage.textContent = "You win!"
        playerScore++;
        userTotalScore.textContent = playerScore;
    } else if (player === 'paper' && computer === 'rock') {
        gameMessage.textContent = "You win!"
        playerScore++;
        userTotalScore.textContent = playerScore;
    } else if (player === computer) {
        gameMessage.textContent = "It\'s a tie!";
    } else {
        gameMessage.textContent = "Computer wins!"
        computerScore++
        computerTotalScore.textContent = computerScore;
    }
};

function playGame () {
    for (let i = 1; i <= 5; i++) {

    }
}


    // btn.map((button) => {
    //     let btnLabel = button.textContent
    //     console.log(btnLabel);
    //     return btnLabel
    // })

    // get user choice
        // user clicks on button
        // print button label
    
    
    //    // play game

    //     function playGame(){

    //         let humanScore = 0;

    //         let computerScore = 0;

    //         function playRound (humanChoice = getHumanChoice().toLowerCase(), computerChoice = getComputerChoice()) {
    //             if (humanChoice === 'paper' && computerChoice === 'rock') {
    //                 console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
    //                 return humanScore++;
    //             } 
    //             else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    //                 console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
    //                 return humanScore++;
    //             } 
    //             else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    //                 console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
    //                 return humanScore++;
    //             } 
    //             else if(humanChoice === computerChoice){
    //                 console.log(`it's a tie! both chose: ${humanChoice}.`)
    //             }
    //             else {
    //                 console.log(`Computer Won! ${computerChoice} beats ${humanChoice}.`)
    //                 return computerScore++;
    //             }
    //         }

    //         if (humanScore > computerScore) {
    //             alert('You won!')
    //         } else if (humanScore === computerScore) {
    //             alert('It\'s a Tie')
    //         } else {
    //             alert('Computer Won, try again! Good Game!')
    //         }
    //     }

    //     // initialize playGame()
    //     // playGame();

    //     // Game UI
    //     let userChoice = document.createElement("div");
    //     userChoice.setAttribute("id", "userChoice");
    //     document.body.appendChild(userChoice);

    //     let userChoiceText = document.createElement("h1");
    //     userChoiceText.textContent = `Your choice: ${humanInput}`
    //     userChoice.appendChild(userChoiceText);

    //     let btnContainer = document.createElement("div");
    //     btnContainer.setAttribute("id", "btnContainer")
    //     document.body.appendChild(btnContainer);


    //     let btnOne = document.createElement("button");
    //     btnOne.setAttribute("class", "button")
    //     btnOne.textContent = "Rock";
    //     btnContainer.appendChild(btnOne);

    //     let btnTwo = document.createElement("button");
    //     btnTwo.setAttribute("class", "button")
    //     btnTwo.textContent = "Paper";
    //     btnContainer.appendChild(btnTwo);

    //     let btnThree = document.createElement("button");
    //     btnThree.setAttribute("class", "button")
    //     btnThree.textContent = "Scissors";
    //     btnContainer.appendChild(btnThree);

    //     // Get human player choice from button click
       
    //     btnContainer.addEventListener("click", (Event) => {
    //         let target = Event.target;
    //         if (target.tagName === "BUTTON") {
    //             let buttonLabel = target.textContent;
    //             let humanInput = 0;

    //             if (buttonLabel === "Rock") {
    //                 humanInput = buttonLabel.toLowerCase();
    //                 console.log(humanInput)
    //                 return humanInput;
    //             } else if (buttonLabel === "Paper") {
    //                 humanInput = buttonLabel.toLowerCase();
    //                 console.log(humanInput)
    //                 return humanInput;
    //             } else if (buttonLabel === "Scissors") {
    //                 humanInput = buttonLabel.toLowerCase()
    //                 console.log(humanInput)
    //                 return humanInput;
    //             } else alert("WTF! Bro?")
    //         }
    //     });

    //     // Get random choice "Rock" or "Paper" or "Scissor" from computer

    //     
