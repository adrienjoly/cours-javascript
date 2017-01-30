class: center, middle

# JavaScript
## Classes et styles CSS

---
class: center, middle, dbl-size

# 🎯 Objectif

![categories animation](img/categories.gif)

???

pour faire ça:

- onclick (cours précédent)
- appliquer classe CSS sur éléments
- récupérer éléments par classe
- aussi: changer style d'éléments

---
class: center, middle, dbl-size

# 🎯 Plan

1. Afficher/cacher un `<p>`
2. Cacher des spoilers
3. Surbrillance au clic
4. Filtrage par catégorie (à rendre)

???

bcp de pratique: 3 exercices + 1 à rendre

---
class: center

# 1. Manipulation de classes CSS

Règles CSS:

```css
.hidden {
  display: none;
}
```

???

une classe qui sert à cacher les éléments portant cette classe

--

Page HTML:

```html
<p id="premier" class="hidden">texte caché</p>
<p id="second">texte à cacher</p>
```

???

deux paragraphes: 1 caché + 1 à cacher en JS

--

Ajout de classe en JS:

```js
document.getElementById('second').classList.add('hidden');
```

???

utilisation de la propriété `classList`, deux fonctions:

- `add()` pour ajouter
- `remove()` pour retirer

--

## => Exercice: Afficher/cacher

???

exercice:
- page avec deux `<p>`
- fichier CSS avec `.hidden`
- code JS pour retirer classe `hidden` du 2ème `<p>` ?

---
class: center

# 2. Accéder à des éléments par classe

### Page HTML:

```html
<p>garçon troublé</p>
<p class="spoiler">ours en peluche disparu</p>
<p class="spoiler">finalement il le retrouve</p>
```

???

trois paragraphes, dont deux portant la classe `spoiler`

=> on veut cacher les spoilers en JS.

pour l'instant, on sait récupérer UN élément en JS, en connaissant son `id`.

--

### Instruction JS:

```js
document.getElementsByClassName('spoiler'); // => tableau d'éléments
```

???

pour récupérer les éléments portant une classe donnée.

=> ça renvoie un tableau

=> on peut faire une boucle pour manipuler chaque élément HTML contenu dans le tableau.

--

## => Exercice: Cacher les spoilers

???

- page avec trois `<p>`
- fichier CSS avec `.hidden`
- code JS pour ajouter `.hidden` aux paragraphes `.spoiler` ?
- bouton HTML => spoilers cachés au clic

---
class: center

# 3. Manipulation de styles CSS (1/2)

### Règle CSS:

```css
#encadre {
  border: 1 solid black;
  background-color: red;
}
```

???

règle CSS associée à l'id `encadre`:

- une bordure
- une couleur de fond

--

### JSON / Objet JS correspondant:

```js
{
  border: '1 solid black',
  backgroundColor: 'red'
}
```

???

en JS, on manipule ces propriétés via un Objet

=> quelques différences:

- valeurs = string => apostrophes
- propriétés séparées par des virgules
- clés composées notées en camel case

---
class: center

# 3. Manipulation de styles CSS (2/2)

### Page HTML:

```html
<p id="premier">texte important</p>
<p id="second">autre texte</p>
```

???

deux paragraphes, avec chacun un `id`

--

### Modification de style en JS:

```js
var element = document.getElementById('premier');
element.style.backgroundColor = 'red';
```

???

pour modifier le style du premier:

- on le récupère du DOM (ici, par son `id`)
- on utilise la propriété `style`, de type objet

=> on peut faire des affectations, comme sur un objet classique !

--

## => Exercice: Surbrillance au clic

???

- page avec deux `<p>`, sans CSS
- code JS pour ajouter fond jaune quand utilisateur clique sur un `<p>`

---
class: center, middle, dbl-size

# 4. Exercice: liste avec filtrage dynamique

![categories animation](img/categories.gif)

=> URL Codepen, jsfiddle, ou jsbin

à rendre via devoir Classroom

avant Dimanche 19 Février, minuit.

???

- min. 10 produits et 3 catégories;
- produit = élément HTML;
- catégories dans attribut `class`;
- filtrage par classes;
- pouvoir passer rapidement d'une catégorie à une autre, puis afficher la liste complète (non filtrée) des produits;
- au moins 2 produits présents dans plusieurs catégories.
