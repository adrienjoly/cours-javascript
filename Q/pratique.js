// Êtes-vous capable de compléter la fonction suivante...

function affiche(parametre) {
  if (parametre === undefined) {
    console.log('(aucune valeur)');
  } else if (parametre === null) {
    console.log('(valeur nulle)');
  } else if (typeof parametre === 'string') {
    console.log('chaîne: ' + parametre + ' (' + parametre.length + ')');
  } else {
    console.log('(type non supporté pour l\'instant)');
  }
}

// ... de manière à afficher les résultats suivants:

affiche();              // => (aucune valeur)
affiche(undefined);     // => (aucune valeur)
affiche(null);          // => (valeur nulle)
affiche('hey');         // => chaîne: hey (3)
affiche('coucou');         // => chaîne: coucou (6)
affiche(3);             // => number: 3
affiche([1,2,3]);       // => tableau de 3 éléments:
                        //    - 1
                        //    - 2
                        //    - 3
affiche({a:1});         // => objet:
                        //    - a: 1
affiche(function(){});  // => fonction

