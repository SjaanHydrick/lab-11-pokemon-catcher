
export function getRandomPokemon(array) {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
}

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