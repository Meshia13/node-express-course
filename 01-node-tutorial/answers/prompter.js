const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// Week2 edit: Changed the game from guessing between 1 and 100, to 1 and 50
// Generate number between 1 and 50
let randomNum = Math.floor(Math.random() * 50) + 1;
let message = "Guess a number between 1 and 50!";

const form = () => {
  return `
    <body>
      <h2>Guessing Game</h2>
      <p>${message}</p>
      <form method="POST">
        <input type="number" min="1" max="50" name="guessNum" required></input>
        <button type="submit">Guess</button>
      </form>
    </body>`
  ;
}

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);

  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["guessNum"]) {

        const guessNum = parseInt(body["guessNum"], 10);

        if (isNaN(guessNum)){
          message = "Oops! Please enter a valid number!"
        }
        else if (guessNum < randomNum) {
          message = "Too low! Try again!"
        }
        else if (guessNum > randomNum) {
          message = "Too high! Try again!"
        }
        else {
          message = `CONGRATULATION!!! ${guessNum} is the correct number!!! A new number is now generated.`
          randomNum = Math.floor(Math.random() * 50) + 1; // Reset game
        }
      
      }
      else {
        message = "Please enter a number."
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {  
  console.log("event received: ", req.method, req.url);  
});  

server.listen(3000);
console.log("The server is listening on port 3000.");
