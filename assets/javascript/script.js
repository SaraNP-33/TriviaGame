let currentQindex=0
let time=questions.length *15

const startbtn=document.getElementById("start")
const startCont=document.getElementById("gameControls")
const questionsContainer=document.getElementById("question-container")
const qText= document.getElementById("questions")
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
const btn4=document.getElementById("btn4")


function startQuiz(){
questionsContainer.style.display="block"
qText.textContent=questions[currentQindex].question
btn1.textContent=questions[currentQindex].answer1
btn2.textContent=questions[currentQindex].answer2
btn3.textContent=questions[currentQindex].answer3
btn4.textContent=questions[currentQindex].answer4
}













startbtn.addEventListener("click",()=>{
    startCont.style.display="none"
    console.log("click");
    startQuiz()
})