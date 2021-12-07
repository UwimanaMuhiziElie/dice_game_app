
var scores, roundScores, activePlayer,gamePlaying;

scores = [0, 0];
roundScores = 0;
activePlayer = 0;

gamePlaying = true;

//dice = Math.ceil(Math.random() *6);

// console.log(dice);

document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";

document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";
document.querySelector(".dice").style.display = "none";


document.querySelector(".btn-roll").addEventListener("click", function(){

    if(gamePlaying){
        var dice = Math.ceil(Math.random() * 6);

        document.querySelector("#current-" + activePlayer).textContent = dice;
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice").src = "dice-" + dice + ".png";
    
        if(dice !== 1){
        roundScores += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScores;
        } else {
        if(activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }

        roundScores = 0;

        document.querySelector("#current-0").textContent = "0";
        document.querySelector("#current-1").textContent = "0";

        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.querySelector(".dice").style.display = "none";
        }
    }
    
    
});


document.querySelector(".btn-hold").addEventListener("click", function(){
    
    if(gamePlaying){
        scores[activePlayer] += roundScores;
    
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        document.querySelector(".dice").style.display = "none";
        document.querySelector("#current-0").textContent = "0";
        document.querySelector("#current-1").textContent = "0";


    
        if(scores[activePlayer] >=100){
            scores[activePlayer];

            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector("#name-" + activePlayer).style.color = "red";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        } else {
            if(activePlayer === 0){
              activePlayer = 1;
            } else {
               activePlayer = 0;
            }

            roundScores = 0;

            document.querySelector("#current-0").textContent = "0";
            document.querySelector("#current-1").textContent = "0";

            document.querySelector(".player-"+ activePlayer +"-panel").classList.toggle("active");
            document.querySelector(".player-"+ activePlayer +"-panel").classList.toggle("active");
            document.querySelector(".dice").style.display = "none";
        }
    }


});


document.querySelector(".btn-new").addEventListener("click", function() {


    document.querySelector("#name-0").style.color = "#555";
    document.querySelector("#name-1").style.color = "#555";
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";

    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#current-1").textContent = "0";

    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";
    document.querySelector(".dice").style.display = "none";

});