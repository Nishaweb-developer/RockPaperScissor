# Rock Paper Scissors Game

This is a simple, interactive Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. It allows users to play against the computer with a scoring system that persists across sessions using local storage.

## Demo



## Features

- **Interactive Gameplay**: Choose your move (Rock, Paper, or Scissors) to play against the computer.
- **Dynamic Scoring**: Tracks wins, losses, and ties in the session.
- **Persistent Score**: Scores are saved in local storage, so they remain even after page refreshes.
- **Reset Option**: A button to reset the score, giving you a fresh start anytime.

## Technologies Used

- **HTML**: Structure and layout of the game.
- **CSS**: Styling, including buttons, colors, and layout.
- **JavaScript**: Game logic, score calculation, and interaction with local storage.

## How to Play

1. **Choose a Move**: Click one of the three buttons (Rock, Paper, or Scissors).
2. **Game Result**: The computer selects its move randomly, and the result (win, lose, or tie) is displayed.
3. **Score Update**: The result updates the score, visible below the game interface.
4. **Reset Score**: Click the "Reset Score" button to reset the win, loss, and tie counts.

## Code Overview

- **HTML**: Provides the game structure, including buttons for each move and placeholders for displaying the score and result.
- **CSS**: Styles the game interface, making it visually appealing with a dark theme and interactive buttons.
- **JavaScript**:
  - `calcRandomNumber()`: Determines the computer’s move randomly.
  - `Play(UserClick)`: Handles the game logic based on the user's and computer's moves, updates the score, and saves it to local storage.
  - `updateScore()`: Updates the displayed score from local storage values.
  - **Local Storage**: Stores the score, allowing it to persist even after the page reloads.

## Future Improvements

- Adding sounds for interactions.
- Adding animations to make the game more visually engaging.
- Displaying a match history.

