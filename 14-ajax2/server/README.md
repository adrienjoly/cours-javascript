[![Deploy with Nitrous Quickstart](https://nitrous-image-icons.s3.amazonaws.com/quickstart.svg)](https://www.nitrous.io/quickstart)

# js-ajax-twitter

A minimal client-server chat/twitter-like application using AJAX.

Developed for educational use, to train students with AJAX calls.

## Usage

### Run the server (including on Heroku):

- `npm install`
- `npm start`

### From the browser:

- `/index.html` renders the received chat messages in real-time (thanks to socket.io)
- `/client.html` renders a form-based client
<!--
- `/client-remote.html` renders a form-based client that POSTs to https://js-ajax-twitter.herokuapp.com/tweet
- `/index-ajax.html` renders an AJAX-based client
- `/index-ajax-remote.html` renders an AJAX-based client that POSTs to https://js-ajax-twitter.herokuapp.com/tweet
- `/index-test.html` renders a form-based client that POSTs to http://httpbin.org/post
-->

### API

- POST `/tweet` endpoint accepts URL-encoded and JSON payloads.
- The tweet / chat message is read from the `message` parameter.
- The token provided by Google Auth must be provided in the `token` parameter.
- It returns `{ok: "OK"}`, or `{error: 'error message'}` otherwise.
- Google auth was only activated for the `https://js-ajax-twitter.herokuapp.com` and `https://*.jsbin.com` domains.
- Access is restricted to EEMI students (i.e. signed in using the `eemi.com` domain).
