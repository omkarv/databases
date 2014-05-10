/* These headers will allow Cross-Origin Resource Sharing (CORS).
 * This CRUCIAL code allows this server to talk to websites that
 * are on different domains.
 */
var dao = require('./dao.js');
var defaultCorsHeaders = {
  'Content-Type': 'application/json',
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 60 // Seconds.
};

exports.retrieveMessages = function (request, response) {

  dao.readMessagesSerialized(function (messages) {
    response.writeHead(200, defaultCorsHeaders);
    response.end(JSON.stringify(messages));
  });
};

exports.retrieveCors = function (request, response) {
  response.writeHead(204, defaultCorsHeaders);
  response.end();
};

exports.sendMessage = function (request, response) {
  var message =  request.body;

  dao.createMessageSequelized(message, function() {
    dao.readLastMessageSequelized(function (savedMessage) {
      // debugger;
      console.log(savedMessage);
      response.writeHead(200, defaultCorsHeaders);
      response.end(JSON.stringify(savedMessage));
    });
  });
};
