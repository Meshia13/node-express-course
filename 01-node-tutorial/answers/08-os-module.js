// This should load the built-in os Node module and display some interesting information from the resulting object. As for all modules, 
// you load a reference to it with a require statement

const { stat } = require('fs')
const os = require('os')

// Returns the host name of the operating system as a string.
const hostName = os.hostname() 

// Returns the operating system name 
const stats = os.type()

console.log(`The current host name is : ${hostName}`)
console.log(`The current stats are : ${stats}`)
console.log(`The current uptime is : ${os.uptime()} seconds`)