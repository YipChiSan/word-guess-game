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

init();