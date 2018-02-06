'use strict';

var MAX_TENTATIVES = 10;
var mauvaisesLettres = [ ]; // sera complété pendant le jeu
var lettresAttendues = [ 'a', 'n', 'n', 'a' ];

for (; mauvaisesLettres.length < MAX_TENTATIVES && lettresAttendues.length > 0; ) {
  console.log('lettres à trouver:', lettresAttendues);
  alert('Lettres à trouver: ' + lettresAttendues.length + '. '
    + 'Tentatives restantes: ' + (MAX_TENTATIVES - mauvaisesLettres.length));
  var lettre = prompt('Devinez une lettre');

  // tant qu'on trouve des occurrences, on continue de les supprimer une à une
  var trouvees = 0;
  for (var indice = 0; indice != -1 ;) {
    indice = lettresAttendues.indexOf(lettre); // cherche la prochaine occurrence de la lettre
    if (indice != -1) {
      lettresAttendues.splice(indice, 1); // retire cette occurrence de la lettre trouvée dans le tableau
      trouvees++;
    }
  }

  if (trouvees > 0) {
    alert('Bonne pioche ! Il y avait bien ' + trouvees + ' fois la lettre '
      + lettre + ' dans le mot à trouver !');
  } else {
    mauvaisesLettres.push(lettre);
    alert('Le mot à trouver ne contient pas la lettre ' + lettre + ', désolé...');
  }
}

if (lettresAttendues.length == 0) {
  alert('Bravo, vous avez trouvé le mot !');
} else if (mauvaisesLettres.length == MAX_TENTATIVES) {
  alert('Perdu... Faites une autre partie !');
}
