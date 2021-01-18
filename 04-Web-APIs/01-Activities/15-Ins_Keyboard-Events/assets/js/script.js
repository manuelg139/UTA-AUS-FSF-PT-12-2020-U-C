var typefaceEl = document.querySelector("#typeface");
var clearEl = document.querySelector("#clear");
var h1El = document.querySelector("#h1");
var h2El = document.querySelector("#h2");
var h3El = document.querySelector("#h3");
var pEl = document.querySelector("#p");
var textAreaEl = document.querySelector("#textarea");

var elements = [
  h1El, h2El, h3El, pEl
];

var typeface;

// Change event
typefaceEl.addEventListener("change", function(event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector(".container").style.fontFamily = typeface;
});

// Keydown event detects each key pressed and we added an event function to it
textAreaEl.addEventListener("keydown", function(event) {
  // Access value of pressed key with key property
  console.log('event: ' , event);

  // key is = to the event << key and put it to lowercase to matsh the alphabet var]
  var key = event.key.toLowerCase();
  //var for alphabeth with a split that lets you access them individually split("")
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+0123456789 ".split("");
    // condition, if they match than print 
  if (alphabetNumericCharacters.includes(key)) {
    elements.forEach(function(element) {
      element.textContent += event.key;
    });
  }
});


//clear button
clearEl.addEventListener("click", function(event) {
  event.preventDefault();
  textAreaEl.value = "";
  elements.forEach(function(element) {
    element.textContent = "";
  });
});
