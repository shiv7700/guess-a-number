const form = document.querySelector("form");

function randomNumber() {
  let num = Math.floor(Math.random() * 5) + 1;
  return num;
}

const prevGuess = [];
let correct = 0;
let remaining = 10;
const guessRemain = document.querySelector(".guess-remain");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const guess = document.querySelector(".guess");
  const error = document.querySelector(".error");
  const prev = document.querySelector(".prev-guess");
  const guessNum = Number(guess.value);

  if (guess.value === "") {
    error.innerHTML = `<h3>box is empty</h3>`;
  } else if (guessNum >= 1 && guessNum <= 100) {
    if (remaining >= 1) {
      error.innerHTML = "";
      prevGuess.push(guessNum);
      prev.innerHTML = prevGuess;
      let number = randomNumber();
      remaining = remaining - 1;
      guessRemain.innerHTML = `${remaining}`;

      if (number === guessNum) {
        error.innerHTML = `<h3>Guess is correct 😎😎😎</h3>`;
        correct = correct + 1;
      } else {
        error.innerHTML = `<h3>Guess is incorrect 😔😔😔</h3>`;
      }
    } else {
      error.innerHTML = `<h3>game is over <br> ${correct} out of 10 are correct</h3>`;
    }
  } else {
    if (remaining >= 1) {
      error.innerHTML = `<h3>game is over</h3>`;
    } else {
      error.innerHTML = `<h3>number is out of range</h3>`;
    }
  }

  guess.value = "";
});
