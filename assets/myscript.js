let words = ["word", "wins", "loss", "editior", "realise", "studio","long", "programmer", "newspaper", "television", "java"];
let isGameRunning = false;

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
    let secondNonBlank;

    do {
        secondNonBlank = Math.floor(Math.random() * word.length);
    } while (firstNonBlank === secondNonBlank);

    for (let i = 0; i < word.length; i++) {
        if (i == firstNonBlank || i == secondNonBlank) {

        } else {
            
        }
    }

}

function startTimer() {

}

init();