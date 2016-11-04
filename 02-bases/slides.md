class: center, middle

# JavaScript
## Les Bases

---

# Objectifs

- Présentation et historique du langage JavaScript
- Comment ça fonctionne ?
- TP: valeurs, variables, conditions

---
class: center, middle

# 1. Le Langage JavaScript

---
class: center, middle

## Programmation
## =
## Donner des instructions à une machine

---
class: center, middle

## Programme
## =
## Recette de cuisine

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

## Exécution séquentielle VS interactive
![calc](./img/apple-calculator-landscape.jpg)

---
class: center
background-image: url(./img/chrome-console.png)

## Console JavaScript

---
class: center, middle

## Langage de script
## ⇓
## Faiblement typé

---
class: center, middle

# 3. Valeurs et types

---
class: middle

.center-block.col-50pct[
## Types simples

+ nombre
+ booléen: `true`, `false`
+ chaîne de caractères / string: `'coucou'`
+ `null`
]

---
class: middle

.center-block.col-50pct[
## Types avancés

+ `undefined`
+ objet: `{ prop: 'valeur' }`
+ tableau / array: `[ 1, 2, 3 ]`
+ fonction: `function(){ /* ... */ }`
]

---

.center-block.col-50pct[
## Exercice: Quel type ?

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

# 4. Variables

---
class: center, middle

## Littéral
## ⇓
## Symbolique

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
## Affectation
]

```js
var maVariable = 'mon texte';
maVariable = `mon nouveau texte`;
```

.center[
⇒ Quelle est la valeur finale de `maVariable` ?
]

---

.center-block.col-50pct[
## Exercice: Création de variables

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
