let id = (id) => document.getElementById(id);
let query = (query) => document.querySelectorAll(query);
let quiz = id("quiz");
let question = id("heading");
let a = id("a_id");
let b = id("b_id");
let c = id("c_id");
let d = id("d_id");
let button = id("btn");
let option = query(".option");

// Popup variables
let popup = id("popup");
let popupCloseBtn = id("popup-close-btn");

// Above
// ignore this code

let quizApp = [
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Creative Style Sheets",
    c: "Computer Style Sheets",
    d: "Colorful Style Sheets",
    correct: "a",
  },
  {
    question: "Which of the following is not a programming language?",
    a: "Python",
    b: "HTML",
    c: "Java",
    d: "C++",
    correct: "b",
  },
  {
    question: "Which HTML tag is used to define an internal stylesheet?",
    a: "<css>",
    b: "<script>",
    c: "<style>",
    d: "<link>",
    correct: "c",
  },
  {
    question: "What does SQL stand for?",
    a: "Structured Query Language",
    b: "Strong Query Language",
    c: "Standard Query Language",
    d: "System Query Language",
    correct: "a",
  },
];

let clear = () => {
  for (let i = 0; i < option.length; i++) {
    option[i].checked = false;
  }
};

let check = () => {
  let checkId;
  for (let i = 0; i < option.length; i++) {
    if (option[i].checked) {
      checkId = option[i].id;
    }
  }
  return checkId;
};

let score = 0;
let initialStart = 0;

let quizLoad = () => {
  clear();
  let currentQuiz = quizApp[initialStart];
  question.textContent = currentQuiz.question;
  a.textContent = currentQuiz.a;
  b.textContent = currentQuiz.b;
  c.textContent = currentQuiz.c;
  d.textContent = currentQuiz.d;
};

quizLoad();

// Close the popup when the close button is clicked
popupCloseBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

button.addEventListener("click", () => {
  let c = check();
  if (c) {
    if (c === quizApp[initialStart].correct) {
      score++;
    }
    initialStart++;
    if (initialStart < quizApp.length) {
      quizLoad();
    } else {
      quiz.innerHTML = `
                <h2 class="heading">Your Answer Score is ${score}/${quizApp.length}</h2>
                <button style=" background: linear-gradient(135deg, #4b6cb7, #182848); color: white; border: 2px solid white; padding: 10px 20px; cursor: pointer; border-radius: 10px; transition: 0.3s ease-out; font-size: 1rem; margin-top: 10px; text-transform: uppercase;" onclick="history.go(0)">Start Again</button>
            `;
    }
  } else {
    popup.style.display = "flex";
  }
});
