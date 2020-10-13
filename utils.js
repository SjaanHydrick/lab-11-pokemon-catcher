import { pokemonArray } from './pokemon.js';


//const pokemonName = document.querySelectorAll('h2');
const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('.pokemans');

const encounteredPokemon = getThreePokemon(pokemonArray);

let pokemonEncountered = [];
let pokemonCaught = [];

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
        //pokemonName[i].textContent = wildPokemon[i].pokebase;
        images[i].src = wildPokemon[i].url_image;
        radios[i].value = wildPokemon[i].id;
        pokemonEncountered.push(radios[i].value);

        console.log(pokemonEncountered);
    }
}

export function findByID(someArray, someId){
    for (const item of someArray) {
        if (item.id === someId) {
            return item;
        }
    }

}

//on choosing radio button; logs caughtPokemon
export function chooseRadioButton() {
    for (let i = 0; i < radios.length; i++) {

        radios[i].addEventListener('change', (e) => {

            for (let i = 0; i < radios.length; i++) {
            
                radios[i].disabled = true;
                images[i].style.opacity = .5;
                
            }

            //display you caught message here

            radios[i].value = encounteredPokemon[i].id;

            const caughtPokemonID = e.target.value;

            const pokemanID = findByID(pokemonArray, caughtPokemonID);

            pokemonCaught.push(pokemanID);

            console.log(pokemanID);
        });
    }
}

export function restoreRadioButton(){
    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
        radios[i].checked = false;
        images[i].style.opacity = 1;
    }
}