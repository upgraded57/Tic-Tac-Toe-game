const boxes = document.querySelectorAll(".box");
const clearBtn = document.querySelector(".clear");

// DOM elements to show result dialogue popup
const resultDialogue = document.querySelector(".result");
const winner = document.getElementById("winner");
const closeResultDialogueBtn = document.getElementById("close-result");

// DOM elements for scoreboard
const xScoreEl = document.getElementById("x-score-el");
const oScoreEl = document.getElementById("o-score-el");

// initilaize count value to keep tab of player status
let count = 1;

// initialize starting score for X and O
let x_score = 0;
let o_score = 0;

// initializes span element to display next sign hint
const hintText = document.createElement("span");
hintText.style.color = "rgba(225, 225, 225, 0.4)";
hintText.style.pointerEvents = "none";

// initialize a boolean to check when game ends
let gameEnded = false;

boxes.forEach((box) => {
  box.onmouseover = (e) => showText(e);
  box.onclick = (e) => printText(e);
});

// function to print text into box on player click
function printText(e) {
  // specifies selected box as current box
  let currentBox = e.target;

  // check if current box is empty
  if (!currentBox.classList.contains("filled")) {
    // increase count value by 1 unit
    count += 1;
    // checks which player's turn and prints sign based on player's turn
    if (count % 2 === 0) {
      currentBox.innerText = "X";
      currentBox.style.color = "green";
    } else {
      currentBox.innerText = "0";
      currentBox.style.color = "red";
    }

    // sets current box as not empty
    currentBox.classList.add("filled");

    checkwinner();
    displayResult();

    // returns value of count for next round
    return count;
  }
}

// function to show faded text in next turn
function showText(e) {
  let currentBox = e.target;

  // checks whether box has already been played
  if (!currentBox.classList.contains("filled")) {
    // checks which player's turn
    if (count % 2 === 0) {
      hintText.innerText = "0";
    } else {
      hintText.innerText = "X";
    }
    currentBox.appendChild(hintText);
  } else {
    currentBox.style.pointerEvents = "none";
  }
}

// Action of clear button
clearBtn.onclick = clearFields;

// function to clear fields
function clearFields() {
  // remove all inputs
  boxes.forEach((box) => {
    box.classList.remove("filled");
    box.innerText = "";
    box.style.pointerEvents = "all";
  });
}

// winning permutations
// 1, 2, 3
// 4, 5, 6
// 7, 8, 9
// 1, 4, 7
// 2, 5, 8
// 3, 6, 9
// 1, 5, 9
// 3, 5, 7

// function to check winner
function checkwinner() {
  // first X winning permutation
  if (
    (boxes[0].classList.contains("filled") &&
      boxes[0].innerText === "X" &&
      boxes[1].classList.contains("filled") &&
      boxes[1].innerText === "X" &&
      boxes[2].classList.contains("filled") &&
      boxes[2].innerText === "X") ||
    // second X winning permutation
    (boxes[3].classList.contains("filled") &&
      boxes[3].innerText === "X" &&
      boxes[4].classList.contains("filled") &&
      boxes[4].innerText === "X" &&
      boxes[5].classList.contains("filled") &&
      boxes[5].innerText === "X") ||
    // third X winning permutation
    (boxes[6].classList.contains("filled") &&
      boxes[6].innerText === "X" &&
      boxes[7].classList.contains("filled") &&
      boxes[7].innerText === "X" &&
      boxes[8].classList.contains("filled") &&
      boxes[8].innerText === "X") ||
    // fourth X winning permutation
    (boxes[0].classList.contains("filled") &&
      boxes[0].innerText === "X" &&
      boxes[3].classList.contains("filled") &&
      boxes[3].innerText === "X" &&
      boxes[6].classList.contains("filled") &&
      boxes[6].innerText === "X") ||
    // fifth X winning permutation
    (boxes[1].classList.contains("filled") &&
      boxes[1].innerText === "X" &&
      boxes[4].classList.contains("filled") &&
      boxes[4].innerText === "X" &&
      boxes[7].classList.contains("filled") &&
      boxes[7].innerText === "X") ||
    // sixth X winning permutation
    (boxes[2].classList.contains("filled") &&
      boxes[2].innerText === "X" &&
      boxes[5].classList.contains("filled") &&
      boxes[5].innerText === "X" &&
      boxes[8].classList.contains("filled") &&
      boxes[8].innerText === "X") ||
    // seventh X winning permutation
    (boxes[0].classList.contains("filled") &&
      boxes[0].innerText === "X" &&
      boxes[4].classList.contains("filled") &&
      boxes[4].innerText === "X" &&
      boxes[8].classList.contains("filled") &&
      boxes[8].innerText === "X") ||
    // eighth X winning permutation
    (boxes[2].classList.contains("filled") &&
      boxes[2].innerText === "X" &&
      boxes[4].classList.contains("filled") &&
      boxes[4].innerText === "X" &&
      boxes[6].classList.contains("filled") &&
      boxes[6].innerText === "X")
  ) {
    winner.innerText = "X WINS";
    // Updates score of X
    x_score += 1;
    // Prints score of X
    xScoreEl.innerText = x_score;
    // Ends the game
    return (gameEnded = true);
  }

  // Possible O winning permutation
  else if (
    (boxes[0].classList.contains("filled") &&
      boxes[0].innerText === "0" &&
      boxes[1].classList.contains("filled") &&
      boxes[1].innerText === "0" &&
      boxes[2].classList.contains("filled") &&
      boxes[2].innerText === "0") ||
    // second O winning permutation
    (boxes[3].classList.contains("filled") &&
      boxes[3].innerText === "0" &&
      boxes[4].classList.contains("filled") &&
      boxes[4].innerText === "0" &&
      boxes[5].classList.contains("filled") &&
      boxes[5].innerText === "0") ||
    // third O winning permutation
    (boxes[6].classList.contains("filled") &&
      boxes[6].innerText === "0" &&
      boxes[7].classList.contains("filled") &&
      boxes[7].innerText === "0" &&
      boxes[8].classList.contains("filled") &&
      boxes[8].innerText === "0") ||
    // fourth O winning permutation
    (boxes[0].classList.contains("filled") &&
      boxes[0].innerText === "0" &&
      boxes[3].classList.contains("filled") &&
      boxes[3].innerText === "0" &&
      boxes[6].classList.contains("filled") &&
      boxes[6].innerText === "0") ||
    // fifth O winning permutation
    (boxes[1].classList.contains("filled") &&
      boxes[1].innerText === "0" &&
      boxes[4].classList.contains("filled") &&
      boxes[4].innerText === "0" &&
      boxes[7].classList.contains("filled") &&
      boxes[7].innerText === "0") ||
    // sixth O winning permutation
    (boxes[2].classList.contains("filled") &&
      boxes[2].innerText === "0" &&
      boxes[5].classList.contains("filled") &&
      boxes[5].innerText === "0" &&
      boxes[8].classList.contains("filled") &&
      boxes[8].innerText === "0") ||
    // seventh O winning permutation
    (boxes[0].classList.contains("filled") &&
      boxes[0].innerText === "0" &&
      boxes[4].classList.contains("filled") &&
      boxes[4].innerText === "0" &&
      boxes[8].classList.contains("filled") &&
      boxes[8].innerText === "0") ||
    // eighth O winning permutation
    (boxes[2].classList.contains("filled") &&
      boxes[2].innerText === "0" &&
      boxes[4].classList.contains("filled") &&
      boxes[4].innerText === "0" &&
      boxes[6].classList.contains("filled") &&
      boxes[6].innerText === "0")
  ) {
    winner.innerText = "O WINS";
    // updates current score of O
    o_score += 1;
    // prints score of O
    oScoreEl.innerText = o_score;
    // ends the game
    return (gameEnded = true);
  } else if (
    boxes[0].classList.contains("filled") &&
    boxes[1].classList.contains("filled") &&
    boxes[2].classList.contains("filled") &&
    boxes[3].classList.contains("filled") &&
    boxes[4].classList.contains("filled") &&
    boxes[5].classList.contains("filled") &&
    boxes[6].classList.contains("filled") &&
    boxes[7].classList.contains("filled") &&
    boxes[8].classList.contains("filled") &&
    gameEnded == false
  ) {
    winner.innerText = "DRAW";
    return (gameEnded = true);
  } else {
    return;
  }
}

// Show winner modal and ends game
function displayResult() {
  if (gameEnded == true) {
    resultDialogue.style.display = "flex";
    return (gameEnded = false);
  } else {
    return;
  }
}

// Function to close result dialogue popup
closeResultDialogueBtn.onclick = () => (
  (resultDialogue.style.display = "none"), clearFields()
);
