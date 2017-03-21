class: center, middle
# JavaScript
## Requêtes AJAX 🚀

---
class: center, middle, dbl-size
# 🎯 Objectifs

- Récupérer des données sur le Web, en JS
- Exemple: une image via une API, en fonction d'un mot clé

---
class: center, middle, dbl-size
# 🗒️ Plan du cours

1. Cours: AJAX, HTTP et formats
2. Interroger une API avec AJAX

---
# AJAX et HTTP

.pull-right[![diagramme ajax](./ajax.svg)]

.comment[
[//]: # ( -- as generated from http://bramp.github.io/js-sequence-diagrams/ -- )
[//]: # (Navigateur-->Server: GET /)
[//]: # (Server->Navigateur: index.html)
[//]: # (Navigateur-->Server: GET index.js)
[//]: # (Server->Navigateur: index.js)
[//]: # (Navigateur-->API: GET data.json)
[//]: # (API->Navigateur: data.json)
]

- **A**synchronous **J**avascript **a**nd **X**ML
- Requête **HTTP** depuis du code JS
--

- Permet de:
  - **Échanger** des données avec l'extérieur
  - **Charger** des données sans recharger la page
  - Accéder à des **API** (**A**pplication **P**rogramming **I**nterface)

---
# Formats de données

- XML (ancien standard pour données brutes)

```xml
<inbox>
  <email from="amazon">votre colis a été envoyé</email>
</inbox>
```
--
- HTML (pour rendu web)

```html
<h1>Vos emails</h1>
<ul>
  <li>Amazon: votre colis a été envoyé</li>
</ul>
```
--
- JSON (**J**ava**S**cript **O**bject **N**otation)

```javascript
inbox: {
  email: {
    from: "amazon",
    subject: "votre colis a été envoyé"
  }
}
```

---
# Objets JSON en JavaScript

```javascript
var inbox = {
  email: {
    from: "amazon",
    subject: "votre colis a été envoyé"
  }
};
```

--

- Une variable peut être un objet JSON.
- Un objet contient des **propriétés**.
- Les accolades servent à définir la valeur des propriétés d'un objet.
- Une propriété, comme une variable, peut être un objet.

--

```javascript
console.log(inbox);
console.log(inbox.email);
console.log(inbox.email.from);
console.log(inbox.email.subject);
```

---
# Requête AJAX en JavaScript

Executez ceci dans votre console, depuis une page:

```javascript
var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
xhr.onreadystatechange = function() {
  console.log('état:', xhr.readyState, '-> réponse:', xhr.responseText);
};
xhr.send();
```

--

## Questions

- Combien de fois est appelée notre fonction ?
- À quoi correspond la propriété `readyState` ?
- Que contient la propriété `responseText` ?

<!-- 
Question: est-ce judicieux d'utiliser Fetch() au lieu de XMLHttpRequest ? Non.

// exemple:

var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=74a9b070d21072ccac3a7b5f44f09efa&tags=soccer&format=json&nojsoncallback=1';
fetch(url).then(function(reponse) {
  reponse.text().then(function(contenu) {
    console.log(contenu);
  });
});

// ou:

fetch(url).then(function(reponse) {
  reponse.json().then(function(contenu) {
    console.log(contenu);
  });
});

// ou:

fetch(url)
  .then((reponse) => reponse.json())
  .then((json) => console.log(json));

// => bcp de syntaxes, support approximatif, verbeux sans ES6, gestion d'erreurs...
-->

---
# Requête AJAX en JavaScript

 1) Initialisation de la requête:

```javascript
var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
```
--
 2) Exploitation de la réponse:

```javascript
xhr.onreadystatechange = function() {
  console.log('état:', xhr.readyState, '-> réponse:', xhr.responseText);
};
```
  <!--
  if (xhr.readyState == 4) {
    alert('code: ' + xhr.status); // 200 = OK
    alert(xhr.responseText);
  }
  -->

--
 3) Envoi de la requête:

```javascript
xhr.send();
```

--
## Question:

- Comment n'afficher que la réponse finale ?

---
# Requête AJAX en JavaScript

Afficher la réponse seulement quand elle est complète:

```javascript
var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    alert(xhr.responseText);
  }
};
xhr.send();
```

--
## Questions:

- Comment afficher seulement le nom de la personne ?
- Format et type de cette réponse ?

---
# Texte brut -> données structurées

- JSON stocké dans une chaine de caractères => pas exploitable:

```javascript
var chaine = '{"message":"bonjour!"}';
console.log(chaine.message); // => undefined
```
--
- Extraire l'objet JSON depuis une chaine de caractères

```javascript
var chaine = '{"message":"bonjour!"}';
var objet = JSON.parse(chaine);
console.log(objet.message); // => "bonjour!"
```
--
- Extraire l'objet JSON depuis la réponse à la requête AJAX

```javascript
var reponse = JSON.parse(xhr.responseText);
console.log(reponse.message);
```

---
# Extraction de données JSON

Requête AJAX avec `JSON.parse()`:

```javascript
var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    var reponse = JSON.parse(xhr.responseText);
    alert(reponse.name);
  }
};
xhr.send();
```

---
# Exemples d'APIs ouvertes

- Simples:
  - Adresse IP: [httpbin.org/ip](http://httpbin.org/ip)
  - Heure: [time.jsontest.com](http://time.jsontest.com/) (*HTTP only*)
  - Utilisateur: [jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

- Plus complexes:
  - Photos Flickr: [tag=soccer](https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=74a9b070d21072ccac3a7b5f44f09efa&tags=soccer&format=json&nojsoncallback=1)
  - Météo: [openweathermap.org/current](http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98) ([doc](http://openweathermap.org/current))
  - Chatons: [puppygifs.tumblr.com/api/read/json](http://puppygifs.tumblr.com/api/read/json) (JSON var with CORS)

- Annuaire d'APIs: [Programmable Web](http://www.programmableweb.com/)

---
# Exercice

**Effectuer une requête AJAX et afficher le résultat, en fonction du choix de l'utilisateur.**

Exemples:
- afficher la météo de demain, en fonction de la ville choisie.
- afficher une photo Flickr, en fonction d'un tag saisi.

Etapes:
1. réaliser une page HTML contenant un champ de saisie et un bouton.
2. ajouter un code JavaScript qui affiche le contenu du champ quand on clique sur le bouton.
3. ajouter la requête AJAX dans le code, afficher le résultat dans la console.
4. faire en sorte que l'appel AJAX s'adapte en fonction de la saisie, à chaque clic sur le bouton.
