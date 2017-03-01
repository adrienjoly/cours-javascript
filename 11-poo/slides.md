class: center, middle

# JavaScript
## Généricité et POO

---
class: center, middle, dbl-size

# 🎯 Objectif

Concevoir un composant

pouvant avoir plusieurs instances

indépendantes


---
class: center, middle

# Plan du cours

- Composants, quelques rappels
- Problème: composant mono-instance
  - Solution 1: regroupement et répétition
  - Portée des variables JS
  - Génération de fonctions
- Problème: personnalisation
  - Solution 2: fournir une API
  - POO: classes, instances et `this`

---
class: center, middle

# Composants, quelques rappels

- Programme intégrable dans un autre
- Ex: gallerie dans une page Web
- Conçu par un développeur, intégré par un intégrateur
- Doit être très simple à intégrer (2-3 lignes de code)
- L'intégrateur doit pouvoir intégrer le composant plusieurs fois par page
  - => Le composant doit être **instanciable**
- L'intégrateur ne doit pas avoir besoin de modifier le code du composant
  - => Un composant doit être **générique** (s'adapter à différents contextes)

---
class: center, middle

# Problème

Un composant simpliste:

```js
// 1. récupérer le spoiler
var spoiler = document.getElementById('spoiler');
// 2. camoufler le spoiler
spoiler.classList.add('hidden');
// 3. afficher le spoiler au clic
spoiler.onclick = function() {
  spoiler.classList.remove('hidden');
};
```

=> Et s'il y a plus d'un spoiler sur la page ?

???

Ce composant ne peut s'instancier que sur un seul élément !

- getElementById->getElementsByClassName car un element max par id
- getElementsByClassName retourne un tableau => usage de boucle

---
class: center, middle

# Solution 1: regroupement et répétition (1/2)

```js
// 1. récupérer LES spoilerS
var spoilers = document.getElementsByClassName('spoiler');
for (var i = 0; i < spoilers.length; i++) {
  var spoiler = spoilers[i];
  // 2. camoufler CHAQUE spoiler
  spoiler.classList.add('hidden');
  // 3. afficher CHAQUE spoiler au clic
  spoiler.onclick = function() {
    spoiler.classList.remove('hidden');
  };
}
```

=> Est-ce que ça fonctionne ?

???

Les spoilers se cachent bien.
Par contre le clic ne fait rien...
=> pourquoi ? comment trouver l'erreur ?

=> utiliser console.log() pour afficher la valeur de i dans la boucle et dans la fonction

---
class: center, middle

# Portée des variables en JS (1/4)

```js
var i = 1;
function maFonction() {
  console.log(i);
}
maFonction(); // => contenu de la console ?
```

???

Toute fonction JS a accès aux variables définies dans les contextes parents.

---
class: center, middle

# Portée des variables en JS (2/4)

```js
function maFonction() {
  console.log(i);
}
for (var i = 0; i < 3; i++) {
  maFonction();
}
// => contenu de la console ?
```

???

On obtient bien 0, 1, 2 dans la console.
=> La fonction utilise bien la valeur de i (du contexte parent), au moment de son appel.

---
class: center, middle

# Portée des variables en JS (3/4)

```js
function maFonction() {
  console.log(i);
}
for (var i = 0; i < 3; i++) {
  setTimeout(maFonction, 1000); // appel une seconde plus tard
}
// => contenu de la console ?
```

???

On obtient bien 3, 3, 3 dans la console !
La fonction a bien utilisé la valeur de i (du contexte parent), au moment de son appel.
Or, au moment de l'appel (une seconde plus tard), la boucle a fini de s'exécuter, et i vaut donc 3. (valeur maximale définie dans la condition de la boucle)

---
class: center, middle

# Portée des variables en JS (4/4)

```js
function creerMaFonctionAvec(valeurDeI) {
  return function() {
    console.log(valeurDeI);
  };
}
for (var i = 0; i < 3; i++) {
  setTimeout(creerMaFonctionAvec(i), 1000); // appel une seconde plus tard
}
// => contenu de la console ?
```

???

On obtient bien 0, 1, 2 dans la console !
En passant i dans l'appel de fonction creerMaFonctionAvec(), sa valeur est stockée dans une nouvelle variable (le paramètre valeurDeI) qui appartient au contexte de cette fonction.
Du coup, quand la fonction retournée par l'appel à creerMaFonctionAvec() est appelée à son tour (au bout d'une seconde), la valeur de i a bien été conservée dans le contexte de sa fonction parente.
=> appeler la fonction creerMaFonctionAvec() 3 fois => génération de trois fonctions ayant le même code, mais un contexte propre. (chaque fonction a une valeurDeI différente).

(utiliser console log dans creerMaFonctionAvec() pour montrer quand elle est appelée, par rapport à la fonction qu'elle retourne)

---
class: center, middle

# Solution 1: regroupement et répétition (2/2)

Génération de fonction pour chaque spoiler:

```js
function creerAfficheurPour(spoiler) {
  return function() {
    spoiler.classList.remove('hidden');
  };
}
// 1. récupérer LES spoilerS
var spoilers = document.getElementsByClassName('spoiler');
for (var i = 0; i < spoilers.length; i++) {
  var spoiler = spoilers[i];
  // 2. camoufler CHAQUE spoiler
  spoiler.classList.add('hidden');
  // 3. afficher CHAQUE spoiler au clic
  spoiler.onclick = creerAfficheurPour(spoiler);
}
```

???

vérifier que ça fonctionne, toujours avec console.log.

---
class: center, middle

# Résumé solution 1

- Problème: intégrer plus d'une instance
- 1. `id` -> `class` => boucle `for()`
- 2. génération de fonction pour conserver la valeur de `i` au moment du clic
- 3. le composant s'intègre automatiquement dès qu'on l'inclue dans la page

=> Comment permettre à l'intégrateur de personnaliser chaque instance du composant ?

???

Exemple: afficher les boutons spoiler de la saison 1 en rouge, et ceux de la saison 2 en bleu.

---
class: center, middle

# Problème: Personnaliser chaque instance

L'intégrateur ne veut pas modifier le code du composant.

=> le composant doit donner plus de contrôle à l'intégrateur

???

Comment faire ça ?

=> en donnant accès à une fonction qui retourne les instances !

---
class: center, middle

# Solution 2: fournir une API (1/6)

*API: fonctions fournies par un programme, pour les autres*

=> Objectif: fournir une fonction qui permettra à l'intégrateur

1. d'intégrer une instance de composant à la demande
2. de personnaliser chaque instance à sa guise

---
class: center, middle

# Solution 2: fournir une API (2/6)

Prototype de la fonction à fournir à l'intégrateur:

```js
function integrerComposant(element, couleur) {
  // TODO: intégrer composant dans element
}
```

=> Que mettre dans notre fonction ?

---
class: center, middle

# Solution 2: fournir une API (3/6)

Reprenons notre composant mono-instance:

```js
// 1. récupérer le spoiler
var spoiler = document.getElementById('spoiler');
// 2. camoufler le spoiler
spoiler.classList.add('hidden');
// 3. afficher le spoiler au clic
spoiler.onclick = function() {
  spoiler.classList.remove('hidden');
};
```

=> Que modifier pour faire usage du paramètres `element` ?

---
class: center, middle

# Solution 2: fournir une API (4/6)

=> plus besoin de chercher l'élément dans le DOM !

```js
// 2. camoufler le spoiler
element.classList.add('hidden');
// 3. afficher le spoiler au clic
element.onclick = function() {
  element.classList.remove('hidden');
};
```

---
class: center, middle

# Solution 2: fournir une API (5/6)

Code du composant:

```js
function integrerComposant(element) {
  // 2. camoufler le spoiler
  element.classList.add('hidden');
  // 3. afficher le spoiler au clic
  element.onclick = function() {
    element.classList.remove('hidden');
  };
}
```

Code de l'intégrateur:

```js
integrerComposant(document.getElementById('spoiler1'));
integrerComposant(document.getElementById('spoiler2'));
```

???

il peut aussi appeler integrerComposant() sur plusieurs éléments, en utilisant une boucle for.

---
class: center, middle

# Solution 2: fournir une API (6/6)

Code du composant, avec personnalisation:

```js
function integrerComposant(element, couleur) {
  element.style.color = couleur;
  element.classList.add('hidden');
  element.onclick = function() {
    element.classList.remove('hidden');
  };
}
```

Code de l'intégrateur, avec personnalisation:

```js
integrerComposant(document.getElementById('spoiler1'), 'red');
integrerComposant(document.getElementById('spoiler2'), 'blue');
```

---
class: center, middle

# Résumé solution 2

- Problème: personnaliser chaque instance
- 1. le composant met à disposition une fonction d'instanciation
- 2. cette fonction peut accepter des paramètres de personnalisation
- 3. le composant s'intègre à la demande: à chaque appel de cette fonction

=> Comment permettre à l'intégrateur de modifier une instance après intégration ?

---
class: center, middle

# Problème

Code de l'intégrateur, avec personnalisation:

```js
integrerComposant(document.getElementById('spoiler1'), 'red');
integrerComposant(document.getElementById('spoiler2'), 'blue');
```

```html
<button id="reveler">Révéler tous les spoilers></button>
```

=> Comment révéler tous les spoilers en un clic ?

???

... c'est un besoin de l'intégrateur, et l'intégrateur ne veut pas ni consulter ni modifier le code du composant.

=> c'est au composant de fournir (et de documenter) un moyen d'intéragir avec les instances, après leur intégration.

---
class: center, middle

# Objectif de l'intégrateur

```js
var spoiler1 = integrerComposant(document.getElementById('spoiler1'), 'red');
var spoiler2 = integrerComposant(document.getElementById('spoiler2'), 'blue');

// révéler les deux spoilers, seulement si l'utilisateur clique sur le bouton
document.getElementById('reveler').onclick = function() {
  spoiler1.reveler();
  spoiler2.reveler();
};
```

=> La fonction `integrerComposant()` doit retourner un objet contenant une fonction `reveler()`.

---
class: center, middle

# Solution: retourner une instance manipulable

Prototype de la fonction à fournir à l'intégrateur:

```js
function integrerComposant(element, couleur) {
  // TODO: intégrer composant dans element
  // TODO: générer l'objet instance et sa fonction reveler()
  return instance;
}
```

=> Comment générer cet objet `instance` ?

---
class: center, middle

# Solution: retourner une instance manipulable

Fonction fournie à l'intégrateur:

```js
function integrerComposant(element, couleur) {
  // TODO: intégrer composant dans element
  // TODO: générer l'objet instance et sa fonction reveler()
  return {
    reveler: function() {
      element.classList.remove('hidden');
    }
  };
}
```

=> Chaque appel à `integrerComposant()` retourne un objet contenant une fonction `reveler()` s'appliquant sur l'`element` fourni en paramètre.

---
class: center, middle

# Solution: retourner une instance manipulable

Fonction fournie à l'intégrateur:

```js
function integrerComposant(element, couleur) {
  // intégrer composant dans element
  element.classList.add('hidden');
  element.onclick = function() {
    element.classList.remove('hidden');
  };
  // générer l'objet instance et sa fonction reveler()
  return {
    reveler: function() {
      element.classList.remove('hidden');
    }
  };
}
```

=> Chaque appel à `integrerComposant()` retourne un objet contenant une fonction `reveler()` s'appliquant sur l'`element` fourni en paramètre.

???

... mais c'est un peu redondant => on a écrit deux fois le code permettant de révéler le spoiler !

---
class: center, middle

# Solution: retourner une instance de classe

Fonction fournie à l'intégrateur:

```js
function integrerComposant(element, couleur) {
  // intégrer composant dans element
  element.classList.add('hidden');
  element.onclick = function() {
    element.classList.remove('hidden');
  };
  // générer l'objet instance et sa fonction reveler()
  return {
    reveler: function() {
      element.classList.remove('hidden');
    }
  };
}
```

=> Chaque appel à `integrerComposant()` retourne un objet contenant une fonction `reveler()` s'appliquant sur l'`element` fourni en paramètre.

???

... mais c'est un peu redondant => on a écrit deux fois le code permettant de révéler le spoiler !

=> on va définir un modèle de composant spoiler avec toutes les actions qu'il sait faire, puis instancier de modèle pour chaque intégration de notre composant.

---
class: center, middle

# POO: Programmation Orientée Objet

- Classe = modèle d'objet
- Instance = objet ayant hérité des propriétés de la Classe
- Méthode = fonction définie dans une classe, applicable à ses instances
- `this` = instance sur laquelle une méthode est en train d'être appelée

---
class: center, middle

# Exemple de classe

- Classe: `InputElement`
  - Propriétés:
    - `value`
    - `onclick`
    - `onchange`
  - Méthodes:
    - `getAttribute()`
- chaque appel à `document.getElementById()` sur un élément `<input>` du DOM retourne l'instance de cette classe correspondant à cet élément.

???

c'est ce qui nous permet de faire: `document.getElementById('mon-champ').value`

(on accède à la propriété `value` de l'instance de classe `InputElement` associée à l'élément `<input id="mon-champ">` de la page, qui est retournée par l'appel de fonction `document.getElementById('mon-champ')`)

---
class: center, middle

# POO appliquée à notre composant

- Classe: `Spoiler`
  - Propriétés:
    - `element` (fourni par l'intégrateur lors de l'instanciation)
  - Méthodes:
    - `reveler()` (permet d'afficher le spoiler de `element`)
- => chaque intégration du composant sera une instance de cette classe
- `this` sera utilisé dans la définition de la méthode `reveler()`, pour s'appliquer sur le bon `element`.

???

en fait, chaque instance de `Spoiler` doit être manipulable en JS un peu comme un champ `<input>`: il doit fournir des propriété et méthodes à l'intégrateur pour cela.

=> comment définir et instancier cette classe en JS ?

---
class: center, middle

# Définir notre classe Spoiler en JS

```js
class Spoiler {

  // définition du constructeur de la classe Spoiler
  constructor(element, couleur) {
    // TODO: intégrer composant dans element
  }

  // définition de la méthode reveler()
  reveler() {
    // TODO: révéler le spoiler de this
  }
}
```

---
class: center, middle

# Instancier notre classe Spoiler en JS

```js
var spoiler = new Spoiler(document.getElementById('spoiler1'), 'red');
```

=> le mot clé `new` appelle le `constructor` de la classe, en lui transmettant les paramètres fournis, puis retourne l'instance contenant la méthode `reveler()`.

---
class: center, middle

# Ajouter la propriété `element` à notre classe

```js
class Spoiler {

  // définition du constructeur de la classe Spoiler
  constructor(element, couleur) {
    this.element = element;
    // TODO: intégrer composant dans element
  }

  // définition de la méthode reveler()
  reveler() {
    // TODO: révéler le spoiler de this
  }
}
```

=> le mot clé `this` fait référence à l'instance créée à chaque instanciation de cette classe. chaque instance aura sa propre valeur de la propriété `element`.

---
class: center, middle

# Camouflage du spoiler + méthode `reveler()`

```js
class Spoiler {

  // définition du constructeur de la classe Spoiler
  constructor(element, couleur) {
    this.element = element;
    this.element.classList.add('hidden');
  }

  // définition de la méthode reveler()
  reveler() {
    this.element.classList.remove('hidden');
  }
}
```

---
class: center, middle

# Révéler au clic (1/2)

```js
class Spoiler {

  // définition du constructeur de la classe Spoiler
  constructor(element, couleur) {
    this.element = element;
    this.element.classList.add('hidden');
    element.onclick = function() {
      this.element.classList.remove('hidden');
    };
  }

  // définition de la méthode reveler()
  reveler() {
    this.element.classList.remove('hidden');
  }
}
```

=> on a introduit de la redondance...

---
class: center, middle

# Révéler au clic (2/2)

```js
class Spoiler {

  // définition du constructeur de la classe Spoiler
  constructor(element, couleur) {
    this.element = element;
    this.element.classList.add('hidden');
    element.onclick = this.reveler.bind(this);
  }

  // définition de la méthode reveler()
  reveler() {
    this.element.classList.remove('hidden');
  }
}
```

=> bind() permet d'assurer que la fonction `this.reveler()` s'appliquera bien sur l'instance en création dans le `constructor`.

???

sinon, `this` risque d'être `null`, vu que la fonction sera appelée directement par le navigateur lors de chaque clic, et que le navigateur n'a pas connaissance de cette classe
