const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('saySomething', message => {
  console.log("I'am now on!", message)
})
//ev.once() caso queira ouvir o evento uma única vez

ev.emit('saySomething', 'Gui')
