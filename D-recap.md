# TP D: Boucles

### Introduction

Présente dans la plupart des langages de programmation, une boucle permet de répeter plusieurs fois une section de code.

Ce TP est mis en pratique par l'écriture collaborative d'une solution au jeu "The Descent" sur Codingame.

Ce document récapitule ce qu'est une boucle, quels sont les différents types de boucles en Javascript, et comment les utiliser.

### Qu'est-ce qu'une boucle ?

Une boucle permet de **répeter** plusieurs fois une section de code.

Les boucles sont donc très utiles pour éviter les redondances dans un programme (ex: jouer 5 fois le même son, mettre tous les champs d'un formulaire en majuscules...), mais elles surtout indispensables dans de nombreuses applications courantes:

- Les jeux tour-par-tour consistent en une boucle qui se termine lorsqu'un joueur remporte la partie;
- Les jeux d'action utilisent une boucle permettant de mettre à jour l'affichage (*frame par frame*, pour utiliser la terminologie exacte) en fonction des actions du/des joueur(s);
- Ainsi que la quasi-totalité des algorithmes de tri et de gestion de données utilisés dans 99% des logiciels.

Une boucle est définie par:

- une **condition** de sortie (expression conditionnelle, comme dans `if`);
- une liste d'**instructions** (saisie entre accolades `{}`) à répéter tant que la condition de sortie n'est pas atteinte.

Chaque répétition de la liste d'instructions définis au sein de cette boucle s'appelle une **itération**.

A noter que dans la plupart des cas, les boucles sont utilisées pour itérer sur un intervalle (ex: entiers entre 0 et 8), ou sur une énumération de valeurs (ex: un *tableau*/*Array*).

### Types de boucles en Javascript

Javascript fournit quatre instuctions pour définir des boucles: `do`, `while` et `for`. La plus courante est `for`.

Nous allons commencer par la plus simple:

#### La boucle `while`

La boucle `while` consiste à répeter une liste d'instructions **tant que** la condition fournie est vraie.

Elle existe sous deux formes:

- La forme avec **pré-condition**:

```
var a = 1;
while (a == 0) {
  console.log("ce message ne s'affichera jamais");
}
while (a == 1) {
  console.log("ce message s'affichera sans arrêt");
}
```

- La forme avec **post-condition**:

```
var a = 1;
do {
  console.log("ce message s'affichera une seule fois");
} while (a == 0);
do {
  console.log("ce message s'affichera sans arrêt");
} while (a == 1);
```

#### La boucle `for`

Comme la boucle `while`, la boucle `for` une liste d'instructions **tant que** la condition fournie est vraie.

Ainsi, nous pouvons ré-écrire les exemples précédents à l'aide de `for`:

```
var a = 1;
for ( ; a == 0 ; ) {
  console.log("ce message ne s'affichera jamais");
}
for ( ; a == 1 ; ) {
  console.log("ce message s'affichera sans arrêt");
}
```

Vous remarquerez que la condition est fournie entre deux points-virgule.

Une boucle `for` accepte en effet trois paramètres:

```
for( /*initialisation*/ ; /*condition*/ ; /*incrémentation*/ ) {
  /* instructions à répeter */
}
```

Jusqu'à présent, nous avons compris que les `instructions` entre accolades allaient être exécutées tant que la `condition` fournie serait vraie.

Les paramètres optionnels `initialisation` et `incrémentation` permettent à cette boucle d'**itérer sur un intervalle** (ex: entiers entre 0 et 8), ou sur une énumération de valeurs (ex: un *tableau*/*Array*).

C'est à dire que, la boucle pourra par exemple *incrémenter* une variable à chaque itération. Dans ce cas, l'`initialisation` consistera à initialiser notre variable (ex: `var i = 0`), et l'`incrémentation` à définir l'opération d'incrémentation sur cette variable. Par exemple: `i++` est une opération permettant d'augmenter de 1 la valeur de la variable `i`.

#### Exécution d'une boucle `for`

Afin de mieux comprendre le fonctionnement de la boucle `for` et de la manière de saisir ces trois paramètres, nous allons interpréter une boucle comme le fait un navigateur web (ou tout autre interpréteur Javascript).

Prenons la boucle `for` suivante:

```
console.log('on va boucler');
for ( var i = 0; i < 4; i++ ) {
  console.log('iteration', i, i < 4);
}
console.log('on a fini de boucler');
```

Voici la manière dont elle va être interprétée par la machine:

```
console.log('on va boucler');            // => affiche: on va boucler

// interprétation de la boucle => on commence par l'initialisation
var i = 0; // initialisation de la boucle, en affectant 0 à la variable i

// --- première itération de la boucle ---
i < 4 ?    // la condition est-elle vraie ? => oui, car i vaut 0
console.log('iteration', i, i < 4);      // => affiche: iteration 0 true
i++;       // incrémentation => i vaut maintenant 1

// --- seconde itération de la boucle ---
i < 4 ?    // la condition est-elle vraie ? => oui, car 1 < 4
console.log('iteration', i, i < 4);      // => affiche: iteration 1 true
i++;       // incrémentation => i vaut maintenant 2

// --- troisième itération de la boucle ---
i < 4 ?    // la condition est-elle vraie ? => oui, car 2 < 4
console.log('iteration', i, i < 4);      // => affiche: iteration 2 true
i++;       // incrémentation => i vaut maintenant 3

// --- quatrième itération de la boucle ---
i < 4 ?    // la condition est-elle vraie ? => oui, car 3 < 4
console.log('iteration', i, i < 4);      // => affiche: iteration 3 true
i++;       // incrémentation => i vaut maintenant 4

// --- cinquième itération de la boucle ---
i < 4 ?    // la condition est-elle vraie ? => non, car i==4 => fin de boucle

// boucle terminée => on interprète les instructions suivantes.
console.log('on a fini de boucler');     // => affiche: on a fini de boucler
```

Il est très pratique de décomposer une boucle de cette manière lorsqu'elle ne se comporte pas comme désiré. (*déboggage*)

#### Usage le plus courant de `for`

Maintenant que nous avons compris comment fonctionne une boucle `for`, nous allons voir comment les employer de manière plus instinctive.

Comme nous l'avons vu plus haut, une boucle `for` sert le plus souvent à itérer sur un intervalle de valeurs:

```
for ( var i = 0; i < 4; i++ ) {
  console.log(i);
}
```

Dans cet exemple, l'instruction `console.log` va être exécutée pour chaque valeur de `i` comprise entre `0` et `4` non inclus. Dans chaque itération, la variable `i` prendra donc successivement les valeurs: `0`, `1`, `2`, puis `3`.
