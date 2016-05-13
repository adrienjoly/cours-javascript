var tentatives = 10;
var lettres = [ 's', 'u', 'p', 'e', 'r' ];

alert('Il y a ' + lettres.length + ' lettres à trouver');

while (tentatives > 0) {
  var lettre = prompt('Devinez une lettre');
  var indice = lettres.indexOf(lettre);
  if (indice !== -1) {
    lettres.splice(indice, 1);
    if (lettres.length === 0) {
      alert('Bravo, vous avez gagné !');
      break;
    }
    alert('Bravo, il ne vous reste plus que ' + lettres.length + ' lettres à trouver !');
  } else {
    --tentatives;
    if (tentatives === 0) {
      alert('Vous avez perdu...');
    } else {
      alert('Raté... Il vous reste ' + tentatives + ' tentatives.');
    }
  }
}
