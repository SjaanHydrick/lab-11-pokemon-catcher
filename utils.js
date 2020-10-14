import { pokemonArray } from './pokemon.js';


//const pokemonName = document.querySelectorAll('h2');
const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('.pokemans');
const catchMessage = document.getElementById('catch-message');
const catchPokemon = document.querySelector(':checked');
//personal stretch
const pokeBall = document.getElementById('pokeball-sprite');

const POKEARRAY = 'POKEARRAY';

const pokemonBag = [];

//retreives 1 pokeman
export function getRandomPokemon(array) {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
}

//retreives 3 pokemans
export function getThreePokemon(array) {
    const threeArray = [];

    for (let i = 0; i < 3; i++) {
        let newArray = getRandomPokemon(array);
        while (threeArray.includes(newArray)) {
            newArray = getRandomPokemon(array);
        }
        threeArray.push(newArray);
    }
    return threeArray;
}

//generates and displays pokemans; logs pokemonEncountered
export function pokemonGenerator() {

    let wildPokemon = getThreePokemon(pokemonArray);

    for (let i = 0; i < wildPokemon.length; i++) {
        images[i].src = wildPokemon[i].url_image;
        radios[i].value = wildPokemon[i].pokebase;

        const actualEncountered = findByID(pokemonBag, radios[i].value, 'identifier');

        if (actualEncountered) {
            actualEncountered.encountered++;
        } else {
            pokemonBag.push({
                identifier: wildPokemon[i].pokebase,
                encountered: 1,
                captured: 0
            });
        }
    }
}

export function findByID(someArray, someId, identifier){
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item[identifier] === someId) {
            return item;
        }
    }
}    

//on choosing radio button; logs caughtPokemon
export function chooseRadioButton(nextButtonElement) {
    
    if (!catchPokemon) {
        nextButtonElement.disabled = true;
    }


    for (let i = 0; i < radios.length; i++) {

        radios[i].addEventListener('change', (e) => {

            nextButtonElement.disabled = false;

            for (let i = 0; i < radios.length; i++) {
                radios[i].disabled = true;
            }
            
            const thrownPokeBall = e.target.value;

            if (thrownPokeBall) {
                images[i].src = './PokeBall2.png';
            }

            const caughtPokemon = findByID(pokemonBag, thrownPokeBall, 'identifier');

            if (caughtPokemon) {
                caughtPokemon.captured++;
            } else {
                caughtPokemon.captured = 1;
            }
            //personal stretch
            pokeBall.innerHTML += "<img src='./pokeballSpriteResize.png' />";
            catchMessage.style.display = 'inline';
            catchMessage.textContent = `You caught a ${caughtPokemon.identifier}!`;

            setInLocalStorage(POKEARRAY, pokemonBag);
        });
    }
}

//restores Radio Buttons back to normal
export function restoreRadioButton(nextButtonElement){
    
    if (!catchPokemon) {
        nextButtonElement.disabled = true;
    }

    catchMessage.style.display = 'none';
    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
        radios[i].checked = false;
        images[i].style.opacity = 1;
    }
}


export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}

export function updateTextContent() {
    catchMessage.textContent = 'Out of PokeBalls!';
    
}

