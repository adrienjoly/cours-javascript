var repertoire = {
  'luke' : '0666666666',
  'yoda' : '0688888888',
};

// non demandé dans l'énoncé, juste pour vérifier le bon fonctionnement dans la console:
console.log('[debug] repertoire:', repertoire);

// l'utilisateur peut effectuer plusieurs opération, jusqu'à ce qu'il presse `q`
for (var choix; choix != 'q';) {
  choix = prompt('fonction: (r)echerche, (l)iste, (a)jout, (s)uppression, ou (q)uitter ?');
  if (choix === 'r') {
    var nom = prompt('donner le nom d\'un ami');
    alert('numéro associé: ' + repertoire[nom]);
  } else if (choix === 'l') {
    for (var nom in repertoire) {
      console.log(nom, ':', repertoire[nom]);
    }
  } else if (choix === 'a') {
    var nom = prompt('donner le nom de l\'ami à ajouter');
    var num = prompt('donner son numéro de téléphone');
    repertoire[nom] = num;
  } else if (choix === 's') {
    var nom = prompt('donner le nom de l\'ami à supprimer du répertoire');
    delete repertoire[nom];
  }
  // non demandé dans l'énoncé, juste pour vérifier le bon fonctionnement dans la console:
  console.log('[debug] repertoire:', repertoire);
}
