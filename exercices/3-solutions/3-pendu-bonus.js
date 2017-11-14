var lettres = [ 's', 'u', 'p', 'p', 'e', 'r' ];

for (var tentatives = 10; tentatives > 0 && lettres.length > 0; ) {
  console.log('lettres à trouver:', lettres);
  alert('Lettres à trouver: ' + lettres.length + '. Tentatives: ' + tentatives);
  var lettre = prompt('Devinez une lettre');
  var trouvees = 0;
  // tant qu'on trouve des occurrences, on continue de les supprimer une à une
  for (var indice = 0; indice !== -1 ;) {
    indice = lettres.indexOf(lettre); // cherche la prochaine occurrence de la lettre
    if (indice !== -1) {
      lettres.splice(indice, 1); // retire cette occurrence de la lettre trouvée dans le tableau
      trouvees++;
    }
  }
  if (trouvees === 0) {
    --tentatives;
    alert('Le mot à trouver ne contient pas la lettre ' + lettre+ ', désolé...');
  } else {
    alert('Bonne pioche ! Il y avait bien ' + trouvees + ' ' + lettre + ' dans le mot à trouver !');
  }
}

if (lettres.length === 0) {
  alert('bravo!');
} else if (tentatives === 0) {
  alert('perdu!');
}
