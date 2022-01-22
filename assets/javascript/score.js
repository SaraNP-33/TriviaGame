let scores=JSON.parse(localStorage.getItem("highScores")) || []
console.log(scores)

function displayScore(){
    const initTr= document.getElementById("initTr")
    const scoreTr=document.getElementById("scoreTr")
for (let i=0; i<scores.length; i++){
    const initTd=document.createElement("td")
    const scoreTd= document.createElement("td")
    

    initTd.append(scores[i].initials)
    scoreTd.append(scores[i].score)

    initTr.append(initTd, scoreTd)
    // scoreTr.appendChild(scoreTd)

}
}

displayScore()
