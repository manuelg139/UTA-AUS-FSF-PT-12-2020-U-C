var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// this method is for the counter // is good code for being reused and because HTML understands it
function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button

//call +button add one when  clicked
incrementEl.addEventListener("click", function(){
  count ++;
setCounterText();
});


// TODO: Add event listener to decrement button 
//call -button sub one when  clicked
decrementEl.addEventListener("click", function(){
  if (count> 0){
  count --;
setCounterText();}


});
