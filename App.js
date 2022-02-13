init();

//----------button roll-------

document.querySelector(".btn-roll").addEventListener("click", () => {
    if(gamePlaying){
        let dice = Math.ceil(Math.random() * 6);
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice").src = "dice-" + dice + ".png"
        if (dice !== 1) {
            roundscores += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundscores;
        } else {
            nextPlayer()
        }
    }
});

//-------------button hold----------

document.querySelector(".btn-hold").addEventListener("click", () => {
    if(gamePlaying){
        scores[activePlayer] += roundscores;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner"); 
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("winner");
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});


const nextPlayer = () => {
    if (activePlayer === 1) {
        activePlayer = 0;
    } else if (activePlayer === 0) {
        activePlayer = 1;
        roundscores = 0;
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.querySelector(".dice").style.display = "none";
    }
}

//-------------button new -----------

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    gamePlaying;
    scores = [0, 0];
    roundscores = 0;
    activePlayer = 0;
    document.querySelector(".dice").style.display = "none"; //to hide dice 
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}