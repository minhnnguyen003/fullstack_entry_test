import loadQuestion from "./models/loadQuestion.js";

var quizList = [];

import QuizZone from "./components/QuizZone.js";

const quizLink =  'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple';
await fetch(quizLink)
.then((response) => response.json())
.then(function (data) {
    console.log(data);
    quizList.push(data.results);
    
});


let questNumber = 0;

console.log(quizList);

document.querySelector('.next-btn').addEventListener('click', async function () {
    loadQuestion(questNumber, quizList);
    questNumber++;
});

