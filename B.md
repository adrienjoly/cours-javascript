# TP B: Validation d’un champs de formulaire texte (conditions et alerts)

### Objectifs

- Modification du code source d'une page web hors du navigateur
- Découverte des formulaires et composants de saisie
- Utilisation des sélécteurs natifs de Javascript
- Utilisation des expressions conditionnelles avec `if`

### Logiciels nécéssaires

- google chrome, avec chrome dev tools

### Instructions à suivre

#### Analyse et modification d'un formulaire existant

Dans cette première étape:
- nous allons ouvrir une page web contenant un formulaire, et la télécharger;
- nous allons étudier et ajouter des composants à ce formulaire depuis un éditeur.

1. Ouvrir ce lien dans un nouvel onglet de Google Chrome: [formulaire](http://adrienjoly.com/cours-javascript/B/formulaire)
  - [ ] une page blanche avec un champ texte doit s'afficher
1. Télécharger le code source intégral de cette page en:
  - [ ] utilisant le menu "Fichier / Enregistrer sous..." (raccourci: <kbd>Cmd</kbd>+<kbd>S</kbd>),
  - [ ] puis en choisissant "Site web entier" dans la liste déroullante.
  - [ ] Enregistrer les fichiers sur le bureau.
  - [ ] → Un fichier `index.html` ainsi qu'un réportoire ont du être téléchargés sur le bureau. Le répertoire contient `index.js`.
1. Ouvrir le fichier `index.html` depuis le bureau, en effectuant un glisser-déposer vers la barre d'onglets de Google Chrome. => Vérifier que la barre d'adresse indique bien un fichier local, commençant par `file://`, et que la page affichée est identique à celle de l'étape 1.
1. Depuis cette page, activer la console Javascript (pour rappel, raccourci: <kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>J</kbd>) pour vérifier qu'elle ne contient aucune erreur.
1. Ouvrir le fichier `index.html` du bureau, dans un éditeur de texte. => Le code source de la page est consistué d'un formulaire (élément `form`), d'un champ de saisie d'email (élément `input`, avec son libéllé `label` associé), et d'un `script` externe chargé depuis le fichier `index.js`.
1. Ouvrir le fichier `index.js` contenu dans le répertoire téléchargé sur le bureau, dans l'éditeur de texte. => Le code Javascript chargé par notre page définit une fonction (`function()`) associée à l'évènement `submit` du formulaire défini dans la page. En effet, `document.getElementById()` retourne une référence vers un élément du DOM à partir de son identifiant.
1. Cherchez et remarquez dans le code source d'`index.html` comment a été attribué cet identifiant.
1. Lisez la fonction définie dans `index.js` => devinez puis testez le comportement qu'elle produit, et quelle action de l'utilisateur permet de la déclancher.
1. Saisissez une adresse email dans le champ, validez, confirmez, puis observez l'URL obtenue dans la barre d'adresse. => Trouvez d'où vient la partie `adresse-email`, et devinez pourquoi la valeur du champ correspondant s'est retrouvée dans l'URL après avoir validé le formulaire.
1. Nous allons maintenant automatiser la validation de la saisie de l'utilisateur. Pour cela, nous allons définir dans le code Javascript des conditions dans lesquelles la saisie doit être refusée, en utilisant l'instruction `if`. Dans `index.js`, juste avant le `return`, ajoutez la ligne suivante: `if(document.getElementById('email-input').value == 'hollande@elysee.fr') return alert('Vérifiez votre adresse');` => Devinez puis testez l'effet de ce code. D'après vous, pourquoi la confirmation n'est-elle pas affichée dans le cas où la condition est remplie ?
1. Comme vous l'aurez compris, la commande suivant la condition `if(condition)` ne s'exécute que lorsque la `condition` est remplie. Et la commande `return` empêche les commandes suivantes de s'exécuter.
1. Regardons de plus prêt la définition de notre condition. En particulier, notez l'utilisation de l'opérateur `==`. Remplacez-le par `=`, rechargez la page, puis testez-la à nouveau. => 

- - - - TODO: changer action du formulaire => pointer vers un web service installé dans l'intranet => moyen de vérifier qui a effectué l'exercice?

#### Exercice: Analyse et modification d'un formulaire existant

