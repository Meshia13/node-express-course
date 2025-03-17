//  This program should use the console.log function to write some globals to the screen. Set an environment variable 
// with the following command in your command line terminal: export MY_VAR="Hi there!" The program should then use console.log 
// to print out the values of __dirname (a Node global variable) and process.env.MY_VAR (process is also a global, and 
// contains the environment variables you set in your terminal.)

// GLOBALS

// __dirname    - path of current directory
// __filename   - filename
// require()    -
// exports      - reference to the module.exports that is shorter to type
// module       - reference to current module

console.log(`Current directory : ${__dirname}`)
console.log(`MY_VAR : ${process.env.MY_VAR}`)

