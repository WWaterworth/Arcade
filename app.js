//grabs the game board
const boardElem = document.getElementById("board");
//grabs the playerX p tag
const playerNameX = document.getElementById("playerX");
//grabs the playerO p tag
const playerNameO = document.getElementById("playerO");
//grabs reset button
const reset = document.getElementById("reset");
//grabs current turn div
const currentTurn = document.getElementById("currentTurn");

//Default state of the game.
const state = {
  players: ["", ""],
  board: [[null, null, null, null, null, null, null, null, null]],
  turn: true,
};

//2d array of winning combinations
const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//changes turn boolean from true to false and display's which player's turn it is
const changePlayer = () => {
  if (state.turn) {
    currentTurn.innerText = `${state.players[1]}'s Turn`;
    state.turn = false;
  } else {
    currentTurn.innerText = `${state.players[0]}'s Turn`;
    state.turn = true;
  }
};

const changePlayerName = () => {
  let inputVal = document.getElementById("nameInput").value;
  //if playerX name is default, change playerX name to input value
  if (playerNameX.innerText === "Player 1") {
    playerNameX.innerText = inputVal;
    state.players[0] = inputVal;
    //otherwise change playerO name to input
  } else {
    playerNameO.innerText = inputVal;
    state.players[1] = inputVal;
  }
};

const renderBoard = () => {
  //sets html text blank
  boardElem.innerHTML = "";
  //creates a cell element
  for (let i = 0; i < state.board[0].length; i++) {
    const cellElem = document.createElement("div");
    //assigns cell class to created cellElem div
    cellElem.className = "cell";
    //assigns a 'dataset' to cell elem called index-[i] as the loop iterates
    cellElem.dataset.index = i;
    //sets the content of the board to the current index of state.board
    let content = state.board[0][i];
    //sets the inner text of the cell element to the index of state.board
    cellElem.innerText = content;
    //attach the cell to the parent container (main html tag)
    boardElem.appendChild(cellElem);
    // set index in state to point at cell element
    state.board[0][i] = cellElem;
  }
};

//Event listener to change the content of the selected Div
boardElem.addEventListener("click", function takeTurn(event) {
  //if event target has no text content - false
  if (!event.target.textContent) {
    //gives value of event the target's dataset index
    let cellIndex = event.target.dataset.index;
    //if turn state is true/false, insert X/O onto board
    if (state.turn === true) {
      state.board[0][cellIndex].innerText = "X";
    } else if (state.turn === false) {
      state.board[0][cellIndex].innerText = "O";
    }

    changePlayer();
  }
});

renderBoard();
