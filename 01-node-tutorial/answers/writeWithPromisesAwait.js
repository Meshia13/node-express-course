// Create a program named writeWithPromisesAwait.js inside the 01-node-tutorial/answers folder. We are going to use the fs.promises 
// package. fs is the built-in “File system” set of functions in Node. By adding .promises we’re going to access the versions of 
// those built-in functions that return a Promise as their result. 

const { writeFile, readFile } = require("fs").promises; 

const os = require('os');
const path = require('path');

const filePath = path.join(__dirname, 'temp.txt');

// create an async function called writer that takes 0 arguments, and that writes three lines to a file named temp.txt, 
// by calling the writeFile function with await. The Promise version of writeFile takes the same arguments as the one you
//  used in last week’s exercise 10-fs-sync but will return a Promise instead of a result directly.

const writer = async() => {
    try{
        await writeFile(filePath, `The scandal that shook Candy Land! \n`),
        await writeFile(filePath, `Joe Goodbar and Amanda (Almond) Joy appeared to be the ideal couple. \n`, {flag: 'a'}),
        await writeFile(filePath, `However, things aren't always smooth like chocolate and coconuts.`, {flag: 'a'})
    }
    catch(err) {
        console.log("Error writing file: ", err);
    }
}

// Create another async function called reader that reads the file with await readFile and logs the return value to the screen.

const reader = async() => {
    try{
        const contents = await readFile(filePath, 'utf8');
        console.log(contents);
    }
    catch(err) {
        console.log("Error reading file: ", err);
    }
}

// write a third async function called readWrite. In that function, you call await reader and await writer. 

const readWrite = async() => {
    await reader();
    await writer();
}

// Finally, write a line at the bottom of the file that calls the readWrite function. 

readWrite();