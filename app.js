//grabbing the DOM elements:
const cupBtnOne = document.getElementById('cup-btn-1');
const cupBtnTwo = document.getElementById('cup-btn-2');
const cupBtnThree = document.getElementById('cup-btn-3');
// all three cup images
const cupImgOne = document.getElementById('cup-img-1');
const cupImgTwo = document.getElementById('cup-img-2');
const cupImgThree = document.getElementById('cup-img-3');
// all possible ball locations in an array
const hidingPlaces = ['cupOne', 'cupTwo', 'cupThree'];
// total wins and total guesses
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

const resetButton = document.getElementById('reset-button');

// let state - default values
let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

//event listeners
cupBtnOne.addEventListener('click', () => {
    handleGuess(randomCup(), 'cupOne');
});

cupBtnTwo.addEventListener('click', () => {
    handleGuess(randomCup(), 'cupTwo');
});

cupBtnThree.addEventListener('click', () => {
    handleGuess(randomCup(), 'cupThree');
});

// event listener for reset button
resetButton.addEventListener('click', () => {
    winsEl.textContent = 0;
    lossesEl.textContent = 0;
    totalEl.textContent = 0;
    correctGuesses = 0;
    incorrectGuesses = 0;
    totalGuesses = 0;
    clearScreen();
});

// function to get a random item from a random array
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

// uses array item to assign a value to hidingSpot  
function randomCup() {
    const hidingSpot = getRandomItem(hidingPlaces);
    return hidingSpot;
}

// update DOM
function handleGuess(correctSpot, userGuess) {

    clearScreen();

    if (correctSpot === userGuess) {
        correctGuesses++;
        totalGuesses++;
        winsEl.textContent = correctGuesses;
    } else {
        totalGuesses++;
        incorrectGuesses++;
        lossesEl.textContent = incorrectGuesses;
    }

    correctImage(correctSpot);
    totalEl.textContent = totalGuesses;
}

// function to assign correct spot image to the correct spot 
function correctImage(correctSpot) {
    if (correctSpot === 'cupOne') {
        cupImgOne.src = './assets/teacup-kitten.png';
    } else if (correctSpot === 'cupTwo') {
        cupImgTwo.src = './assets/teacup-kitten.png';
    } else {
        cupImgThree.src = './assets/teacup-kitten.png';
    }
}

// function to restore cup images to default state 
function clearScreen() {
    cupImgOne.src = './assets/fancy-teacup.png';
    cupImgTwo.src = './assets/fancy-teacup.png';
    cupImgThree.src = './assets/fancy-teacup.png';
}
