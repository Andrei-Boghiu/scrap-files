"use strict";
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const checkBtn = document.querySelector("button.check");
const guess = document.querySelector("input[type='number'].guess");
const highScoreBox = document.querySelector(".highscore");
const color = document.body.style;
const againBtn = document.querySelector(".again");
const clearBtn = document.querySelector(".clear");
const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
let scoreCount = 20;
let highScore = localStorage.getItem("highScore") ?? 0;
highScoreBox.textContent = highScore;

checkBtn.addEventListener("click", () => {
  const userInput = Number(guess.value);

  if (!userInput) {
    displayMessage("No Number");
  } else if (userInput !== randomNumber) {
    scoreCount--;
    score.textContent = scoreCount;
    displayMessage(userInput > randomNumber ? "Too High" : "Too Low");
    color.background = "red";
    setTimeout(() => {
      color.backgroundColor = "#222";
    }, 100);
    if (scoreCount < 1) {
      displayMessage("You Lost");
      score.textContent = 0;
      checkBtn.setAttribute("disabled", "");
    }
  } else if (userInput === randomNumber) {
    number.textContent = randomNumber;
    displayMessage("Correct Answer");
    color.backgroundColor = "green";
    highScore =
      scoreCount > highScore
        ? localStorage.setItem("highScore", scoreCount)
        : highScore;
    highScoreBox.textContent = localStorage.getItem("highScore");
  }
});

againBtn.addEventListener("click", () => {
  location.reload();
});
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  let highScore = localStorage.setItem("highScore", 0);
  highScoreBox.textContent = localStorage.getItem("highScore");
});
