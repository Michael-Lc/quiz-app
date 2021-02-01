const quiz = [
  {
    question: "What does HTML stand for?",
    a: "Home Tool Markup Language",
    b: "Hyper Text Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "Honda Toyota Masserati Lamborghini",
    answer: "b",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<scripting>",
    b: "<javascript>",
    c: "<script>",
    d: "<js>",
    answer: "c",
  },
  {
    question: "Bootstrap uses _______ design.",
    a: "mobile-first",
    b: "desktop-first",
    c: "computer-first",
    d: "tablet-first",
    answer: "a",
  },
  {
    question: "Which of the following is correct?",
    a: "jQuery is a JSON Library",
    b: "jQuery is a JavaScript Library",
    c: "jQuery is a C# Library",
    d: "jQuery is a HTML Library",
    answer: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Computer Style Sheets",
    c: "Cascading Style Sheets",
    d: "Colorful Style Sheets",
    answer: "c",
  },
];

let questionNum = 1;
let score = 0;

function setQuestion() {
  const questionIdx = questionNum - 1;
  const question = document.getElementById("question");
  const options = document.getElementsByClassName("optionLabel");

  question.innerHTML = `${questionNum}. ${quiz[questionIdx].question}`;
  options[0].innerText = quiz[questionIdx].a;
  options[1].innerText = quiz[questionIdx].b;
  options[2].innerText = quiz[questionIdx].c;
  options[3].innerText = quiz[questionIdx].d;
}

setQuestion();

document.getElementById("submit").addEventListener("click", function () {
  const answer = document.querySelector("input:checked");
  const questionIdx = questionNum - 1;

  if (answer && answer.id === quiz[questionIdx].answer) {
    score += 1;
  }

  if (questionNum >= 5) {
    return showScore();
  }

  answer ? (answer.checked = false) : null;
  questionNum += 1;
  setQuestion();
});

function showScore() {
  const quizCard = document.getElementById("quiz-card");
  quizCard.innerHTML = `<h3>You Scored ${score} out of ${quiz.length}</h3><button class="submit" onclick="location.reload()">Retake the Test</button>`;
}
