//const cells//
const cells = document.querySelectorAll(".cell");
const playAgainButton = document.querySelector("#playagain");

//initial player will be x//
let currentPlayer = "X";

//function handling cell clicks
function cellClick(event) {
    const cell = event.target;

// Check if the cell is already filled
if (cell.textContent === "") {
    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

//function to start the game with clicks//
function startGame() {
    cells.forEach(cell => {
        cell.addEventListener("click", cellClick);
        cell.textContent = ""; 
    });
    currentPlayer = "X"; 
}

//function to handle "Play Again" button click//
playAgainButton.addEventListener("click", startGame);

//initialize game//
startGame();





