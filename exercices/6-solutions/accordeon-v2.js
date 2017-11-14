function initialiseAccordeon(element) {

  // ces variables auront une valeur différente pour chaque appel de initialiseAccordeon()
  var headers = element.getElementsByTagName('header');
  var articles = element.getElementsByTagName('article');

  // cette fonction affiche le i-ème article de cet accordéon
  function afficherArticle(i) {
    articles[i].classList.add('visible');
  }

  // cette fonction cache tous les articles de cet accordéon
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

}

// intégration des accordéons de la page
var accordeons = document.getElementsByClassName('accordeon');
for (var i = 0; i < accordeons.length; i++) {
  initialiseAccordeon(accordeons[i]);
}
