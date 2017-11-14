var headers = document.getElementsByTagName('header');
var articles = document.getElementsByTagName('article');

// cette fonction affiche le i-ème article
function afficherArticle(i) {
  articles[i].classList.add('visible');
}

// cette fonction cache tous les articles
function cacherArticles() {
  for (var i = 0; i < articles.length; i++) {
    articles[i].classList.remove('visible');
  }
}

// cette fonction retourne une fonction qui sert à n'afficher que l'i-ème article
function pourAfficherArticle(i) {
  return function(){
    cacherArticles();
    afficherArticle(i);
  };
}

// initialisation des headers
for (var i = 0; i < headers.length; i++) {
  headers[i].onclick = pourAfficherArticle(i);
}
