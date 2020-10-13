import { pokemonArray } from './pokemon.js';
import { getThreePokemon } from './utils.js';

//import functions and grab DOM elements

const newGame = document.getElementById('start');
const pokemonName = document.querySelectorAll('h2');
const nextButton = document.getElementById('keep-running');
const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('.pokemans');
const bagButton = document.getElementById('bag');
const resetButton = document.getElementById('reset');
const catchMessage = document.getElementById('catch-message');

//initialize state

let numberOfTurns = 0;
let pokemonCaught = [];
let pokemonEncountered = [];

const encounteredPokemon = getThreePokemon(pokemonArray);

function pokemonGenerator() {
    for (let i = 0; i < encounteredPokemon.length; i++) {
        pokemonName[i].textContent = encounteredPokemon[i].pokebase;
        images[i].src = encounteredPokemon[i].url_image;
        radios[i].value = encounteredPokemon[i].id;
        pokemonEncountered.push(radios[i].value);

        console.log(pokemonEncountered);
    }
}

// new button: begins game.
// when game begins: three random pokemon displayed for each radio button.
newGame.addEventListener('click', () => {

    newGame.style.visibility = 'hidden';
    pokemonGenerator();

});

// catch pokemon, add to pokemonCaught, add to pokemonEncountered
function chooseRadioButton() {
    for (let i = 0; i < radios.length; i++) {

        radios[i].addEventListener('change', (e) => {

            for (let i = 0; i < radios.length; i++) {
                radios[i].disabled = true;
                images[i].style.opacity = .5;
            }

            //display message here

            const caughtPokemon = e.target.value === encounteredPokemon.id;
            pokemonCaught.push(caughtPokemon);
        });
    }
}

chooseRadioButton();

//numberOfTurns goes up until 10 turns
nextButton.addEventListener('click', () => {
    numberOfTurns++;
    pokemonGenerator();

    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
        radios[i].checked = false;
        images[i].style.opacity = 1;
    }

    if (numberOfTurns === 10) {
        nextButton.style.visibility = 'hidden';
        bagButton.style.visibility = 'visible';
        catchMessage.textContent = 'Check your bag to see what you\'ve caught!';
    }
});