var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
  event.preventDefault();

  var studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim()  // trims xtra date from user like xtra retuns or spaces
  };


  // JSON.stringify turns data into strings
var stringified = JSON.stringify(studentGrade);
console.log("Hey stringified +  " ,typeof stringified,  stringified);

localStorage.setItem("studentGrade",stringified);    
renderMessage();



});
// JSON.stringify turns data into strings
function renderMessage() {

var localStorageGrade = localStorage.getItem("studentGrade");
console.log("Hey localStorageGrade =   ", typeof localStorageGrade, localStorage);


// JSON.parse tursnit back into objects 
  var lastGrade = JSON.parse(localStorageGrade)
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}
