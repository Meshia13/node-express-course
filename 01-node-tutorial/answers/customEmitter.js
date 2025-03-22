// use the emitter .on function to handle the events you will emit, logging the parameters to the screen. 
// Then use the emitter .emit function to emit several events, with one or several parameters, and make sure that the events are 
// logged by your event handlers.

const EventEmitter = require('events');
const { resolve } = require('path');

const custEmit = new EventEmitter();

// on and emit strings should match

custEmit.on('userName', (username) => {
    console.log(`User logged in: ${username}`)
})

custEmit.on('firstName', (firstName) => {
    console.log(`First Name: ${firstName}`)
})

custEmit.on('lastName', (lastName) => {
    console.log(`Last Name: ${lastName}`)
})

custEmit.emit('userName', 'Meesh')
custEmit.emit('firstName', 'Carmeshia')
custEmit.emit('lastName', 'Lazzana')


