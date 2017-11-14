function changerDisplay(classe, valeur) {
  var articles = document.getElementsByClassName(classe);
  for (var i=0; i<articles.length; ++i) {
    articles[i].style.display = valeur;
  }  
}

document.getElementById('tous').onclick = function() {
  changerDisplay('article', 'block'); // afficher tous les articles
};

document.getElementById('ludique').onclick = function() {
  changerDisplay('article', 'none'); // cacher tous les articles
  changerDisplay('ludique', 'block'); // afficher articles ludiques
};

document.getElementById('pratique').onclick = function() {
  changerDisplay('article', 'none'); // cacher tous les articles
  changerDisplay('pratique', 'block'); // afficher articles pratiques
};

document.getElementById('sportif').onclick = function() {
  changerDisplay('article', 'none'); // cacher tous les articles
  changerDisplay('sportif', 'block'); // afficher articles sportifs
};
