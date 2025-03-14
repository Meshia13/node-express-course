// MODULES

// modules that you load, using require statements, from the 03-modules.js file, which is the main program.
// 06-alternative-flavor.js should export multiple values in the module.exports object, but it should use the 
// alternative approach, adding each value one at a time. The exported values from each should be used in 03-modules.js,
// logging results to the console so that you know it is working.

// can be used for various datatypes
module.exports.items = ['items1', 'items2'];

const vehicle = {
    make: 'Chevy',
}
module.exports.singleVehicle = vehicle