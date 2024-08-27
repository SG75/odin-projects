//console.log("MahaGanapathi");

let humanScore,
  computerScore = 0;
// get the computer's choice

function getComputerChoice(max) {
  let choices = ["rock", "paper", "scissors"];
  max = choices.length;
  let choice = Math.floor(Math.random() * max);
  return choices[choice];
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Enter your choice (rock, paper, or scissors):"
  ).toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  console.log("Computer chose: " + computerChoice);
  console.log("humanChoice: " + humanChoice);
  if (humanChoice === computerChoice) {
    console.log("Its a Draw");
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You Win! Rock beats Scissors");
      humanScore++;
    } else if (computerChoice === "paper") {
      console.log("You Lose! Paper beats Rock");
      computerScore++;
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

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
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

playGame();
