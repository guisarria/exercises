const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter)

const griffith = new Character('Griffith')
griffith.on('gutts', () => console.log(`I am, ${griffith.name}.`))

console.log('Baelith gonna consume you!')
griffith.emit('gutts')
