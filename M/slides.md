class: center, middle

# Javascript
# TP M
# Git et Github Pages

---

# Javascript - TP M

- Objectifs:
    + Comprendre à quoi sert Git
    + Savoir cloner un projet Git
    + Savoir contribuer à un projet Git
    + Savoir publier une page web sur Github Pages

--

- Programme:
    + Explication des bases
    + Mise en pratique
    + Explications: De git à Github Pages
    + Exercice: Publier votre app TODO-list

---

# Compétences requises

- Installer le logiciel git sur votre machine

- Savoir manipuler des fichiers depuis un terminal/shell

- Lire documentation et exemples en anglais sur internet

- Prendre des notes: [support de cours](https://docs.google.com/a/eemi.com/document/d/1L5uxOTcHf6QdiGqTQxseO2RdvS78kpXPjxfeC6UiPiQ/edit?usp=sharing)

---

# Point commun ?

.col-33pct[![Linux](./img/linux.jpg)]
.col-33pct[![Frogatto](./img/frogatto.jpg)]
.col-33pct[![Code civil](./img/codecivil.jpg)]

???

Repos:
- [Linux](https://github.com/torvalds/linux)
- [Frogatto & Friends](https://github.com/frogatto/frogatto)
- [Le Code Civil Français](https://github.com/steeve/france.code-civil)
- Autre: https://github.com/vhf/free-programming-books/blob/master/free-programming-books-fr.md
---

.wide[![Linux](./img/linux-code.png)]
.wide[![Frogatto](./img/frogatto-code.png)]
.wide[![Code civil](./img/codecivil-code.png)]

???

Sources:
- [Linux](https://github.com/torvalds/linux/pull/189/commits/cbeb22aa359aeb2114e83d3edf03f89e36ff2a41)
- [Frogatto & Friends](https://github.com/frogatto/frogatto/pull/3/commits/5fac97665843f355616f30f5f2eec8daf55934d4)
- [Le Code Civil Français](https://github.com/steeve/france.code-civil/commit/b805ecf05a86162d149d3d182e04074ecf72c066)

---
class: quote, center, bottom
background-image: url(./img/steeve-morin.jpg)

.blurred-bg[
    ## Git permet non seulement de visionner les sources a un instant T (*snapshot*), mais surtout de visualiser facilement les changements dans ces sources (*commits*).
]

---
class: quote, center, bottom
background-image: url(./img/steeve-morin.jpg)

.blurred-bg[
    # Dans l’analogie du Code Civil, cela permet de tracker très rapidement les changements apportés par une loi.
]

---

# Git, pourquoi faire ?

- Git permet:
    - de collaborer à plusieurs sur un même code source
    - de savoir qui a codé quoi, quand
    - de revenir à une ancienne version du code
    - d'aider à résoudre les modifications conflictuelles

- Git a été conçu pour collaborer sur le noyau open-source de Linux

---

# Git en 4 mots

- **Repository**: espace de stockage du code source: local / remote

- **Commit**: une mise à jour du code source: lignes de code de fichier(s)

- **Index / Staging**: une mise à jour en cours d'assemblage

- **Merge**: combiner des mises à jour

---
background-image: url(./img/git-local-remotes.png)

---

# Mise en pratique (30mn)

0. Installer [`git`](https://git-scm.com/downloads)
1. Cloner le *repo* `https://github.com/adrienjoly/cours-javascript` localement
2. Ouvrir le fichier `README.md` depuis le répertoire local
3. Explorer l'historique du *repository* avec `git log` (<kbd>:q</kbd> pour quitter)
4. Revenir à une version antérieure (*commit*) du repo, avec `git checkout`
5. Afficher le diff: modifications apportées à `README.md` entre ce *commit* et la dernière version
6. Noter vos trouvailles dans le support de cours

---

# De git à Github Pages

- `git` est un outil en ligne de commande
- Github est un site permettant d'héberger ses *repositories* en ligne
- Github permet à plusieurs utilisateurs de collaborer sur un *repo*
- Github Pages permet de publier des pages web hébergées au format HTML dans un repo Github (à condition d'utiliser la branche *gh-pages*)

---

# Exercice 1: Créer un repo git local

1. Initialiser un repo dans un nouveau répertoire local avec `git init`
2. Y copier le fichier `index.html` du TP précédent
3. Vérifier les modifications en cours avec `git status`
4. Intégrer ce fichier à l'index avec `git add`
5. Re-vérifier les modifications en cours avec `git status`
6. Valider et décrire vos modifications avec `git commit`
7. Consulter l'historique avec `git log`

---

# Branches ?

.column[
* Un repo git a une structure de graphe
* Par défaut les commits se succèdent sur la branche `master`
* Une branche se base sur un commit particulier
* Une branche peut être *mergée* dans une autre branche
* Github publie les fichiers HTML depuis la branche `gh-pages`
]

.column[
    ![branches](./img/git-branches.png)
]

---

# Exercice 2: Publier l'app TODO-list

1. Créer un compte sur Github
2. Configurer l'outil `git` pour l'associer avec votre compte
3. Créer un repo public "todolist" sur votre compte Github
4. Importer le code de l'exercice 1 dans votre repo Github avec `git push`
5. Créer une *branche* "gh-pages" avec `git checkout -b`
6. Pousser cette branche vers votre repo Github, avec `git push`
7. Vérifier que votre TODO-list fonctionne depuis `http://<username>.github.io/todolist`
8. Chaque personne de l'équipe va ajouter son nom dans CONTRIBUTORS.md puis pousser
9. Envoyer votre lien github par email, avec votre equipe en copie, avant mardi prochain 8h
