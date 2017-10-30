var message = document.getElementById('message');

function sendMessage() {
  if (message.value.length === 0) {
    return;
  }
  message.disabled = true;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/tweet');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log('response:', xhr.responseText);
      message.disabled = false;
      var responseObject = JSON.parse(xhr.responseText);
      if (responseObject.error) {
        alert('Error: ' + responseObject.error);
      } else {
        console.log('Message was sent successfully :-)');
        message.value = '';
        message.focus();
      }
    }
  };
  xhr.send(JSON.stringify({
    message: message.value,
    token: window.token, // provided by Google Auth / login on client-ajax.html
  }));
}

// the change event is emitted from the input every time the user presses ENTER
document.getElementById('message').onchange = function() {
  console.log('user pressed ENTER');
  sendMessage();
};
