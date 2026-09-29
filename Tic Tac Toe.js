const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status");
const resetBtn = document.querySelector("#reset-btn");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true; //No moves can be made when winner is declare

const winConditions = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagnols
    [0, 4, 8],
    [2, 4, 6],
];

function handleCellClick(e) {
    const cell = e.target; // The specific HTML div that was clicked
    const index = cell.getAttribute("data-index"); // Gets the number (0-8) of that div

    if (board[index] !== "" || !gameActive) {
        return;
    }
    board[index] = currentPlayer; // Update the virtual board array
    cell.innerText = currentPlayer; // Show "X" or "O" on the screen
    checkWinner(); // Run the logic to see if the game ended
}

function checkWinner() {
    let roundWon = false;
    for (let condition of winConditions) {  // Loop through the 8 winning patterns
        let [a, b, c] = condition;  // "Destructuring": grabs the 3 numbers in the pattern
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
             // If board[a] isn't empty AND matches board[b] AND matches board[c]...
            roundWon = true;
            break; // Stop looking, we found a winner!
        }
    }

    if (roundWon) {
        statusText.innerText = `Player ${currentPlayer} Wins!`;
        gameActive = false; // Stop further clicks
    } 
    else if (!board.includes("")) {
        statusText.innerText = "Draw!"; // No winner and no empty spaces left
    } 
    else {
        // SWITCH PLAYERS: If X, change to O. Otherwise, change to X.
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.innerText = `Player ${currentPlayer}'s Turn`;
    }
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
resetBtn.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""]; // Clear the virtual board
    cells.forEach((cell) => (cell.innerText = "")); // Clear the HTML cells
    currentPlayer = "X"; // Reset to X
    gameActive = true; //Allow Clicking Again
    statusText.innerText = "Player X's Turn";
});
//-------------------------------------------------------------------------
// /*
// const: Creates a variable that won't be reassigned.
// cells: The name given to this collection.

// document.querySelectorAll(".cell"): 
// Searches the HTML for every element with the class cell and puts them into a "NodeList" (like an array).

// querySelector: Finds the first element that matches the ID (#). 
// These are used to update the text on the screen and listen for the reset click. 

// let: Variables that will change during the game.
// currentPlayer: Tracks whose turn it is.
// board: A "virtual" representation of the 9 squares using empty strings.
// gameActive: A "Boolean" (true/false) flag. If false, the game stops.

// winConditions: This is an Array of Arrays. Each small array contains the "indexes" 
// (positions 0-8) that represent a straight line (horizontal, vertical, or diagonal).

// Summary:
// Click triggers handleCellClick.
// Check if valid; if so, update Data (board) and UI (innerText).
// Check winConditions to see if a pattern matches the current data.
// Update status or Swap player.

// */
//-----------------------------------------------------------------------
/* const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status");
const resetBtn = document.querySelector("#reset-btn");

let currentPlayer = "X";
// Store board as a 2D matrix [row][col] for easier mathematical calculation
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
let movesCount = 0;
let gameActive = true;

function handleCellClick(e) {
  const cell = e.target;
  const index = parseInt(cell.getAttribute("data-index"));
  
  // Calculate row and column from a single index (0-8)
  const row = Math.floor(index / 3);
  const col = index % 3;

  if (board[row][col] || !gameActive) return;

  // Update Data and UI
  board[row][col] = currentPlayer;
  cell.innerText = currentPlayer;
  movesCount++;

  if (checkWinner(row, col)) {
    statusText.innerText = `Player ${currentPlayer} Wins!`;
    gameActive = false;
  } else if (movesCount === 9) {
    statusText.innerText = "Draw!";
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Player ${currentPlayer}'s Turn`;
  }
}

function checkWinner(row, col) {
  // 1. Check the clicked Row
  if (board[row].every(cell => cell === currentPlayer)) return true;

  // 2. Check the clicked Column
  if (board.every(r => r[col] === currentPlayer)) return true;

  // 3. Check Main Diagonal (top-left to bottom-right)
  if (row === col && board.every((r, i) => r[i] === currentPlayer)) return true;

  // 4. Check Anti-Diagonal (top-right to bottom-left)
  if (row + col === 2 && board.every((r, i) => r[2 - i] === currentPlayer)) return true;

  return false;
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));

resetBtn.addEventListener("click", () => {
  board = [[null, null, null], [null, null, null], [null, null, null]];
  cells.forEach(cell => cell.innerText = "");
  currentPlayer = "X";
  movesCount = 0;
  gameActive = true;
  statusText.innerText = "Player X's Turn";
});
*/