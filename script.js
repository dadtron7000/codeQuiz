var startBtn = document.getElementById("startBtn");
var startPageEl = document.querySelectorAll(".startPage");
var questionPlace = document.getElementById("question");
var quizBox = document.getElementById("quizBox");
var answerPlace = document.querySelector("#answerBox");
var rightWrongPlace = document.getElementById("rightWrong");
var scoreBox = document.getElementById("scoreBox");
var timerEl = document.getElementById("timer");
var answers1 = document.getElementById("answers1");
var answers2 = document.getElementById("answers2");
var answers3 = document.getElementById("answers3");
var answers4 = document.getElementById("answers4");
var answers5 = document.getElementById("answers5");
var finalScore = document.getElementById("finalScore");
var initials = document.getElementById("initials");
var highScoreBtn = document.getElementById("highScoreBtn");
const questions = [
  ".setAttribute() is a javascript _____.",
  "There are __ falsey values",
  "javascript can be used to maniputlate the DOM. Waht is the DOM?",
  "its hard to come up with questions for a quiz.",
  "<header> is what type of tag?",
];
const question1Answers = ["method", "function", "property", "pizza"];
const question2Answers = ["2", "9", "6", "1"];
const question3Answers = [
  "day of the month",
  "the guy in fast & furious",
  "dad of the month",
  "Document Object Model",
];
const question4Answers = ["True", "False"];
const question5Answers = [
  "descriptive",
  "semantic",
  "unnecessary",
  "all of the above",
];
var timeAmount = 60;
var score = 0;
let countDown;
let answerItem;
let rightWrongAlert;
let questionDelay;

function rightFunc() {
  rightWrongPlace.textContent = "Correct!!";
  score += 10;
  console.log(score);
}

function wrongFunc() {
  rightWrongPlace.textContent = "Wrong!!";
}

function question1() {
  questionPlace.textContent = questions[0];
                    

  for (let i = 0; i < question1Answers.length; i++) {
    let answerItem = document.createElement("li");
    answerItem.textContent = question1Answers[i];
    answerItem.setAttribute("class", "list-group-item");
    console.log(answerItem);
    answers1.append(answerItem);
  }
}

function question2() {
  questionPlace.textContent = questions[1];
  answers1.style.display = "none";
  answers2.style.display = "block";

  for (let i = 0; i < question2Answers.length; i++) {
    let answerItem = document.createElement("li");
    answerItem.textContent = question2Answers[i];
    answerItem.setAttribute("class", "list-group-item");
    console.log(answerItem);
    answers2.appendChild(answerItem);
    rightWrongPlace.textContent = ``;
  }
}
function question3() {
  questionPlace.textContent = questions[2];
  answers2.style.display = "none";
  answers3.style.display = "block";

  for (let i = 0; i < question3Answers.length; i++) {
    let answerItem = document.createElement("li");
    answerItem.textContent = question3Answers[i];
    answerItem.setAttribute("class", "list-group-item");
    console.log(answerItem);
    answers3.appendChild(answerItem);
    rightWrongPlace.textContent = ``;
  }
}
function question4() {
  questionPlace.textContent = questions[3];
  answers3.style.display = "none";
  answers4.style.display = "block";

  for (let i = 0; i < question4Answers.length; i++) {
    let answerItem = document.createElement("li");
    answerItem.textContent = question4Answers[i];
    answerItem.setAttribute("class", "list-group-item");
    console.log(answerItem);
    answers4.appendChild(answerItem);
    rightWrongPlace.textContent = ``;
  }
}
function question5() {
  questionPlace.textContent = questions[4];
  answers4.style.display = "none";
  answers5.style.display = "block";

  for (let i = 0; i < question5Answers.length; i++) {
    let answerItem = document.createElement("li");
    answerItem.textContent = question5Answers[i];
    answerItem.setAttribute("class", "list-group-item");
    console.log(answerItem);
    answers5.appendChild(answerItem);
    rightWrongPlace.textContent = ``;
  }
}

function scoreCard() {
  answers5.style.display = "none";
  quizBox.style.display = "none";
  scoreBox.style.display = "block";

  if (score !== 0) {
    score += Math.floor(timeAmount / 4);
    console.log(score);
    finalScore.textContent = "Final score: " + score;
  } else {
    finalScore.textContent = "Final score: " + score;
  }
}

function addHighScore(event) {
    event.preventDefault();
  var highScores = localStorage.getItem("highScores");
  highScores = highscores ? highScores.split(`,`) : [];
  highScores.push(initials + ": " + score)
  console.log(highScores);
  localStorage.setItem(`highScores`, highScores.toString());
 
}

function reset() {
  window.location.reload()
}

function timer(event) {
  event.preventDefault();
  timerEl.textContent = timeAmount;

  countDown = setInterval(function () {
    timeAmount--;
    timerEl.textContent = timeAmount;
  }, 1000);

  setTimeout(function () {
    clearInterval(countDown);
  }, 60000);
}

function gameStart(event) {
  event.preventDefault();
  console.log(answerPlace);

  quizBox.style.display = "block";
  answerPlace.style.display = "block"

  for (let i = 0; i < startPageEl.length; i++) {
    startPageEl[i].style.display = "none";
  }

  question1();
}

function answerChoice(event) {
  event.preventDefault();
  //   console.log(answerPlace.childNodes)
  //   answerPlace.remove()

  if (
    questionPlace.textContent === questions[0] &&
    event.target.textContent === "method"
  ) {
    rightFunc();
    questionDelay = setTimeout(question2, 1000);
  } else {
    wrongFunc();
    questionDelay = setTimeout(question2, 1000);
  }
}

function answerChoice2(event) {
  event.preventDefault();
  //   console.log(answerPlace.childNodes)
  //   answerPlace.remove()

  if (
    questionPlace.textContent === questions[1] &&
    event.target.textContent === "6"
  ) {
    rightFunc();
    questionDelay = setTimeout(question3, 1000);
  } else {
    wrongFunc();
    questionDelay = setTimeout(question3, 1000);
  }
}
function answerChoice3(event) {
  event.preventDefault();
  //   console.log(answerPlace.childNodes)
  //   answerPlace.remove()

  if (
    questionPlace.textContent === questions[2] &&
    event.target.textContent === "Document Object Model"
  ) {
    rightFunc();
    questionDelay = setTimeout(question4, 1000);
  } else {
    wrongFunc();
    questionDelay = setTimeout(question4, 1000);
  }
}
function answerChoice4(event) {
  event.preventDefault();
  //   console.log(answerPlace.childNodes)
  //   answerPlace.remove()

  if (
    questionPlace.textContent === questions[3] &&
    event.target.textContent === "True"
  ) {
    rightFunc();
    questionDelay = setTimeout(question5, 1000);
  } else {
    wrongFunc();
    questionDelay = setTimeout(question5, 1000);
  }
}
function answerChoice5(event) {
  event.preventDefault();
  clearInterval(countDown);
  //   console.log(answerPlace.childNodes)
  //   answerPlace.remove()

  if (
    questionPlace.textContent === questions[4] &&
    event.target.textContent === "semantic"
  ) {
    rightFunc();
    questionDelay = setTimeout(scoreCard, 1000);
  } else {
    wrongFunc();
    questionDelay = setTimeout(scoreCard, 1000);
  }
}

startBtn.addEventListener("click", timer);
startBtn.addEventListener("click", gameStart);
answers1.addEventListener("click", answerChoice);
answers2.addEventListener("click", answerChoice2);
answers3.addEventListener("click", answerChoice3);
answers4.addEventListener("click", answerChoice4);
answers5.addEventListener("click", answerChoice5);
highScoreBtn.addEventListener("click", addHighScore);
highScoreBtn.addEventListener("click", reset);
