let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// function to generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

// function to display the draw scenario
const drawGame = () => {
    msg.innerText = "Game was a draw! Play again..";
    msg.style.backgroundColor = "#081b31";
};

// fucntion to show winner on the screen with user score, computer score and updated message
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // user score is incremented
        userScorePara.innerText = userScore; // incremented score is shown in the html element
        msg.innerText = `you win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost ${userChoice} beats your ${compChoice}`
        msg.style.backgroundColor = "red"

    }
};

// function to initiate the game logic after user input is given
const playGame = (userChoice) => {
    //generate computer choice-> moduler
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //userWin = compChoice === "paper" ? false : true;
            if (compChoice === "paper") {
                userWin = false;
            } else {
                userWin = true;
            }
            showWinner(userWin, userChoice, compChoice);
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
            showWinner(userWin, userChoice, compChoice);
        } else {
            userWin = compChoice === "rock" ? false : true;
            showWinner(userWin, userChoice, compChoice);
        }
    }
};

// Run the game
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
