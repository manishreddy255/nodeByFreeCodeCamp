/***
 * http using stream
 * */

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    /*
     In this module we create a server using http
     and send the data we read from the file to the front-end
     but the data is large and it can't be stored in a single variable
     so we use buffer streams which are data divided into chunks 
     and not stored in a single variable but are directly sent to it through
     opening a channel and piping it through it
     */
    const fileStream = fs.createReadStream("./content/big-text.txt", {
      encoding: "utf8",
    });

    // in this opening a channel
    // we use pipe to send it as a response
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      res.write(err);
      res.end();
    });
  })
  .listen("5000", () => {
    console.log("started server");
  });

// const text = fs.readFileSync("./content/big-text.txt", "utf8");
// if (req.url === "/") {
//   res.end(text);
// }

// res.end("hai");
