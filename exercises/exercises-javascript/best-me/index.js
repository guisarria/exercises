const questions = [
  'What did I learned today?',
  'What made me sad? And what could I do to do better?',
  'What made me happy today?',
  'How many people did I helped today?'
]
const ask = (index = 0) => {
  process.stdout.write('\n\n' + questions[index] + ' > ')
}

ask()

const answers = []
process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers)
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
    Cool!
  
    What you learned today was:
    ${answers[0]}

    What made you sad, and the solution was:
    ${answers[1]}
    
    What made you happy today was:
    ${answers[2]}
    
    You helped ${answers[3]} peoples today!
    
    Come back tomorrow for more reflexions!
    `)
})
