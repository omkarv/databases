var mysql =require('mysql');


// create function
exports.createMessage = function(message, callback) {
  var dbConnection = mysql.createConnection({
    user: 'root',
    password: 'mario',
    database: 'chat'
  });

  // start connection to the databas
  dbConnection.connect();
  // use the db method for inserting a
  var insertQuery = 'INSERT INTO messages (USERNAME, ROOM, TEXT) VALUES ("'  + message.username + '","' + message.roomname + '","' + message.text + '");';

  dbConnection.query(insertQuery, function(err, row) {
    callback();
    dbConnection.end();
  });
};

// read function

exports.readLastMessage = function(callback) {
  var dbConnection = mysql.createConnection({
    user: 'root',
    password: 'mario',
    database: 'chat'
  });

  dbConnection.connect();
  var readQuery = 'SELECT MAX(ID) AS objectId, username, text, room  from messages;';
  console.log(readQuery);
  dbConnection.query(readQuery, function(err, row) {
    callback(row);
    dbConnection.end();
  });
};

exports.readMessages = function(callback) {
  var dbConnection = mysql.createConnection({
    user: 'root',
    password: 'mario',
    database: 'chat'
  });

  dbConnection.connect();
  var readQuery = 'SELECT * from messages;';
  console.log(readQuery);
  dbConnection.query(readQuery, function(err, rows) {
    callback(rows);
    dbConnection.end();
  });
};
