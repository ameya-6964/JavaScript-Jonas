'use strict';

/* 
document.querySelector('.message').textContent = '🥳 Correct Number 🥳 ';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
// NOTE => Input Field Contains Value Property
document.querySelector('.guess').value = 23; 
*/

const button = document.querySelector('.check');

button.addEventListener('click', function (e) {
  e.preventDefault();
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }
});
