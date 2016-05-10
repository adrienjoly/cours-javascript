class: center, middle

# Javascript - TP S
# Tableaux / arrays

---

# Programme du TP

Objectif: Développer le jeu du Pendu (hangman)

Problématique: Comment gérer la liste des lettres à trouver ?

1. Cours: Fonctions de base
2. Mise en pratique
3. Cours: Fonctions plus avancées
4. Exercice

---

# Tableau / array ?

Tableau: liste de valeurs.

Exemple:

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
```

---

# Caractéristiques:

- Peut être stocké dans une variable
- Type retourné par `typeof`: `"object"`
- Propriété `length` d'un tableau = nombre de valeurs qu'il contient.
- Chaque valeur peut être de n'importe quel type.
- Chaque valeur est indexée de `0` à `length - 1`.
- `[n]` (crochets) = la valeur contenue à l'indice `n` du tableau.

---

# Application

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
```

=>

- `fruits.length` vaut `3`
- `fruits[0]` vaut `"Mangue"`
- `fruits[2]` vaut `"Figue"`

---

# Modification d'une valeur

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
fruits[1] = 'Kiwi';
console.log(fruits);
```

=> Quelle est la valeur de `fruits` affichée dans la console ?

--

- `fruits` vaut [ 'Mangue', 'Kiwi', 'Figue' ]
- ... car nous avons affecté la valeur `'Kiwi'` à l'indice `1` de notre tableau.
- La valeur `'Raisin'` a donc été remplacée par `'Kiwi'`

---

# Ajout de valeur

La méthode `push(v)` permet d'ajouter une valeur `v` à la fin du tableau.

--

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
fruits.push('Banane');
console.log(fruits);
```

=> Quelle est la valeur de `fruits` affichée dans la console ?

--

- `fruits` vaut `[ 'Mangue', 'Raisin', 'Figue', 'Banane' ]`
- `fruits.length` vaut désormais `4`

---

# Retrait de valeur

La méthode `pop()` renvoie la dernière valeur du tableau puis la retire.

--

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
var f = fruits.pop();
console.log(f);
console.log(fruits);
```

=> Quelle est la valeur de `f` et de `fruits` affichés dans la console ?

--

- `f` vaut `'Figue'`
- `fruits` vaut `[ 'Mangue', 'Raisin' ]`
- `fruits.length` vaut désormais `2`

---

# Mise en pratique

```js
var jours = [ 'lun', '007', 'mer', 'jeu', 'ven', 'sam', 'BUG' ];
```

Proposer une ligne de code pour effectuer chaque opération ci-dessous:

1. Retirer le dernière valeur du tableau `jours`
2. Afficher les valeurs du tableau dans la console
3. Ajouter la valeur `'dim'` à la fin du tableau
4. Remplacer la valeur `'007'` par `'mar'`
5. Afficher le nombre de valeurs du tableau dans la console
6. Afficher la troisième valeur du tableau dans la console

???

1. jours.pop();
2. console.log(jours);
3. jours.push('dim');
4. jours[1] = 'mar';
5. console.log(jours.length);
6. console.log(jours[2]);

---

# Méthode de recherche de valeur

La méthode `indexOf(v)` renvoie le 1er indice auquel se trouve la valeur `v`, ou `-1`.

--

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Raisin' ];
```

=> Que vaut `fruits.indexOf('Raisin')` ?

--

Réponse: `1` car la valeur `'Raisin'` apparait une première fois à l'indice `1`

---

# Concaténation et partitionnement de tableaux

```js
var fruits1 = [ 'Mangue', 'Raisin' ];
var fruits2 = [ 'Figue', 'Kiwi' ];
```

- `concat(t)` renvoie un nouveau tableau contenant aussi les valeurs de `t`

--

```js
var mix = fruits1.concat(fruits2); // => [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ]
```

--

- `slice(a, b)` renvoie un tableau contenant les valeurs des indices `a` à `b` (non compris)

--

```js
mix.slice(1, 3); // => [ 'Raisin', 'Figue' ]
```

Note: ni `concat()` ni `slice()` ne modifient le tableau sur lequel ils s'appliquent.

---

# Modification de tableau

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
```

- `splice(i, c, v1, v2, ...)` permet de supprimer et/ou insérer des valeurs dans le tableau.

--

  - paramètre `i`: indice où effectuer la modification
  - paramètre `c`: nombre de valeurs à supprimer depuis cet indice
  - paramètre(s) suivant(s): valeur(s) à insérer à cet indice

--

```js
fruits.splice(1, 2); // supprimer 2 valeurs depuis l'indice 1
fruits; // =>[ 'Mangue', 'Kiwi' ]
```

--

```js
fruits.splice(1, 0, 'Pomme'); // supprimer 0 valeurs depuis l'indice 1 puis ajouter 'Pomme'
fruits; // =>[ 'Mangue', 'Pomme', 'Kiwi' ]
```

---

# Exercice: Pendu

```js
var tentatives = 10;
var lettres = [ 's', 'u', 'p', 'e', 'r' ];
```

Pendu: Le joueur doit deviner le mot, lettre par lettre. Il perd après 10 mauvaises tentatives.

1. Afficher le nombre de lettres à trouver, et de tentatives restantes.
2. Si le nombre de tentatives est nul, afficher `perdu!`.
3. Si le nombre de lettres à trouver est nul, afficher `bravo!`.
4. Demander une lettre au joueur, en utilisant `prompt()`.
5. Si la lettre fait partie du tableau `lettres`, la retirer. Sinon décrémenter `tentatives`. Afficher un message dans chaque cas.
6. Créer une boucle permettant de jouer jusqu'à la fin de partie (perdu ou bravo).

BONUS: Dans le cas où le joueur devine une lettre qui apparait plus d'une fois dans le mot, retirer toutes les occurrences de cette lettre.
