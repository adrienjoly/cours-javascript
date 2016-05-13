var jours = [ 'lun', '007', 'mer', 'jeu', 'ven', 'sam', 'BUG' ];
jours.pop();
console.log(jours);
jours.push('dim');
jours[1] = 'mar';
console.log(jours.length);
console.log(jours[2]);
