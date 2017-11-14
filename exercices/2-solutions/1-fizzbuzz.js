// fonctions fournies dans l'énoncé

function estMultipleDeTrois(nombre) {
  return nombre % 3 === 0;
}
function estMultipleDeCinq(nombre) {
  return nombre % 5 === 0;
}

// algorithme "fizzbuzz":

for(var i = 1; i < 200; i++) {
  if (estMultipleDeCinq(i) && estMultipleDeTrois(i)) {
    console.log('FizzBuzz');
  } else if (estMultipleDeTrois(i)) {
    console.log('Fizz');
  } else if (estMultipleDeCinq(i)) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
