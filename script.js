let id = (id) => document.getElementById(id);
let query = (query) => document.querySelectorAll(query);
let quiz = id('quiz');
let question = id('heading');
let a = id('a_id');
let b = id('b_id');
let c = id('c_id');
let d = id('d_id');
let button = id('btn');
let option = query('.option');
// Popup vaiables
let popup = id('popup');
let popupMessage = id('popup-message');
let popupCloseBtn = id('popup-close-btn');
// Above
// ignore this code

let quizApp = [
    {
        question: 'What does CSS stand for?',
        a: 'Cascading Style Sheets',
        b: 'Creative Style Sheets',
        c: 'Computer Style Sheets',
        d: 'Colorful Style Sheets',
        correct: 'a'
    },
    {
        question: 'Which of the following is not a programming language?',
        a: 'Python',
        b: 'HTML',
        c: 'Java',
        d: 'C++',
        correct: 'b'
    },
    {
        question: 'Which HTML tag is used to define an internal stylesheet?',
        a: '<css>',
        b: '<script>',
        c: '<style>',
        d: '<link>',
        correct: 'c'
    },
    {
        question: 'What does SQL stand for?',
        a: 'Structured Query Language',
        b: 'Strong Query Language',
        c: 'Standard Query Language',
        d: 'System Query Language',
        correct: 'a'
    },
    {
        question: 'Which one is used to create a hyperlink in HTML?',
        a: '<img>',
        b: '<a>',
        c: '<link>',
        d: '<href>',
        correct: 'b'
    },
    {
        question: 'What does DOM stand for?',
        a: 'Document Object Model',
        b: 'Data Object Management',
        c: 'Document Operation Management',
        d: 'Data Oriented Model',
        correct: 'a'
    },
    {
        question: 'What is the correct syntax to include JavaScript in HTML?',
        a: '<script>',
        b: '<javascript>',
        c: '<js>',
        d: '<code>',
        correct: 'a'
    },
    {
        question: 'Which of the following is a JavaScript framework?',
        a: 'React',
        b: 'Laravel',
        c: 'Django',
        d: 'Flask',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the <head> tag in HTML?',
        a: 'To define the body content',
        b: 'To include metadata and links',
        c: 'To create a header section',
        d: 'To display text',
        correct: 'b'
    },
    {
        question: 'Which method is used to add an element at the end of an array in JavaScript?',
        a: '.push()',
        b: '.pop()',
        c: '.shift()',
        d: '.unshift()',
        correct: 'a'
    },
    {
        question: 'Which of the following is a valid JavaScript data type?',
        a: 'Number',
        b: 'String',
        c: 'Boolean',
        d: 'All of the above',
        correct: 'd'
    },
    {
        question: 'Which company developed JavaScript?',
        a: 'Netscape',
        b: 'Microsoft',
        c: 'Sun Microsystems',
        d: 'Oracle',
        correct: 'a'
    },
    {
        question: 'What is the output of 2 + "2" in JavaScript?',
        a: '4',
        b: '22',
        c: 'NaN',
        d: 'Error',
        correct: 'b'
    },
    {
        question: 'What is the default file extension for a JavaScript file?',
        a: '.js',
        b: '.javascript',
        c: '.script',
        d: '.jvs',
        correct: 'a'
    },
    {
        question: 'Which symbol is used to denote an ID in CSS?',
        a: '#',
        b: '.',
        c: '*',
        d: '@',
        correct: 'a'
    },
    {
        question: 'Which CSS property is used to change text color?',
        a: 'font-color',
        b: 'text-color',
        c: 'color',
        d: 'background-color',
        correct: 'c'
    },
    {
        question: 'Which HTML tag is used to insert an image?',
        a: '<img>',
        b: '<image>',
        c: '<picture>',
        d: '<photo>',
        correct: 'a'
    },
    {
        question: 'Which of the following is not a NoSQL database?',
        a: 'MongoDB',
        b: 'Redis',
        c: 'PostgreSQL',
        d: 'Cassandra',
        correct: 'c'
    },
    {
        question: 'What is the purpose of a constructor in JavaScript classes?',
        a: 'To initialize properties of an object',
        b: 'To create functions',
        c: 'To return a value',
        d: 'To destroy objects',
        correct: 'a'
    },
    {
        question: 'What is the correct syntax for a function in JavaScript?',
        a: 'function = myFunction()',
        b: 'function myFunction()',
        c: 'myFunction function()',
        d: 'function:myFunction()',
        correct: 'b'
    }
];

let clear = () => {
    for (let i = 0; i < option.length; i++) {
        option[i].checked = false;
    }
}

let check = () => {
    let checkId;
    for (let i = 0; i < option.length; i++) {
        if (option[i].checked) {
            checkId = option[i].id;
        }
    }
    return checkId;
}

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
}

quizLoad();

button.addEventListener('click', () => {
    let c = check();
    if (c) {
        if (c === quizApp[initialStart].correct) {
            score = score + 10;
        }
        initialStart++;
        if (initialStart < quizApp.length) {
            quizLoad();
        }
        else {
            quiz.innerHTML = `
                <h2 class="heading">Your Answer Score is ${score}/${quizApp.length*10}</h2>
                <button class="last-btn" onclick="history.go(0)">Start Again</button>
            `;
        }
    }
    else {
        alert('Please select an option');
    }

});
