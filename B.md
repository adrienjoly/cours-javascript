# TP B: Validation d’un champs de formulaire texte (conditions et alerts)

### Objectifs

- Modification du code source d'une page web hors du navigateur
- Découverte des formulaires et composants de saisie
- Utilisation des sélécteurs natifs de Javascript
- Utilisation des expressions conditionnelles avec `if`

### Logiciels nécéssaires

- Google Chrome DevTools

### Section 1: Analyse et modification d'un formulaire existant

Dans cette première section:
- nous allons ouvrir une page web contenant un formulaire, et la télécharger;
- nous allons étudier et ajouter des composants à ce formulaire depuis un éditeur.

#### Découverte

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

#### Exercice 1: Conversion de devises

Pour tester votre compréhension de l'interaction avec les formulaires en javascript, et de la différence entre affectation de valeur et condition d'égalité, vous allez développer un formulaire de conversion de devises.

Ce formulaire consistera en trois composants:
- un champ de saisie de valeur en Euros,
- un champ de saisie de valeur en Dollars Américains,
- et un champ caché permettant de définir le taux de conversion entre ces deux devises.

Pour commencer, l'utilisateur pourra seulement obtenir la conversion d'Euros en Dollars. Nous ajouterons ensuite un moyen d'effectuer la conversion inverse.

Voici les étapes qui vous permettront de développer et faire fonctionner ce formulaire:

1. Sur le bureau de votre poste de travail, créez un répertoire appelé "JS-B-1".

1. Dans ce répertoire, copiez les fichiers `formulaire.html` et `index.js`.
  - [ ] → Nous allons désormais travailler avec les copies de ces fichiers, dans le répertoire "JS-B-1". (laissez tel-quels les fichiers que nous avons manipulé dans la section précédente, afin de pouvoir les consulter au besoin)

1. Pour commencer, nous allons remplacer le champ de saisie d'email par celui permettant de saisir une valeur en Euros:
  - [ ] Ouvrez `formulaire.html` dans votre éditeur de texte.
  - [ ] Supprimez l'attribut `name` du champs de saisie `adresse-email` (il ne sera pas utile pour l'instant).
  - [ ] Donnez la valeur `text` à l'attribut `type`.
  - [ ] Renommez la valeur de l'identifiant `email-input` en `euros-input`.
  - [ ] Pensez aussi à mettre à jour le texte du libéllé `label` associé.
  - [ ] Ouvrez `formulaire.html` dans Google Chrome. Ignorez les erreurs affichées dans la console, à ce stade.
  - [ ] Vérifiez que votre champs et son libéllé s'affichent bien.

1. Avant d'implémenter le reste du formulaire, nous allons tester l'accessibilité de notre champ depuis le code Javascript rattaché à notre formulaire:
  - [ ] Toujours dans `formulaire.html`, changez l'URL du script `index.js` afin que notre formulaire puisse trouver charger ce fichier sans provoquer d'erreur dans la console de Chrome.
  - [ ] Ouvrez `index.js` dans votre éditeur de texte.
  - [ ] Effacez tout le code défini dans le corps de la fonction (entre les accollades `{}`).
  - [ ] Rechargez le formulaire dans Chrome → Il ne devrait plus y avoir d'erreur dans la console.
  - [ ] Dans le corps de la fonction `onsubmit`, faites en sorte que la valeur entrée par l'utilisateur dans le champ "Euros" soit affichée dans une alerte modale, lorsque celui-ci valide sa saisie avec <kbd>Entrée</kbd>.
  - [ ] Pour rappel: vous aurez probablement besoin d'utiliser l'instuction `alert` et la fonction 'getElementById()'.
  - [ ] Rechargez le formulaire dans Chrome et testez le bon fonctionnement de ce comportement. Si besoin, corrigez votre code avant de passer à l'étape suivante.

1. Afficher le résultat de la conversion dans le formulaire:
  - [ ] Ajoutez le second champ de saisie (Dollars) et son `label`.
  - [ ] Modifiez le code Javascript de manière à ce que la valeur entrée par l'utilisateur dans le champ "Euros" soit copiée dans le champ "Dollars" que vous venez de créer, au lieu d'afficher une alerte modale.
  - [ ] Indice: il va falloir utiliser l'opérateur d'affectation.
  - [ ] Indice: pensez à empêcher la soumission effective du formulaire. (rappel: `event.preventDefault()`)
  - [ ] Rechargez et testez dans le navigateur, puis corrigez si besoin, jusqu'à y parvenir.
  - [ ] Cherchez sur Internet combien vaut actuellement 1 Euro, en Dollars Américains.
  - [ ] Modifiez le code Javascript de manière à ce que la valeur affectée dans le champ "Dollars" applique ce taux de conversion depuis la valeur saisie en Euros.
  - [ ] Indice: utilisez l'opérateur de multiplication "*".
  - [ ] Indice: en Javascript, les nombre décimaux s'écrivent avec un point, et non une virgule.
  - [ ] Rechargez et testez le formulaire dans le navigateur, puis corrigez si besoin.

1. Rendre le taux plus facilement paramétrable:
  - [ ] Afin de faciliter la modification ultérieure de paramètres utilisés par un programme, il ne faut jamais inclure directement la valeur d'un paramètre dans le code. C'est pourquoi nous allons *sortir* le taux de conversion de notre code Javascript, pour l'intégrer dans notre formulaire HTML.
  - [ ] Dans `formulaire.html`, ajoutez un champ de type `hidden`.
  - [ ] Donnez-lui `taux` comme valeur d'identifiant (attribut `id`, pour rappel).
  - [ ] Dans `index.js`, remplacez le taux par du code permettant de récupérer la valeur du champ `taux`.
  - [ ] → La valeur du taux de conversion ne doit plus apparaitre dans `index.js`.
  - [ ] Rechargez et testez le formulaire dans le navigateur, puis corrigez si besoin.

1. Félicitations ! Vous avez réussi à développer une application Javascript utile et fonctionelle, basée sur un formulaire HTML ! :-)

### Section 2: Composants de formulaire

Dans la section précédente, nous avons utilisé un premier type de composant: le champ de saisie textuelle (`type='text'`), puis nous avons créé un programme javascript simple permettant d'effectuer des conversion entre deux composants textuels.

Dans cette deuxième section:
- nous allons prendre connaissance d'autres types de composants de formulaire (cf [liste graphique](http://www.startyourdev.com/html/tag-html-balise-input#table-type))
- nous allons utiliser certains de ces composants pour réaliser une application simple de saisie de constat amiable.

#### Découverte

1. 

#### Exercice 2:



- - - - TODO: changer action du formulaire => pointer vers un web service installé dans l'intranet => moyen de vérifier qui a effectué l'exercice?


### Bonus


#### Exercice Bonus #1: 

#### Exercice Bonus #2: 

#### Exercice Bonus #3: 

Ceux qui auront réussi les exercices bonus sont invités à me contacter pour que je vérifie leur solution, et la corrige si besoin.
