// This should load writeFileSync and readFileSync functions from the fs module. Then you will use writeFileSync to write 3 lines 
// to a file, ./temporary/fileA.txt, using the "append" flag for each line after the first one. Then use readFileSync to read the 
// file, and log the contents to the console. Be sure you create the file in the temporary directory. That will ensure that it isn’t 
// pushed to Github when you submit your answers (because that file has been added to the .gitignore file for you already which 
// tells git not to look at those files).


const { readFileSync, writeFileSync} = require('fs');

const os = require('os');
const path = require('path');

// Get the system's temporary directory
const tempDirec = os.tmpdir();

// Define the file path within the temporary directory
const filePath = path.join(tempDirec, 'temporary', 'fileA.txt');

// Writing lines to temp directory, using the "append" flag for each line after the first one
writeFileSync(filePath, `The driver's door was covered in melted chocolate. \n`),
writeFileSync(filePath, `Detectives also found green and blue jelly leading away from the scene. \n`, {flag: 'a'}),
writeFileSync(filePath, `Detective Charleston Chew has brought in the Notorious Mike and Ike twins for questioning. \n`, {flag: 'a'})
 
// Reading and display the file content
const contents = readFileSync(filePath, 'utf-8')
console.log(contents);


