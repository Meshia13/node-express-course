// write to temp.txt. You start it the same way, but this time, you use the .then style of asynchronous programming. 
// You don’t need to create any functions. Instead, you just use cascading .then statements in your mainline

const { writeFile, readFile } = require("fs").promises; 

const os = require('os');
const path = require('path');

const filePath = path.join(__dirname, 'temp.txt');

// first line
console.log('Start: Writing first line')
writeFile(filePath, `Detective Charleston Chew stood over the crime scene.\n`)
    .then(() =>{
        console.log('Writing Second line')
        // second line
        return writeFile(filePath, `Mr. Goodbar, king of Candyland, lay lifeless on his sugar throne. \n`, {flag: 'a'});
    })
    .then(() =>{
        // third line
        console.log('Writing third line')
        return writeFile(filePath, `His caramel crown was cracked, and a sharp peppermint shard protruded from his chest. \n`, {flag: 'a'})
    })
    .then(() => {
        // call readFile to read it back out
        readFile(filePath, 'utf-8')
    })
    .then((data) => {
        // log the data to the screen
        console.log("File read successfully")
        console.log(data)
    })
    .catch((error)=> {
        console.log("An error occurred: ", error)
     })

