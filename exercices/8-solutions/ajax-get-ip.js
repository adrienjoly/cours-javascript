var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://httpbin.org/ip');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log('réponse du serveur:', xhr.responseText);
    var objet = JSON.parse(xhr.responseText);
    alert(objet.origin);
  }
};
xhr.send();
