class: center, middle

# JavaScript
## Fonctions

---
class: center, middle, dbl-size

# 🎯 Objectifs

- 👊 Développer le jeu ChiFouMi
- Modulariser son code avec des fonctions






TODO








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

# 👊 ChiFouMi: étapes d'implémentation

1. Dessiner l'arbre de décision d'une manche;
2. Créer les variables `ordi`, `joueur`, `scoreOrdi` et `scoreJoueur`;
3. Transformer l'arbre en conditions `if` imbriquées, utilisant ces trois variables;
3. Chaque condition de dernier niveau peut incrémenter `scoreOrdi`, `scoreJoueur`, ou aucun;
4. Tester que les conditions fonctionnent bien, en affichant les scores résultants de chaque combinaison d'`ordi` et `joueur`;
5. Mettre le code dans une boucle qui s'exécutera trois fois;
6. En fin de partie, afficher qui est le gagnant: `'ordi'` ou `'joueur'`

???

combien de niveaux dans l'arbre? => 2: une pour l'ordi, une pour le joueur

---
class: center, middle

## 🏋
## Exercice ChiFouMi à rendre en binôme
## via Classroom
## (fichier: `chifoumi.js`)
## avant Dimanche, minuit
## 👋
