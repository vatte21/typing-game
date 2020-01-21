window.addEventListener('load', init)

//Global v

//Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

//To change level
const currentLevel = levels.easy;

let time = currentLevel,
    score = 0,
    isPlaying;

// Dom v
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// array of words

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'everyone',
    'everywhere',
    'seem',
    'placeholder',
    'input',
    'beautiful',
    'create',
    'imaginate',
    'imagination',
    'hover',
    'hangover',
    'summer',
    'autumn',
    'wednesday',
    'sunday',
    'evening',
    'tomato'
  ];

  // InitGame
  function init() {
      console.log('poehali');
      seconds.innerHTML = currentLevel;
    
    //Load words from array
    showWord(words);
    //Start on work input
    wordInput.addEventListener('input', startMatch)
    //Call countdown evsecond
    setInterval(countdown, 1000);
    // checking game status
    setInterval(checkStatus, 50);
  }


// func random word
  function showWord() {
    const randIndex = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[randIndex]
}

//countdown Func timer
function countdown () {
    // check time isnt run out
    if(time > 0) {
        // Decrement
        time--;
    } else if (time === 0) {
        //gameover
        isPlaying = false;
    }

    //ShowTime
    timeDisplay.innerHTML = time;
}

//CheckGameStatus func
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over.';
        score = -1;
    }
}

// startMatch Func
function startMatch() {
    if(matchWords()) {
        console.log('Match!')
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    //if score is -1 , display is 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

//match CurrentWord to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}