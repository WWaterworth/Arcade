//Default state of the game. array with two players, another array with empty cells
const state = {
  players: ["x", "y"],
  board: [["", "", "", "", "", "", "", "", ""]],
};

//function to reset the state of the game to blank.
function resetState() {
  state.board = [["", "", "", "", "", "", "", "", ""]];
}

/*********************DOM*********************/
//grabs the board element from the HTML
let boardElem = document.getElementById("board");

/* loops through board array and creates a div for each iteration with appendChild and assigns to game board(9) -> assigns cell class to each div created assigns a 'dataset' to each div named index-[i] -> sets the content of each div to the value of the current -> state.board index -> sets the inner text of each div to content ('') */
function renderBoard() {
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
  }
}

/****************************EVENT LISTENER *********************************/

//Event listener to change the content of the selected Div
boardElem.addEventListener("click", function (event) {
  //holds value of the cell's dataset index
  let cellIndex = event.target.dataset.index;
  console.log(cellIndex);
});

renderBoard();
