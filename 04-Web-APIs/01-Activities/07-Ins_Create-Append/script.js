

// Stores user response in variable
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");



//Add Conditions 

//check to see they selected right

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {

  // Creates element based on tag entered by user passed as a string of tagName
  var tag = document.createElement(tagName);

  // Adds text content to created tag
  tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Select location where to print tag
  // Appends tag as child of document body
  document.body.appendChild(tag);
}



//Second go

var nextTag = confirm("Would you like to add another tag?");


//if they click yes
if (nextTag === true) {

  //create  new variable for 2nd answer 
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
    document.body.appendChild(secondTag);
  }
}


