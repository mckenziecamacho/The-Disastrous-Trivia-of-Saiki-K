let questions = [
{
    question: 'What is Saiki\'s favorite food?',
    answers: {
        a: 'Ramen',
        b: 'Miso Soup',
        c: 'Coffee Jelly',
        d: 'Tonkatsu'
    },
    correctAnswer: 'c'
},
{
    question: 'Who is Saiki\'s best friend?',
    answers: {
        a: 'Terauhashi',
        b: 'Nendo',
        c: 'Kaido',
        d: 'No one. All of Saiki\'s friends annoy him'
    },
    correctAnswer: 'd'
},
{
    question: 'What is Saiki\'s first name?',
    answers: {
        a: 'Kaoru',
        b: 'Katsuo',
        c: 'Kuriko',
        d: 'Kusuo'
    },
    correctAnswer: 'd'
},
{
    question: 'Who is in love with Saiki?',
    answers: {
        a: 'Teruhashi',
        b: 'Chiyo',
        c: 'Mera',
        d: 'Mikoto'
    },
    correctAnswer: 'a'
},
{
    question: 'How does Teruhashi view herself?',
    answers: {
        a: 'The cool girl',
        b: 'Perfect pretty girl',
        c: 'Normal girl',
        d: 'Most beautiful girl'
    },
    correctAnswer: 'b'
},
{
    question: 'What is Saiki afraid of?',
    answers: {
        a: 'Being Alone',
        b: 'Cats',
        c: 'Heights',
        d: 'Bugs'
    },
    correctAnswer: 'd'
},
{
    question: 'What evil organization does Kaido fight against?',
    answers: {
        a: 'The Twelve Demon Moons',
        b: 'Dark Reunion',
        c: 'Akatsuki',
        d: 'The League of Villans'
    },
    correctAnswer: 'b'
}
];

const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')


startButton.addEventListener('click', startGame);
let currentQuestionIndex = 0; 
let randomQuestions = 0;


function startGame() {
console.log('start')
currentQuestionIndex = 0;
randomQuestions = questions.sort(() => Math.random() - .5)
selectNextQuestion()
}

function selectNextQuestion (){
displayQuestion(randomQuestions[currentQuestionIndex])

}

function displayQuestion(question){
    questionElement.innerText = question.question 
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.answers 
        button.classList.add('btn')
        if(answer.correct){
            button.correct = answer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
};


function chooseAnswer (){
}


