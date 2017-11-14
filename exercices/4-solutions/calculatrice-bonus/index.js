document.getElementById('mon-bouton').onclick = function() {
  var nombre1 = parseInt(document.getElementById('premier-nombre').value);
  var nombre2 = parseInt(document.getElementById('deuxieme-nombre').value);
  var operation = document.getElementById('operation').value;
  var result;
  if (operation === '-') {
    result = nombre1 - nombre2;
  } else if (operation === '*') {
    result = nombre1 * nombre2;
  } else if (operation === '/') {
    result = nombre1 / nombre2;
  } else {
    result = nombre1 + nombre2;
  }
  document.getElementById('resultat').value = result;
};
