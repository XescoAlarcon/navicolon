// This file contains the logic for the quiz section of the application. 
// It handles user input, processes quiz questions, and displays results based on user responses.

const quizQuestions = [
    {
        question: "¿Cuál es tu edad?",
        options: ["Menos de 50", "50 o más"],
        answer: null
    },
    {
        question: "¿Tienes antecedentes familiares de cáncer colorrectal?",
        options: ["Sí", "No"],
        answer: null
    },
    {
        question: "¿Has realizado un cribado de cáncer colorrectal anteriormente?",
        options: ["Sí", "No"],
        answer: null
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionContainer = document.querySelector('.quiz-question');
    const question = quizQuestions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        <div class="quiz-options">
            ${question.options.map((option, index) => `
                <div class="quiz-option" onclick="selectOption(${index})">${option}</div>
            `).join('')}
        </div>
    `;
}

function selectOption(optionIndex) {
    quizQuestions[currentQuestionIndex].answer = optionIndex;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const resultContainer = document.getElementById('decision-result');
    const results = quizQuestions.map((q, index) => `
        <p>${q.question} - Respuesta: ${q.options[q.answer]}</p>
    `).join('');
    
    resultContainer.innerHTML = `
        <h2>Resultados de tu Decisión</h2>
        ${results}
    `;
    resultContainer.style.display = 'block';
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', showQuestion);