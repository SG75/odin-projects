// Initialize humanScore and computerScore to 0
let humanScore = 0,
  computerScore = 0;

// Function to get the computer's choice randomly
function getComputerChoice(max) {
  let choices = ["rock", "paper", "scissors"];
  max = choices.length;
  let choice = Math.floor(Math.random() * max);
  return choices[choice];
}

// Function to get the human's choice via a prompt
function getHumanChoice() {
  let humanChoice = prompt(
    "Enter your choice (rock, paper, or scissors):"
  ).toLowerCase(); // Convert input to lowercase for consistency
  return humanChoice;
}

// Function to play a single round of the game
function playRound() {
  // Get choices from both human and computer
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  // Display the choices made by both players
  console.log("Computer chose: " + computerChoice);
  console.log("Human chose: " + humanChoice);

  // Determine the result of the round
  if (humanChoice === computerChoice) {
    console.log("It's a Draw");
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You Win! Rock beats Scissors");
      humanScore++; // Increase human score
    } else if (computerChoice === "paper") {
      console.log("You Lose! Paper beats Rock");
      computerScore++; // Increase computer score
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You Win! Paper beats Rock");
      humanScore++;
    } else if (computerChoice === "scissors") {
      console.log("You Lose! Scissors beats Paper");
      computerScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You Lose! Rock beats Scissors");
      computerScore++;
    } else {
      console.log("You Win! Scissors beats Paper");
      humanScore++;
    }
  }
}

// Function to play 5 rounds of the game and display the final scores
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(); // Play a single round
  }

  // Display final scores and determine the overall winner
  console.log("Final Scores:");
  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("The computer won the game. Better luck next time!");
  } else {
    console.log("It's a tie!");
  }
}

// Start the game by calling playGame
playGame();
