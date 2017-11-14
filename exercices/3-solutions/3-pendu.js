var lettres = [ 's', 'u', 'p', 'e', 'r' ];

for (var tentatives = 10; tentatives > 0 && lettres.length > 0; ) {
  console.log('lettres à trouver:', lettres);
  alert('Lettres à trouver: ' + lettres.length + '. Tentatives: ' + tentatives);
  var lettre = prompt('Devinez une lettre');
  var indice = lettres.indexOf(lettre);
  if (indice !== -1) {
    lettres.splice(indice, 1); // retire la 1ère occurrence de cette lettre trouvée dans le tableau
    alert('Bonne pioche! Continuez!');
  } else {
    --tentatives;
    alert('Le mot à trouver ne contient pas la lettre ' + lettre+ ', désolé...');
  }
}

if (lettres.length === 0) {
  alert('bravo!');
} else if (tentatives === 0) {
  alert('perdu!');
}
