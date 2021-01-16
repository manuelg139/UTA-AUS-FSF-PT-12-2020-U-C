// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10; //timer starting point

function setTime() {
  // Sets interval is a fuction to delay milliseconds
  
  //create timer called timerInterval 
  var timerInterval = setInterval(
    //its function 
    function() {
    secondsLeft--; // secondsLeft -1 
    // text box explaining seconds left//  10-0 countdown + text
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    //what happends at the end condition//
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      //Stop Interval called timerInterval
      clearInterval(timerInterval);
      // Calls function to create and append image// call a fucntion below
      sendMessage();
    }

  }, 1000 // the counter meassurement is a second
  );
}

// Function to create and append colorsplosion image
//fucntion we called at the end of the timer fucntion

function sendMessage() {

  //create a textbox with an imgae under mainEL
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}


//Call the whole fucntion
setTime();
