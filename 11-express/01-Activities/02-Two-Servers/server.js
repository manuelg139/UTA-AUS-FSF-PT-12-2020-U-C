// Require/import the HTTP module
const http = require('http');

// Define a port to listen for incoming requests
const PORTONE = 7000;
const PORTTWO = 7500;

// Create a generic function to handle requests and responses
const handleRequestOne = (request, response) => {
  // Send the below string to the client when the user visits the PORT URL
  response.end(`KEEP GOING DONT GIVE UP`);
};

const handleRequestTwo = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`IF YOU CANT LOVE YOURSELF HOW CAN YOU GET SOMEONE TO LOVE YOU`);
  };

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const serverOne = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
serverOne.listen(PORTONE, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORTONE}`);
});

serverTwo.listen(PORTTWO, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORTTWO}`);
  });
  
