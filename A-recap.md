# Récapitulatif des TPs A, B et C (DOM, variables, formulaires, fonctions et events)

### Introduction au Javascript

- Javascript est un langage de programmation. C'est le seul qui soit exécutable en standard sur la plupart des navigateurs web.
- Javascript n'a rien à voir avec le langage Java.
- Comme en maths, et dans tous les autres langages de programmation: quand on mentionne le nom d'une variable, elle peut être remplacée par sa valeur. Exemple:

```
2 + 4; // => résultat: 6
var a = 2;
a + 4; // => résultat: 6 (car équivaut à 2 + 4, en replaçant a par 2)
a = 1; // on change la valeur de la variable a
a + 4; // => résultat: 5 (car a vaut 1, à l'instant t)
```

- En Javascript, une valeur peut être de différents types:
  - Chaine de caractères (string), ex: `'Bonjour !'` ou `"Bonjour!"`
  - Numérique, ex: `0.45`
  - Fonction, ex: `function(parametre1, parametre2){ /* corps */ }` (à noter que, similairement à une variable, l'appel d'une fonction retourne une valeur)
  - Une valeur nulle (`null`) ou indéfinie (`undefined`)

- En Javascript, chaque instruction se termine par un `;`
- En Javascript, on groupe plusieurs instructions entre accolades `{}`
- En Javascript, l'opérateur `=` sert à **affecter** une valeur à une variable, ex:

```
var ma_variable = nouvelle_valeur; // => ma_variable est modifiée
```

- En Javascript, l'opérateur `==` sert à **comparer** deux valeurs, au même titre que les opérateurs `<` et `>`, ex:

```
1 == 2; // => false
1 == 1; // => true
1 < 1;  // => false
1 < 2;  // => true
```

- En Javascript, l'opérateur `!=` (*différent de*) est l'inverse de `==`, ex:

```
1 != 2; // => true
1 != 1; // => false
```

- En Javascript, il est possible d'inclure des commentaires dans le code:

```
// Cette ligne contient seulement un commentaire
var a = 1; // la valeur 1 est attribuée à la variable a
/*
a = 2; // cette instruction ne s'éxécutera pas
a = 3; // celle-ci non plus
*/
a = 4; // a vaut désormais 4
```

### Javascript et le DOM

- Quand on va sur un site web, le serveur de ce site envoie une page HTML, ainsi que d'autres ressources nécéssaires pour afficher la page dans le navigateur du visiteur.
- Le code HTML de la page est chargé dans la mémoire du navigateur, sous forme d'un arbre d'éléments: le DOM. (Document Object Model)


![Schema](http://adrienjoly.com/cours-javascript/A/schema.png)


- Contrairement au code HTML envoyé par le serveur, le DOM est vivant: il peut être modifié par le code Javascript livré avec la page.
- Le DOM peut aussi être modifié par du code Javascript saisi par un développeur, depuis la console du navigateur.
- La console est un moyen de "dialoguer" avec le DOM de la page web ouverte, en utilisant des instructions Javascript.
- Sur Google Chrome, Dev Tools est le nom de l'outil qui regroupe notamment un éditeur de DOM et une console Javascript.

### Rappel sur HTML

- Un élément HTML (aussi appelé balise) est composé d'un type, d'attributs (optionnels), et d'un contenu (optionnel).
- Le contenu d'un élément HTML peut être constitué de texte et/ou d'autre éléments.

Forme d'un élément:

    <type attribut_1="valeur_attribut_1"> contenu </type>


### Éléments HTML incontournables

    <h1>Titre de niveau 1</h1>
    <h2>Titre de niveau 2</h2>
    <p>Paragraphe</p>
    <a href="http://destination.du/lien">Titre du lien</a>

### Exemple de page HTML

    <a id="home-link" href="http://google.com">Home</a>
    <h3>
        <a href="http://destination.du/lien">Mon site</a>
    </h3>
    <h3>
        <a href="http://destination.du/lien2">Mon autre site</a>
    </h3>

### Sélection d'éléments dans le DOM à l'aide de jQuery

    var titres_h3 = $('h3'); // => les éléments <a>, <a>, <a>
    var premier_h3 = $('h3')[0]; // => le premier élément <a> (Home)
    var premier_lien_sous_h3 = $('h3 a')[0]; // => l'élément <a> (Mon site)
    var titre_du_premier_lien = $('h3 a')[0].innerText; // => "Mon site"

### Javascript "natif" (fonctionne même sans jQuery)

    var element = document.getElementById('home-link'); // => <a>
    var contenu_textuel = element.innerText; // => "Home"
    var destination = element.getAttribute('href'); // => "http://google.com"

### Modification de DOM

    element.innerText = "Maison"; // => le titre du lien est remplacé
    element.setAttribute('href', 'http://eemi.com'); // => la destination du lien est remplacée par une autre URL
    element.setAttribute('href', 'javascript:alert("bravo!")'); // => la destination du lien est remplacée par l'affichage d'une alerte modale

### Définition de comportements (events)

    element.onclick = function(evt){ evt.preventDefault(); };
      // => empêche le comportement par défaut => le lien ne sera pas ouvert
    element.onclick = function(evt){ evt.preventDefault(); alert('non!'); };
      // => le lien ne sera pas ouvert, et une alerte modale sera affichée
    element.onclick = function(evt){ alert('non!'); };
      // => une alerte modale sera affichée, puis le lien s'ouvrira

### Formulaire HTML

    <form id="formulaire">
      <label for="email-input">Votre email:</label>
      <input type="email" id="email-input" value="hollande@elysee.fr">
      <label for="majeur">Permis B valide</label>
      <input type="checkbox" id="majeur">
      <input type="submit">
    </form>
    <script src="./formulaire_files/index.js"></script>

Il existe nombreux [types de composants de formulaire](http://www.startyourdev.com/html/tag-html-balise-input#table-type) en HTML.

### Manipulation de formulaire en Javascript

    var champ_email = document.getElementById('email-input'); // => <input>
    var adresse_email = champ_email.value; // => 'hollande@elysee.fr'
    var case_cochee = document.getElementById('majeur').checked; // => false

### Conditions

    if (document.getElementById('majeur').checked == false) {
        alert('le conducteur ne sera pas couvert');
    }
    if(document.getElementById('email-input').value == 'hollande@elysee.fr') {
        alert('Vérifiez votre adresse');
    }

* les deux conditions sont indépendantes (pas de `else`)
* les deux conditions sont vraies (cf formulaire HTML, plus haut)
* => les deux alertes modales vont être affichées

### Conditions avec return

    if (document.getElementById('majeur').checked == false) {
        alert('le conducteur ne sera pas couvert');
        return;
    }
    if(document.getElementById('email-input').value == 'hollande') {
        alert('Vérifiez votre adresse');
    }

* la première condition est vraie (cf formulaire HTML, plus haut)
* => seule l'alerte modale associée à la première condition est affichée
* => la deuxième condition n'est pas évaluée à cause du `return`

### Conditions alternatives

    if (document.getElementById('majeur').checked == false) {
        alert('le conducteur ne sera pas couvert');
    }
    else if(document.getElementById('email-input').value == 'hollande') {
        alert('Vérifiez votre adresse');
    }

* les conditions sont évaluées une à une, tant qu'aucune n'est vraie
* la première condition est vraie (cf formulaire HTML, plus haut)
* => seule l'alerte modale associée à la première condition est affichée
* => la deuxième condition n'est pas évaluée à cause du `else`

### Cas par défaut

    if (1 == 3) {
        alert('Un est égal à trois');
    }
    else if (1 == 2) {
        alert('Un est égal à deux');
    }
    else {
        alert('Les conditions sont toutes fausses');
    }

* les conditions sont évaluées une à une, tant qu'aucune n'est vraie
* les deux premières conditions sont fausses
* => seule l'alerte modale associée au `else` (*sinon*) est affichée

### Conditions doubles

    if (0 == 0 && 1 == 3) {
        alert('Un est égal à trois');
    }
    else if (2 == 2) {
        alert('Deux est égal à lui-même');
    }
    else {
        alert('Les conditions sont toutes fausses');
    }

* les conditions sont évaluées une à une, tant qu'aucune n'est vraie
* Première condition: (il faut que les deux sous-conditions soient vraies)
  * 0 == 0 est vrai
  * 1 == 3 est faux
  * => la condition est fausse
* Deuxième condition: 2 == 2 est vrai
* => seule l'alerte modale associée à la deuxième condition est affichée

### Définition de comportements de formulaire par une fonction

    var formulaire = document.getElementById('formulaire'); // => élement <form>
    formulaire.onsubmit = function(event) { /* comportement */ };

Les instructions Javascript contenues entre les crochets (comportement) seront exécutées quand l'évènement `submit` interviendra sur le formulaire. C'est à dire, quand l'utilisateur va tenter de soumettre le formulaire.

Définir un comportement ainsi permet de valider la saisie de l'utiliser, et éventuellement empêcher que le formulaire soit effectivement soumis tant que l'utilisateur n'a pas corrigé sa saisie.

Exemple:

    if(document.getElementById('email-input').value == 'hollande@elysee.fr') {
        event.preventDefault(); // annule la soumission du formulaire
        alert('Vérifiez votre adresse'); // demande une correction
    }
