let number = document.getElementById("number")
let submitButton = document.getElementById("submitButton")
let avgScoreButton = document.getElementById("avgScoreButton")
let highScoreButton = document.getElementById("highScoreButton")
let lowScoreButton = document.getElementById("lowScoreButton")

let scoresParagraph = document.getElementById("scoresParagraph")
let avgScoreParagraph = document.getElementById("avgScoreParagraph")

let scores = []

submitButton.addEventListener("click", submitNum)
avgScoreButton.addEventListener("click", showAvgScore)
highScoreButton.addEventListener("click", showHighScore)
lowScoreButton.addEventListener("click", showLowScore)

function submitNum() {

  if (number.value == NaN || number.value == ``) {
    scoresParagraph.innerHTML = `Please enter a number.`
    return
  }

  scores.push(Number(number.value))
  scoresParagraph.innerHTML = `Scores: ${scores}`

  number.value = ``
}

function showAvgScore() {
  let sumOfScores = 0

  scores.forEach(score => sumOfScores = sumOfScores + score)
  scoresParagraph.innerHTML = `Average score: ${sumOfScores / scores.length}`
}

function showHighScore() {
  let highestNum = -Infinity

  scores.forEach(score => {
    if (score > highestNum) {
      highestNum = score
    }
  })

  scoresParagraph.innerHTML = `High score: ${highestNum}`
}

function showLowScore() {
  let lowestNum = Infinity

  for (let score of scores) {
    if (score < lowestNum) {
      lowestNum = score
    }
  }

  scoresParagraph.innerHTML = `Low score: ${lowestNum}`
}