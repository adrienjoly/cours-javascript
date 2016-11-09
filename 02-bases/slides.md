class: center, middle

# JavaScript
## Les Bases 🗿 2/2

???

Avant de commencer, interroger les étudiants sur:
- quels sont les types en Javascript
- comment nommer une variable
- comment créer une variable
- comment afficher la valeur d'une variable depuis la console
- comment changer la valeur d'une variable
- est-ce qu'il est possible de donner une valeur d'un autre type a une variable

---
class: center, middle, dbl-size

# 🎯 Objectifs

- 🤖 Développer un chat-bot simple
- 🌵 Conditions et comparaison de valeurs

---
class: center, middle

## Ex: diagnostic médical

---
class: center
background-image: url(./img/arbre-decision.png)

## 🌵 Arbre de décision

---
class: center, middle, dbl-size

## 🌵 ...en pseudo-code

- `si` *douleur à abdomen*, `alors` **appendicite**
- `ou si` *douleur à la gorge* `et`:
  - `si` *fièvre*, `alors` **rhume**
  - `sinon`, **mal de gorge**
  -
- `ou si`...

---
class: center, middle, dbl-size, dbl-line

## 🌵 ... en JavaScript

```js
if (douleur === 'abdomen') {
    diag = 'appendicite';
}
else if (douleur === 'gorge') {
    if (fievre === true) {
        diag = 'rhume';
    } else {
        diag = 'mal de gorge';
    }
}
```

---
class: center, middle

## 🌵 Condition
## ⇓
## ⚖ Comparer des valeurs

---
class: center, middle, dbl-size

## ⚖ Égalité

- Stricte: `===`
- Laxiste: `==`

--

.red-bg[
## ⚠️ Ne pas confondre avec `=` (📥)
]

---
class: center, middle, dbl-size

## ⚖ Égalité stricte VS laxiste

```js
1 == '1'
1 === '1'
0 == false
0 === false
```

--

.yellow-bg[
## 📌️ Comportement différent sur types avancés 🆎
]

---
class: center, middle, dbl-size

## ⚖ Inégalité stricte VS laxiste

```js
1 != '1'
1 !== '1'
0 != false
0 !== false
```

---
class: center, middle, dbl-size

## ⚖ Autres inégalités

- strictement inférieur: `<`
- strictement supérieur: `>`
- inférieur ou égal: `<=`
- supérieur ou égal: `>=`

---
class: center, middle, dbl-size

## 🌵 Condition en JavaScript

```js
if (expression) {
    //
    // instructions executées
    // si expression == true
    //
} else {
    //
    // instructions exécutées
    // dans le cas contraire
    //
}
```

---
class: center, middle, dbl-size, dbl-line

## 🌵 Exemple de condition

```js
var monNombre = 1, resultat;
if (monNombre === 1) {
    resultat = 'monNombre vaut 1';
} else {
    resultat = 'monNombre ne vaut pas 1';
}
```

⇒ Quelle est la valeur finale de `resultat` ?

---
class: center, middle, dbl-size, dbl-line

## 🌵🌵 Conditions multiples

```js
if (monNombre === 1) {
    resultat = 'monNombre vaut 1';
} else if (monNombre > 1) {
    resultat = 'monNombre est supérieur à 1';
} else {
    resultat = 'monNombre n\'est ni 1, ni >1';
}
```

---
class: center, middle

# 2. Mise en pratique 🏌

---
class: center, middle, dbl-size, dbl-line

## Interagir avec l'utilisateur 👤💬

```js
var sonPrenom = prompt('Quel est ton prénom ?');
alert('Bonjour, ' + sonPrenom + ' ! :-)');
```

---
class: center, middle, dbl-size, dbl-line

## Interagir avec l'utilisateur 👤💬

```js
alert(message);
```

???

`alert()` permet d'afficher un `message`.

---
class: center, middle, dbl-size, dbl-line

## Interagir avec l'utilisateur 👤💬

```js
var reponse = prompt(question);
```

???

- `prompt()` permet d'interroger l'utilisateur
- la saisie est retournée sous forme d'une chaîne de caractères.

---
class: center, middle

## Exercice 1: 🤖💬 Chat-bot bête mais poli

Programme qui dialogue avec l'utilisateur:
- si l'utilisateur saisit `bonjour`, afficher `Bonjour à toi !`;
- si l'utilisateur saisit `tu vas bien ?`, afficher `Bien, et toi ?`;
- sinon, afficher `Désolé, je n'ai pas compris...`.

---
class: center, middle

## Exercice 2: 🤖💬 Chat-bot poli mais pas sympa

Sur la base de l'exercice précédent, dans le cas où l'utilisateur a saisi `bonjour`:
- afficher `Bonjour ! Comment vas-tu ?`,
- inviter l'utilisateur à saisir une deuxième réponse, puis:
  - si l'utilisateur saisit `oui`, afficher `Je suis content pour toi.`;
  - sinon, afficher `Désolé, il faut que je file.`.

---
class: center, middle

## Exercice 3: 🤖💬 Votre propre chat-bot

Produire et rendre deux fichiers:
1. Arbre de 10 questions + réponses associées.
2. Code JavaScript fonctionnel correspondant.

📌 Mots clés: `var`, `if`, `else`, `=`, `===`, `prompt` et `alert`.

---
class: center, middle

## 🏋
## Exercice 3 à rendre en binôme
## via Classroom
## (2 fichiers: votre arbre + code js)
## avant Lundi prochain
## 👋

???

📔✍👣💪 
