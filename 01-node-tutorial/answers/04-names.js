// MODULES (Note: every file in node is a module)

// modules that you load, using require statements, from the 03-modules.js file, which is the main program.
// . 04-names.js should export multiple values in an object that you will require in 03-module.js.

// Local Only
const ford = "Ford"

// For Sharing
const dodge = "Dodge"
const cadillac = "Cadillac"

// Note: export values that we want to, and not the ones we don't want to share
// exporting multiple values
module.exports = { dodge, cadillac };

