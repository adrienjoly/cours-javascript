var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'http://time.jsontest.com');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log('réponse du serveur:', xhr.responseText);
    var objet = JSON.parse(xhr.responseText);
    alert(objet.time);
  }
};
xhr.send();
