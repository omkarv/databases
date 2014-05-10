exports.startServer = function () {

  var express = require('express');
  var logger = require('morgan');
  var bodyParser = require('body-parser');

  var handlers = require('./request-handler.js');
  var port = process.env.port || 1337;

  var app = express();
  app.use(bodyParser());
  app.use(express.static(__dirname.replace('/server', '') + '/client/'));

  app.all('*', logger(':method :url'));
  app.options('*', handlers.retrieveCors);
  app.get('/1/classes/', handlers.retrieveMessages);
  app.post('/1/classes/', handlers.sendMessage);

  app.listen(port);

};
