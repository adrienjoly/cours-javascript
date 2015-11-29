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
  - [ ] Enregistrer les fichiers sur le bureau, dans un répertoire appelé `JS-B-0` (que vous allez créer à cette occasion).
  - [ ] → Un fichier `formulaire.html` ainsi qu'un réportoire ont du être téléchargés dans le répertoire `JS-B-0`, sur le bureau. Le fichier `index.js` est contenu dans un sous-repertoire.

1. Ouvrir le fichier `formulaire.html` depuis le bureau
  - [ ] en effectuant un glisser-déposer vers la barre d'onglets de Google Chrome.
  - [ ] → Vérifier que la barre d'adresse indique bien un fichier local, commençant par `file://`, et que la page affichée est identique à celle de l'étape 1.

1. Vérifier que la page ne contient aucune erreur Javascript
  - [ ] Pour cela, activer la console Javascript depuis la page `formulaire.html` locale (pour rappel, raccourci: <kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>J</kbd>).

1. Ouvrir et étudier le fichier `formulaire.html` du bureau, en utilisant un éditeur de texte.
  - [ ] → Le code source de la page est consistué d'un formulaire (élément `form`), d'un champ de saisie d'email (élément `input`, avec son libéllé `label` associé), et d'un `script` externe chargé depuis le fichier `index.js`.

1. Ouvrir et étudier le fichier `index.js` (contenu dans le répertoire téléchargé sur le bureau), en utilisant un éditeur de texte.
  - [ ] Le code Javascript chargé par notre page définit une fonction (`function()`) associée à l'évènement `submit` du formulaire défini dans la page. En effet, `document.getElementById()` retourne une référence vers un élément du DOM à partir de son identifiant, à la manière de la fonction `$` de jQuery que nous avons utilisée lors du TP précédent.
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
  - [ ] → Soyez vigilants, pensez à toujours utiliser la double-égalité dans vos conditions ! (ou triple-égalité, on expliquera ça plus tard)

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
  - [ ] → Nous allons désormais travailler avec les copies de ces fichiers, dans le répertoire `JS-B-1`. (laissez tel-quels les fichiers que nous avons manipulé dans la section précédente, afin de pouvoir les consulter au besoin)

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

### Section 2: Composants de formulaire et saisie de constat amiable

Dans la section précédente, nous avons utilisé un premier type de composant: le champ de saisie textuelle (`type='text'`), puis nous avons créé un programme javascript simple permettant d'effectuer des conversion entre deux composants textuels.

Dans cette deuxième section:
- nous allons prendre connaissance d'autres types de composants de formulaire (cf [liste graphique](http://www.startyourdev.com/html/tag-html-balise-input#table-type))
- nous allons utiliser certains de ces composants pour réaliser une application simple de saisie de constat amiable.

#### Découverte

1. Regardons ensemble les différents [types de composants](http://www.startyourdev.com/html/tag-html-balise-input#table-type) proposés en HTML.

1. Créer un répertoire de travail basé sur le formulaire de la section 1:
  - [ ] Dupliquez le répertoire `JS-B-0` créé dans la section 1 ci-dessus.
  - [ ] Appelez sa copie `JS-B-2`.

1. Ouvrir et tester `/Bureau/JS-B-2/formulaire.html`:
  - [ ] dans votre éditeur de texte;
  - [ ] ...et dans votre navigateur Chrome.
  - [ ] Vérifier que le formulaire vous demande bien de vérifier votre saisie quand vous entrez "hollande@elysee.fr" dans le champ est que vous validez.

1. Ajouter un bouton de soumission de formulaire.
  - [ ] Actuellement, le seul moyen de soumettre notre formulaire -- et donc, exécuter notre fonction Javascript de validation -- est de saisir une adresse email dans le champ puis presser la touche <kbd>Entrée</kbd>.
  - [ ] Dans `formulaire.html`, ajouter le code HTML permettant d'afficher un bouton en dessous du champ de saisie de l'adresse email.
  - [ ] Comme indiqué dans la liste des composants fournie plus haut, le code à ajouter est donc `<input type="button" value="Clic !" />`. (peu importe la valeur de l'attribut `value`)
  - [ ] → Enregistez, rechargez, puis vérifiez que le bouton s'affiche bien. Par contre, vous constaterez que rien ne se passe quand on clique sur ce bouton.
  - [ ] Le composant de type `button` n'a pas de comportement prédéfini. Nous allons utiliser le type `submit` pour indiquer au navigateur que ce bouton doit désormais soumettre le formulaire.
  - [ ] → Enregistez, rechargez, puis vérifiez que le formulaire est bien soumis lorsque vous cliquez sur le bouton.

1. Ajouter une case à cocher, identifiée `majeur`.
  - [ ] Déterminer quelle valeur donner à l'attribut `type` de l'élément `<input>` correspondant.
  - [ ] Insérer le code HTML permettant d'ajouter la case à cocher dans `formulaire.html`, sans afficher de texte (libéllé) pour l'instant.
  - [ ] Enregistez, rechargez la page dans Chrome pour vérifier que la case à cocher s'affiche bien.
  - [ ] Toujours dans le même fichier, donner la valeur `majeur` à l'attribut `id` dans le code de l'élément HTML de cette case à cocher.

1. Tester la case à cocher.
  - [ ] Pour tester que notre case à cochée est accessible depuis du code Javascript, nous allons saisir ceci dans la console: `document.getElementById('majeur')`
  - [ ] → L'élément correspondant doit être retourné par la console. Sinon, vérifiez que vous avez bien pensé à ajouter `id='majeur'` dans le code HTML, à avoir enregistré vos modifications, puis à rafraichir la page dans Chrome.
  - [ ] Pour tester que l'état de notre case à cochée peut être lu depuis du code Javascript, cochez-la, puis tapez ceci dans la console: `document.getElementById('majeur').checked`
  - [ ] → Cette commande devrait renvoyer `true` lorsque la case est cochée.

1. Ajouter un libéllé (`<label>`) à la case à cocher.
  - [ ] Ajouter le code HTML correspondant dans `formulaire.html`.
  - [ ] Faire en sorte que ce libéllé affiche "Permis B valide".
  - [ ] → Tester dans le navigateur et s'assurer que la case associée se coche bien lorsqu'on clique sur le libéllé.
  - [ ] Indice: s'inspirer du code HTML fourni dans la référence des [types de composants](http://www.startyourdev.com/html/tag-html-balise-input#table-type).

1. Condition: le conducteur doit être majeur.
  - [ ] Afin que le conducteur qui remplit le constat amiable puisse être couvert par son assurance, il faut qu'il soit majeur.
  - [ ] Nous allons automatiser cette vérification dans notre programme Javascript à l'aide d'une condition `if`.
  - [ ] Dans le fichier `index.js` associé à `formulaire.html`, insérer la ligne suivante juste avant la condition de validation de `email-input`: `if(document.getElementById('majeur').checked == false) { event.preventDefault(); return alert('le conducteur ne sera pas couvert') }`.
  - [ ] → Enregistez, rechargez, puis vérifiez que vous obtenez bien une alerte modale lorsque vous validez sans avoir coché la case.

Notre formulaire de saisie de constat amiable contient maintenant trois types de composants différents: un champ email, une case à cocher, et un bouton de soumission de formulaire.

#### Exercice 2:

Pour commencer cette deuxième section, nous avons ajouté deux types de composants à notre formulaire.

Dans cet exercice, vous allez en ajouter encore deux autres:
- un champ de saisie de date,
- et deux boutons "radio".

Chaque composant sera associé à du code de validation en Javascript.

Le but du formulaire est d'obtenir rapidement un premier diagnostic d'un accident automobile, sur la base des informations de constat amiables saisies. Le code Javascript associé à ce formulaire permet à la fois:
- que chaque champ a été rempli de manière valide par l'utilisateur,
- et de déterminer si le déclarant sera remboursé ou pas, en fonction des éléments saisis, et d'une liste de règles simples.

Règles: pour que le déclarant soit remboursé par l'assurance, il doit valider tous les critères suivants:
- avoir fourni une adresse email valide; (*déjà implémenté*)
- avoir fourni une adresse email autre que "hollande@elysee.fr"; (*déjà implémenté*)
- être majeur; (*déjà implémenté*)
- avoir déclaré que son véhicule se trouvait devant celui avec lequel la collision a eu lieu; (*à implémenter*)
- et avoir déclaré que l'accident a eu lieu à la date d'aujourd'hui, ou à une date antérieure. (*à implémenter*)

Après soumission du formulaire, la page doit afficher une alerte modale disant "Vous allez être couvert", "Vous n'allez pas être couvert car ..." (en remplaçant les points de suspension par la cause de non-converture, en vertu des règles listées ci-dessus), ou un affichant un message aidant l'utilisateur à rendre sa saisie valide (ex: "Merci de cocher au moins une option").

Cette fois-ci, vous serez moins guidés que dans les exercices précédents. Appuyez-vous un maximum sur la référence des types de composants fournie plus haut, et posez-moi vos questions si vous êtes bloqué(e), ou si vous ne comprenez pas.

Marche à suivre pour réaliser l'exercice:

0. Faire une sauvegarde du répertoire `JS-B-2`, à garder de côté au cas où, car vous allez continuer de travailler sur ce même répertoire.
1. Ajouter une liste à choix unique parmi deux options: "Je circulais devant l'autre véhicule" et "Je circulais derrière l'autre véhicule".
  - [ ] Insérez deux "radio buttons" dans le code HTML du formulaire.
  - [ ] Faites en sorte que l'utilisateur ne puisse choisir qu'une seule option parmi les deux.
  - [ ] Affichez un message d'erreur si l'utilisateur n'a pas choisi d'option avant de soumettre le formulaire.
2. Ajouter le champ de saisie de date de l'accident.
  - [ ] Insérez un élément `<input>` de `type` `date`.
  - [ ] Affichez un message d'erreur dans le cas où la date saisie serait postérieure à celle d'aujourd'hui.
  - [ ] Avant de demander comment effectuer cette condition, cherchez des réponses en tapant "javascript validate html date in past" sur Google. Sachez que le site stackoverflow.com classe les meilleures solutions par qualité décroissante.
3. Faire en sorte que le message "Vous allez être couvert" soit affiché si et seulement si la saisie est valide et les règles/critères fournies ci-dessus ont été validées.
4. Tester tous les cas possibles pour assurer que le formulaire donne toujours un diagnostic correct, en vertu des règles/critères fournies ci-dessus.

#### Exercice 3

Améliorer la lisibilité du formulaire en ajoutant:
- un titre "Diagnostic de constat amiable" en haut de page;
- des sauts de ligne ('<br>') et/ou paragraphes ('<p>') entre les composants;
- un sous-titre pour chaque champ à remplir.

#### Exercice 4

Dans la plupart des applications en ligne, les données saisies par l'utilisateur dans un formulaire sont envoyées sur le serveur web de l'application afin d'être traitées. Exemple: login, création de compte, réponse sur un forum, etc...

Pour l'instant nous n'avons pas spécifié de serveur, donc le navigateur se contente de rafrichir la page en inclurant les données sous forme de paramêtres, directement dans l'URL de la page.

En l'absence de serveur vers lequel soumettre notre formulaire, nous pouvons utiliser celui de [httpbin](https://httpbin.org/). Cet outil en ligne permet de visualiser quelles sont les données envoyées lors qu'on soumet un formulaire HTML. C'est donc très pratique pour tester les formulaires, mais aussi pour mieux comprendre comment ils fonctionnent.

Observer et compléter les informations envoyées lorsqu'on soumet notre formulaire. Pour cela:
- Ajouter l'attribut `action="https://httpbin.org/get"` dans le code HTML de l'élement `<form>`.
- Enregistrer, rafraichir la page, saisir et soumettre le formulaire.
- Faire en sorte que la valeur de tous les champs du formulaires soient inclus sur cette page.
