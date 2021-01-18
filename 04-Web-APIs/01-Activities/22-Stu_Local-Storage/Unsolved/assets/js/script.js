var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page

//make variable links to local storage items
  var userEmail = localStorage.getItem("email");
  // create the text to display on LastRegustered
  userEmailSpan.textContent = userEmail 
  var userPassword = localStorage.getItem("password");
  userPasswordSpan.textContent = userPassword
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
    //once you get 'sucess' save the imput
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
   
  // TODO: Save email and password to localStorage and render the last registered user
  }

  renderLastRegistered();

});
