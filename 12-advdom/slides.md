class: center, middle

# JavaScript
## Manipulation DOM avancée

???

Dans les chapitres précédents, nous avons:
- utilisé l'API fournie par le navigateur pour accéder aux éléments du DOM d'une page web/HTML,
- modifié les classes et le rendu d'éléments,
- défini une réaction aux évènements déclanchés par l'utilisateur,
- et introduit les concepts de Programmation Orientée Objet, et de classes.

Dans ce chapitre, nous allons voir:
- comment en savoir plus sur un évènement qui a été déclanché par l'utilisateur,
- comment naviguer dans le DOM d'une page web/HTML, de noeud en noeud,
- et comment en modifier la structure.

---
class: center, middle, dbl-size, h1-corner

# 🎯 Objectifs

- détecter "Entrée"
- parents et enfants
- modifier le DOM

---
class: center, middle, h1-corner

# 🗒️ Plan du cours

1. Utilisation de la classe `Event`
2. Navigation dans le DOM
3. Modification de la structure du DOM

---
class: center, middle

## 🖲️ Utilisation de la classe `Event`

---
class: center, middle, dbl-size, h1-corner
# 🖲️ Utilisation de la classe `Event`

```html
<button id="mon-bouton">Mon Beau Bouton</button>
```

-

```js
document.getElementById('mon-bouton').onclick = function() {
  alert('bonjour !');
};
```

---
class: center, middle, dbl-size, h1-corner
# 🖲️ Utilisation de la classe `Event`

```html
<button>Mon 1er Bouton</button>
<button>Mon 2ème Bouton</button>
<button>Mon 3ème Bouton</button>
```

--

```js
var boutons = document.getElementsByTagName('button');
for (var i = 0; i < boutons.length; i++) {
  boutons[i].onclick = function() {
    alert('un bouton a été cliqué. mais lequel ?');
  };
}
```

---
class: center, middle, dbl-size, h1-corner
# 🖲️ Utilisation de la classe `Event`

```js
var boutons = document.getElementsByTagName('button');
for (var i = 0; i < boutons.length; i++) {
  boutons[i].onclick = function(event) {
    alert('bouton clické: ' + event.currentTarget.innerHTML);
  };
}
```

`event.currentTarget.innerHTML` ?

---
class: center, middle, dbl-size, h1-corner
# 🖲️ Utilisation de la classe `Event`

```js
element.onXXXXX = function(event) { /* ... */ };
```

## Propriétés et méthodes de `event` ?

--
- `event.currentTarget`

--
- `event.clientX` (`onclick`, `onmousemove` ...)

--
- `event.key` (`onkeydown` ...)

--
- `event.preventDefault()`

---
class: center, middle, dbl-size, h1-corner
# 🖲️ Exercice

## Détecter "Entrée" dans un champ texte

Créer une page HTML simple contenant un champ `<input>` dont la valeur est effacée quand l'utilisateur presse la touche "Entrée".

---
class: center, middle

## Navigation dans le DOM

---
class: center, middle, dbl-size, h1-corner
# Navigation dans le DOM

```html
<body>
  <button id="mon-bouton">Mon Beau Bouton</button>
</body>
```

=> Arbre, noeuds, parents, enfants ? 🤔

???

Toute page HTML est structurée sous forme hiérarchique (arbre): chaque élément HTML a un élément parent, et peut avoir plusieurs éléments enfants.

Dans cette page, l'élément `<button>` a l'élément `<body>` comme *parent*, et un *noeud texte* (le contenu textuel de l'élément) comme *enfant*. On peut aussi dire que `<button>` est un *noeud enfant* de `<body>`.

Ici, le seul *enfant* de notre élément `<button>` est un noeud textuel, mais il serait possible que ce même élément ait d'autres éléments comme *enfants*.

---
class: center, middle, dbl-size, h1-corner
# Navigation dans le DOM

```html
<body>
  <button id="mon-bouton">Mon Beau Bouton</button>
</body>
```

-

```js
var element = document.getElementById('mon-bouton');
```

## Propriétés de `element` ?

--
- `element.parentNode`

--
- `element.children`

???

Comme tout élément HTML représenté en JavaScript (et donc instance de la classe [`Element`](https://developer.mozilla.org/fr/docs/Web/API/Element)), notre variable `element` possède deux propriétés utiles pour nous aider à naviguer dans ses noeuds parent et enfants:

- `element.parentNode` est l'équivalent de `document.body`; (l'élément `<body>` de notre page)
- `element.children` est un tableau qui ne contient que le noeud textuel ayant pour valeur "`Mon Beau Bouton`".

---
class: center, middle, dbl-size, h1-corner
# Exercice

## Changer la couleur du parent au clic

3x

```html
<div style="padding: 10px;">
  <button>Un Bouton</button>
</div>
```

Écrire le code JavaScript permettant de colorier le fond du `<div>` parent en jaune lorsqu'un bouton est cliqué par l'utilisateur.

Ingrédients: boucle `for`, une seule fonction `onclick`, son paramètre `event`, les propriétés `parentNode` et `style`.

---
class: center, middle

## Modification de la structure du DOM

---
class: middle, dbl-size, h1-corner
# Créer et rattacher un noeud dans le DOM

```js
// 1. créer l'élément
var bouton = document.createElement('button');
```

--
```js
// 2. créer le contenu du bouton (noeud textuel)
var texte = document.createTextNode('Mon beau bouton');
```

--
```js
// 3. ajouter le contenu au bouton
bouton.appendChild(texte);
```

--
```js
// 4. ajouter le bouton au body de la page
document.body.appendChild(bouton);
```

???

Pour ajouter un élément HTML dans le DOM d'une page web, le navigateur fournit les méthodes suivantes:

- `document.createElement(nom)` pour créer un élément,
- `document.createTextNode(texte)` pour créer un noeud textuel, et
- `conteneur.appendChild(element)` pour ajouter un élément comme enfant d'un autre élément.

---
class: center, middle, dbl-size, h1-corner
# Supprimer un noeud du DOM

```js 
document.body.removeChild(bouton);
```

--
-

```js 
bouton.parentNode.removeChild(bouton);
```

???

Le retrait d'un noeud du DOM est l'opération inverse de celle d'ajout (`appendChild()`): elle consiste à appeler la méthode `conteneur.removeChild(noeud)`, où `conteneur` est le noeud parent duquel on souhaîte retirer `noeud`.

---
class: center, middle, dbl-size, h1-corner
# Exercice

## Construire une page web en JavaScript

En partant d'une page HTML vierge, développer le code JavaScript permettant d'ajouter à la page:
- un champ `<input>`,
- et un bouton qui vide la valeur du champ quand on clique dessus.

Ingrédients: `createElement()`, `createTextNode()`, `appendChild()`, `document.body`, `onclick`, et `value`.

---
class: center, middle, dbl-size, h1-corner
# Exercice

### Supprimer le champ de recherche de Google

En utilisant l'inspecteur et la console de Chrome Dev Tools depuis la page [google.com](http://google.com), trouver l'instruction JavaScript permettant de supprimer le champ de recherche.
