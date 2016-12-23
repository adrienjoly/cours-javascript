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

# 🔧 Modification de propriétés

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
class: center, middle

## 🏋
## Calendrier Avancé à rendre en binôme
## via Classroom
## (fichier: `calendrier.js`)
## avant Dimanche, minuit
## 👋
