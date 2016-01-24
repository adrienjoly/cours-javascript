// inspired from http://code.runnable.com/Umgo967vRZQMAABQ/a-simple-webserver-with-connect-for-node-js

var os = require("os");
var connect = require('connect');
var getLocalIP = require('my-local-ip');
var serveStatic = require('serve-static');

var PORT = 8080;

var users = {}; // remoteAddress -> user object

// Configure the app
var app = connect();
app.use(require('qs')); // Parse query string into `request.query`
app.use(require('body-parser').json({ type: '*/*', strict: false })); // parse json request bodies into req.body 
app.use(serveStatic('./public', {'index': ['index.html']})); // Serve public files 

app.use('/users', function (req, response, next) {
  console.log('/users request from:', req.connection.remoteAddress, req.body);
  var renderedUsers = Object.keys(users).map(function(ip){
    return '<li>' + users[ip].name.replace(/[<>]*/g, '') + ': ' + users[ip].message + '</li>';
  });
  response.end([
    '<!DOCTYPE html>',
    '<html>',
    '<body>',
    '<p>Utilisateurs: ' + Object.keys(users).length + '</p>',
    '<ul>' + renderedUsers + '</ul>',
    '</body>',
    '</html>'
  ].join('\n'));
});

app.use('/hello', function (req, response, next) {
  console.log('/hello request from:', req.connection.remoteAddress, req.body);
  var nbUsers = Object.keys(users).length;
  users[req.connection.remoteAddress] = req.body;
  response.end(JSON.stringify({
    message: 'Bonjour, ' + req.body.name + '! Vous êtes le ' + (nbUsers ? (nbUsers + 1) + 'ème' : '1er') + '!'
  }));
});

app.use(function (req, response, next) {
  console.log('invalid request from:', req.connection.remoteAddress);
  response.end('invalid request...\n');
  //return next();
});

// Listen for HTTP/HTTPS conncections on port 3000
app.listen(PORT);

console.log('Server running...');
console.log('Try http://' + os.hostname() + '.local:' + PORT + '/');
console.log(' or http://' + getLocalIP()  +       ':' + PORT + '/');
