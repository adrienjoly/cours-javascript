# TP A: Hacker google.com avec Chrome Dev Tools (DOM et events)

### Objectifs

- Explorer et manipuler le DOM d'une page web depuis Chrome Dev Tools
- Modifier le DOM de manière programmative, à l'aide de handlers Javascript

### Logiciels nécéssaires

- google chrome, avec chrome dev tools

### Instructions à suivre

1. Ouvrir Google Chrome
2. Aller sur [google.com](http://google.com)
3. Clic-droit sur le bouton "J'ai de la chance", puis clic sur "Inspecter"
4. Depuis Dev Tools, activer la console javascript (logo >_)
5. Dans la console, evaluer `$0` (saisir puis presser la touche "Entrer") => ce noeud du DOM est un élément INPUT
6. Evaluer `$0.value = "hello"` => nous avons changé la valeur du champs `value` => le bouton a changé d'intitulé
7. Evaluer `$0` à nouveau pour voir quels changements ont été apportés sur le noeud du DOM (tip: utilisez la flèche du haut pour retrouver l'évaluation tapée précédemment)
8. Evaluer `alert("test")` => une boite de dialogue modale s'affiche
9. Evalue `Date.now()` => retourne le nombre de millisecondes écoulées depuis le 1er Janvier 1970.
10. Evaluer `$0.onmouseenter = function(){ $0.value = Date.now() }` puis passer la souris sur le bouton (sans cliquer)
11. Depuis l'explorateur de DOM de Dev Tools, séléctionner l'élement `<form>` (ancêtre de l'input) => tout le formulaire doit être affiché en surbrillance sur la page web.
12. Evaluer `$0` à nouveau => notre noeud actuel est le formulaire de Google
13. Tip pour la suite: c'est bien plus rapide d'évaluer `$("form")`. Il est possible de l'affecter à `$0`.
14. Evaluer `$0.onsubmit = function(e){e.preventDefault();}` => Le bouton de recherche ne provoque plus de changement de page. Par contre, quand on saisit une requête, si.
15. Retour sur la page précédente (google.com).
16. Clic sur champ de recheche pour le rendre actif, puis clic-droit+inspecter.
17. Evaluer `$0.onkeydown = function(e){e.preventDefault()}` => impossible d'écrire dedans
18. 
