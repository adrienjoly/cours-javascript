//var carousel = document.getElementById('carousel');
var images = document.getElementsByClassName('carousel-img');

var imageVisible = 0;

// cette fonction affiche l'image suivante, et cache la précédente
function changerImage() {
  images[imageVisible].classList.remove('visible');
  imageVisible = (imageVisible + 1) % images.length;
  images[imageVisible].classList.add('visible');
}

document.getElementById('next').onclick = changerImage;

changerImage();
