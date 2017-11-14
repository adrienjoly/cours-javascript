function initialiseGalerieVideo(conteneur, videos) {

  // insertion du div de la video en cours
  conteneur.innerHTML = '<div class="video"></div>';

  // insertion des boutons
  for (var i = 0; i < videos.length; i++) {
    conteneur.innerHTML += '<button>video ' + i + '</button>';
  }

  // références vers le DOM
  var video = conteneur.getElementsByClassName('video')[0];
  var buttons = conteneur.getElementsByTagName('button');

  // fonction qui retourne une fonction permettant d'intégrer la i-ème vidéo
  function pourAfficherVideo(i) {
    return function() {
      video.innerHTML = '<iframe width="320" height="200" src="' + videos[i] + '?autoplay=1"></iframe>'
    };
  }

  // initialisation des boutons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = pourAfficherVideo(i);
  }

}
