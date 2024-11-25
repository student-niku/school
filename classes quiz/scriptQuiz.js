const quizData = [
    {
        question: "1. निम्नलिखित में कौन-सी सबसे छोटी प्राकृत संख्या है? [2022AI]",
        options: ["0", "1", "-1", "2"],
        correct: 1
    },
    {
        question: "2.एक अशून्य परिमेय और अपरिमेय संख्या का गुणनफल होगा- [2021AII]",
        options: ["हमेशा परिमेय", "हमेशा अपरिमेय", "एक", "परिमेय या अपरिमेय"],
        correct: 1
    },
    {
        question: "3.संख्या 2.13113111311113….है- [2021AII]",
        options: ["पूर्णांक संख्या", " परिमेय संख्या", "अपरिमेय संख्या", " इनमें से कोई नहीं"],
        correct: 2
    }
];

let currentQuiz = 0;
let score = 0;
let userName = '';
let timeLeft = 15;
let totalTimeTaken = 0; // To track total time
let timerInterval;
let quizStartTime;

const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('start-btn');
const usernameInput = document.getElementById('username');
const timeDisplay = document.getElementById('time');

function loadQuiz() {
    clearInterval(timerInterval); // Clear any previous timer
    timeLeft = 15; // Reset the timer for each question
    timeDisplay.textContent = timeLeft;
    startTimer();

    const currentQuestion = quizData[currentQuiz];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionLabel = document.createElement('label');
        optionLabel.innerHTML = `<input type="radio" name="option" value="${index}"> ${option}`;
        optionsElement.appendChild(optionLabel);
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            goToNextQuestion();
        }
    }, 1000);
}

function goToNextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

startButton.addEventListener('click', () => {
    userName = usernameInput.value.trim();
    if (userName) {
        quizStartTime = Date.now(); // Record the quiz start time
        startContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        loadQuiz();
    } else {
        alert('Please enter your name!');
    }
});

nextButton.addEventListener('click', () => {
    clearInterval(timerInterval); // Stop the timer when the next button is clicked
    goToNextQuestion();
});

function showResult() {
    clearInterval(timerInterval);
    
    // Calculate total time taken in seconds
    totalTimeTaken = Math.floor((Date.now() - quizStartTime) / 1000);

    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.style.display = 'block';

    // Display result with the total time taken
    resultElement.innerHTML = `
        Congratulations ${userName}! You scored ${score} out of ${quizData.length}!<br>
        Total time taken: ${totalTimeTaken} seconds.
    `;
}

