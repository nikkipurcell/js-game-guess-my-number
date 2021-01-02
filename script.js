'use strict';

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = generateSecretNumber();

const setDisplayNumber = function (value) {
  document.querySelector('.number').textContent = value;
};
const setScore = function (value) {
  document.querySelector('.score').textContent = value;
};

const setStyles = function (bgColor, width) {
  document.querySelector('body').style.backgroundColor = bgColor;
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('No number!');
    // guess is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    setDisplayNumber(secretNumber);
    setStyles('#60b347', '30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');

      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game!');
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  setStyles('#222', '15rem');
  displayMessage('Guess my number!');

  score = 20;
  setScore(score);

  document.querySelector('.guess').value = '';
  secretNumber = generateSecretNumber();
  setDisplayNumber('?');
});
