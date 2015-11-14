document.getElementById('formulaire').onsubmit = function(event) {
  if(!confirm('Veuillez confirmer svp.')) {
    event.preventDefault();
  }
}
