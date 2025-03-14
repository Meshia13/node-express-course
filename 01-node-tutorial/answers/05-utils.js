// MODULES

// modules that you load, using require statements, from the 03-modules.js file, which is the main program.
// 05-utils.js should export a single value, which is a function you will call in 03-modules.js.

const carMake = (car) => {
    console.log(`The make of the car is : ${car}`);
}

// Exporting single value(function)
module.exports = carMake