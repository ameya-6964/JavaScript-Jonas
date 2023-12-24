'use strict';

/* 
document.querySelector('.message').textContent = '🥳 Correct Number 🥳 ';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
// NOTE => Input Field Contains Value Property
document.querySelector('.guess').value = 23; 
*/

const button = document.querySelector('.check');
const body = document.querySelector('body');
const finalMessage = document.querySelector('.message');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const diplayedNumber = document.querySelector('.number');
diplayedNumber.textContent = secretNumber;
let displayedScore = document.querySelector('.score');
let score = 20;

button.addEventListener('click', function (e) {
  e.preventDefault();
  const guess = Number(document.querySelector('.guess').value);

  //! When There Is No Guess
  if (!guess) {
    finalMessage.textContent = '⛔ No Number';
  }
  //! When Player Wins
  else if (guess === secretNumber) {
    finalMessage.textContent = '🥳 Correct Number';
    score += 5;
    displayedScore.textContent = score;
    body.style.backgroundColor = '#60b347';
    diplayedNumber.style.width = '30rem';
  }
  //! When Guess Is Bigger Than Secret Number
  else if (guess > secretNumber) {
    if (score > 1) {
      finalMessage.textContent = 'Too High 📈';
      score--;
      displayedScore.textContent = score;
    } else {
      finalMessage.textContent = 'You Lost The Game';
      displayedScore.textContent = 0;
      body.style.backgroundColor = '#F23';
    }
  }
  //! When Guess Is Smaller Than Secret Number
  else if (guess < secretNumber) {
    if (score > 1) {
      finalMessage.textContent = 'Too Low 📉';
      score--;
      displayedScore.textContent = score;
    } else {
      finalMessage.textContent = 'You Lost The Game';
      displayedScore.textContent = 0;
      body.style.backgroundColor = '#F23';
    }
  }
});
