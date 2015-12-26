# QCM TP D: Boucles

### Question 1 - la base

```
for(var i = 0; i < 2; i++) {
  alert('boom!');
}
```

Combien de fois l'alerte modale *boom!* va-t-elle être affichée ?

- aucune alerte modale ne va être affichée
- une fois
- deux fois
- trois fois

### Question 2 - avec condition

```
for(var i = 0; i < 2; i++) {
  if (i == 1) {
    alert('boom!');
  }
}
```

Combien de fois l'alerte modale *boom!* va-t-elle être affichée dans ce cas ?

- aucune alerte modale ne va être affichée
- une fois
- deux fois
- trois fois

### Question 3 - initialisation différente

```
for(var i = 1; i < 2; i++) {
  alert('boom!');
}
```

Combien de fois l'alerte modale *boom!* va-t-elle être affichée dans ce cas ?

- aucune alerte modale ne va être affichée
- une fois
- deux fois
- trois fois

### Question 4 - valeur en sortie

```
for(var i = 0; i < 2; i++) {
  alert('boom!');
}
console.log(i);
```

Quelle est la valeur de la variable `i` affichée par `console.log` ?

- 0
- 1
- 2
- 3

### Question 5 - accumulation d'indices

```
var sum = 0;
for(var i = 0; i < 3; i++) {
  sum = sum + i;
}
```

Quelle est la valeur de la variable `sum` après l'exécution de cette boucle ?

- 0
- 1
- 2
- 3
