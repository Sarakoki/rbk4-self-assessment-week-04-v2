var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};
var server = http.createServer(function(request, response,callback) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');
var counter = 0;
  if (request.method === 'POST') {
    // YOUR CODE HERE 
    if (endpoint === '/') {
      return null;
    } else
    request.on('endpoint', function(data) {
      endpoint += data;
      response.on('end', function() {
        callback(globalCounter[endpoint] = ++counter)
      })
    });

  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    response.writeHead(statusCode, globalCounter);
    response.append(globalCounter[endpoint]);
     response.end(globalCounter.endpoint)
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
