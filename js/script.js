'use strict';
let checkButton = document.querySelector('.check');
let gameScore = document.querySelector('.score');
let resultsNumber = document.querySelector('.number');
let gameMessage = document.querySelector('.message')
let gameRest = document.querySelector('.again');
let gameHighScore = document.querySelector('.highscore');

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;


const displayMessage = (Element, message) => {
    document.querySelector(Element).textContent = message;
}
checkButton.addEventListener('click', () => {
    let guessNumber = Number(document.querySelector('.guess').value);
    if (!guessNumber) {
        displayMessage('.message', '⚠️ no Entered Data')
    }else if (guessNumber === secretNumber) {
        displayMessage('.message', '🎇 correct number ');
        document.body.style.backgroundColor = '#60b347';
        resultsNumber.style.width = '30rem';
        resultsNumber.textContent = secretNumber;
        highscore += score;
        gameHighScore.textContent = highscore;
    }else if (score > 1) {
        if (guessNumber !== secretNumber) {
            score--
            gameScore.textContent = score;
            displayMessage('.message', guessNumber > secretNumber ? 'Too High ! ' : 'Too Low');
            document.body.style.backgroundColor = '#222';
            resultsNumber.style.width = '15rem';
        }
    } else {
        displayMessage('.message', 'sorry you lose the game');
        gameScore.textContent = 0;
    }
  


})

gameRest.addEventListener('click', () => {
    displayMessage('.message', 'Start guessing...');
    displayMessage('.number', '?')
    score = 20;
    gameScore.textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.body.style.backgroundColor = '#222';
    resultsNumber.style.width = '15rem';
    document.querySelector('.guess').value = '';

})