let questions = [
{
    question: 'What is Saiki\'s favorite food?',
    answers: [
         'Ramen',
         'Miso Soup',
         'Coffee Jelly',
         'Tonkatsu'
    ],
    correctAnswer: 2
},
{
    question: 'Who is Saiki\'s best friend?',
    answers: [
         'Terauhashi',
         'Nendo',
         'Kaido',
         'No one. All of Saiki\'s friends annoy him'
    ],
    correctAnswer: 3
},
{
    question: 'What is Saiki\'s first name?',
    answers: [
        'Kaoru',
        'Katsuo',
        'Kuriko',
        'Kusuo'
    ],
    correctAnswer: 3
},
{
    question: 'Who is in love with Saiki?',
    answers: [
        'Teruhashi',
        'Chiyo',
        'Mera',
        'Mikoto'
    ],
    correctAnswer: 0
},
{
    question: 'How does Teruhashi view herself?',
    answers: [
        'The cool girl',
        'Perfect pretty girl',
        'Normal girl',
        'Most beautiful girl'
    ],
    correctAnswer: 1
},
{
    question: 'What is Saiki afraid of?',
    answers: [
        'Being Alone',
        'Cats',
        'Heights',
        'Bugs'
    ],
    correctAnswer: 3
},
{
    question: 'What evil organization does Kaido fight against?',
    answers: [
        'The Twelve Demon Moons',
        'Dark Reunion',
        'Akatsuki',
        'The League of Villans'
    ],
    correctAnswer: 1
}
];

const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')
const scoreText = document.getElementById('score')
const gameContainer = document.getElementById('game-container')

startButton.addEventListener('click', startGame);
let currentQuestionIndex = 0; 
let randomQuestions = [];
let score = 0;


function startGame() {
console.log('start')
currentQuestionIndex = 0;
randomQuestions = questions.sort(() => Math.random() - .5)
displayQuestion(randomQuestions[currentQuestionIndex])
startButton.disabled = true;
}

function selectNextQuestion (){
 while(answerButtons.firstChild){
     answerButtons.removeChild(answerButtons.firstChild)
 }
currentQuestionIndex++
displayQuestion(randomQuestions[currentQuestionIndex])
}
nextButton.addEventListener('click', selectNextQuestion)


function displayQuestion(question){
    console.log(question)
    questionElement.innerText = question.question 
    console.log(question.answers)
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button')
        const answerButtons = document.getElementById('answer-buttons')
        button.id = index
        console.log(answer)
        button.innerText = answer
        answerButtons.appendChild(button)
        button.addEventListener('click', checkAnswer)
    })
};


function checkAnswer() {
    if (parseInt(this.id) === randomQuestions[currentQuestionIndex].correctAnswer){
        console.log('correctAnswer')
        score++
        scoreText.innerText = `Score: ${score}/7` 
        checkEndGame()
    } else {
        console.log('wrongAnswer')
        checkEndGame()
    }
    
}

function checkEndGame() {
    if (currentQuestionIndex >= questions.length){
        console.log('game over')
        gameContainer.innerHTML = '<h1>Great job! Thanks for playing!!!</h1>'
    } else{
        selectNextQuestion()
    }
}

const message = document.getElementById('message').innerHTML
const pictures = document.getElementById('pictures').src = pictures

let pictures = []