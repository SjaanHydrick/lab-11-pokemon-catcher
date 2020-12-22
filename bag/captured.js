
const homeButton = document.getElementById('home');
var ctx = document.getElementById('pokeman-chart').getContext('2d');

const localPokemon = localStorage.getItem('POKEARRAY');

const encounterButton = document.getElementById('encountered');

homeButton.addEventListener('click', () => {
    location.href = '../index.html';
});

Chart.defaults.global.defaultFontFamily = 'Nintendo';
Chart.defaults.global.defaultFontColor = '#202020';
Chart.defaults.global.defaultFontSize = 8;


const pokemonStorageArray = JSON.parse(localPokemon);

const pokemonCapturedAmount = pokemonStorageArray.map(cartItem => cartItem.captured);

const labels = pokemonStorageArray.map(cartItem => cartItem.identifier);

const colors = [
    '#003300',
    '#003300',
    '#003300',
    '#003300',
    '#003300',
    '#003300',
    '#003300',
    '#003300',
    '#003300',
    '#003300',
    '#003300',
    '#003300',
    '#003300',
    '#003300',
    '#003300'
];

new Chart(ctx, {
    type: 'bar',
    data: {
        labels,
        datasets: [{
            label: 'Pokemon Captured',
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

encounterButton.addEventListener('click', () => {
    location.href = './encountered.html';
});