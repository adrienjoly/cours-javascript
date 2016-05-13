// cette fonction permet de savoir quel objet l'emporte sur l'autre;
function comparer(choix1, choix2) {
    if (choix1 === choix2) return "Egalité !";
    if (choix1 === "pierre") {
        if (choix2 === "ciseaux") return "pierre";
        else if (choix2 === "feuille") return "feuille";
    }
    else if (choix1 === "feuille") {
        if (choix2 === "ciseaux") return "ciseaux";
        else if (choix2 === "pierre") return "feuille";
    }
    else if (choix1 === "ciseaux") {
        if (choix2 === "feuille") return "ciseaux";
        else if (choix2 === "pierre") return "pierre";
    }
}

// Suite de l'exercice:
// Faire une boucle de jeu (en 10 manches) et compter les points.
// Utiliser la fonction `comparer()` sur ces choix pour déterminer le gagnant de chaque manche;

var pointsUtilisateur = 0;
var pointsOrdi = 0;
for (var manche = 0; manche < 10; manche++) {

    var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");

    // choix aléatoire de l'ordinateur
    var choixOrdi = Math.random();
    if (choixOrdi < 0.34) {
      choixOrdi = "pierre";
    } else if(choixOrdi <= 0.67) {
      choixOrdi = "feuille";
    } else {
      choixOrdi = "ciseaux";
    }
    console.log("Ordinateur : " + choixOrdi);

    var choixGagnant = comparer(choixUtilisateur, choixOrdi);

    if (choixGagnant === 'Egalité !') {
        alert('Egalité !');
    } else if (choixGagnant === choixUtilisateur) {
        alert('Vous gagnez un point !');
        pointsUtilisateur++;
    } else if (choixGagnant === choixOrdi) {
        alert('L\'ordinateur gagne un point.');
        pointsOrdi++;
    }
}

alert('Score: ' + pointsUtilisateur + ' (vous) - ' + pointsOrdi + ' (ordi)');
