
const homeButton = document.getElementById('home');
var ctx = document.getElementById('pokeman-chart').getContext('2d');
const localPokemon = localStorage.getItem('POKEARRAY');

homeButton.addEventListener('click', () => {
    location.href = '../index.html';
});

const pokemonStorageArray = JSON.parse(localPokemon);

const pokemonCapturedAmount = pokemonStorageArray.map(cartItem => cartItem.captured);
const pokemonEncounteredamount = pokemonStorageArray.map(cartItem => cartItem.encountered);

const labels = pokemonStorageArray.map(cartItem => cartItem.identifier);

const colors = [
    '#001a00',
    '#66ff66'
];

new Chart(ctx, {
    type: 'line',
    data: {
        labels,
        datasets: [{
            label: 'Pokemon Caught and Captured',
            data: pokemonCapturedAmount,
            backgroundColor: colors,
            borderColor: 'none',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
