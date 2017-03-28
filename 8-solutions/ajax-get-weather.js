// 0. Clé API générée depuis https://home.openweathermap.org/api_keys
var API_KEY = 'd1ffc9be1384dd411ba612942d571977';

var champ = document.getElementById('ville');
var meteo = document.getElementById('meteo');

document.getElementById('bouton').onclick = function() {

  // 1. génération de l'URL en fonction de la saisie
  var url = 'http://api.openweathermap.org/data/2.5/weather?q='
    + encodeURIComponent(champ.value) // conversion des caractères spéciaux
    + '&appid=' + API_KEY;
  console.log('ajax request url:', url);

  // 2. initialisation de la requête AJAX
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      // 4. traitement de la réponse du serveur à la requête
      console.log(xhr.responseText);
      var objet = JSON.parse(xhr.responseText);
      meteo.innerHTML = objet.weather[0];
    }
  };
  // 3. envoi de la requête AJAX
  xhr.send();

};
