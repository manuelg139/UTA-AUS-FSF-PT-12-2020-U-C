


//Start Button

document.getElementsById("start-button").addEventListener("click", startGame);

//timer for the game
var timerEl = document.querySelector(".timer-count");
var timerEl = document.querySelector(".win");
var timerEl = document.querySelector(".lose");
var timerEl = document.querySelector("word-blank");


//variables to start the game
vas secondsLeft = 10;
var hiddenWord = "Javascript";
var wins = 0 ;
var losses = 0;
var typeofWord = input

//timer
function setTime(){
        var timerInterval = setInterval(function(){
            secondsLeft--;
            timerEl.textContent = secondsLeft + "seconds remaning.";

            if(secondsLeft <= 0){
                clearInterval(timerInterval);
            };
        })
};

function startGame(){
    var userWord = "hi";
    var userWord = document.getElementsByClassName("word-blanks").innerText;

}

