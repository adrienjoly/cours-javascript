document.getElementById('mon-bouton').onclick = function() {
  var nombre1 = parseInt(document.getElementById('premier-nombre').value);
  var nombre2 = parseInt(document.getElementById('deuxieme-nombre').value);
  document.getElementById('resultat').value = nombre1 + nombre2;
};
