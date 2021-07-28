/*****
 * HTTP module
 * */

const http = require("http");

// req is the incoming requests of the web Browser
// res is response we send back

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to our home page");
    res.end();
  }

  if (req.url === "/about") {
    res.write("hey what the fuck are you fdoing you vitch");
    res.end();
  }

  res.write(`
   <h1>Oops!</h1>
   <p>We can't to seem to find the page to find the page you are looking for</p>
   <a href="/">back home </a>
   `);
  res.end();
  //   console.log(req.url);
  //   res.write("welcome to our home page");
  //   res.end();
});

server.listen(5000);

/// in this http module we create a server with create server method
// it takes two parameters they are request and respose and req gets the req from the browser
// and res send the response to the req
// res.write() => used to write things to the
// res.end() => ends the response

// and check up for other options
