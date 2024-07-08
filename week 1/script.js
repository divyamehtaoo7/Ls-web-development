
const questions = [
    {
        question: "What equipment is used to detect ghost orbs?",
        answers: ["EMF Reader", "Spirit Box", "Video Camera"],
        correct: 2
    },
    {
        question: "What is the name of the starter ghost hunting location?",
        answers: ["Brownstone High School", "Tanglewood Street House", "Asylum"],
        correct: 1
    },
    {
        question: "Which item protects you from ghost attacks?",
        answers: ["Crucifix", "Salt", "Smudge Sticks"],
        correct: 0
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    document.getElementById('answer1').textContent = question.answers[0];
    document.getElementById('answer2').textContent = question.answers[1];
    document.getElementById('answer3').textContent = question.answers[2];
    document.getElementById('result').textContent = '';
}

function checkAnswer(answerIndex) {
    const question = questions[currentQuestion];
    if (answerIndex === question.correct) {
        document.getElementById('result').textContent = "Correct!";
    } else {
        document.getElementById('result').textContent = "Wrong";
    }
    currentQuestion = (currentQuestion + 1) % questions.length;
    setTimeout(loadQuestion, 2000);
}

document.getElementById('answer1').addEventListener('click', () => checkAnswer(0));
document.getElementById('answer2').addEventListener('click', () => checkAnswer(1));
document.getElementById('answer3').addEventListener('click', () => checkAnswer(2));

loadQuestion();