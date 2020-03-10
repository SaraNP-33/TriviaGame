//**********VARIABLES****************/

//object with trivia questions and answers
var questions = [{
    question:"Which country produces the most coffee in the world? ",
    answers:[
        {text: 'Etiopia', correct: false},
        {text: 'Columbia', correct: false},
        {text: 'Brazil', correct: true},
        {text: 'Spain', correct: false},
    ],
    question:"Which kind of alcohol is Russia nooriously known for? ",
    answers:[
        {text: 'Whiskey', correct: false},
        {text: 'Tequila', correct: false},
        {text: 'Vodka', correct: true},
        {text: 'Wine', correct: false},
    ],
    question:"Which organ has four chambers? ",
    answers:[
        {text: 'The heart', correct: true},
        {text: 'The kidneys', correct: false},
        {text: 'The liver', correct: false},
        {text: 'The Lungs', correct: false},
    ],
    question:"What is your body's largest organ? ",
    answers:[
        {text: 'The Heart', correct: false},
        {text: 'The Lungs', correct: false},
        {text: 'The Brain', correct: false},
        {text: 'The Skin', correct: true},
    ],
    question:"Which mammal has no vocal cords? ",
    answers:[
        {text: 'Tiger', correct: false},
        {text: 'Giraffe', correct: true},
        {text: 'Orca', correct: false},
        {text: 'Koala', correct: false},
    ],
    question:"How many eyes does a bee have? ",
    answers:[
        {text: 'Five', correct: true},
        {text: 'Two', correct: false},
        {text: 'Eight', correct: true},
        {text: 'Three', correct: false},
    ],
    question:"What name is used to refer to a group of frogs? ",
    answers:[
        {text: 'An Assembly', correct: false},
        {text: 'A School', correct: false},
        {text: 'An Army', correct: true},
        {text: 'A colony', correct: false},
    ]
}];

//var to strore and tracj correct and wrong answers
var correctAnswers=0;
var worngAnswers=0;

//var to track unanswered questions

var noAnswer=0;

//var to randomize questions
let randomQuestion;

// var to keep track of current question

let currentQuestion;

//var to keep track of the current question displying
var count=0;


//***************FUNCTIONS**************** */

//start with the Start Game function
$(document).ready(function(){

    var answerButton = $("#answer-btns").empty();

function gameStart(){
    $("#start").hide();
    $("#question-container").show();
    randomQuestion = questions.sort(()=> Math.random() - .5);
    currentQuestion = 0;
console.log("started");

nextQuestion();

}





function nextQuestion(){
displayQuestion(randomQuestion[currentQuestion])

}



function displayQuestion(question){
    $("#questions").text(question.question);

    question.answers.forEach(answers => {
        var button = document.createElement("button")
        button.innerText= answers.text
        button.classList.add("btn")

        if(answers.correct){
            button.dataset.correct=answers.correct
        };

        

        console.log(answers.text);

        $("#answer-btns").append(button)
       
    });
}



function selectAnswer(){}




function resetGame(){

}


$("#start").click(gameStart);
$("btn").click(selectAnswer);

});