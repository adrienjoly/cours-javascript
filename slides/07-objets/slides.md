class: center, middle

# JavaScript
## 🗃 Objets / `object`

---
class: center, middle, dbl-size

# 🎯 Objectifs

- 📇 Développer un annuaire téléphonique
- 🗃 Manipulation de propriétés d'objets


---
class: center, middle, dbl-size

# 🚃 Tableau JavaScript

```js
[
  'a',  // indice 0: valeur 'a'
  'b',  // indice 1: valeur 'b'
  4,    // indice 2: valeur 4
]
```

Valeurs stockées sous forme d'**éléments**.

---
class: center, middle, dbl-size

# 🗃 Objet JavaScript

```js
{
  prop1: 'a',  // clé 'prop1': valeur 'a'
  prop2: 'b',  // clé 'prop2': valeur 'b'
  prop3: 4,    // clé 'prop3': valeur 4
}
```

Valeurs stockées sous forme de **propriétés**.

???

- tableau: valeurs <- elements   <- indexés par indices (numéros)
- objets:  valeurs <- propriétés <- indexées par clés (chaînes de caractères)
- remarquer: accolades, mention des clés, deux points, indentation

# 🗃 Objets du monde réél 1/3

```js
{
  firstName: 'Mark',
  lastName: 'Zuckerberg',
  friends: [ /* ... */ ],
}
```

???

- c'est avec ce genre de structure que facebook stocke votre profil dans leur base de données

# 🗃 Objet du monde réél 2/3

```js
{
  firstName: 'Elon',
  lastName: 'Musk',
  friends: [ /* ... */ ],
}
```

???

- pour chaque utilisateur: un objet avec les mêmes propriétés!

# 🗃 Objet du monde réél 3/3

```js
var facebookProfiles = [
  {
    firstName: 'Mark',
    lastName: 'Zuckerberg',
  },
  {
    firstName: 'Elon',
    lastName: 'Musk',
  },
];
```

???

- tous les objets d'utilisateurs sont réunis dans une collection
- en javascript, on peut utiliser un tableau pour grouper nos objets

---
class: center, middle, dbl-size

# 🔭 Accéder aux propriétés d'un objet 1/2

Notation pointée:

```js
var objet = {
  prop1: 'a',
  prop2: 'b',
  prop3: 4,
};

objet.prop2;        // => 'b'
```

---
class: center, middle, dbl-size

# 🔭 Accéder aux propriétés d'un objet 2/2

...ou usage des crochets:

```js
var objet = {
  prop1: 'a',
  prop2: 'b',
  prop3: 4,
};

objet['prop2'];      // => 'b'
```

???

- avantages: la clé peut être récupérée dynamiquement dans une variable, par exemple

---
class: center, middle, dbl-size

# ✏️ Modification de propriétés

```js
var objet = {
  prop1: 'a',
  prop2: 'b',
  prop3: 4,
};

objet.prop2 = 3;
```

--

```js
objet['prop2'] = 3;
```

???

- Question: Quelle est la valeur de `objet` affichée dans la console ?
- `objet` vaut { prop1: 'a', prop2: 3, prop3: 4 }
- ... car nous avons affecté la valeur `3` dans la propriété `prop2`.
- La valeur `'b'` a donc été remplacée par `3`

---
class: center, middle, dbl-size

# 🔑 Clés riches

```js
var mesAmis = {
  'Luke Skywalker': true,
  'Dark Vador': false,
};

mesAmis['Luke Skywalker']; // => true
```

???

- contrairement aux contraintes imposées pour nommer les variables, les clés de propriétés peuvent être une chaîne de caractères libre !
- dans ce cas:
  - il faut les définir entre apostrophes
  - et les adresser avec des crochets et apostrophes

---
class: center, middle, dbl-size

# Tableau = Objet ? 🤔

```js
typeof { prop: 'a' };
typeof [ 'a', 3, 4 ];
```

???

- comme les objets, les tableaux sont aussi de type `object`
- mais les tableaux ont des caractéristiques particulières que n'ont pas les objets:
  - indexation numérique,
  - fonctions spécifiques comme `slice`,
  - etc...

---
class: center, middle, dbl-size

# Pratique: Annuaire téléphonique simple 📇

- Programme qui demande un nom d'ami, puis affiche son numéro de téléphone (utiliser `prompt` et `alert`)
- Extensibilité => n'utiliser aucune condition `if`
- Objet pour correspondance entre noms et numéros
- Utiliser l'adressage par crochets

---
class: center, middle

# 🌲 Hiérarchie d'objets

```js
var compteFacebook = {
  amis: {
    'Luke Skywalker': true,
    'Dark Vador': false,
  },
  groupes: {
    maitresJedi: {
      titre: 'Groupe des maîtres Jedi',
      membres: [ 'Yoda', 'Obi Wan' ],
    },
  },
};
```

???

- la valeur d'une propriété peut etre de n'importe quel type, y compris objet
- stocker des objets dans des objets => hiérarchie / arbre
- combien de propriétés contient l'objet `compteFacebook` ? => 2
- de quel type est la valeur de la propriété `amis` de l'objet `compteFacebook` ? => objet aussi, ayant 2 propriétés de type booléen
- de quel type est la valeur de la propriété `membres` de `maitresJedi` de `groupes` de `compteFacebook` ? tableau
- accéder au premier élément de la sous-propriété `maitresJedi` ?

---
class: center, middle

# 🌲 Hiérarchie d'objets

```js
var compteFacebook = {
  amis: {
    'Luke Skywalker': true,
    'Dark Vador': false,
  },
  groupes: {
    maitresJedi: {
      titre: 'Groupe des maîtres Jedi',
      membres: [ 'Yoda', 'Obi Wan' ],
    },
  },
};

compteFacebook.groupes;
```

---
class: center, middle

# 🌲 Hiérarchie d'objets

```js
var compteFacebook = {
  amis: {
    'Luke Skywalker': true,
    'Dark Vador': false,
  },
  groupes: {
    maitresJedi: {
      titre: 'Groupe des maîtres Jedi',
      membres: [ 'Yoda', 'Obi Wan' ],
    },
  },
};

compteFacebook.groupes.maitresJedi;
```

---
class: center, middle

# 🌲 Hiérarchie d'objets

```js
var compteFacebook = {
  amis: {
    'Luke Skywalker': true,
    'Dark Vador': false,
  },
  groupes: {
    maitresJedi: {
      titre: 'Groupe des maîtres Jedi',
      membres: [ 'Yoda', 'Obi Wan' ],
    },
  },
};

compteFacebook.groupes.maitresJedi.membres;
```

---
class: center, middle

# 🌲 Hiérarchie d'objets

```js
var compteFacebook = {
  amis: {
    'Luke Skywalker': true,
    'Dark Vador': false,
  },
  groupes: {
    maitresJedi: {
      titre: 'Groupe des maîtres Jedi',
      membres: [ 'Yoda', 'Obi Wan' ],
    },
  },
};

compteFacebook.groupes.maitresJedi.membres[0];     // => 'Yoda'
```

--

```js
compteFacebook['groupes']['maitresJedi']['membres'][0]; // idem
```

---
class: center, middle, dbl-size

# ➰ Énumérer propriétés d'un objet

Boucle `for-in`:

```js
var mesAmis = {
  'Luke Skywalker': true,
  'Dark Vador': false,
};

for (var cle in mesAmis) {
  console.log(cle, '->', mesAmis[cle]);
}
```

???

- qu'est-ce qui va s'afficher dans la console ?
- Contrairement à une boucle `for` classique, itération sur clés de l'objet.
- `cle` prend la valeur de chaque clé de propriété de l'objet `mesAmis`
- ça fonctionne aussi sur les tableaux, avec indices au lieu de clés

---
class: center, middle, dbl-size

# ✂️ Suppression d'une propriété

```js
var objet = {
  prop1: 'a',
  prop2: 'b',
  prop3: 4,
};

delete objet.prop2;
```

---
class: center, middle, dbl-size

# Exercice: Répertoire téléphonique 📇

Sur la base de l’exercice précédent, implémenter:
- (`r`) Recherche d'un numéro à partir d'un nom
- (`l`) Liste des noms + numéros --> console
- (`a`) Ajout d'un contact
- (`s`) Suppression d'un contact
- (`q`) Quitter

Choix de la fonctionnalité avec `prompt`.

---
class: center, middle

## 🏋
## Répertoire téléphonique à rendre en binôme
## via Classroom
## (fichier: `repertoire.js`)
## avant Dimanche, minuit
## 👋
