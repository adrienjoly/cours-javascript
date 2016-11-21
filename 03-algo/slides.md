class: center, middle

# JavaScript
## ➰ Algorithmes et Boucles

---
class: center, middle, dbl-size

# 🎯 Objectifs

- 👊 Développer le jeu "ChiFouMi"
- ➰ Boucles et itérations

---
class: center, middle, quote

Un algorithme est une **suite** finie et non ambiguë d’**opérations** ou d'instructions permettant de résoudre un problème ou d'**obtenir un résultat**.

---
class: center, middle, dbl-size

# Afficher les nombres de 1 à 3

```js
console.log(1);
console.log(2);
console.log(3);
```

???

- console.log() permet d'écrire dans la console
- ce code fonctionne bien, mais imaginer si on devait compter jusqu'à 10000!
- => redondant

---
class: center, middle, dbl-size

# Afficher les nombres de 1 à 10000

```js
for ( var monNombre = 1; monNombre <= 10000; monNombre++ ) {
  console.log( monNombre );
}
```

???

Pour ce genre de répétition, le mot-clé `for` permet de définir une seule fois les instructions qui doivent êtres répétées, puis de spécifier combien de fois on souhaite qu'elles soient répétées.

Comment le lire:
- Pour chaque valeur de `monNombre`,
- croissant de `1` à `10000` (compris),
- afficher la valeur de `monNombre` dans la console.

Donner des exemples d'usage de boucles

---
class: center, middle

# Anatomie d'une boucle `for`

Syntaxe:

```js
for( /* initialisation */ ; /* condition */ ; /* incrémentation */ ) {
  /* instructions à répeter */
}
```

Exemple:

```js
for ( var monNombre = 1; monNombre <= 10000; monNombre++ ) {
  console.log( monNombre );
}
```

???

Cette boucle est définie par:
- l'usage du mot clé `for`;
- une liste d'instructions (saisie entre accolades `{}`) à répéter tant que la condition est vraie: `console.log( monNombre );` (dans notre exemple, il n'y a qu'une seule instruction, mais on peut en mettre une infinité);
- une condition (expression conditionnelle, comme dans une condition `if`): `monNombre <= 10000`;
- une instruction d'itération qui sera exécutée après chaque itération de la boucle: `monNombre++` (qui, ici, incrémente la valeur de `monNombre`, c'est à dire augmente sa valeur de `1`);
- et une instruction d'initialisation qui ne sera exécutée qu'une seule fois: `var monNombre = 1` (ici, on créée une variable `monNombre` et on lui affecte la valeur initiale `1`).

On appelle **itération** chaque répétition de la boucle.

À noter que, dans la plupart des cas, les boucles sont utilisées pour itérer:
- sur un intervalle (dans notre exemple: nombres entiers entre `1` et `10000`),
- ou sur une énumération de valeurs (ex: un tableau/Array, comme on le verra plus tard).

---
class: center, middle, dbl-size

### Traçage de l’exécution d'une boucle `for`

```js
console.log('on va boucler');
for ( var i = 0; i < 4; i++ ) {
  console.log('i', i, i < 4);
}
console.log('on a fini de boucler');
```

=> Écrire la suite d'instructions qui vont être exécutées.

???

Il est très pratique de décomposer une boucle de cette manière lorsqu'elle ne se comporte pas comme voulu. (*débogage*)

---
class: center, middle

# Application: FizzBuzz

- Boucle qui affiche les nombres de `1` à `199` (compris) dans la console.
- Multiples de `3`: afficher `Fizz` au lieu du nombre.
- Multiples de `5`: afficher `Buzz` au lieu du nombre.
- Multiples de `3` et `5`: afficher uniquement `FizzBuzz`.

### Fonctions fournies

```js
function estMultipleDeTrois(nombre) { return nombre % 3 == 0; }
function estMultipleDeCinq(nombre) { return nombre % 5 == 0; }
```

???

=> On devrait obtenir les lignes suivantes dans la console:

`1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz` (...jusqu'à `199`)

---
class: center, middle, dbl-size

# Exemple d'usage des fonctions 1/2

```js
estMultipleDeTrois(2); // => ?
estMultipleDeTrois(6); // => ?

estMultipleDeCinq(6); // => ?
estMultipleDeCinq(15); // => ?
```

???

estMultipleDeTrois(2); // => retourne false, car 2 n'est pas multiple de 3
estMultipleDeTrois(6); // => retourne true, car 6 est un multiple de 3

estMultipleDeCinq(6); // => retourne false, car 6 n'est pas un multiple de 5
estMultipleDeCinq(15); // => retourne true, car 15 est un multiple de 5

---
class: center, middle, dbl-size

# Exemple d'usage des fonctions 2/2

```js
var monNombre = 5; // valeur fournie en guise d'exemple
if (estMultipleDeCinq(monNombre)) {
  console.log('monNombre est multiple de 5');
} else {
  console.log('monNombre n\'est pas multiple de 5');
}
```

---
class: center, middle

# Application: Devine le nombre

- Ordinateur choisit un nombre entre `0` et `100`.
- À chaque tour:
  - Si nombre saisi < ordinateur: afficher `Plus grand`.
  - Si nombre saisi > ordinateur: afficher `Plus petit`.
  - Si joueur a deviné le nombre: afficher `Bravo !`.
- Joueur a droit à `10` tours pour deviner le nombre.

### Nombre aléatoire entre 0 et 100

```js
Math.round(Math.random() * 100)
```

???

Exemple de partie:

```
joueur: 10 => "Plus grand"
joueur: 20 => "Plus petit"
joueur: 16 => "Bravo !"
```

---
class: center, middle

# 👊 Exercice: Jeu ChiFouMi

Ordinateur et joueur choisissent parmi `pierre`, `feuille` ou `ciseaux`.

Un point pour le choix le plus fort, selon:
- `ciseaux` > `feuille` *(les ciseaux coupent la feuille)*
- `pierre` > `ciseaux` *(la pierre casse les ciseaux)*
- `feuille` > `pierre` *(la feuille enveloppe la pierre)*

Sinon, aucun point n'est accordé.

Le gagnant est déterminé après 3 manches.

???

( Copier les règles au tableau, pour pouvoir afficher le slide suivant )

Exemple de déroulement d'une manche:

- l'ordinateur choisit secrètement `pierre` (parmi les trois valeurs d'éléments possibles);
- le joueur est invité à saisir son choix => il tape `feuille`;
- l'ordinateur affiche que le joueur a remporté cette manche, car la feuille enveloppe la pierre => le score est alors de 1 à 0 pour le joueur.

---
class: center, middle

# 👊 ChiFouMi: étapes d'implémentation

1. Dessiner l'arbre de décision d'une manche;
2. Créer les variables `ordi`, `joueur`, `scoreOrdi` et `scoreJoueur`;
3. Transformer l'arbre en conditions `if` imbriquées, utilisant ces trois variables;
3. Chaque condition de dernier niveau peut incrémenter `scoreOrdi`, `scoreJoueur`, ou aucun;
4. Tester que les conditions fonctionnent bien, en affichant les scores résultants de chaque combinaison d'`ordi` et `joueur`;
5. Mettre le code dans une boucle qui s'exécutera trois fois;
6. En fin de partie, afficher qui est le gagnant: `'ordi'` ou `'joueur'`

???

combien de niveaux dans l'arbre? => 2: une pour l'ordi, une pour le joueur

---
class: center, middle

## 🏋
## Exercice ChiFouMi à rendre en binôme
## via Classroom
## (fichier: `chifoumi.js`)
## avant Dimanche, minuit
## 👋
