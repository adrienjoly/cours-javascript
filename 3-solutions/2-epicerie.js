var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
console.log(fruits);
var reponse = prompt('quel fruit desirez vous');
var indice = fruits.indexOf(reponse);
if (indice !== -1) {
  fruits.splice(indice, 1);
  console.log('ok!');
} else {
  alert('indisponible...');
}
console.log(fruits);
