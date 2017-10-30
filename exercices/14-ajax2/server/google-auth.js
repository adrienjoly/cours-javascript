var CLIENT_ID = '247219641427-ifeq88p7rgor9al5ksduds7ug0ba7djr.apps.googleusercontent.com';

var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;
var client = new auth.OAuth2(CLIENT_ID, '', '');

function checkToken(token, callback) {
  client.verifyIdToken(token, CLIENT_ID, function(e, login) {
    var payload = {};
    if (!e) {
      payload = login.getPayload();
    }
    callback(e, {
      id: payload['sub'],
      name: payload['name'],
      domain: payload['hd'],
    });
  });
}

exports.checkToken = checkToken;
