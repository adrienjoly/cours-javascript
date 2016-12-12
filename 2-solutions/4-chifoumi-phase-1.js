// definition de la fonction comparer
// qui renvoie le nom de l'élément gagnant, entre les deux passés en paramètres
function comparer(choix1, choix2) {
  if (choix1 === choix2) {
    return 'Egalité !';
  } else if (choix1 === 'pierre') {
    if (choix2 === 'ciseaux') {
      return 'pierre';
    } else if (choix2 === 'feuille') {
      return 'feuille';
    }
  } else if (choix1 === 'feuille') {
    if (choix2 === 'pierre') {
      return 'feuille';
    } else if (choix2 === 'ciseaux') {
      return 'ciseaux';
    }
  } else if (choix1 === 'ciseaux') {
    if (choix2 === 'pierre') {
      return 'pierre';
    } else if (choix2 === 'feuille') {
      return 'ciseaux';
    }
  }
}

// début de partie

var choixUtilisateur = prompt('Choisissez-vous pierre, feuille, ou ciseaux ?');

var choixOrdi = Math.random();
if (choixOrdi < 0.34) {
  choixOrdi = 'pierre';
} else if(choixOrdi <= 0.67) {
  choixOrdi = 'feuille';
} else {
  choixOrdi = 'ciseaux';
}

console.log('Ordinateur:', choixOrdi);

var resultat = comparer(choixUtilisateur, choixOrdi);

console.log('=> Gagnant:', resultat);

