function initialiseCarousel(groupe) {

  var images = groupe.getElementsByTagName('img');
  var imageVisible = 0;

  // cette fonction affiche l'image suivante, et cache la précédente
  function changerImage() {
    images[imageVisible].classList.remove('visible');
    imageVisible = (imageVisible + 1) % images.length;
    images[imageVisible].classList.add('visible');
  }

  groupe.getElementsByClassName('next')[0].onclick = changerImage;

  changerImage();
}

var carousels = document.getElementsByClassName('carousel');
for (var i = 0; i < carousels.length; i++) {
  initialiseCarousel(carousels[i]);
}
