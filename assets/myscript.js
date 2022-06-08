let words = ["word", "wins", "loss", "editior", "realise", "studio","long", "programmer", "newspaper", "television", "java"];
let isGameRunning = false;
let selectedLetter = null;
let spanInterval;

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
    document.querySelector('#start').addEventListener('click', startGame);
    document.addEventListener("keydown", spanKeyDownHandler);
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
            letter.textContent = word.charAt(i);
        } else {
            letter.textContent = "_";
            letter.addEventListener("click", spanClickHandler);
            letter.style.color = "red";
        }
        letter.style.margin = "4px";
        display.appendChild(letter);
    }
}

function spanClickHandler(event) {
    if (selectedLetter == null) {
        selectedLetter = event.target;
        spanInterval = setInterval(function () {
            selectedLetter.style.visibility = (selectedLetter.style.visibility == 'hidden' ? '' : 'hidden');
        }, 500);
    }

}

function spanKeyDownHandler(event) {
    if (selectedLetter != null) {
        let dict="qwertyuiopasdfghjklzxcvbnm";
        
        if(dict.includes(event.key.toLowerCase())) {
            selectedLetter.textContent = event.key.toLowerCase();
            selectedLetter.style.visibility = '';
            selectedLetter = null;
            clearInterval(spanInterval);
            
        } else if (event.key === "Backspace") {
            selectedLetter.textContent = "_";
            selectedLetter.style.visibility = '';
            selectedLetter = null;
            clearInterval(spanInterval);
            
        }
    }
}

function startTimer() {

}

init();