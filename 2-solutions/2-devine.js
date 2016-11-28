var nbTours = 10;

var aleatoire = Math.round(Math.random() * 100);
console.log('nombre à trouver:', aleatoire);

for (var i = 0; i < nbTours; ++i) {
  var joueur = prompt('devinez le nombre');
  if (joueur > aleatoire) {
    alert('Plus petit');
  } else if (joueur < aleatoire) {
    alert('Plus grand');
  } else if (joueur == aleatoire) {
    alert('Bravo !');
    break; // sort de la boucle avant la fin
  }
}
