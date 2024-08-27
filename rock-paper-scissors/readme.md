# Rock, Paper, Scissors Game

This is a simple command-line implementation of the classic game **Rock, Paper, Scissors**. The game is played between a human player and the computer over 5 rounds. At the end of the game, the final scores are displayed, and the winner is announced.

## How the Game Works

1. **Choices**: The game offers three choices: Rock, Paper, and Scissors.
2. **Game Rules**:
   - Rock beats Scissors
   - Scissors beat Paper
   - Paper beats Rock
3. **Game Flow**:
   - The human player is prompted to enter their choice for each round.
   - The computer randomly selects its choice.
   - The winner of each round is determined based on the rules above.
   - Scores are updated after each round.
   - The game consists of 5 rounds. After all rounds are played, the final scores are displayed, and the overall winner is announced.

## How to Run the Game

## Method 1

1. Copy the code into a `.js` file, for example, `rockPaperScissors.js`.
2. Open your terminal or command prompt.
3. Run the file using Node.js:

## Method 2

1. open the index.html in a browser and press F12 ( devloper tools)
2. open the console tab
3. continue to enter your choice when prompted in the browser window
4. Follow the on-screen prompts to play the game.
5. The prompt for the choices will loop for 5 iterations and display the winner in the console.

## Code Overview

- **`getComputerChoice()`**: This function generates a random choice for the computer (Rock, Paper, or Scissors).
- **`getHumanChoice()`**: This function prompts the player to enter their choice and returns it in lowercase for consistency.
- **`playRound()`**: This function handles a single round of the game, comparing the human and computer choices and updating the scores accordingly.
- **`playGame()`**: This function runs the entire game, calling `playRound` 5 times and then displaying the final results.

## Customization

You can easily customize the number of rounds by modifying the loop in the `playGame()` function. Additionally, the game can be enhanced with features such as input validation, graphical user interfaces, or additional game modes.
