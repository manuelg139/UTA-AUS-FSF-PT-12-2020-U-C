var eventType = document.querySelector("#event-type"); 
var keyEventsEl = document.querySelector("#key-events");

function keydownAction(event) {
  // TODO: Complete keydown function
  console.log(event);




}



function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keyupAction);
