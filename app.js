// import functions and grab DOM elements

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

const cupContainerOne = document.getElementById('cup-container-1');
const cupContainerTwo = document.getElementById('cup-container-2');
const cupContainerThree = document.getElementById('cup-container-3');

const cupBtnOne = document.getElementById('cup-btn-1');
const cupBtnTwo = document.getElementById('cup-btn-2');
const cupBtnThree = document.getElementById('cup-btn-3');

const cupImgOne = document.getElementById('cup-img-1');
const cupImgTwo = document.getElementById('cup-img-2');
const cupImgThree = document.getElementById('cup-img-3');

const hidingPlaces = ['cupOne', 'cupTwo', 'cupThree'];

const winsEl = document.getElementById('wins');
const totalEl = document.getElementById('total');

let correctGuesses = 0;
let totalGuesses = 0;

const resetButton = document.getElementById('reset-button');

function randomCup() {
  const hidingSpot = Math.floor(Math.random() * hidingPlaces.length);
  const answer = hidingPlaces[hidingSpot];
  return answer;
}

cupBtnOne.addEventListener('click', () => {
  handleGuess(randomCup(), 'cupOne');
});

cupBtnTwo.addEventListener('click', () => {
  handleGuess(randomCup(), 'cupTwo');
});

cupBtnThree.addEventListener('click', () => {
  handleGuess(randomCup(), 'cupThree');
});


function handleGuess(correctSpot, userGuess) {

  clearScreen();

  if (correctSpot === userGuess) {
    correctGuesses++;
    totalGuesses++;
    winsEl.textContent = correctGuesses;
  } else {
    totalGuesses++;
  }

  if (correctSpot === 'cupOne') {
    cupImgOne.src = './assets/cup-with-ball.png';
  } else if (correctSpot === 'cupTwo') {
    cupImgTwo.src = './assets/cup-with-ball.png';
  } else {
    cupImgThree.src = './assets/cup-with-ball.png';
  }

  totalEl.textContent = totalGuesses;
}

resetButton.addEventListener('click', () => {
  winsEl.textContent = 0;
  totalEl.textContent = 0;
  clearScreen();
});

function clearScreen() {
  cupImgOne.src = './assets/red-cup.png';
  cupImgTwo.src = './assets/red-cup.png';
  cupImgThree.src = './assets/red-cup.png';
}


