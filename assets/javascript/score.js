let scores=JSON.parse(localStorage.getItem("highScores")) || []
// console.log(scores)

const clearScores= document.getElementById("clear")
// const mainTable= document.getElementById("showTable")

function sortScores(){
	return scores.sort(function(a, b){
		var n= a.score-b.score;
		if(n=== 0){
			return a.Number-b.Number;
		}
       console.log(scores, "from sort")
      
		return n;
	});
    
}

function displayScore(){
    const table= document.getElementById("leaderTable")
    // if(scores !==""){
    //     mainTable.classList.replace("clearTable", "showIt")
    // }
    
for (let i=0; i<scores.length; i++){
    
    const initTd=document.createElement("td")
    const scoreTd= document.createElement("td")
    const initTr= document.createElement("tr")

    initTd.setAttribute("class", "has-text-centered")
    scoreTd.setAttribute("class", "has-text-centered")

    initTd.append(scores[i].initials)
    scoreTd.append(scores[i].score)
    initTr.append(initTd, scoreTd)
    table.appendChild(initTr)

}
}
displayScore()



clearScores.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.clear()
    window.location.reload();
})

