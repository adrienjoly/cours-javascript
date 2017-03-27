[![Deploy with Nitrous Quickstart](https://nitrous-image-icons.s3.amazonaws.com/quickstart.svg)](https://www.nitrous.io/quickstart)

# js-ajax-twitter

A minimal client-server chat/twitter-like application using AJAX.

Was developed for educational use, to train students with AJAX calls.

## Usage

### Run the server (including on Heroku):

- `npm install`
- `npm start`

### From the browser:

- `/log.html` renders the received chat messages in real-time (thanks to socket.io)
- `/index.html` renders a form-based client
- `/index-remote.html` renders a form-based client that POSTs to https://js-ajax-twitter.herokuapp.com/tweet
- `/index-ajax.html` renders an AJAX-based client
- `/index-ajax-remote.html` renders an AJAX-based client that POSTs to https://js-ajax-twitter.herokuapp.com/tweet
- `/index-test.html` renders a form-based client that POSTs to http://httpbin.org/post

### API

- POST `/tweet` endpoint accepts URL-encoded and JSON payloads
- The tweet / chat message is read from the `message` parameter.
- It returns `{ok: "OK"}`, even if the `message` parameter is not defined.
- Any other/incorrect API call will return `invalid request...`.

## TODO

Goal: Prevent student from sharing offensive/distracting content, while benefiting from anonymity.

Solutions:

1. Possibility to disable the LOG page, and return a `OK` response only if the student managed to send a message correctly.
2. Force students to log in. Map IP addresses with login information, to disable anonymity.
3. Possibility for teacher to know which computer has sent each message, when needed.
