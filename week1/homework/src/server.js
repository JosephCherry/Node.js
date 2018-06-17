'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;
  let currentState = null;

  const server = http.createServer((request, response) => {
    if(request.url === "/state"){
      currentState = {"state": state};
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(JSON.stringify(currentState));
    } else if (request.url === "/add"){
      state++;
      currentState = {"state": state};
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(JSON.stringify(currentState));
    } else if (request.url === "/subtract"){
      state--;
      currentState = {"state": state};
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(JSON.stringify(currentState));
    } else if (request.url === "/reset"){
      state = 10;
      currentState = {"state": state};
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(JSON.stringify(currentState));
    } else {
      response.writeHead(404, {'Content-Type': 'application/json'}); 
      currentState = {"error": "Not found"};
      response.end(JSON.stringify(currentState));
    }
  });

  return server;
}

module.exports = {
  createServer
};
