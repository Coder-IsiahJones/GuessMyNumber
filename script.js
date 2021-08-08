'use strict';

// Generate secret number;
let secretNumber = generateSecretNumber();

// Score
let score = 20;
let highscore = 0;

// Play the game.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Check condition.
  if (!guess) {
    notValid();

    // When player wins.
  } else if (guess === secretNumber) {
    playerWins();

    if (score > highscore) {
      setHighScore();
    }

    // When guess is too high or to low.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber ? guessToHigh() : guessToLow();
    } else {
      gameLost();
    }
  }
});

// Play again.
document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function guessToLow() {
  displayMessage('📉 Too Low!');

  // Decrease score
  score--;
  // Update score
  updateScore(score);
}

function guessToHigh() {
  displayMessage('📈 Too high!');

  // Decrease score
  score--;
  // Update score
  updateScore(score);
}

function playerWins() {
  displayMessage('🎉 Correct Number!');

  // Set background color to green.
  setBackgroundColor('#60b347');
  setWidth('30rem');

  // Show secret number.
  showSecretNumber(secretNumber);
}

function gameLost() {
  displayMessage('💥 You lost the game!');
  document.querySelector('.score').textContent = 0;

  // Set background color to red.
  setBackgroundColor('#FF0000');
  setWidth('30rem');

  // Show secret number.
  showSecretNumber(secretNumber);
}

function resetGame() {
  // Reset secret number.
  secretNumber = generateSecretNumber();

  // Reset score.
  score = 20;
  document.querySelector('.score').textContent = score;

  // Hide secret number.
  hideSecretNumber();

  // Reset background color.
  setBackgroundColor('#222');
  setWidth('15rem');

  // Reset guess.
  document.querySelector('.guess').value = '';

  // Reset message.
  displayMessage('Start guessing...');
}

function setHighScore() {
  highscore = score;

  // Set highscore
  document.querySelector('.highscore').textContent = highscore;
}

function notValid() {
  displayMessage('⛔ No number!');
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

function setWidth(width) {
  document.querySelector('.number').style.width = width;
}

function showSecretNumber(secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
}

function hideSecretNumber() {
  document.querySelector('.number').textContent = '?';
}

function updateScore(score) {
  document.querySelector('.score').textContent = score;
}
