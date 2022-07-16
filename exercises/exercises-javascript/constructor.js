/* 
  Function() constructor
    *expressão new
    *criar um novo objeto
    *this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' está andando'
  }
}

const gui = new Person('Gui')
const gio = new Person('Gio')
console.log(gui.walk())
console.log(giovanna.walk())
