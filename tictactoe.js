// 9 boxes in game numbered from 0 to 8
/*
Winning Patterns =>
    Horizontal = 0, 1, 2
                 3, 4, 5
                 6, 7, 8
    Vertical = 0, 3, 6
               1, 4, 7
               2, 5, 8
    Diagonal = 0, 4, 8
               2, 4, 6
*/

// Alternate Turns -> Game should know which that when box button is clicked, it should show X and O alternatively

let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")

let turnO = true; //playerX, playerO

//2D Array
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO == true) { //playerO
            box.innerText = "O";
            turnO = false;
        }
        else { //playerX
            box.innerText = "X";
            turnO = true;
        }
        // Once you've played your turn, you cannot go back and change it
        box.disabled = true; //Once box is clicked and O/X is placed, box value should not be able to change when its clicked again
    });
});