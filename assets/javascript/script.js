let currentQindex=0
let time= questions.length * 15
let counter;

const startbtn=document.getElementById("start")
const startCont=document.getElementById("gameControls")
const questionsContainer=document.getElementById("question-container")
const qText= document.getElementById("questions")
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
const btn4=document.getElementById("btn4")
const timeEL=document.getElementById("time")
const scoreEL=document.getElementById("score")
const timeScoreEL= document.getElementById("time&Score")
const btnGrid= document.getElementById("answer-btns")


function startQuiz(){
  
questionsContainer.style.display="block"
qText.textContent=questions[currentQindex].question
btn1.textContent=questions[currentQindex].answer1
btn2.textContent=questions[currentQindex].answer2
btn3.textContent=questions[currentQindex].answer3
btn4.textContent=questions[currentQindex].answer4

btn1.setAttribute("value",questions[currentQindex].answer1 )
btn2.setAttribute("value",questions[currentQindex].answer2 )
btn3.setAttribute("value",questions[currentQindex].answer3 )
btn4.setAttribute("value",questions[currentQindex].answer4 )
}

function startTimer(){
    timeScoreEL.style.display="block"
    counter=setInterval(function(){
        time--
        timeEL.textContent= time
        if(time === 0){
        clearInterval(counter)
        }
    },1000)

}

function checkAnswer(userChoice){
    if(userChoice===questions[currentQindex].correct){
        console.log("correct!");
        currentQindex++
        startQuiz()
    }
}










startbtn.addEventListener("click",()=>{
    startCont.style.display="none"
    console.log("click");
    startTimer()
    startQuiz() 
})

btnGrid.addEventListener("click", (event)=>{
    event.preventDefault()
    let btnClick= this.event.target.value
    console.log(btnClick)
    checkAnswer(btnClick)
})