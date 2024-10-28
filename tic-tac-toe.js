document.addEventListener("DOMContentLoaded", function() {
    //Exercise 1: Laying out the board
        //Adding square class to each div inside the board
    const layout = document.querySelectorAll("#board div");
    layout.forEach(function (squares) {
        squares.classList.add("square");
    
        //Mouseover change
        squares.addEventListener("mouseover", function() {
            squares.classList.add("hover");
        });
        //Mouse moved away change
        squares.addEventListener("mouseout", function() {
            squares.classList.remove("hover");
        });
    })

        //Initializing empty array for game state
    const game = Array(9).fill(null);
        //Determining winning positions
    const wincombos = [
        [0, 1, 2], //top horizontal
        [3, 4, 5], //middle horizontal
        [6, 7, 8], //bottom horizontal
        [0, 3, 6], //left vertical
        [1, 4, 7], //middle vertical
        [2, 5, 8], //right vertical
        [0, 4, 8], //diagonal top left to bottom right
        [2, 4, 6]  //diagonal top right to bottom left
    ];
        //Setting player 1 as X
    let player = "X";

        //Adding click event listener to each square
    layout.forEach((squares, index) => {
        squares.addEventListener("click", function() {
        
            //Checking if square was already clicked
          if (game[index] !== null) {
            return;
          }
        
            //Updating square with player's mark
          squares.textContent = player;

          if (player === "X") {
            squares.classList.add("X")
          } else if (player === "O") {
            squares.classList.add("O")
          }
    
            //Updating the game state array
            game[index] = player;
        
            //Checking the winner
            let winner = function(player) {
                return wincombos.filter(combo => 
                    combo.filter(index => game[index] === player).length === 3
                ).length > 0; 
            }
            
            //Updating status message
            if (winner(player)) {
                document.getElementById("status").textContent = `Congratulations! ${player} is the Winner!`;
                document.getElementById("status").classList.add("you-won")
                return; // Exit the function after a win
            } 

            //Switching the player for the next turn
            player = player === "X" ? "O" : "X";
        });
    });
    
    //Attempting to make the reset button work
    document.getElementsByClassName("btn").addEventListener("click", function() {
            //Resetting the game state array
        game = Array(9).fill(null); 
            //Setting the current player back to X
        player = 'X';
    
            //Removing the 'X' and 'O' symbols from each square
        const layout = document.querySelectorAll("square");
        layout.forEach(squares => {
            squares.textContent = ' '; //Clearing the text in each square
            squares.classList.remove("X", "O"); // Removing styling
        });
    
            //Resetting the status message
        document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O."; 
            //Removing the winning message
        document.getElementById("status").classList.remove("you-won"); 
    });

});








