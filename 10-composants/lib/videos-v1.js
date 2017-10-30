// URL d'intégration de chaque vidéo Youtube
var videos = [
  'https://www.youtube.com/embed/0uaQMxBjd5E',
  'https://www.youtube.com/embed/c8ZPn6p5khI',
  'https://www.youtube.com/embed/ikkrEOD1BbQ',
];

// références vers le DOM
var video = document.getElementById('video');
var buttons = document.getElementsByTagName('button');

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
