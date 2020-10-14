//import { pokemonArray } from './pokemon.js';
import { pokemonGenerator, chooseRadioButton, restoreRadioButton, updateTextContent } from './utils.js';

//import functions and grab DOM elements

const newGame = document.getElementById('start');
const nextButton = document.getElementById('keep-running');
const bagButton = document.getElementById('bag');
const resetButton = document.getElementById('reset');


//initialize state

let numberOfTurns = 0;

nextButton.style.visibility = 'hidden';
resetButton.style.visibility = 'hidden';
bagButton.style.display = 'none';

newGame.addEventListener('click', () => {

    newGame.style.display = 'none';
    nextButton.style.visibility = 'visible';
    resetButton.style.visibility = 'visible';
    pokemonGenerator();

});

chooseRadioButton(nextButton);

//numberOfTurns goes up until 10 turns
nextButton.addEventListener('click', () => {
    numberOfTurns++;

    if (numberOfTurns < 10) {
        pokemonGenerator();
        restoreRadioButton(nextButton);
    } else {
        nextButton.style.display = 'none';
        bagButton.style.display = 'inline';
        updateTextContent();
    }
});

bagButton.addEventListener('click', () => {
    location.href = './bag/captured.html';
});

resetButton.addEventListener('click', () => {
    location.reload();
});