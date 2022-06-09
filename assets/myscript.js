let words = ["word", "wins", "loss", "editior", "realise", "studio","long", "programmer", "newspaper", "television", "java"];
let selectedIndex;
let word;
let numOfIncorrectIndex;
let isGameRunning = false;
let selectedLetter = null;
let countDown = -1;
let isGameFinished = true;
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
    isGameFinished = false;
    renderRandomWord();
    startTimer();
}

function renderRandomWord() {
    word = words[Math.floor(Math.random()*words.length)];
    numOfIncorrectIndex = word.length - 2;
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
            letter.id = i;
        }
        letter.style.margin = "4px";
        display.appendChild(letter);
    }
}

function spanClickHandler(event) {
    if (selectedLetter == null && !isGameFinished) {
        selectedIndex = Number(event.target.id);
        selectedLetter = event.target;
        spanInterval = setInterval(function () {
            selectedLetter.style.visibility = (selectedLetter.style.visibility == 'hidden' ? '' : 'hidden');
        }, 500);
    }

}

function spanKeyDownHandler(event) {
    if (selectedLetter != null && !isGameFinished) {
        let dict="qwertyuiopasdfghjklzxcvbnm";
        
        
        if(dict.includes(event.key.toLowerCase())) {
            if (word.charAt(selectedIndex) === event.key.toLowerCase()) {
                numOfIncorrectIndex--;
            } else if (word.charAt(selectedIndex) === selectedLetter.textContent) {
                numOfIncorrectIndex++;
            }
            selectedLetter.textContent = event.key.toLowerCase();
            selectedLetter.style.visibility = '';
            selectedLetter = null;
            clearInterval(spanInterval);
            if (numOfIncorrectIndex === 0) {
                let message = document.createElement("p");
                let winCount = Number(localStorage.getItem("wins"));
                winCount++;
                localStorage.setItem("wins", winCount);
                message.textContent = "You Win!"
                let display = document.querySelector('#display');
                display.innerHTML = '';
                display.appendChild(message);
                document.querySelector('#wins').textContent = "Wins: " + winCount;
                isGameFinished = true;
            }
            
        } else if (event.key === "Backspace") {
            if (word.charAt(selectedIndex) === selectedLetter.textContent) {
                numOfIncorrectIndex++;
            }
            selectedLetter.textContent = "_";
            selectedLetter.style.visibility = '';
            selectedLetter = null;
            clearInterval(spanInterval);
            
        }
        console.log(numOfIncorrectIndex);
    }
}

function startTimer() {

}

init();