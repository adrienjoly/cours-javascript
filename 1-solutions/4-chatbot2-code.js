// ce programme est une évolution de chatbot1.js

// on commence par poser une question avec prompt
var reponse = prompt('bonjour?');
// la réponse a été stockée dans la variable reponse

// maintenant, on définit le comportement du programme
// pour 3 réponses possibles (alternatives) 
if (reponse === 'bonjour') {
  // nous sommes à l'intérieur des accolades => indentation de 2 espaces

  // à ce stade, l'utilisateur a saisi bonjour,
  // on va lui poser une deuxieme question avec prompt 
  var reponse2 = prompt('Bonjour ! Comment vas-tu ?');

  // condition imbriquée dans notre 1ère condition:
  if (reponse2 === 'oui') {
    // on est à nouveau entre accolades => indentation supplémentaire
    alert('Je suis content pour toi.');
  } else {
    alert('Désolé, il faut que je file.');
  }
  // nous allons sortir des accolades => fin de l'indentation de 2 espaces
} else if (reponse === 'tu vas bien ?') {
  // observez bien l'expression ci-dessous, elle est liée à la 1ère
  // question prompt, et non à la deuxième.
  alert('Bien, et toi ?');
} else {
  alert('Désolé, je n\'ai pas compris...');
}
