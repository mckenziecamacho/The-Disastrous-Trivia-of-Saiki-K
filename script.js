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

startButton.addEventListener('click', startGame);
let currentQuestionIndex = 0; 
let randomQuestions = [];


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
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        const answerButtons = document.getElementById('answer-buttons')
        
        // loop over answers object to get each one
        // string int to replace text 
        console.log(answer)
        button.innerText = answer
        answerButtons.appendChild(button)
    })
};


function checkAnswer (){
    // compare selected answer to correct answer from the questions array
}


