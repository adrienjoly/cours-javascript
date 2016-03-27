class: center, middle

# Javascript - TP N
# OAuth/Login
## Identification via plateformes tierces

.col-33pct[&nbsp;]
.col-33pct[
  ![boutons facebook connect et google](./img/buttons.png)
]

---

# Javascript - TP N

- Objectifs:
    + Comprendre le principe d'identification tierce
    + Savoir gérer l'état d'identification d'une app web
    + Savoir intégrer un bouton de login d'une plateforme tierce

--

- Pré-requis:
    + Avoir un compte Google EEMI
    + Savoir définir et appeler des fonctions Javascript
    + Pouvoir faire un `git clone`, et lancer un serveur web local (ex: avec [Python](https://www.python.org/downloads/))
    + Prendre des notes: [support de cours](https://docs.google.com/a/eemi.com/document/d/1_1BMpfy2J2WmvQKwdho0IyAnQPO0H6mxKRSRemctQ2E/edit?usp=sharing)

---

# Programme du TP

- Explication des bases
- Mise en pratique:
    + Ajouter bouton Google Sign-in sur notre app ToDo-list
    + Tester en local, avec la clé fournie
- Exercice:
    + Rendre le login fonctionnel depuis Github Pages
    + Limiter l'accès à certains utilisateurs seulement
    + *Bonus: idem avec Facebook Connect*

---

# Ce que l'utilisateur voit

.center[
  ![screenshot facebook connect](./img/screenshot.jpg)
]

---

# Comment ça marche ?

.center[
  ![diagramme facebook auth flow](./img/diagram.svg)
]

???

as generated from http://bramp.github.io/js-sequence-diagrams/
    App->Facebook: App id + domain
    Facebook->Facebook: Check app
    Facebook->User: Dialog
    User->User: Login
    User->Facebook: Permissions
    Facebook->App: Token + User id + permissions

---

# Comment ça marche ?

.column[
  ![diagramme facebook auth flow](./img/diagram.svg)
]

.column[
- **Domain**: déclaré auprès du tiers
- **App/client id**: "clé" fournie par le tiers
- **Permissions**: droits d'accès accordés à l'app par l'utilisateur
- **Token**: chaine de caractères qui sert de "clé temporaire" pour que l'app échange avec l'API du tiers à propos de l'utilisateur
]

---

# Avant de commencer...

- Mise en pratique (30mn):
    + Ajouter un bouton Google Sign-in sur notre app ToDo-list
    + Tester en local, avec la clé Google `CLIENT_ID` fournie
- Exercice (45mn):
    + Rendre le login fonctionnel depuis Github Pages
    + Limiter l'accès à certains utilisateurs seulement
    + Note: *vous allez devoir créér une clé Google `CLIENT_ID` pour votre propre URL*
- Bonus (45mn):
    + Refaire l'exercice avec un bouton Facebook Connect

.yellow-bg.center[
Conseil: faites un *git commit* à chaque étape pour garder un historique
]

---

# Mise en pratique: Google Sign-in en local (30mn)

1. Cloner localement votre repo `todolist` contenant index.html (cf [TP M](../M/#16))
2. Lancer un serveur web depuis le répertoire `todolist`: `$ python -m SimpleHTTPServer`
  <br>→ Vérifiez que vous accédez bien à votre app depuis [http://localhost:8000](http://localhost:8000)
3. Mettre tout le code Javascript de index.html dans une fonction `startApp()`
  <br>→ Vérifiez que l'app ne s'affiche plus, sauf si vous appelez la fonction.
4. Importer le script `https://apis.google.com/js/platform.js` dans votre page.
5. Ajouter dans le `<head>` de votre page: `<meta name="google-signin-client_id" content="875299489419-hjuipbrf1ar4fnmn6niq5bbvpo44c6kh.apps.googleusercontent.com">`
6. Ajouter dans le `<body>` de votre page:
  <br>`<div class="g-signin2" data-onsuccess="onSignIn"></div>`
7. Ajouter la fonction `onSignIn()` telle que définie sur [cette page](https://developers.google.com/identity/sign-in/web/sign-in#get_profile_information)
8. Faire en sorte que l'app ToDo-list (`startApp()`) ne se lance qu'après l'identification de l'utilisateur

---

# Félicitations !

.pull-right[
  ![congratulations achievement](./img/thumbs-up.jpg)
]

- Grâce à l'intégration du bouton Google Signin, vous venez de restreindre l'accès à votre application ToDo-list. **Bravo !**

- Par contre, vous avez utilisé pour cela une clé `CLIENT_ID` que j'ai **créée pour vous**, et qui ne fonctionne qu'en local.

- Pour que le login de votre application fonctionne **depuis votre propre URL** sur Internet, vous allez devoir la déclarer auprès de Google et configurer votre propre clé `CLIENT_ID`.

.yellow-bg[
- **Avant de continuer**: lancez `git commit -m "login fonctionnel en local"` pour vous permettre de revenir plus tard à cette version de votre code.
]

---

# Exercice: Google Sign-in en ligne (45mn)

1. Se connecter à la [Console Google Developers](https://console.developers.google.com/project/_/apiui/apis/library) avec son compte EEMI
2. Créer un projet `todolist`
3. Cliquer sur "Utiliser les API Google" puis cliquer sur "Identifiants" depuis le menu de gauche
4. Dans l'onglet "OAuth", saisir "ToDo-list" comme nom de projet, puis confirmer.
  <br>Dans l'onglet "Identifiants", cliquer sur "Créer des identifiants", choisir l'option "OAuth"
5. Cocher "Application Web", saisir l'URL github.io de votre app (cf lien ci-dessous) dans "Origines JavaScript autorisées", puis confirmer
6. Dans votre `index.html` remplacer la valeur du meta `google-signin-client_id` par celle fournie par la Console Google Developers.
7. Pousser votre code vers la branche `gh-pages` de votre repository sur Github
  <br>→ Vérifiez que votre bouton Google fonctionne depuis http://USERNAME.github.io/todolist
8. Ajouter un moyen de se déconnecter sur la page, limiter l'accès à votre compte seulement.

???

référence principale:
- https://developers.google.com/identity/sign-in/web/devconsole-project

autres références:
- http://android-developers.blogspot.fr/2016/03/registering-oauth-clients-for-google.html
- https://developers.google.com/+/web/signin/#enable_the_google_api

---

# Félicitations !

.pull-right[
  ![congratulations achievement](./img/thumbs-up.jpg)
]

- Vous êtes maintenant capables de créer des applications web avec login Google !

- Afin d'approfondir le sujet et de vous perfectionner, vous pouvez:
    + activer l'option fournie par Google permettant de limiter votre application aux comptes EEMI seulement;
    + ajouter un bouton Facebook Connect à votre ToDo-list, en vous inspirant des étapes de l'exercice.
