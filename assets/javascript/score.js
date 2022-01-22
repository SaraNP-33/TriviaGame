let scores=JSON.parse(localStorage.getItem("highScores")) || []
console.log(scores)

function displayScore(){
    const table= document.getElementById("leaderTable")
    
for (let i=0; i<scores.length; i++){
    const initTd=document.createElement("td")
    const scoreTd= document.createElement("td")
    const initTr= document.createElement("tr")

    initTd.append(scores[i].initials)
    scoreTd.append(scores[i].score)
    initTr.append(initTd, scoreTd)
    table.appendChild(initTr)

}
}

displayScore()
