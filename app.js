const question = [
    {
        question: "What does HTML stand for?",
        answer: [
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyper Tool Markup Language", correct: false },
            { text: " Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
        ]
    },

    {
        question: "In CSS, which property is used to set the background color of an element",
        answer: [
            { text: "color", correct: false },
            { text: "bg-color", correct: false },
            { text: "background-color", correct: true },
            { text: "element-color", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to create a shadow effect around an element's box?",
        answer: [
            { text: "box-effect", correct: false },
            { text: "shadow-effect", correct: false },
            { text: "element-shadow", correct: false },
            { text: "box-shadow", correct: true },
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: [
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
        ]
    },
    {
        question: "Which CSS property is used to change the font size of an element?",
        answer: [
            { text: "text-size", correct: false },
            { text: "font-style", correct: false },
            { text: "font-size", correct: true },
            { text: "size", correct: false },
        ]
    },
    {
        question: "In JavaScript, which operator is used to assign a value to a variable?",
        answer: [

            { text: "`=`", correct: true },
            { text: "`==`", correct: false },
            { text: "`===`", correct: false },
            { text: "`:`", correct: false },
        ]
    },
    {
        question: "What does the concat() method do in JavaScript?",
        answer: [

            { text: "Combines two or more arrays and returns a new array.", correct: true },
            { text: "Removes elements from an array and returns the removed elements.", correct: false },
            { text: "Returns a portion of an array into a new array.", correct: false },
            { text: "Sorts the elements of an array alphabetically.", correct: false },
        ]
    },
    {
        question: "How do you declare a variable in JavaScript?",
        answer: [

            { text: "var myVar;", correct: true },
            { text: "v myVar;", correct: false },
            { text: "declare myVar;", correct: false },
            { text: "variable myVar;", correct: false },
        ]   
    },
    {
        question: "What does the DOM stand for in JavaScript?",
        answer: [

            { text: "Document Oriented Model", correct: false },
            { text: "Data Object Manipulation", correct: false },
            { text: "Data Object Model", correct: false },
            { text: "Document Object Model", correct: true },
        ] 
    },
    {
        question: "What does JavaScript do primarily?",
        answer: [

            { text: "Defines document semantics", correct: false },
            { text: "Manages database operations", correct: false },
            { text: "Manipulates HTML/CSS", correct: true },
            { text: "Defines website structure", correct: false },
        ] 
    }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answerButton');
const nextBtn = document.getElementById('nextBtn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('inCorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Score ${score} Out Of ${question.length}!`
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block'
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {

        startQuiz();
    }
});

startQuiz();









