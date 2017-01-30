class: center, middle

# JavaScript
## Classes et styles CSS

---
class: center, middle, dbl-size

# 🎯 Objectif

![categories animation](img/categories.gif)

---
class: center, middle, dbl-size

# 🎯 Plan

1. Afficher/cacher un `<p>`
2. Cacher des spoilers
3. Surbrillance au clic
4. Filtrage par catégorie (à rendre)

---
class: center

# 1. Manipulation de classes CSS

Règles CSS:

```css
.hidden {
  display: none;
}
```

--

Page HTML:

```html
<p id="premier" class="hidden">texte caché</p>
<p id="second">texte à cacher</p>
```

--

Ajout de classe en JS:

```js
document.getElementById('second').classList.add('hidden');
```

--

## => Exercice: Afficher/cacher

---
class: center

# 2. Accéder à des éléments par classe

### Page HTML:

```html
<p>garçon troublé</p>
<p class="spoiler">ours en peluche disparu</p>
<p class="spoiler">finalement il le retrouve</p>
```

--

### Instruction JS:

```js
document.getElementsByClassName('spoiler'); // => tableau d'éléments
```

--

## => Exercice: Cacher les spoilers

---
class: center

# 3. Manipulation de styles CSS (1/2)

### Règle CSS:

```css
#mon-element {
  border: 1 solid black;
  background-color: red;
}
```

--

### JSON / Objet JS correspondant:

```js
{
  border: '1 solid black',
  backgroundColor: 'red'
}
```

---
class: center

# 3. Manipulation de styles CSS (2/2)

### Page HTML:

```html
<p id="premier">texte important</p>
<p id="second">autre texte</p>
```

--

### Modification de style en JS:

```js
var element = document.getElementById('premier');
element.style.backgroundColor = 'red';
```

--

## => Exercice: Surbrillance au clic

---
class: center, middle, dbl-size

# 4. Exercice: liste avec filtrage dynamique

![categories animation](img/categories.gif)

=> URL Codepen, jsfiddle, ou jsbin

à rendre via devoir Classroom

avant Dimanche 19 Février, minuit.
