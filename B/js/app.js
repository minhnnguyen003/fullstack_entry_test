import loadQuestion from "./models/loadQuestion.js";
import createAnswer from "./models/createAnswer.js";
var quizList = [];

import QuizZone from "./components/QuizZone.js";
import Btn from "./components/btnchange.js";

const quizLink =  'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple';
await fetch(quizLink)
.then((response) => response.json())
.then(function (data) {
    console.log(data);
    quizList.push(data.results);
    
});


let questNumber = 0;

console.log(quizList);

// document.querySelector('.btn').addEventListener('click', async function () {
//     createAnswer(questNumber, quizList);
//     loadQuestion(questNumber, quizList);
//     questNumber++;
// });

