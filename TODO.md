
TODO














### Exercice: Jeu ChiFouMi

#### Fonctionnement du jeu à implémenter

À chaque manche, l'ordinateur et le joueur choisissent chacun un élément parmi `pierre`, `feuille` ou `ciseaux`.

Un point est donné à celui qui à choisit l'élément le plus fort, sachant que:
- `ciseaux` > `feuille` *(les ciseaux coupent la feuille)*
- `pierre` > `ciseaux` *(la pierre casse les ciseaux)*
- `feuille` > `pierre` *(la feuille enveloppe la pierre)*

Si l'ordinateur et le joueur ont choisi le même élément, aucun d'eux n'emporte de point.

#### Exemple de déroulement d'une manche

- l'ordinateur choisit secrètement `pierre` (parmi les trois valeurs d'éléments possibles);
- le joueur est invité à saisir son choix => il tape `feuille`;
- l'ordinateur affiche que le joueur a remporté cette manche, car la feuille enveloppe la pierre => le score est alors de 1 à 0 pour le joueur.

#### Étapes proposées pour l'implémentation progressive du jeu

1. Dessiner l'arbre de décision d'une manche;
2. Créer les variables `ordi`, `joueur`, `scoreOrdi` et `scoreJoueur`;
3. Transformer l'arbre en conditions `if` imbriquées, utilisant ces trois variables;
3. Chaque condition de dernier niveau peut incrémenter `scoreOrdi`, `scoreJoueur`, ou aucun;
4. Tester que les conditions fonctionnent bien, en affichant les scores résultants de chaque combinaison d'`ordi` et `joueur`;
5. Mettre le code dans une boucle qui s'exécutera trois fois;
6. En fin de partie, afficher qui est le gagnant: `'ordi'` ou `'joueur'`





















## Tableaux, introduction

Un tableau (appelé `array` en anglais) est un type avancé de valeurs. C'est une liste ordonnée de valeurs.

Exemple:

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
```

### Caractéristiques

Comme tous les autres types de valeur, un tableau peut être stocké dans une variable.

En revanche, en JavaScript, les tableaux sont considérés comme une forme particulière du type `object`. Autrement dit, `typeof []` retourne `"object"`.

Comme toute variable en JavaScript, les valeurs stockées dans un tableau peuvent être de n'importe quel type (y compris un tableau), et n'ont pas besoin d'être tous du même type:

```js
var fourreTout = [ null, true, 'bonjour', 1.2, fruits, undefined ];
```

Tout tableau possède une propriété `length` qui vaut le nombre de valeurs qu'il contient:

```js
fourreTout.length; // => retourne 6, car il y a 6 valeurs dans notre tableau
```

### Accéder aux éléments d'un tableau

Chaque élément d'un tableau est numéroté par ce qu'on appelle un "indice" (ou "index" en anglais).

A noter que cette numérotation commence par 0 (zéro), et non par 1.

Du coup, l'indice du premier élément est `0`, et l'indice du dernier élément est `length - 1` (`length` étant le nombre d'éléments du tableau).

On peut accéder à un élément de tableau en précisant son indice entre crochets:

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
fruits[0]; // vaut 'Mangue'
fruits[1]; // vaut 'Raisin'
fruits[2]; // vaut 'Figue'
fruits[3]; // undefined
```

### Modification d'un élément

Pour modifier la valeur d'un élément, il suffit de l'adresser par indice (comme vu juste avant) puis de lui affecter une valeur, comme on le ferait pour une variable:

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
fruits[1] = 'Kiwi';
fruits; // => vaut [ 'Mangue', 'Kiwi', 'Figue' ]
```

### Ajout d'élément

La méthode `push()` permet d'ajouter un élément à la fin du tableau. La valeur de cet élément est à passer en paramètre (entre parenthèses) de la méthode, quand on l'appelle:

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
fruits.push('Banane'); // appel de la méthode push() sur le tableau fruits, avec `Banane` en paramètre
fruits; // => [ 'Mangue', 'Raisin', 'Figue', 'Banane' ]
```

À chaque fois qu'on ajoute un élément à un tableau en appelant la méthode `push()`, sa longueur `length` est incrémentée (c.a.d. sa valeur augmente de `1`):

```js
fruits.length; // => 4, désormais
```

### Retrait d'élément

La méthode `pop()` retourne la dernière valeur du tableau puis la retire de ce tableau:

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue' ];
var f = fruits.pop();
f;      // => `Figue`
fruits; // => [ 'Mangue', 'Raisin' ];
```

À chaque fois qu'on retire un élément d'un tableau en appelant la méthode `pop()`, sa longueur `length` est décrémentée (c.a.d. sa valeur décroit de `1`):

```js
fruits.length; // => 2, désormais
```

### Pratique: Calendrier

```js
var jours = [ 'lun', '007', 'mer', 'jeu', 'ven', 'sam', 'BUG' ];
```

Quelles instructions JavaScript faut-il exécuter pour effectuer les opérations suivantes ?

1. Retirer le dernière valeur du tableau `jours`
2. Afficher les valeurs du tableau dans la console
3. Ajouter la valeur `'dim'` à la fin du tableau
4. Remplacer la valeur `'007'` par `'mar'`
5. Afficher le nombre de valeurs du tableau dans la console
6. Afficher la troisième valeur du tableau dans la console

Quelle est la valeur finale du tableau, après avoir effectué toutes ces opérations ?

## Tableaux, fonctions avancées

### Recherche d'élément par valeur

La méthode `indexOf()` retourne l'indice du premier élément d'un tableau, pour une valeur donnée. La valeur recherchée est à passer en paramètre (entre parenthèses) de la méthode, quand on l'appelle:

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Raisin' ];
fruits.indexOf('Raisin'); // => 1
```

Si aucun élément du tableau ne contient la valeur cherchée, l'appel à `indexOf()` retourne `-1`:

```js
fruits.indexOf('Pomme'); // => -1, car il n'y a pas de valeur 'Pomme' dans fruits
```

### Concaténation de tableaux

Comme pour les chaînes de caractères, il est possible de concaténer des tableaux.

La concaténation de deux tableaux consiste à créer un nouveau tableau contenant les éléments de ces deux tableaux.

La méthode `concat()` retourne un nouveau tableau contenant les éléments du tableau sur lequel elle est appelée, et d'un autre tableau passé en paramètre:

```js
var fruits1 = [ 'Mangue', 'Raisin' ];
var fruits2 = [ 'Figue', 'Kiwi' ];
fruits1.concat(fruits2); // => [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ]
```

Il est bien entendu possible d'utiliser des tableaux littéraux, au lieu de variables:

```js
[ 'Mangue', 'Raisin' ].concat([ 'Figue', 'Kiwi' ]); // => [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ]
```

### Partitionnement de tableaux

La méthode `slice()` retourne un nouveau tableau contenant un extrait du tableau sur lequel elle est appelée.

A chaque appel de cette méthode, il faut fournir deux paramètres: l'indice de l'élément où commence cet extrait, et l'indice de l'élément où se termine l'extrait (non compris):

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
fruits.slice(1, 3); // => [ 'Raisin', 'Figue' ]
```

### Altération de tableau

La méthode `splice()` (à ne pas confondre avec `slice()`) permet à la fois de supprimer et d'insérer des éléments dans un tableau, en fournissant leur indice(s).

Syntaxe d'appel de la méthode: `tableau.splice(i, c, v1, v2, ...)`, avec

  - paramètre `i`: indice à partir duquel on va effectuer la modification
  - paramètre `c`: nombre d'éléments à supprimer depuis l'indice `i`
  - paramètre(s) suivant(s): valeur(s) d'élément(s) à insérer à partir de l'indice `i`

Voici un exemple utilisant les paramètres `i` et `c`: (suppression seulement)

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
fruits.splice(1, 2); // depuis l'indice 1, supprimer 2 valeurs
fruits; // => [ 'Mangue', 'Kiwi' ]
```

Voici un exemple utilisant tous les paramètres: (insertion seulement)

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
fruits.splice(1, 0, 'Pomme'); // depuis l'indice 1, supprimer 0 valeurs, puis y insérer 'Pomme'
fruits; // => [ 'Mangue', 'Pomme', 'Kiwi' ]
```

> Contrairement aux méthodes `concat()` et `slice()`, `splice()` ne retourne pas un nouveau tableau, mais modifie le tableau sur lequel elle est appelée.

### Pratique: Épicerie

```js
var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
```

Écrire un programme qui:

1. Affiche la liste de `fruits` disponibles;
2. Demande au client quel fruit il désire acheter:
  - s'il est présent dans le tableau `fruits`: le retirer du tableau, et afficher `'ok!'`,
  - sinon, afficher `'indisponible...'`.
3. Affiche à nouveau la liste de fruits disponibles.
















### Exercice: Jeu du Pendu

Principe du jeu: Le joueur doit deviner un mot, lettre par lettre. Il perd après 10 mauvaises tentatives.

Nous allons utiliser les variables suivantes:

```js
var tentatives = 10;
var lettres = [ 's', 'u', 'p', 'e', 'r' ];
```

À chaque tentative, le joueur va proposer une lettre, puis:

- si la lettre fait partie du mot à deviner (dont les lettres sont stockées dans le tableau `lettres`), cette lettre sera supprimée du tableau;
- sinon, le nombre de `tentatives` décrémente.

Le joueur gagne la partie quand il a deviné toutes les lettres du mot. (c.a.d. le tableau `lettres` ne contient plus aucun élément)

Le joueur perd la partie si le nombre de `tentatives` atteint la valeur `0`.

Exercice: implémenter le jeu du pendu en JavaScript.

Mots clés à utiliser: `alert`, `prompt`, `if`, `else`, `=`, `===`, `indexOf`, `splice`, et `for`

Conseil: avant de créer une boucle `for`, implémenter l'algorithme qui sera exécuté à chaque itération de cette boucle. (une itération = une tentative du joueur)

Étapes proposées:

1. Afficher le nombre de lettres à trouver, et de tentatives restantes.
2. Si `tentatives` est nul, afficher `perdu!`.
3. Si le nombre de `lettres` restantes à trouver est nul, afficher `bravo!`.
4. Demander une lettre au joueur, en utilisant `prompt()`.
5. Si la lettre fait partie du tableau `lettres`, la supprimer du tableau. Sinon décrémenter `tentatives`. Afficher un message au joueur dans chaque cas.
6. Créer une boucle `for` permettant de jouer jusqu'à la fin de partie (perdu ou bravo).

BONUS: Dans le cas où le joueur devine une lettre qui apparaît plus d'une fois dans le mot, retirer toutes les occurrences de cette lettre en une seule fois.





















### Manipulation de types avancés

#### Accéder aux propriétés d'un objet

- Un objet associe des valeurs à des propriétés.
- Les valeurs de ces propriétés peuvent être de n'importe quel type.

```js
var obj = {
  maProp1: 'valeur 1', // propriété maProp1 de type string
  maProp2: {           // propriété maProp2 de type object
    maProp3: 4         // propriété maProp3 de type number
  }
};
```

--

- Deux moyens d'accéder aux valeurs d'un objet (et d'un tableau):

```js
// notation pointée
obj.maProp1 // => 'valeur 1'
obj.maProp2.maProp3 // => 4

// notation avec crochets (permet l'utilisation de variables)
obj['maProp1'] // => 'valeur 1'
obj['maProp2']['maProp3'] // => 4
```

---

#### Accéder aux valeurs d'un tableau (même principe)

- Un tableau est un objet dont les propriétés sont des nombres entiers appelés **indices** (*index*).
- Tout tableau a une propriété `.length` qui vaut le nombre de ses valeurs.

```js
var tab = [
  'valeur 1', // 1ère valeur (indice=0) de type string
  {           // 2ème valeur (indice=1) de type object
    maProp3: 4
  }
];
```

--

- Accéder aux valeurs d'un tableau:

```js
// notation avec crochets (permet l'utilisation de variables)
tab[0] // => 'valeur 1'
tab[1] // => { maProp3: 4 }
```

- La notation avec crochets `tab[i]` est souvent utilisée dans boucles `for`.

---

#### Énumérer les valeurs d'un objet/tableau

- Dans les deux cas, on peut utiliser une boucle `for` pour lister les valeurs.
- Pour un tableau:

```js
for (var i=0; i<tab.length; ++i) {
  console.log(i, tab[i]);
}
```

- Pour un objet:

```js
for (var p in obj) {
  console.log(p, obj[p]);
}
```

---

#### Mise en pratique: fonction affiche()

Objectif: définir une fonction `affiche()` qui affiche dans la console le contenu de la valeur passée en paramètre, en fonction de son type.

- Si le paramètre n'est pas défini, afficher `(aucune valeur)`
- Si le paramètre est de type `null`, afficher `(valeur nulle)`
- Si le paramètre est de type `string`, afficher `chaîne: <valeur> (<longueur>)`
- Sinon, afficher `type non supporté pour l'instant`

Tests:

```js
affiche() // => (aucune valeur)
affiche(undefined) // => (aucune valeur)
affiche(null) // => (valeur nulle)
affiche('hey') // => chaîne: hey (3)
affiche(3) // => type non supporté pour l'instant
affiche([1,2,3]) // => type non supporté pour l'instant
affiche({a:1}) // => type non supporté pour l'instant
affiche(function(){}) // => type non supporté pour l'instant
```

---

#### Exercice: Compléter la fonction affiche()

Objectif: ajouter le support des objets et tableaux dans notre fonction affiche().

- Si le paramètre est de type `function`, afficher `fonction`
- Si le paramètre est un nombre ou un booléen, afficher `<type>: <valeur>`
- Si le paramètre est de type `object`, afficher `objet:` suivi d'une ligne par propriété:<br/>
    `- <propriété>: <valeur>`

- Si le paramètre est un tableau, afficher `tableau de <longueur> éléments:` suivi d'une ligne par valeur:<br/>
    `- <valeur>`

Tester que la fonction fonctionne bien avec chaque type de valeur.

BONUS: Rendre la fonction récursive, afin d'afficher de manière indentée les objets et tableaux contenus dans d'autres.


