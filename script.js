let id = (id) => document.getElementById(id);
let query = (q) => document.querySelectorAll(q);
let quiz = id('quiz');
let question = id('heading');
let a = id('a_id');
let b = id('b_id');
let c = id('c_id');
let d = id('d_id');
let btn = id('btn');
let option = query('.option');
let dialogOverlay = id('dialog-overlay');
let dialogBtn = id('dialog-btn');
let contactBtn = id('contact-btn');
let contactOverlay = id('contact-overlay');
let closeContactBtn = id('close-contact-btn');

let quizApp = [
    {
        question: 'HTML Stand for?',
        a: 'Hyper Text Markup Language',
        b: 'Hyper Text Machine Language',
        c: 'Hyper Text Machine Log',
        d: 'Hyper Transfer Machine Language',
        correct: 'a'
    },
    {
        question: 'Which language runs in the browser?',
        a: 'TypeScript',
        b: 'Ruby',
        c: 'JavaScript',
        d: 'PHP',
        correct: 'c'
    },
    {
        question: 'Python is a?',
        a: 'Scripting Language',
        b: 'General Purpose Language',
        c: 'Option a only',
        d: 'Option a and b',
        correct: 'd'
    },
];

let clear = () => {
    for (let i = 0; i < option.length; i++) {
        option[i].checked = false;
    }
};

let checked = () => {
    let chk;
    for (let i = 0; i < option.length; i++) {
        if (option[i].checked) {
            chk = option[i].id;
        }
    }
    return chk;
};

let score = 0;
let initialstart = 0;

let load_quiz = () => {
    clear();
    let quizData = quizApp[initialstart];
    question.innerText = quizData.question;
    a.innerText = quizData.a;
    b.innerText = quizData.b;
    c.innerText = quizData.c;
    d.innerText = quizData.d;
};

load_quiz();

btn.addEventListener('click', (e) => {
    let check = checked();
    if (check) {
        if (check === quizApp[initialstart].correct) {
            score++;
        }
        initialstart++;
        if (initialstart < quizApp.length) {
            load_quiz();
        } else {
            quiz.innerHTML = `
                <h2 class="last">Your Answer Score is ${score}/${quizApp.length}</h2>
                <button class="last-btn" onclick="history.go(0)">Start Again</button>
            `;
        }
    } else {
        dialogOverlay.style.display = 'flex';
    }
});

dialogBtn.addEventListener('click', () => {
    dialogOverlay.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
    dialogOverlay.style.display = 'none';
    contactOverlay.style.display = 'flex';
});

closeContactBtn.addEventListener('click', () => {
    contactOverlay.style.display = 'none';
});
