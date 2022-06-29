/*Add your JavaScript here*/
var spiritScore = 0; // Stores the score for Spirited Away

var evEvAllScore = 0; // Stores the score for Everything Everywhere..

var pridePrejScore = 0;// Stores the score for Spirited Away

var questionCount = 0;// Stores the amount of questions answered

var result = document.getElementById("results"); // Stores HTML results with DOM

var resultBtn = document.getElementById("result"); // Stores HTML for results button

var restart = document.getElementById("restart");

var resultImg = document.getElementById("resultImg");
// Stores HTML elemnts with DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

// Calls for function if it hears the click of the button

q1a1.addEventListener("click", everyEveryAll);

q1a2.addEventListener("click", spirited);

q1a3.addEventListener("click", pridePrej);

q2a1.addEventListener("click", spirited);

q2a2.addEventListener("click", pridePrej);

q2a3.addEventListener("click", everyEveryAll);

q3a1.addEventListener("click", spirited);

q3a2.addEventListener("click", everyEveryAll);

q3a3.addEventListener("click", pridePrej);

q4a1.addEventListener("click", spirited);

q4a2.addEventListener("click", pridePrej);

q4a3.addEventListener("click", everyEveryAll);

q5a1.addEventListener("click", spirited);

q5a2.addEventListener("click", everyEveryAll);

q5a3.addEventListener("click", pridePrej);

restart.addEventListener("click", restartBtn);




//Track spirited away score
function spirited() {
  spiritScore += 1;
  questionCount += 1;

  
  

// Checks if the questions have reached 5 and calls for the result
  if (questionCount == 5) {
  resultBtn.addEventListener("click", displayResult);
  console.log("The quiz is done!");
  updateResult();
}

  console.log("questionCount = " + questionCount + " spiritScore = " + spiritScore);
}


function pridePrej() {
  pridePrejScore += 1;
  questionCount += 1;

  if (questionCount == 5) {
  resultBtn.addEventListener("click", displayResult);
  console.log("The quiz is done!");
  updateResult();
}

  console.log("questionCount = " + questionCount + " pridePrejScore = " + pridePrejScore);
}



function everyEveryAll() {
  evEvAllScore += 1;
  questionCount += 1;



if(questionCount == 5) {
  resultBtn.addEventListener("click", displayResult);
  updateResult();
  console.log("The quiz is done!");
}

  
  console.log("questionCount = " + questionCount + " evEvAllScore = " + evEvAllScore);
}

function displayResult(){
  if (spiritScore >= 3) {
    result.innerHTML = "You got Spirited Away!";
    console.log("Spirited Away!");
    resultImg.innerHTML = "assets/spiritedaway.png";
  } else if (evEvAllScore >= 3) {
    console.log("Everything Everywhere All at Once!");
    result.innerHTML = "You got Everything Everywhere All at Once!";
    
  } else if (pridePrejScore >= 3) {
    console.log("Pride and Prejudice!");
    result.innerHTML = "You got Pride and Prejudice!";
  } else {
    result.innerHTML = "Try Again! Your results were more than one!";
    console.log("Try Again!");
  }
}

function restartBtn(){
  result.innerHTML = "Your result is...";
  spiritScore = 0;

  evEvAllScore = 0; 

  pridePrejScore = 0;

  questionCount = 0;
}


