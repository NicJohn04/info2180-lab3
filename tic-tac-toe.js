
document.addEventListener("DOMContentLoaded", function() {
    //Exercise 1: Laying out the board
        //Adding square class to each div inside the board
    const layout = document.querySelectorAll("#board div");
    layout.forEach(function (squares) {
        squares.classList.add("square");
    })

    //Exercise 2: Adding X or O when square is clicked
        //Initializing empty array for game state
    const state = Array(9).fill(null);
    let player = "X";

        //Adding click event listener to each square
    layout.forEach((squares, index) => {
        squares.addEventListener("click", function() {
        
            //Checking if square was already clicked
          if (state[index] !== null) {
            return;
          }
        
            //Updating square with player's mark
          squares.textContent = player;
          squares.classList.add(player);
          //if (player === "X") {
            //squares.classList.add("X")
          //} else if (player === "O") {
            //squares.classList.add("O")
          //}
    
            //Updating the game state array
          state[index] = player;
    
            //Switching the player for the next turn
          player = player === "X" ? "O" : "X";
        });
    });

    //Exercise 3: Changing the style when mouse is moved over a square 
    squares.addEventListener("mouseover", function() {

        //

    });

});





//Exercise 4: Checking the winner, updating the status
//Exercise 5: Restarting the game