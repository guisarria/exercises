//  Function expression
//  Function anonymous

//  Parâmetros (parameters)
const sum = function (number1, number2) {
  let total = number1 + number2
  return total
}

let number1 = 34
let number2 = 25

console.log(`A soma é ${sum(number1, number2)}`)

function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maça')

console.log(copo)

// Function scope

let subject

function createThink(subject) {
  return subject
}

console.log(createThink(subject))

// Callback Function

function sayMyName(name) {
  console.log('Before creating a function callback')

  name()

  console.log('After creating a function callback')
}

sayMyName(() => {
  console.log('Im in a callback')
})

/* 
  Function() constructor
    *expressão new
    *criar um novo objeto
    *this keyword
*/

function Person(name) {
  this.name = this.name
}
const gui = new Person('Gui')
console.log(gui)
