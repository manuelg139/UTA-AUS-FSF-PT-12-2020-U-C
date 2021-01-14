

// javascript code

var startButton = document.querySelector('start-button');
var timerInterval= document.querySelector('timer-count');


// class startbutton = start button


//timer class = timer count


var secondsLeft = 10;

startButton.addEventListener('click'), function(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        console.log('secondsLeft: ', secondsLeft);
            if (secondsLeft === 0) {
            clearInterval(timerInterval);
            losses++;
            timerCountEl.textContent - 'You Lose!';
            secondsRemainingH3.textContent = '';
            } else {
            timerCountEl.textContent = secondsLeft;
            }
    },1000);
}
