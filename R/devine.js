var aleatoire = Math.floor(1 + Math.random() * 100);
alert(aleatoire);
for (var i=0; i<10; ++i) {
  var joueur = prompt();
  console.log(joueur);
  if (joueur > aleatoire) {
    alert('Plus petit');
  } else if (joueur < aleatoire) {
    alert('Plus grand');
  } else if (joueur == aleatoire){
    alert('Gagné!');
    break;
  }
}
