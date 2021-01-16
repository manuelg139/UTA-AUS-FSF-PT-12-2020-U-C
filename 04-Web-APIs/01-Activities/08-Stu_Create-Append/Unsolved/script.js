var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");


// Create ordered list element
var listEl = document.createElement("ol");

// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");


//CONTENT//
h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";


//PLACEMENT//
body.appendChild(h1El);         //Header under body
body.appendChild(infoEl);       //Div for content under body 
infoEl.appendChild(imgEl);      // image under div
infoEl.appendChild(kittenEl);   //text under div under img
infoEl.appendChild(nameEl);     //text under div under img

body.appendChild(favoriteEl);   // div for the List
favoriteEl.appendChild(listEl); //list


// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");




// TODO: Add ordered list items containing four favorite foods

listEl.setAttribute("style", "background:#333333; padding:20px;")


body.appendChild(li1);
li1.textContent = "I Like Milk";
li1.setAttribute("style", "color:white;; padding:5px; margin-left:35px; background:yellow;");

body.appendChild(li2);
li2.textContent = "I Like Tuna"
li2.setAttribute("style", "color:white;; padding:5px; margin-left:35px; background:red;");

body.appendChild(li3);
li3.textContent = "I Like Eggs"
li3.setAttribute("style", "color:white;; padding:5px; margin-left:35px; background:blue;");

body.appendChild(li4);
li4.textContent = "I Like Meat"
li4.setAttribute("style", "color:white;; padding:5px; margin-left:35px; background:green;");
