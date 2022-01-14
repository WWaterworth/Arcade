//grabs the game board
const boardElem = document.getElementById("board");
//grabs the playerX p tag
const playerNameX = document.getElementById("playerX");
//grabs the playerO p tag
const playerNameO = document.getElementById("playerO");
//grabs reset button
const reset = document.getElementById("reset");
//grabs current turn div to display current turn
const currentTurn = document.getElementById("currentTurn");
//grabs the winner element to display win/draw
const winner = document.getElementById("winner");

//Default state of the game.
let state = {
  players: ["Player 1", "Computer"],
  board: [["", "", "", "", "", "", "", "", ""]],
  turn: true,
  turnCount: 0,
  winState: false,
};

//default state of the game
const defaultState = {
  players: ["Player 1", "Computer"],
  board: [["", "", "", "", "", "", "", "", ""]],
  turn: true,
  turnCount: 0,
  winState: false,
};

//clear board reset current state to default state of the game
/* Need to debug, can't mark cells after they are cleared assuming the changed state is interfering with the eventListener logic*/
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
//check if there is a win in rows
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

//check if there is a win in columns
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

//check if there is a win diagonally
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

//check to see if there's a draw
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

//change default names to display player's names
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

// //Mark a random cell
/*Need to debug. Error reading possibleMove as undefined. Presume it's not targeting DOM element */

// function markRandom() {
//   let randomIndex = Math.floor(Math.random * state.board[0][0].length);
//   let possibleMove = state.board[0][randomIndex];
//   console.log(possibleMove);
//   if (!possibleMove.textContent) {
//     possibleMove.textContent = "O";
//   }
// }

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
  //if event target has no text content
  if (!event.target.textContent) {
    //gives value of event the target's dataset index
    let cellIndex = event.target.dataset.index;
    //if turn state is true/false, insert X/O onto board
    if (state.turn === true) {
      state.board[0][cellIndex].textContent = "X";
    } else if (state.turn === false) {
      state.board[0][cellIndex].textContent = "O";
    }
    console.log(event.target);
    state.turnCount += 1;
    checkWin();
    changePlayer();

    //   //if it's player 2's turn and no name has enter, mark a random cell
    //   if (state.players[1] === "Computer" && state.turn % 2 === 0) {
    //     markRandom();
    //   }
  }
});

renderBoard();
