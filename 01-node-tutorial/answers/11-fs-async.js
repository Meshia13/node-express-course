// This should load the fs module, and use the asynchronous function writeFile to write 3 lines to a file, ./temporary/fileB.txt. 
// Now, be careful here! This is our first use of asynchronous functions in this class, but we are going to use them a lot! First, 
// you need to use the "append" flag for all but the first line. Second, each time you write a line to the file, you need to have 
// a callback, because the writeFile operation is asynchronous. Third, for each line you write, you need to do the write for the 
// line that follows it within the callback - otherwise the operations won’t happen in order. Put console.log statements at various 
// points in your code to tell you when each step completes. Then run the code.

const { writeFile} = require('fs');

// const fir = readFile('temporary', 'fileA.txt', 'utf8')
// console.log(fir)

const os = require('os');
const path = require('path');

// Get the system's temporary directory
const tempDirec = os.tmpdir();

// Define the file path within the temporary directory
const filePath = path.join(tempDirec, 'temporary', 'fileB.txt');

console.log("at start")
writeFile(filePath, `The scandal that shook Candy Land! \n`, (err) => {
    console.log("point 1")
    if (err) {
        console.log(`First line error: `, err);
        // return;
    } else {
        console.log(`First line successful`);
    }
    
    console.log("point 2")
    writeFile(filePath, `Joe Goodbar and Amanda (Almond) Joy appeared to be the ideal couple. \n`, {flag: 'a'}, (err) => {
        if (err) {
            console.log(`Second line error: `, err);
            return;
        }
        console.log(`Second line successful`);

        console.log("point 3")
        writeFile(filePath, `However, things aren't always smooth like chocolate and coconuts.`, {flag: 'a'}, (err) => {
            if (err) {
                console.log(`Third line error: `, err);
                return;
            }
            console.log(`Third line successful`);
            console.log("at end")         
        })
        
    })
    
   
})


