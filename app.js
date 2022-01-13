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

const winner = document.getElementById("winner");

//Default state of the game.
let state = {
  players: ["Player 1", "Computer"],
  board: [["", "", "", "", "", "", "", "", ""]],
  turn: true,
  turnCount: 0,
  winState: false,
};

const defaultState = {
  players: ["Player 1", "Computer"],
  board: [["", "", "", "", "", "", "", "", ""]],
  turn: true,
  turnCount: 0,
  winState: false,
};

const resetState = () => {
  state = defaultState;
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
  playerNameX.innerText = "Player 1";
  playerNameO.innerText = "Computer";
  winner.innerText = "";
  currentTurn.innerText = "Enter your name(s) below";
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

const checkRow = () => {
  if (
    state.board[0][0].textContent === "X" &&
    state.board[0][1].textContent === "X" &&
    state.board[0][2].textContent === "X"
  ) {
    winner.innerText = `${state.players[0]} Wins!`;
    state.winState = true;
  } else if (
    state.board[0][0].textContent === "O" &&
    state.board[0][1].textContent === "O" &&
    state.board[0][2].textContent === "O"
  ) {
    winner.innerText = `${state.players[1]} Wins!`;
    state.winState = true;
  }

  if (
    state.board[0][3].textContent === "X" &&
    state.board[0][4].textContent === "X" &&
    state.board[0][5].textContent === "X"
  ) {
    winner.innerText = `${state.players[0]} Wins!`;
    state.winState = true;
  } else if (
    state.board[0][3].textContent === "O" &&
    state.board[0][4].textContent === "O" &&
    state.board[0][5].textContent === "O"
  ) {
    winner.innerText = `${state.players[1]} Wins!`;
    state.winState = true;
  }
  if (
    state.board[0][6].textContent === "X" &&
    state.board[0][7].textContent === "X" &&
    state.board[0][8].textContent === "X"
  ) {
    winner.innerText = `${state.players[0]} Wins!`;
    state.winState = true;
  } else if (
    state.board[0][6].textContent === "O" &&
    state.board[0][7].textContent === "O" &&
    state.board[0][8].textContent === "O"
  ) {
    winner.innerText = `${state.players[1]} Wins!`;
    state.winState = true;
  }
};

const checkCol = () => {
  if (
    state.board[0][0].textContent === "X" &&
    state.board[0][3].textContent === "X" &&
    state.board[0][6].textContent === "X"
  ) {
    winner.innerText = `${state.players[0]} Wins!`;
    state.winState = true;
  } else if (
    state.board[0][0].textContent === "O" &&
    state.board[0][3].textContent === "O" &&
    state.board[0][6].textContent === "O"
  ) {
    winner.innerText = `${state.players[1]} Wins!`;
    state.winState = true;
  }

  if (
    state.board[0][1].textContent === "X" &&
    state.board[0][4].textContent === "X" &&
    state.board[0][7].textContent === "X"
  ) {
    winner.innerText = `${state.players[0]} Wins!`;
    state.winState = true;
  } else if (
    state.board[0][1].textContent === "O" &&
    state.board[0][4].textContent === "O" &&
    state.board[0][7].textContent === "O"
  ) {
    winner.innerText = `${state.players[1]} Wins!`;
    state.winState = true;
  }
  if (
    state.board[0][2].textContent === "X" &&
    state.board[0][5].textContent === "X" &&
    state.board[0][8].textContent === "X"
  ) {
    winner.innerText = `${state.players[0]} Wins!`;
    state.winState = true;
  } else if (
    state.board[0][2].textContent === "O" &&
    state.board[0][5].textContent === "O" &&
    state.board[0][8].textContent === "O"
  ) {
    winner.innerText = `${state.players[1]} Wins!`;
    state.winState = true;
  }
};

const checkDiag = () => {
  if (
    state.board[0][0].textContent === "X" &&
    state.board[0][4].textContent === "X" &&
    state.board[0][8].textContent === "X"
  ) {
    winner.innerText = `${state.players[0]} Wins!`;
    state.winState = true;
  } else if (
    state.board[0][0].textContent === "O" &&
    state.board[0][4].textContent === "O" &&
    state.board[0][8].textContent === "O"
  ) {
    winner.innerText = `${state.players[1]} Wins!`;
    state.winState = true;
  }

  if (
    state.board[0][2].textContent === "X" &&
    state.board[0][4].textContent === "X" &&
    state.board[0][6].textContent === "X"
  ) {
    winner.innerText = `${state.players[0]} Wins!`;
    state.winState = true;
  } else if (
    state.board[0][2].textContent === "O" &&
    state.board[0][4].textContent === "O" &&
    state.board[0][6].textContent === "O"
  ) {
    winner.innerText = `${state.players[1]} Wins!`;
    state.winState = true;
  }
};

const checkDraw = () => {
  if (state.winState === false && state.turnCount === 9) {
    winner.innerText = "It's a draw! Try again";
  }
};
const checkWin = () => {
  checkRow();
  checkCol();
  checkDiag();
  checkDraw();
};

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
    state.turnCount += 1;
    checkWin();
    changePlayer();
  }
});

renderBoard();
