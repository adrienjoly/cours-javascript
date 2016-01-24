// inspired from http://code.runnable.com/Umgo967vRZQMAABQ/a-simple-webserver-with-connect-for-node-js

var os = require("os");
var connect = require('connect');
var getLocalIP = require('my-local-ip');
var serveStatic = require('serve-static');

var PORT = 8080;

// Configure the app
var app = connect();
app.use(require('qs')); // Parse query string into `request.query`
app.use(require('body-parser').json({ type: '*/*', strict: false })); // parse json request bodies into req.body 
app.use(serveStatic('./public', {'index': ['index.html']})); // Serve public files 

app.use('/hello', function (req, response, next) {
  console.log('/hello request from:', req.connection.remoteAddress, req.body);
  response.end(JSON.stringify({
    message: 'Bonjour, ' + req.body.name
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
