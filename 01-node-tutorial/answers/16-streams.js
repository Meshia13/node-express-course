// create a read stream for the big file (../content/big.txt) with encoding of "utf8" and a highWaterMark of 200. 
// The program should initialize a counter to 0. Then it should handle the “data” event for the stream by incrementing the counter 
// and logging the event result to the screen. Then it should handle the “end” event by reporting the number of chunks received. 
// Finally, it should handle the stream “error” event by logging the error to the console. 

const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', { 
    encoding: 'utf8',
    highWaterMark: 200 
    }
    
)

// initialize a counter to 0
let counter = 0;

// Then it should handle the “data” event for the stream by incrementing the counter and logging the event result to the screen.
// This is a parameter passed to the event listener, representing a chunk of data from the stream.
stream.on('data', (chunk) => {
    counter++;
    console.log(`Chunk number: ${counter}`, chunk)
    
})

// Then it should handle the “end” event by reporting the number of chunks received.
stream.on('end', () => {
    console.log(`Stream ended. Total chunks received: ${counter}`)
})

// should handle the stream “error” event by logging the error to the console.
stream.on('error', (err) => {
    console.log('Stream has an error: ', err)
})


