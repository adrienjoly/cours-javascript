class: center, middle

# JavaScript
## et le DOM

---
class: center, middle, dbl-size

# 🎯 Objectifs

- Exécuter du JS depuis une page HTML
- Manipuler une page HTML depuis JS
- Application: Calculatrice

---
class: middle

# Terminologie Web

- WWW: *World Wide Web*
- HTML: *HyperText Markup Language*
- CSS: *Cascading Style Sheets*
- JavaScript
- Navigateur Web / *Web Browser*
- DOM: *Document Object Model*
- API: *Application Programming Interface*

---
class: center, middle, dbl-size

# Intégration JavaScript dans HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Bonjour !</h1>
    <script src="script.js"></script>
  </body>
</html>
```

???

Trois choses importantes à remarquer:

- l'élément `<script>` peut être défini dans le `<head>` ou dans le `<body>`, mais il est généralement recommandé de l'insérer juste avant la fin du `<body>`;
- l'URL du script doit être fournie via l'attribut `src`;
- mais surtout, contrairement aux éléments `<link>`, les éléments `<script>` ne doivent pas être exprimés sous forme d'une balise auto-fermante (finissant par `/>`) => il est impératif d'**utiliser une balise fermante `</script>` après chaque balise ouvrante `<script>`**.

---
class: center, middle, dbl-size

# Application: Dire bonjour au monde

Créer une page web qui affiche `Bonjour le monde !`

dans un `alert()`.

---
class: center, middle, dbl-size

# Accès aux éléments HTML depuis JS

Page HTML:

```html
<p id="premier-paragraphe">Bonjour</p>
<p id="deuxieme-paragraphe">le monde</p>
```

Code JS:

```js
document.getElementById('premier-paragraphe');
```

---
class: center, middle, dbl-size

# Pratique

1. allez sur le site web de votre choix,
2. utilisez l'onglet "Éléments" de Chrome Dev Tools (barre latérale dans laquelle se trouve aussi la console JavaScript),
3. repérez un élément qui possède un attribut `id`,
4. dans la console, utilisez `getElementById()` de manière à afficher l'objet JavaScript représentant cet élément.

---
class: center, middle, dbl-size

# Récupérer valeur d'un champ

Page HTML:

```html
<input id="nom" value="Michel" />
```

Code JS:

```js
document.getElementById('nom').value;
```

---
class: center, middle, dbl-size

# Pratique: Récupération des valeurs du formulaire

(cf support de cours)

---
class: center, middle, dbl-size

# Événements

- `click`
- `change`
- `mouseover`
- ...

---
class: center, middle

# Intercepter un événement

HTML:

```html
<button id="mon-bouton">Mon Beau Bouton</button>
```

Code JS:

```js
document.getElementById('mon-bouton').onclick = function direBonjour() {
  alert('bonjour !');
};
```

---
class: center, middle

# Exercice: Calculatrice

Page HTML:

- champs `<input>`: `premier-nombre` et `deuxieme-nombre`;
- champ `resultat`;
- et bouton `mon-bouton`.

Quand l'utilisateur clique sur le bouton:

afficher le résultat de l'addition des deux nombres dans le 3ème champ.

## Bonus: Calculatrice multi-opérations

---
class: center, middle

## 🏋
## Rendre l'URL de votre Calculatrice
## via Classroom
## avant Dimanche, minuit
## 👋
