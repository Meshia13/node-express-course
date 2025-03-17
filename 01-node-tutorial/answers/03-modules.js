// Main program

const make = require('./04-names');
const carMake = require('./05-utils');
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')

// logging 06-alternative-flavor module
console.log(data);


carMake('Buick')
carMake(make.dodge)
carMake(make.cadillac)