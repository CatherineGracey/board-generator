//The Board

//Write a program that creates a string that represents an 8×8 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:

//# # # # # # # #
// # # # # # # # #
//# # # # # # # #
// # # # # # # # #

//bonus When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. Then, define a variable 'symbol' that generates the board using the specified character instead.

function makeStringBoard(size, symbol){
  var board = "";
  for (var i = 0; i < size; i++){
    for (var j = 0; j < size; j++){
      if (size % 2 === 0 && board.length % 2 === 0){
        board += symbol;
      } else if (size % 2 === 1 && (board.length + i) % 2 === 1){
        board += symbol;
      } else {
        board += " ";
      }
    }
    board += "\n";
  }
  return board;
}

function displayBoard(){
  var boardElem = document.createElement("pre");
  boardElem.className = "board";
  var size = document.getElementById("boardSize").value;
  var symbol = document.getElementById("boardSymbol").value;
  var newBoard = makeStringBoard(size, symbol);
  newBoard = newBoard.replace(/\n/g, "<br>");
  boardElem.innerHTML = newBoard;
  document.body.appendChild(boardElem);
}

function replaceBoard(){
  var oldBoard = document.getElementsByClassName("board")[0];
  oldBoard.parentNode.removeChild(oldBoard);
  displayBoard();
}

window.onload = function(){
  displayBoard();
  document.getElementById("generate").addEventListener("click", replaceBoard);
};

console.log(makeStringBoard(8, "#"));
