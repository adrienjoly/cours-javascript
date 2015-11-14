# TP B: Validation d’un champs de formulaire texte (conditions et alerts)

### Objectifs

- Modification du code source d'une page web hors du navigateur
- Découverte des formulaires et composants de saisie
- Utilisation des sélécteurs natifs de Javascript
- Utilisation des expressions conditionnelles avec `if`

### Logiciels nécéssaires

- Google Chrome, pour utiliser "DevTools"

### Instructions à suivre

#### Analyse et modification d'un formulaire existant

Dans cette première étape:
- nous allons ouvrir une page web contenant un formulaire, et la télécharger;
- nous allons étudier et ajouter des composants à ce formulaire depuis un éditeur.

1. Ouvrir ce lien dans un nouvel onglet de Google Chrome: [formulaire](http://adrienjoly.com/cours-javascript/B/formulaire)
  - [ ] → une page blanche avec un champ texte doit s'afficher
1. Télécharger le code source intégral de cette page:
  - [ ] ouvrir le menu "Fichier / Enregistrer sous..." (raccourci: <kbd>Cmd</kbd>+<kbd>S</kbd>),
  - [ ] choisir "Site web entier" dans la liste déroullante,
  - [ ] Enregistrer les fichiers sur le bureau.
  - [ ] → Un fichier `formulaire.html` ainsi qu'un réportoire ont du être téléchargés sur le bureau. Le répertoire contient `index.js`.
1. Ouvrir le fichier `formulaire.html` depuis le bureau
  - [ ] en effectuant un glisser-déposer vers la barre d'onglets de Google Chrome.
  - [ ] → Vérifier que la barre d'adresse indique bien un fichier local, commençant par `file://`, et que la page affichée est identique à celle de l'étape 1.
1. Vérifier que la page ne contient aucune erreur Javascript
  - [ ] Pour cela, activer la console Javascript depuis la page `formulaire.html` locale (pour rappel, raccourci: <kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>J</kbd>).
1. Ouvrir et étudier le fichier `formulaire.html` du bureau, en utilisant un éditeur de texte.
  - [ ] → Le code source de la page est consistué d'un formulaire (élément `form`), d'un champ de saisie d'email (élément `input`, avec son libéllé `label` associé), et d'un `script` externe chargé depuis le fichier `index.js`.
1. Ouvrir et étudier le fichier `index.js` (contenu dans le répertoire téléchargé sur le bureau), en utilisant un éditeur de texte.
  - [ ] Le code Javascript chargé par notre page définit une fonction (`function()`) associée à l'évènement `submit` du formulaire défini dans la page. En effet, `document.getElementById()` retourne une référence vers un élément du DOM à partir de son identifiant.
  - [ ] Cherchez et remarquez dans le code source de `formulaire.html` comment a été attribué cet identifiant.
  - [ ] Devinez le comportement que produit la fonction définie dans `index.js`.
  - [ ] Devinez quelle(s) action(s) de l'utilisateur permet de déclancher ce comportement.
  - [ ] → Testez cette/ces action(s), pour vérifier le comportement produit.
1. Tester et observer le fonctionnement du formulaire:
  - [ ] Saisissez une adresse email dans le champ, validez, confirmez.
  - [ ] Observez l'URL obtenue dans la barre d'adresse.
  - [ ] Trouvez à quoi fait référence la partie `adresse-email` de l'URL.
  - [ ] Devinez pourquoi la valeur du champ correspondant s'est retrouvée dans l'URL après avoir validé le formulaire.
1. Automatiser la validation de la saisie de l'utilisateur:
  - [ ] Nous allons définir des conditions dans lesquelles la saisie doit être refusée par le formulaire, en utilisant l'instruction Javascript `if`.
  - [ ] Dans `index.js`, juste en dessous de la première ligne, insérez la ligne suivante: `if(document.getElementById('email-input').value == 'hollande@elysee.fr') { event.preventDefault(); return alert('Vérifiez votre adresse'); }`
  - [ ] → Devinez l'effet de ce code.
  - [ ] → Vérifier votre hypothèse, en testant son véritable effet.
  - [ ] → D'après vous, pourquoi la confirmation n'est-elle pas affichée dans le cas où la condition est remplie ?
1. Comme vous l'aurez compris:
  - [ ] Les commandes contenue dans les accolades '{}' suivant la condition `if(condition)` ne s'exécutent que lorsque la `condition` est remplie.
  - [ ] La commande `return` empêche les commandes suivantes de s'exécuter. En effet, celle-ci interromp l'exécution de la fonction.
1. Egalité VS affectation:
  - [ ] Regardons de plus prêt la définition de notre condition. En particulier, notez l'utilisation de l'opérateur `==` (double-égalité).
  - [ ] Remplacez cet opérateur par `=` (affectation), puis enregistez vos modifications.
  - [ ] Essayez de deviner quel sera l'effet de cette modification.
  - [ ] Rechargez la page, soumettez une adresse email autre que 'hollande@elysee.fr', et observez ce qui se passe.
  - [ ] Devinez pourquoi la valeur du champ a changé.
  - [ ] → L'opérateur `=` est un opérateur d'affectation. Il a affecté la valeur 'hollande@elysee.fr' (définie à droite de l'opérateur) au champ 'email-input' (défini à gauche de l'opérateur).
  - [ ] → Soyez vigilants, pensez à toujours utiliser la double-égalité dans vos conditions! (ou triple-égalité, on expliquera ça plus tard)

- - - - TODO: changer action du formulaire => pointer vers un web service installé dans l'intranet => moyen de vérifier qui a effectué l'exercice?

#### Exercice: Analyse et modification d'un formulaire existant

