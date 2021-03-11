// Dependencies
const http = require('http');
const fs = require('fs');

// Set our port to 8080
const PORT = 8080;


// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
const diplayFoods = (res) => {
    
    fs.readFile(`${__dirname}/foods.html`, (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
  };

  const diplayMovies = (res) => {
    
    fs.readFile(`${__dirname}/movies.html`, (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
  };


  // When someone visits the "http://localhost:8080/" path, this function is run.
const displayRoot = (res) => {
    const myHTML = `
    <html>
      <body>
        <h1>Home Page</h1>
        <a href='/portfolio'>Portfolio</a>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  };
  
  // When someone visits any path that is not specifically defined, this function is run.
  const display404 = (url, res) => {
    const myHTML = `
    <html>
      <body>
        <h1>404 Not Found </h1>
        <p>The page you were looking for: ${url} can not be found</p>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  };
  


  const handleRequest = (req, res) => {
    // Capture the url the request is made to
    const path = req.url;
  
    // Depending on the URL, display a different HTML file.
    switch (path) {
      case '/':
        return displayRoot(res);
  
      case '/foods':
        return displayFoods(res);

        case '/movies':
            return displayMovies(res);
  
      default:
        return display404(path, res);
    }
  };



/* 
// Create a function for handling the requests and responses coming into our server
const handleRequest = (req, res) => {
  // Here we use the fs package to read our index.html file
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}; */

// Create our server
const server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
