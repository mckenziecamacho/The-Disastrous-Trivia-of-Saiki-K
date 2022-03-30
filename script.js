let myQuestions = [
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
















let questions = document.querySelector('#question');
let answers = document.getElementById('answer-buttons');


const startButton = document.querySelector(".next-btn btn");
startButton.addEventListener("click", function() {
    alert("you clicked a button!");
});

const questionContainerElement = document.querySelector('question-container');
