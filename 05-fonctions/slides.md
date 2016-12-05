class: center, middle

# JavaScript
## ⚙ Fonctions

---
class: center, middle, dbl-size

# 🎯 Objectifs

- 👊 Développer le jeu ChiFouMi
- ⚙ Modulariser son code avec des fonctions

---
class: center, middle, dbl-size

# Fonction mathématique

Définition:

```
f(x) = x × 2
```

Appel:

```
f(3)
```

---
class: center, middle, dbl-size

![une fonction retourne un résultat à partir de paramètres](http://g.gravizo.com/g?
  digraph G {
    rankdir=LR;
    3 -> f [label="paramètre"]
    f [shape=box]
    f -> 6 [label="résultat"]
  }
)

---
class: center, middle, dbl-size

# Fonction JavaScript

Définition:

```js
function multiplierParDeux (x) {
  return x * 2;
}
```

Appel:

```js
multiplierParDeux(3);
```

---
class: center, middle, dbl-size

![une fonction retourne un résultat à partir de paramètres](http://g.gravizo.com/g?
  digraph G {
    rankdir=LR;
    3 -> multiplierParDeux [label="paramètre"]
    multiplierParDeux [shape=box]
    multiplierParDeux -> 6 [label="résultat"]
  }
)

---
class: center, middle, dbl-size

# Appel de fonction JavaScript

![une fonction retourne un résultat à partir de paramètres](http://g.gravizo.com/g?
  digraph G {
    rankdir=LR;
    param [label="valeurs"]
    param -> fonction [label="paramètres / entrée"]
    fonction [shape=box]
    fonction -> res [label="résultat / sortie"]
    res [label="valeur"]
  }
)

???

Définir une fonction permet de regrouper des instructions Javascript, afin qu'elles puissent être exécutées à différentes occasions, sans avoir à dupliquer le code correspondant.

Par exemple, sur le web, les fonctions JavaScript sont utilisées par le développeur pour définir le comportement que doit suivre le navigateur lorsque l'utilisateur effectue certaines actions (ex: saisie dans un champ, clic sur un bouton, soumission d'un formulaire).

---
class: center, middle, dbl-size

# Définition d'une fonction ⚙

```js
function nomDeLaFonction (param1, param2, param3) {
  // instructions javascript
  // pouvant utiliser les paramètres
  // nommés param1, param2 et param3
  return resultat;
}
```

---
class: center, middle, dbl-size

# Exécution ⚙

Définition de la fonction:

```js
function multiplierParDeux (nombre) {
  return nombre * 2;
}
```

Appel de la fonction:

```js
var resultat = multiplierParDeux(3);
```

???

- que vaut nombre ?
- que vaut resultat ?
- remarquez qu'on peut stocker le résultat dans une variable (comme prompt)

---
class: center, middle, dbl-size

# Appels imbriqués ⚙

```js
multiplierParDeux(multiplierParDeux(3));
```

--

```js
multiplierParDeux(3 * 2);
```

--

```js
(3 * 2) * 2;
```

--

```js
12;
```

---
class: center, middle

# Pratique: Définition et appel de fonctions ⚙

Développer:

- une fonction `diviserParDeux` qui retourne la moitié de la valeur passée en paramètre.
- une fonction `somme` qui retourne la somme des deux paramètres qui lui seront passés.
- une fonction `signe` qui retourne la chaîne de caractères `positif`, `négatif` ou `nul`, selon le signe de la valeur passée en paramètre.
- une fonction `factorielle` qui retourne le produit de tous les entiers consécutifs entre 1 et l'entier passé en paramètre (compris).
    - Exemple: `factorielle(3)` retourne le résultat de `1 * 2 * 3`, soit `6`.

---
class: center, middle, dbl-size

# 🐞 Bugs VS Tests

```js
// définition:
function multiplierParDix (nombre) {
  return nombre + '0';
}

// tests:
multiplierParDix(2);
multiplierParDix(3);
multiplierParDix(0.5);
```

???

- que fait la fonction
- que retournent les trois appels
- => est-ce que la fonction fonctionne comme attendu ?

---
class: center, middle, dbl-size

# 🐞 Bugs VS Tests

![test de la fonction multiplierParDix()](http://g.gravizo.com/g?
  digraph G {
    rankdir=LR;
    func [shape=box,label="multiplierParDix"]
    2 -> func
    func -> 20
    3 -> func
    func -> 30
    0.5 -> func [color="red"]
    func -> 0.50 [color="red"]
    0.50 [color="red", fontcolor="red"]
  }
)

---
class: center, middle, dbl-size

# 🐞 Tests unitaires

```js
multiplierParDix(2) === 20;
multiplierParDix(3) === 30;
multiplierParDix(0.5) === 5;
```

???

maintenant qu'on a imaginé des exemples de cas, on va comparer avec les résultats attendus

=> que valent ces comparaisons ?

=> comment modifier la définition de la fonction ?

---
class: center, middle, dbl-size

# 🐞 Correction de la fonction

```js
// nouvelle définition de la fonction:
function multiplierParDix (nombre) {
  return nombre * 10;
}

multiplierParDix(2) === 20;
multiplierParDix(3) === 30;
multiplierParDix(0.5) === 5;
```

???

=> que valent ces comparaisons ?

=> est-ce que la fonction fonctionne correctement ?

---
class: center, middle

# 🐞 Testons nos fonctions

```js
diviserParDeux(2) === 1;
diviserParDeux(4) === 2;
somme(1, 1) === 2;
somme(1, 2) === 3;
somme(2, 1) === 3;
signe(-1) === 'negatif';
signe(0) === 'nul';
factorielle(0) === 0;
factorielle(1) === 1;
factorielle(3) === 6;
factorielle(4) === 24;
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

# 👊 ChiFouMi, Phase 1: manche

1. Arbre de décision: nom de l'élément gagnant en fonction de deux éléments choisis;
2. Transformer en conditions `if`, en fonction de la valeur de variables `choix1` et `choix2`;
3. Afficher dans la console le nom de l'élément qui remporte la manche;
4. Transférer ces conditions dans la définition d'une fonction `comparer(choix1, choix2)` qui retourne le nom de l'élément gagnant, parmi les deux passés en paramètres;
5. Tester cette fonction en lui passant chaque combinaison possible de valeurs du jeu en paramètres;
6. En dehors de la définition de la fonction, créer les variables `choixOrdi` et `choixUtilisateur`;
7. Faire en sorte que `choixOrdi` ait pour valeur un des trois éléments, choisi de manière aléatoire, et que `choixUtilisateur` soit saisi par l'utilisateur à l'aide de `prompt()`;
8. Appeler la fonction `comparer()`, puis afficher dans la console la valeur de son résultat (l'élément qui remporte la manche), à partir des choix de l'ordinateur et du joueur.

???

combien de niveaux dans l'arbre? => 2: une pour l'ordi, une pour le joueur

---
class: center, middle

# 👊 Phase 2: partie de 3 manches + score

- le joueur peut jouer 3 manches d'affilée;
- en fin de partie, afficher le score final du joueur et de l'ordinateur.

### Pour cela:

1. Créer les variables `scoreOrdi` et `scoreJoueur`;
2. Après l'affichage du résultat de l'appel à `comparer()` dans la console, incrémenter une de ces variables, en fonction de qui a remporté la manche;
3. Mettre le code correspondant à une manche dans une boucle `for`, de manière à ce qu'il s'exécute `3` fois d'affilée;
4. En fin de partie, afficher qui a remporté la partie: `'ordi'`, `'joueur'` ou `'aucun'`, en fonction des scores.

---
class: center, middle

## 🏋
## Exercice ChiFouMi à rendre en binôme
## via Classroom
## (fichier: `chifoumi.js`)
## avant Dimanche, minuit
## 👋
