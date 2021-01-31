// script.js
// runs rock paper scissors 
// manipulates DOM nodes in the UI to make
// an interactive experience

// player clicks on a button with an event listner 
// add an event listener to every single button

// use the button's id value (fire, water, ice)
// execute a function for the computer that gets fire, water,
// or ice for the computer 
// assign both the player's value and the computer's value to 
// variables and input them into a function playRound() 
// return a 'win' or 'lose' 
// in the game function, check if the result contains win or lose 
// if it contains win, -- the computer, and vice versa 
// make the display blink red for 0.25 secs if you lose 
// keep playing while either life is !== 0 
// at the end, depending on who has 0 lives, alert win or lose


const fire = document.querySelector("button");
const choices = ["fire", "water", "ice"];
const buttons = document.querySelectorAll("button");
const resultMessage = document.getElementById("resultText");
const playerLives = document.getElementById("playerLife");
const computerLives = document.getElementById("computerLife");

// defines player and computer lives
let playerLife = 5; 
let computerLife = 5; 

// takes input, compares, and tells who wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie, ${playerSelection} and ${computerSelection}.`;
    }
    else if ((playerSelection === "ice") && (computerSelection === "water") || 
            (playerSelection === "water") && (computerSelection === "fire") || 
            (playerSelection === "fire") && (computerSelection === "ice")) {
        return `You win, ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Dojomaster wins, ${computerSelection} beats ${playerSelection}`;
    } 
}

function getComputerChoice() {
    return choices[~~(Math.random() * choices.length)];
}

function game(result) {
    let tempResult = result.slice(0,3);
    if (tempResult === "You") {
        computerLife--;
    } else if (tempResult === "Doj") {
        playerLife--; 
    } 
}

// adds an event listener to every button 
buttons.forEach((button) => {
    // executes a function that iterates a full round
    button.addEventListener('click', () => {
        let playerSelection = button.id; 
        let computerSelection = getComputerChoice();
        // updates as win or loss
        result = playRound(playerSelection, computerSelection);
        resultMessage.textContent = result;
        // checks for win or loss and subtracts life
        game(result);
        // updates the lives based on win or loss
        playerLives.textContent = playerLife; 
        computerLives.textContent = computerLife;
        if (playerLife === 0) {
            alert("You lose!");
            playerLife = 5;
            computerLife = 5; 
        } else if (computerLife === 0) {
            alert("You win!");
            playerLife = 5;
            computerLife = 5;
        }
    } )
})
