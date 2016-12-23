class: center, middle

# JavaScript
## 🚃 Tableaux / `array`

---
class: center, middle, dbl-size

# 🎯 Objectifs

- ☠ Développer le jeu du pendu
- 🚃 Manipulation de tableaux d'éléments


---
class: center, middle, dbl-size

# 🚃 Tableau

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
```

???

- type avancé
- liste ordonnée de valeurs.
- Peut être stocké dans une variable

---
class: center, middle, dbl-size

# Éléments de types hétérogènes

```js
var fourreTout = [
  null,
  true,
  'bonjour',
  1.2,
  fruits,
  undefined
];
```

???

- Chaque valeur peut être de n'importe quel type.
- Question: Quel est le type de chaque element ?

---
class: center, middle, dbl-size

# Nombre d'éléments

```js
var fourreTout = [
  null,
  true,
  'bonjour',
  1.2,
  fruits,
  undefined
];
fourreTout.length; // => ?
```

???

- qu'est-ce que vaut `fourreTout.length` ?

---
class: center, middle, dbl-size

# Accéder aux éléments d'un tableau

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
fruits[0]; // indice: 0
fruits[1];
fruits[2]; // indice: length - 1
fruits[3]; // indice: length
```

???

- Chaque valeur est indexée de `0` à `length - 1`.
- `[n]` (crochets) = la valeur contenue à l'indice `n` du tableau.
- Question: quelle est la valeur à chaque indice de l'exemple ?

---
class: center, middle, dbl-size

# Modification d'un élément

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
fruits[1] = 'Kiwi';
fruits; // => ?
```

???

- Question: Quelle est la valeur de `fruits` affichée dans la console ?
- `fruits` vaut [ 'Mangue', 'Kiwi', 'Figue' ]
- ... car nous avons affecté la valeur `'Kiwi'` à l'indice `1` de notre tableau.
- La valeur `'Raisin'` a donc été remplacée par `'Kiwi'`

---
class: center, middle, dbl-size

# Ajout d'élément

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
fruits.push('Banane');
fruits; // => ?
```

???

- Question: Quelle est la valeur de `fruits` ?
- `fruits` vaut `[ 'Mangue', 'Raisin', 'Figue', 'Banane' ]`
- Question: Quelle est la longueur de `fruits` ?
- `fruits.length` vaut désormais `4`

---
class: center, middle, dbl-size

# Retrait d'élément

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
var f = fruits.pop();
f;      // => ?
fruits; // => ?
```

???

- Question: Quelle est la valeur de `f` ?
- `f` vaut `'Figue'`, valeur de l'élément supprimé
- Question: Quelle est la valeur de `fruits` ?
- `fruits` vaut `[ 'Mangue', 'Raisin' ]`
- Question: Quelle est la longueur `length` du tableau ?
- `fruits.length` vaut désormais `2`

---
class: center, middle

# Pratique: Calendrier 📅

```js
var jours = [ 'lun', '007', 'mer', 'jeu', 'ven', 'sam', 'BUG' ];
```

1. Retirer le dernière valeur du tableau `jours`
2. Afficher les valeurs du tableau dans la console
3. Ajouter la valeur `'dim'` à la fin du tableau
4. Remplacer la valeur `'007'` par `'mar'`
5. Afficher le nombre de valeurs du tableau dans la console
6. Afficher la troisième valeur du tableau dans la console

=> Valeur finale du tableau ?

???

1. jours.pop();
2. console.log(jours);
3. jours.push('dim');
4. jours[1] = 'mar';
5. console.log(jours.length);
6. console.log(jours[2]);
7. [ 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim' ];

---
class: center, middle, dbl-size

# Recherche d'élément par valeur

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Raisin' ];
fruits.indexOf('Raisin'); // => ?
fruits.indexOf('Pomme');  // => ?
```

???

- Question: Que vaut `fruits.indexOf('Raisin')` ?
- Réponse: `1` car la valeur `'Raisin'` apparait une première fois à l'indice `1`
- Question: Que vaut `fruits.indexOf('Pomme')` ?
- Réponse: `-1` car `fruits` ne contient aucun élément dont la valeur est `'Pomme'`

---
class: center, middle, dbl-size

# Concaténation de tableaux

```js
var fruits1 = [ 'Mangue', 'Raisin' ];
var fruits2 = [ 'Figue', 'Kiwi' ];
fruits1.concat(fruits2); // => ?
```

???

- Question: que vaut `fruits1.concat(fruits2)` ?
- Réponse: `[ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ]`

---
class: center, middle, dbl-size

# Partitionnement de tableaux

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
fruits.slice(1, 3); // => ?
```

???

- Question: que vaut `fruits.slice(1, 3)` ? 
- Réponse: `[ 'Raisin', 'Figue' ]`

---
class: center, middle, dbl-size

# Altération de tableau

Paramètres de `tableau.splice(i, c, v1, v2, ...)`:

  - `i`: indice des modifications
  - `c`: nombre d'éléments à supprimer
  - puis valeurs à insérer

???

- à ne pas confondre avec slice()

---
class: center, middle, dbl-size

# Altération de tableau (suppression)

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
fruits.splice(1, 2);
fruits; // => ?
```

???
 
- splice: depuis l'indice 1, supprimer 2 valeurs
- => fruits: [ 'Mangue', 'Kiwi' ]

---
class: center, middle, dbl-size

# Altération de tableau (insertion)

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
fruits.splice(1, 0, 'Pomme');
fruits; // => ?
```

???

- splice: depuis l'indice 1, supprimer 0 valeurs, puis y insérer 'Pomme'
- => fruits: [ 'Mangue', 'Pomme', 'Kiwi' ]
- préciser que: Contrairement aux méthodes `concat()` et `slice()`, `splice()` ne retourne pas un nouveau tableau, mais modifie le tableau sur lequel elle est appelée.

---
class: center, middle

# Pratique: Épicerie 🍒

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
```

Écrire un programme qui:

1. Affiche la liste de `fruits` disponibles;
2. Demande au client quel fruit il désire acheter:
  - s'il est présent dans le tableau `fruits`: le retirer du tableau, et afficher `'ok!'`,
  - sinon, afficher `'indisponible...'`.
3. Affiche à nouveau la liste de fruits disponibles.

---
class: center, middle, dbl-size

# Exercice à rendre: Jeu du Pendu ☠

```js
var tentatives = 10;
var lettres = [ 's', 'u', 'p', 'e', 'r' ];
```

Écrire le programme:

- joueur devine une lettre (`prompt`) => la supprimer de `lettres`, ou décrémenter `tentatives`
- `lettres.length === 0` => afficher `bravo!`
- `tentatives === 0` => afficher `perdu!`

---
class: center, middle

# Jeu du Pendu ☠: étapes d'implémentation

1. Afficher le nombre de lettres à trouver, et de tentatives restantes.
2. Si `tentatives` est nul, afficher `perdu!`.
3. Si le nombre de `lettres` restantes à trouver est nul, afficher `bravo!`.
4. Demander une lettre au joueur, en utilisant `prompt()`.
5. Si la lettre fait partie du tableau `lettres`, la supprimer du tableau. Sinon décrémenter `tentatives`. Informer le joueur dans chaque cas.
6. Créer une boucle `for` permettant de jouer jusqu'à la fin de partie.
7. En fin de partie, afficher `perdu!` ou `bravo!`, selon le cas.

Mots clés à utiliser: `alert`, `prompt`, `if`, `else`, `=`, `===`, `indexOf`, `splice`, et `for`

???

Conseil: avant de créer une boucle `for`, implémenter l'algorithme qui sera exécuté à chaque itération de cette boucle. (une itération = une tentative du joueur)

---
class: center, middle

## 🏋
## Jeu du Pendu à rendre en binôme
## via Classroom
## (fichier: `pendu.js`)
## avant Dimanche, minuit
## 👋
