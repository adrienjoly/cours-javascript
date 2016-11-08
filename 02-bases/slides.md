class: center, middle

# JavaScript
## Les Bases 🗿

---
class: center, middle, dbl-size

# 🎯 Objectifs

- 🗿 Présentation et historique du langage JavaScript
- 🔧 Comment ça fonctionne ?
- 🏌 TP: valeurs, variables, conditions

---
class: center, middle

# 1. Le Langage JavaScript

---
class: center, middle

## Programmation
## =
## Donner des instructions à une machine 🤖

---
class: center, middle

## Programme
## =
## Recette de cuisine 🍳

---
class: center, middle

## `Does not compute`

---
class: center, middle

## JavaScript / ECMAScript

---
class: center, middle
background-image: url(./img/netscape.jpg)

---
class: center, middle
background-image: url(./img/isnotjava.png)

---
class: center, middle

# 2. Comment ça fonctionne ?

---
class: center

## Exécution séquentielle VS interactive ⌨
![calc](./img/apple-calculator-landscape.jpg)

---
class: center
background-image: url(./img/chrome-console.png)

## ⌨ Console JavaScript

---
class: center, middle

## Langage de script
## ⇓
## Faiblement typé

---
class: center, middle

# 3. Valeurs et types 🆎

---
class: center, middle, dbl-size

## 🆎 Types simples

+ nombre
+ booléen: `true`, `false`
+ chaîne de caractères / string: `'coucou'`
+ `null`

---
class: center, middle, dbl-size

## 🆎 Types avancés

+ `undefined`
+ objet: `{ prop: 'valeur' }`
+ tableau / array: `[ 1, 2, 3 ]`
+ fonction: `function(){ /* ... */ }`

---

.center-block.col-50pct[
## 🆎 Exercice: Quel type ?

1) Reconnaissez les types des valeurs ci-dessous.

```js
0
true
2 - 1.2
'hello'
'bonjour' + 4
{ a: 0.4 }
[ 'a', 'b', 'c' ]
```
]

--

.center-block.col-50pct[
2) Vérifiez vos réponses en saisissant ces opérations dans la console, et en utilisant le mot clé `typeof`.
]
--

.center-block.col-50pct[
3) Expliquez le type de la dernière ligne.
]

---
class: center, middle

# 4. 🗳 Variables

---
class: center, middle

## Littéral
## ⇓
## Symbolique 🗳

---
class: center, middle, quote

Soit x=4...

---
class: center, middle, dbl-size

```js
var nombreSaisiParUtilisateur = 4;
```

---
class: middle, dbl-size

.center[
## Affectation 📥
]

```js
var tauxConversion = 1.43;
tauxConversion = 1.47;
```

.center[
⇒ Quelle est la valeur finale de `tauxConversion` ?
]

---

.center-block.col-50pct[
## Exercice: Création de variables 📥

1) Créez les variables suivantes:

- `monNombre` avec une valeur de `4`,
- `maChaine` contenant `'bonjour ! :-)'`,
- `monBooleen` valant `false`,
- `sansValeur` à laquelle vous n'aurez affecté aucune valeur.
]

--

.center-block.col-50pct[
2) Vérifiez que chaque instruction ci-dessous répond `true`:

```js
monNombre === 4;
maChaine === 'bonjour ! :-)';
monBooleen === false;
sansValeur === undefined;
```
]

---
class: center, middle

# 5. Conditions 🌵 et comparaisons ⚖

---
class: center, middle

## Ex: diagnostic médical

---
background-image: url(./img/arbre-decision.png)

---
class: center, middle, dbl-size

## 🌵 Pseudo-code

- `si` *douleur à abdomen*, `alors` **appendicite**
- `ou si` *douleur à la gorge* `et`:
  - `si` *fièvre*, `alors` **rhume**
  - `sinon`, **mal de gorge**
  -
- `ou si`...

---
class: center, middle, dbl-size, dbl-line

## 🌵 Javascript

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
var monNombre = 1;
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

# UN PEU DE PRATIQUE 🏌

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

.margin-20px[
`alert()` permet d'afficher un `message`.
]

---
class: center, middle, dbl-size, dbl-line

## Interagir avec l'utilisateur 👤💬

```js
var reponse = prompt(question);
```

.margin-20px[
- `prompt()` permet d'interroger l'utilisateur

- la saisie est retournée sous forme d'une chaîne de caractères.
]

---
class: center, middle

## Exercice: 🤖💬 Chat-bot bête mais poli

Programme qui dialogue avec l'utilisateur:
- si l'utilisateur saisit `bonjour`, afficher `Bonjour à toi !`;
- si l'utilisateur saisit `tu vas bien ?`, afficher `Bien, et toi ?`;
- sinon, afficher `Désolé, je ne vous ai pas compris...`.

---
class: center, middle

## Exercice: 🤖💬 Chat-bot poli mais pas sympa

Sur la base de l'exercice précédent, dans le cas où l'utilisateur a saisi `bonjour`:
- afficher `Bonjour ! Comment vas-tu ?`,
- inviter l'utilisateur à saisir une deuxième réponse, puis:
  - si l'utilisateur saisit `oui`, afficher `Je suis content pour toi.`;
  - sinon, afficher `Désolé, il faut que je file.`.

---
class: center, middle

## 🏋
## Exercices à rendre individuellement
## via Classroom
## pour la veille du prochain TP
## 👋

???

📔✍👣💪 
