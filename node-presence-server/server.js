// inspired from http://code.runnable.com/Umgo967vRZQMAABQ/a-simple-webserver-with-connect-for-node-js

var os = require("os");
var http = require('http');
var connect = require('connect');
var socketio = require('socket.io');
var serveStatic = require('serve-static');

var PORT = 8080;

var users = {}; // remoteAddress -> user object

function sanitize(str){
  return str.replace(/[<>]*/g, '');
}

// Configure the app
var app = connect();
app.use(require('qs')); // Parse query string into `request.query`
app.use(require('body-parser').json({ type: '*/*', strict: false })); // parse json request bodies into req.body 
app.use(serveStatic('./public', {'index': ['index.html']})); // Serve public files 

// Prepare socket.io server for public/log.html
var httpServer = http.createServer(app)
var io = socketio(httpServer);

// /users displays a list of connected users
app.use('/users', function (req, response, next) {
  response.end([
    '<!DOCTYPE html>',
    '<html>',
    '<body>',
    '<p>Utilisateurs: ' + Object.keys(users).length + '</p>',
    '<ul>' + Object.keys(users).map(function(ip){
      return '<li>' + sanitize(users[ip].name) + ': ' + sanitize(users[ip].message) + '</li>';
    }) + '</ul>',
    '</body>',
    '</html>'
  ].join('\n'));
});

// /hello is a POST API endpoint for users to connect and send messages
app.use('/hello', function (req, response, next) {
  console.log('/hello request from:', req.connection.remoteAddress, req.body);
  users[req.connection.remoteAddress] = req.body;
  var nbUsers = Object.keys(users).length;
  // return welcome message to connected user
  response.end(JSON.stringify({
    message: 'Bonjour, ' + req.body.name + '!'
      + ' Vous êtes le ' + (nbUsers == 1 ? '1er' : nbUsers + 'ème') + '!'
  }));
  // display message on log.html
  io.emit('chat', {
    for: 'everyone',
    userName: sanitize(req.body.name),
    message: sanitize(req.body.message),
    users: nbUsers
  });
});

app.use(function (req, response, next) {
  console.log('invalid request from:', req.connection.remoteAddress);
  response.end('invalid request...\n');
  //return next();
});

// Listen for HTTP/HTTPS conncections on port 3000
//app.listen(PORT);
httpServer.listen(PORT);

console.log('Server running...');
console.log('Try http://' + os.hostname() + '.local:' + PORT + '/');
