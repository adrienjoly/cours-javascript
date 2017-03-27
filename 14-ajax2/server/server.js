// inspired from http://code.runnable.com/Umgo967vRZQMAABQ/a-simple-webserver-with-connect-for-node-js

var http = require('http');
var connect = require('connect');
var socketio = require('socket.io');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

var PORT = process.env.PORT || 8080;

var allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); // TODO: reduce
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

// Configure the app
var app = connect();
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: false })); // parse urlencoded request bodies into req.body
app.use(bodyParser.json({ type: '*/*', strict: false })); // parse json request bodies into req.body
app.use(serveStatic('./public', {'index': ['index.html']})); // Serve public files

// Prepare socket.io server for public/log.html
var httpServer = http.createServer(app)
var io = socketio(httpServer);

// /tweet is a POST API endpoint for users to connect and send messages
app.use('/tweet', function (req, response, next) {
  console.log('POST /tweet from:', req.connection.remoteAddress, req.body);
  response.end(JSON.stringify({ ok: 'OK' }));
  // display message on log.html
  io.emit('chat', { message: req.body.message, ip: req.connection.remoteAddress });
});

app.use('/image', function (req, response, next) {
  response.end('https://jstwitter2.herokuapp.com/image.jpg');
});

app.use('/images.json', function (req, response, next) {
  response.end('{"urls": [ "https://http.cat/300", "https://http.cat/200", "https://http.cat/400" ]}');
});

app.use(function (req, response, next) {
  console.log('invalid request from:', req.connection.remoteAddress);
  response.end('invalid request...\n');
  //return next();
});

// Listen for HTTP/HTTPS conncections on port 3000
//app.listen(PORT);
httpServer.listen(PORT);

console.log('Server running on port', PORT, '...');
//console.log('Try http://' + os.hostname() + '.local:' + PORT + '/'); // note: hostname is not reachable on EEMI LAN

