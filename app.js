const boardElem = document.getElementById("board");
const playerNameX = document.getElementById("playerX");
const playerNameO = document.getElementById("playerO");
const reset = document.getElementById("reset");
const currentTurn = document.getElementById("currentTurn");
const winner = document.getElementById("winner");

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
  document
    .querySelectorAll(".cell")
    .forEach((cell) => (cell.textContent = undefined));
  playerNameX.innerText = "Player 1";
  playerNameO.innerText = "Computer";
  winner.innerText = "";
  currentTurn.innerText = "Enter your name(s) below";
  renderBoard();
};

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
  const inputVal = document.getElementById("nameInput").value;
  if (playerNameX.innerText === "Player 1") {
    playerNameX.innerText = inputVal;
    state.players[0] = inputVal;
    currentTurn.innerText = `${state.players[0]}'s Turn`;
  } else if (
    playerNameX.innerText !== "Player 1" &&
    playerNameO.innerText === "Computer"
  ) {
    playerNameO.innerText = inputVal;
    state.players[1] = inputVal;
    currentTurn.innerText = `${state.players[0]}'s Turn`;
  } else {
    alert("Names have already been entered.");
  }

  document.getElementById("nameInput").value = "";
};

function markCell() {
  for (let i = 0; i < state.board[0].length; i++) {
    const currentCell = state.board[0][i];

    if (!currentCell.innerText) {
      currentCell.innerText = "O";
      return;
    }
  }
}

const renderBoard = () => {
  boardElem.innerHTML = "";
  for (let i = 0; i < state.board[0].length; i++) {
    const cellElem = document.createElement("div");
    cellElem.className = "cell";
    cellElem.dataset.index = i;
    const content = state.board[0][i];
    cellElem.innerText = content;
    boardElem.appendChild(cellElem);
    state.board[0][i] = cellElem;
  }
};

boardElem.addEventListener("click", function takeTurn(event) {
  if (!event.target.textContent) {
    const cellIndex = event.target.dataset.index;
    if (state.turn === true) {
      state.board[0][cellIndex].textContent = "X";
    } else if (state.turn === false) {
      state.board[0][cellIndex].textContent = "O";
    }

    state.turnCount += 1;
    checkWin();
    changePlayer();

    if (state.players[1] === "Computer" && state.turn % 2 === 0) {
      markCell();
      checkWin();
      changePlayer();
    }
  }
});

renderBoard();
