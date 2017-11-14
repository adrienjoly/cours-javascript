// on commence par poser une question avec prompt
var reponse = prompt('bonjour?');
// la réponse a été stockée dans la variable reponse

// maintenant, on définit le comportement du programme
// pour 3 réponses possibles (alternatives) 
if (reponse === 'bonjour') {
  alert('Bonjour à toi !');
} else if (reponse === 'tu vas bien ?') {
  alert('Bien, et toi ?');
} else {
  // cette partie sera executée par défaut, si aucune des
  // conditions ci-dessus n'est vraie
  alert('Désolé, je n\'ai pas compris...');
}
