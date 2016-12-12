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

var scoreOrdi = 0;
var scoreJoueur = 0;

for (var manche = 0; manche < 3; manche++) {

  // choix aléatoire de l'ordinateur

  var choixOrdi = Math.random();
  if (choixOrdi < 0.34) {
    choixOrdi = 'pierre';
  } else if(choixOrdi <= 0.67) {
    choixOrdi = 'feuille';
  } else {
    choixOrdi = 'ciseaux';
  }

  console.log('Ordinateur:', choixOrdi);

  // choix du joueur

  var choixUtilisateur = prompt('Choisissez-vous pierre, feuille, ou ciseaux ?');

  // déterminer qui remporte la manche

  var resultat = comparer(choixUtilisateur, choixOrdi);

  // afficher les résultats de la manche, et mettre à jour les scores

  if (resultat === 'Egalité !') {
    console.log('=> Egalité !');
  } else if (resultat === choixUtilisateur) {
    console.log('=> Gagnant de la manche:', resultat, '(joueur)');
    scoreJoueur++;
  } else {
    console.log('=> Gagnant de la manche:', resultat, '(ordi)');
    scoreOrdi++;
  }

}

// afficher les résultats du jeu

var message;
if (scoreOrdi === scoreJoueur) {
  message = 'Égalité !';
} else if (scoreOrdi > scoreJoueur) {
  message = 'Perdu !';
} else {
  message = 'Gagné !';
}

alert(message + ' Votre score: ' + scoreJoueur + ', ordi: ' + scoreOrdi);
