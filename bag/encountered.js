
const homeButton = document.getElementById('home');
const captureButton = document.getElementById('captured');
var ctx = document.getElementById('pokeman-chart').getContext('2d');
const localPokemon = localStorage.getItem('POKEARRAY');

homeButton.addEventListener('click', () => {
    location.href = '../index.html';
});

Chart.defaults.global.defaultFontFamily = 'Nintendo';
Chart.defaults.global.defaultFontColor = '#202020'
;
Chart.defaults.global.defaultFontSize = 8;

const pokemonStorageArray = JSON.parse(localPokemon);

const pokemonEncounteredAmount = pokemonStorageArray.map(cartItem => cartItem.encountered);

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
            label: 'Pokemon Encountered',
            data: pokemonEncounteredAmount,
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

captureButton.addEventListener('click', () => {
    location.href = './captured.html';
});