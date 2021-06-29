var startBtn = document.getElementById("startBtn");
var questionPlace = document.getElementById("question");
var answerPlace = document.getElementById("answers");
var timerEl = document.getElementById("timer");
const questions = [".setAttribute() is a javascript _____."];
const question1Answers = ["method", "function", "property", "pizza"];
var timeAmount = 60;
let countDown;

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

  questionPlace.innerHTML = questions[0]

}

startBtn.addEventListener("click", gameStart);
startBtn.addEventListener("click", timer);
