var startBtn = document.getElementById("startBtn");
var questionPlace = document.getElementById("question");
var answerPlace = document.getElementById("answers");
var rightWrongPlace = document.getElementById("rightWrong")
var timerEl = document.getElementById("timer");
const questions = [
  ".setAttribute() is a javascript _____.",
  "There are __ falsey values",
];
const question1Answers = ["method", "function", "property", "pizza"];
const question2Answers = ["2", "9", "6", "1"];
var timeAmount = 60;
let countDown;
let answerItem;
let rightWrongAlert;

function question1() {
  questionPlace.textContent = questions[0];

  for (let i = 0; i < question1Answers.length; i++) {
    let answerItem = document.createElement("li");
    answerItem.textContent = question1Answers[i];
    answerItem.setAttribute("class", "list-group-item");
    console.log(answerItem);
    answerPlace.appendChild(answerItem);
  }
}
function question2() {
  questionPlace.textContent = questions[1];

  for (let i = 0; i < question2Answers.length; i++) {
    let answerItem = document.createElement("li");
    answerItem.textContent = question2Answers[i];
    answerItem.setAttribute("class", "list-group-item");
    console.log(answerItem);
    answerPlace.appendChild(answerItem);
  }
}

function timer(event) {
  event.preventDefault();
  timerEl.innerHTML = timeAmount;

  countDown = setInterval(function () {
    timeAmount--;
    timerEl.innerHTML = timeAmount;
  }, 1000);

  setTimeout(function () {
    clearInterval(countDown);
  }, 60000);
}

function gameStart(event) {
  event.preventDefault();

  var startPageEl = document.querySelectorAll(".startPage");
  var quizEl = document.querySelectorAll(".quiz");

  for (let i = 0; i < startPageEl.length; i++) {
    startPageEl[i].style.display = "none";
  }

  for (let i = 0; i < quizEl.length; i++) {
    quizEl[i].style.display = "block";
  }

  question1();
}

function answerChoice(event) {
  event.preventDefault();
}

startBtn.addEventListener("click", timer);
startBtn.addEventListener("click", gameStart);
answerPlace.addEventListener("click", answerChoice);