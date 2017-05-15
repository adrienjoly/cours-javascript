class: center, middle

# JavaScript
## `Geolocation` et gestion d'erreurs 🌩

---
class: center, middle, dbl-size
# 🎯 Objectif: Localiser l'utilisateur

![composant animation](img/geoloc.gif)

Ingrédients: APIs geoloc et geocoding, gestion d'erreurs

???

but: faire une app comme ça.

problème: ici, on voit le cas où n'y a pas de problème.
mais il faut aussi gérer les cas où ça ne fonctionne pas,
pour informer et aider l'utilisateur.

---
class: center, middle, dbl-size
# 🗒 Plan du TP

- Explication: Gestion d'erreurs
- Pratique: créer app de localisation

---
class: center, middle, dbl-size
# 🌩 Types d'erreurs

![erreur de programmation](img/error-prog.png)

![erreur opérationnelle](img/error-oper.png)

???

Q: difference ?
R: erreurs de prog VS erreurs opérationnelles
1. c'est votre faute, en tant que développeur => il faut corriger
2. c'est pas votre faute => il faut prévoir

Q: autres exemples d'idées ?

---
class: center, middle, dbl-size
# 🌩 Erreurs de programmation

- `SyntaxError`: accolades
- `ReferenceError`: typo ou var. non définie
- `TypeError`: valeur indéfinie ou type non respecté
- ...

## => Corriger et tester

???

Attention, ces erreurs interrompent le programme !
Il faut corriger son code (ex: accolades)
et tester un max de cas limites. (ex: bouton annuler)

---
class: center, middle, dbl-size
# 🌩 Erreurs opérationnelles

- le serveur met trop de temps à répondre (AJAX)
- `JSON.parse()` sur du JSON invalide
- pop-up bloqué par navigateur
- cookies ou géoloc désactivés
- non connecté à internet
- mémoire insuffisante

## => Détecter et gérer les imprévus

???

Certaines de ces erreurs peuvent interrompre le programme.
Il faut les détecter, puis prévenir et/ou aider l'utilisateur.

---
class: center, middle, dbl-size
# 🌩 Intercepter une erreur Synchrone

```js
try {
  var json = JSON.parse('{ JSON invalide }'); // 🌩 
  console.log('résultat:', json);
} catch (error) {
  console.log('une erreur est survenue:', error.message);
}
console.log('cette ligne s\'affichera dans tous les cas.');
```

???

JSON.parse cause une erreur interceptée par le catch() => console.log suivant non executé

Expliquer "synchrone".

---
class: center, middle
# 🌩 Intercepter une erreur Asynchrone

```js
navigator.geolocation.getCurrentPosition(function(pos, error) {
  if (error) {
    alert('une erreur est survenue: ' + error.message);
  } else {
    alert('GPS: ' + pos.coords.latitude + ', ' + pos.coords.longitude);
  }
});
```

???

Q: exemple d'erreur opérationnelle dans ce code ?
R: l'utilisateur n'a pas accepté de partager sa position

---
class: center, middle, dbl-size
# 🌩 Pratique: créer app de localisation

1. Informer l'utilisateur du besoin d'autorisation
2. Détecter coordonnées de l'utilisateur (ou erreurs)
3. Déterminer adresse postale correspondante (ou erreurs)

## 🔥 Simuler les cas d'erreurs, pour tester

BONUS: Ajouter carte.
