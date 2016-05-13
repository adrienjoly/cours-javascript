// Êtes-vous capable de compléter la fonction suivante...

function affiche(parametre) {
  if (parametre === undefined) {
    console.log('(aucune valeur)');
  } else if (parametre === null) {
    console.log('(valeur nulle)');
  } else if (typeof parametre === 'string') {
    console.log('chaîne: ' + parametre + ' (' + parametre.length + ')');
  } else if (typeof parametre === 'function') {
    console.log('fonction');
  } else if (typeof parametre === 'number' || typeof parametre === 'boolean'  ) {
    console.log(typeof parametre + ': ' + parametre);
  } else if (typeof parametre === 'object') {
    if (parametre.length == undefined) {
      console.log('objet:');
      for (var prop in parametre) {
        console.log('- ' + prop + ': ' + parametre[prop]);
      }
    } else {
      console.log('tableau de ' + parametre.length + ' éléments:');
      for (var i in parametre) {
        console.log('- ' + parametre[i]);
      }
    }
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
affiche(true);          // => boolean: true
