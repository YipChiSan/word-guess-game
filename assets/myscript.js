let words = ["word", "wins", "loss", "editior", "realise", "studio","long", "programmer", "newspaper", "television", "java"];
let isGameRunning = false;
let selectedLetter;

function init() {
    let wins;
    let losses;
    if (localStorage.getItem("wins") === null) {
        wins = "0";
        localStorage.setItem("wins", "0");
    } else {
        wins = Number(localStorage.getItem("wins"));
    }

    if (localStorage.getItem("losses") === null) {
        losses = "0";
        localStorage.setItem("losses", "0");
    } else {
        losses = Number(localStorage.getItem("losses"));
    }

    document.querySelector('#wins').textContent = "Wins: " + wins;
    document.querySelector('#losses').textContent = "Losses: " + losses;
}

function startGame() {
    renderRandomWord();
    startTimer();
}

function renderRandomWord() {
    let word = words[Math.floor(Math.random()*words.length)];
    let firstNonBlank = Math.floor(Math.random() * word.length);
    let display = document.querySelector('#display');
    let secondNonBlank;
    let letter;

    do {
        secondNonBlank = Math.floor(Math.random() * word.length);
    } while (firstNonBlank === secondNonBlank);

    for (let i = 0; i < word.length; i++) {
        letter = document.createElement("span");
        if (i == firstNonBlank || i == secondNonBlank) {
            letter.innerHTML = word.charAt(i);
        } else {
            letter.innerHTML = "_";
        }
        letter.addEventListener("click", spanClickHandler);
        letter.addEventListener("keydown", spanKeyDownHandler);
        letter.style.margin = "4px";
        display.appendChild(letter);
    }
}

function spanClickHandler(event) {
    selectedLetter = event.target;
    setInterval(function () {
        selectedLetter.style.visibility = (selectedLetter.style.visibility == 'hidden' ? '' : 'hidden');
    }, 500);
}

function spanKeyDownHandler(event) {
    let dict="qwertyuiopasdfghjklzxcvbnm";
    if(dict.includes(event.key.toLowerCase())) {
        selectedLetter.textContent = event.key.toLowerCase();
        selectedLetter = null;
        clearInterval();
    } else if (event.code == 8) {
        selectedLetter.textContent = "_";
        selectedLetter = null;
        clearInterval();
    }

}

function startTimer() {

}

init();