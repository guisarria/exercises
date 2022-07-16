// My version (less code)

function getScore(score) {
  if (score >= 90 && score <= 100) console.log('A')
  else if (score >= 80 && score < 90) console.log('B')
  else if (score >= 70 && score <= 79) console.log('C')
  else if (score >= 60 && score <= 69) console.log('D')
  else if (score >= 0 && score <= 60) console.log('F')
  else console.log('Invalid score')
}
getScore()

/* Teacher version (more flexible)
function getScore(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreF = score < 60 && score >= 0

  let scoreFinal

  if (scoreA) {
    scoreFinal = 'A'
  } else if (scoreB) {
    scoreFinal = 'B'
  } else if (scoreC) {
    scoreFinal = 'C'
  } else if (scoreD) {
    scoreFinal = 'D'
  } else if (scoreF) {
    scoreFinal = 'F'
  } else {
    scoreFinal = 'Invalid score'
  }

  return scoreFinal
}

console.log(getScore(100))
*/
