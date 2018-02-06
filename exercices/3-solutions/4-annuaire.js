var annuaire = {
  patricia: '06 66 66 66 66',
  david: '07 77 77 77 77',
};

// 1. Afficher dans la console le numéro de téléphone de `patricia`, en utilisant la notation pointée sur l'objet `annuaire`;

console.log(annuaire.patricia);

// 2. Demander à l'utilisateur de saisir un prénom, puis afficher le numéro de téléphone associé à ce prénom.

var nom = prompt('donner le nom d\'un ami');
alert('numéro de téléphone de ' + nom + ': ' + annuaire[nom]);
