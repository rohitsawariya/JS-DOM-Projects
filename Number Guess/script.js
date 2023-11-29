let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector('.resultParas')

const p = document.createElement("p");

let prevGuess = []
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a Valid Number")
    }
    else if (guess < 1) {
        alert("Please Enter a Number Greater than 0")
    }
    else if (guess > 100) {
        alert("Please Enter a Number Less Than 100")
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guesses it Right`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is TOO LOW`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is TOO HIGH`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', "")
    p.classList.add('button')
    p.innerHTML = `<h3>Start new Game</h3>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        newGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}


