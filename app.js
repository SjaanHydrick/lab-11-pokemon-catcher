//import { pokemonArray } from './pokemon.js';
import { pokemonGenerator, chooseRadioButton, restoreRadioButton } from './utils.js';

//import functions and grab DOM elements

const newGame = document.getElementById('start');
const nextButton = document.getElementById('keep-running');
const bagButton = document.getElementById('bag');
const resetButton = document.getElementById('reset');
const catchMessage = document.getElementById('catch-message');

//initialize state

let numberOfTurns = 0;

nextButton.style.visibility = 'hidden';
catchMessage.style.visibility = 'hidden';
resetButton.style.visibility = 'hidden';
bagButton.style.visibility = 'hidden';

newGame.addEventListener('click', () => {

    newGame.style.visibility = 'hidden';
    nextButton.style.visibility = 'visible';
    resetButton.style.visibility = 'visible';
    pokemonGenerator();

});

chooseRadioButton();

//numberOfTurns goes up until 10 turns
nextButton.addEventListener('click', () => {
    numberOfTurns++;
    pokemonGenerator();
    restoreRadioButton();

    if (numberOfTurns === 10) {
        nextButton.style.visibility = 'hidden';
        bagButton.style.visibility = 'visible';
        catchMessage.textContent = 'Check your bag to see what you\'ve caught!';
    }
});