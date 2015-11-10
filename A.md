# TP A: Hacker google.com avec Chrome Dev Tools (DOM et events)

### Objectifs

- Explorer et manipuler le DOM d'une page web depuis Chrome Dev Tools
- Modifier le DOM de manière programmative, à l'aide de handlers Javascript

### Logiciels nécéssaires

- google chrome, avec chrome dev tools

### Instructions à suivre

#### Modifier les résultats

Dans cette première étape:
- nous allons explorer le DOM d'une page de résultats Google, grâce à Chrome DevTools;
- nous allons utiliser la console Javascript pour séléctionner les éléments de notre choix;
- puis nous allons modifier un de ces éléments, toujours en saisissant des instructions Javascript.

1. Ouvrir Google Chrome
1. Aller sur [google.com](http://google.com)
1. Soumettre une requête (ex: Lundi) => la page de résultats s'ouvre
1. Clic-droit sur le lien du 1er résultat, puis choisir "Inspecter" => l'élément correspondant est mis en surbrillance dans le DOM de la page. Quel est le type de cet élément ?
1. Conseil: ajuster l'affichage de DevTools pour qu'il prenne la moitié de l'écran. (pour confort)
1. Activer la console Javascript, en cliquant sur l'onglet "Console" (raccourci: Commande+Alt+J)
1. Injecter jQuery dans la console, en faisant un copier-coller du code suivant: `var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);` => un élément `<script>` doit s'afficher dans la console.
1. Nous allons lister les résultats de la recherche, à l'aide de code. Pour cela, saisir `$('h3')`. => En passant la souris sur les résultats, ils doivent être mis en surbrillance dans la page de résultats de Google.
1. Nous allons observer le 1er résultat. Pour cela, saisir `$('h3')[0]` puis développer l'affichage de l'élément résultant, en cliquant sur la petite flèche grise. => On remarque que l'élément `h3` contient un élément `a`. `[0]` signifie: *renvoyer le 1er résultat de `$('h3')`*, sachant que Javascript numérote à partir de 0.
1. Développer l'affichage de cet élément `a`, en cliquant sur sa petite flèche grise. => On retrouve le titre du résultat Google, comme texte de l'élément `a`.
1. Nous allons accéder directement à l'élément `a`. Pour cela, saisir `$('h3 a')[0]`. => Plus besoin de cliquer de flèche, cette commande permet d'accéder au premier l'élément `a` contenu dans un élément `h3`.
1. Pour extraire directement le titre du résultat, saisir `$('h3 a')[0].innerText`. => Seul le titre du résultat Google s'affiche dans la console. En effet, `innerText` est une propriété permettant de retourner le texte contenu dans l'élément sur lequel on l'applique.
1. On va modifier le titre de ce résultat en modifiant la valeur de cette propriété. Saisir `$('h3 a')[0].innerText = 'Pirate';` => Le titre a été modifié sur la page de résultats Google. Nous venons d'effectuer une modification du DOM de la page, à l'aide de code Javascript!

NB: Si vous changez de page, le contexte de votre console Javascript sera perdu. Dans ce cas, il faudra penser à ré-injecter jQuery (étape 7) avant de re-saisir les instructions fournies ci-dessus.

Pro-tip: Depuis l'invite de la console Javascript, vous pouvez utiliser les flèches haut et bas pour ré-éxecuter les instructions que vous avez saisies plutôt, afin de vous éviter à les saisir à nouveau.

#### Exercice: changer la page de destination du premier résultat de recherche

Nous avons vu comment séléctionner et modifier le contenu d'un élément du DOM: le lien du premier résultat de recherche.

Dans ce premier exercice, vous allez modifier la page de destination associée à ce lien.

Cette fois, aucune instruction Javascript complète ne sera fournie, seulement une marche à suivre et quelques indices pour vous aider à chaque étape:

1. Tout d'abord, affichez à nouveau l'élément `a` correspondant au 1er résultat de recherche, en utilisant la console Javascript.
1. En observant la définition de cet élément, déterminer le nom de l'attribut qui contient l'URL de la page web associée à ce résultat. Vérifiez-en la valeur en saisissant `$('h3 a')[0].getAttribute('ATTR')` (remplacez `ATTR` par le nom de l'attribut en question).
1. Modifiez la valeur de cet attribut, pour qu'il contienne `javascript:alert('bravo!');`. Pour cela, utilisez la fonction `$('h3 a')[0].setAttribute('ATTR', 'VALEUR')` (remplacez `ATTR` par le nom de l'attribut en question, et `VALEUR` par la nouvelle valeur que vous voulez lui attribuer).
1. Cliquez sur le lien. Si vous n'obtenez pas une alerte modale, vous avez du vous tromper dans une des étapes. Essayez autrement.
1. Si après plusieurs essais, vous n'y parvenez toujours pas, sachez que le nom de l'attribut à modifier est `href`.

#### Modifier la destination des résultats

Dans l'étape précédente, nous avons vu comment séléctionner un élément du DOM, en utilisant la fonction `$()`, un selecteur d'éléments imbriqués, et un opérateur `[]` permettant de récupérer un des éléments retournés (le premier, numéroté `0` en Javascript). Puis nous avons utilisé la propriété `innerText` de notre élément, pour en changer le titre, tel qu'affiché sur la page de résultats Google.

Par contre, même si nous avons changé le titre du 1er lien, celui-ci pointe toujours vers la même page web.

Dans cette deuxième étape, nous allons utiliser Javascript pour:
- découvrir quelques évènements associés à nos résultats Google;
- modifier le comportement de la page lorsque l'utilisateur clique sur ces liens.

1. Toujours depuis la console Javascript de notre page de résultats Google, saisir à nouveau `$('h3 a')[0]`. => L'élément du premier résultat est retourné dans la console.
1. Avec l'aide du DOM et de Javascript, il est possible de d'intercepter certaines actions de l'utilisateur, et de définir un comportement à adopter. En guise d'exemple, nous allons modifier le comportement de notre page Google lorsque l'utilisateur clique sur le 1er résultat de recherche. Pour commencer nous allons empêcher le lien de s'ouvrir. Pour cela, saisir `$('h3 a')[0].onclick = function(evt){ evt.preventDefault(); }`. => Cliquez sur le lien du 1er résultat de recherche, rien ne se passe! C'est normal: nous avons intercepté l'évènement `click` sur l'élément correspondant au premier résultat de recherche, et lui avons affecté un nouveau comportement: une fonction (`function(){}`)qui empêche le lien de changer de page (`preventDefault()`). Nous expliquerons le role d'`evt` dans un prochain cours.
1. Nous savons à présent comment modifier le comportement d'un élément lorsque l'utilisateur clique dessus, et en particulier, empêcher un lien de causer un changement de page. Maintenant, nous dire au navigateur d'afficher un message quand cet évènement ce produit. Nous allons donc affecter une nouvelle fonction à cet évènement. Pour cela, saisir `$('h3 a')[0].onclick = function(evt){ evt.preventDefault(); alert('Non merci.') }`. => Cliquez sur le lien du 1er résultat de recherche, une alerte modale doit s'afficher. On l'appelle modale car elle empêche l'utilisateur de faire quoi que ce soit avant d'y avoir répondu.

#### Exercice: afficher un message avant de changer de page

Dans la première étape, nous avons appris à séléctionner et modifier les données d'un élément du DOM.
Dans la seconde étape, nous avons appris à définir un comportement particulier lorsque l'utilisateur clique sur un élément.

Dans cet exercice, nous allons combiner ces deux techniques afin qu'un message soit affiché lorsque l'utilisateur clique sur le deuxième résultat de recherche, avant d'être amené sur la page correspondant à ce résultat.

Comme pour le 1er exercice, aucune instruction Javascript complète ne sera fournie, seulement une marche à suivre et quelques indices pour vous aider à chaque étape:

1. Depuis la console Javascript de votre page de résultats Google, affichez la définition de l'élément `a` correpondant au deuxième résultat de recherche.
1. Ceci étant fait, modifiez le comportement du clic sur cet élément, en y affectant une fonction empêchant la page de destination de s'ouvrir.
1. Toujours pour l'évènement de clic sur ce même élément, affecter une nouvelle fonction qui affiche une alerte modale, mais n'empêche pas la page de destination de s'ouvrir. A noter que ce comportement remplacera le comportement défini à l'étape précédente.
1. Si le comportement a été correctement défini et associé à l'élément `a` correspondant au 2ème résultat de recherche, un clic sur celui-ci devrait provoquer l'affichage de l'alerte modale, puis donner accès à la page prévue après validation.
