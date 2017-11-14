function diviserParDeux (nombre) {
  return nombre / 2;
}

function somme (nombre1, nombre2) {
  return nombre1 + nombre2;
}

function signe (nombre) {
  if (nombre === 0) {
    return 'nul';
  } else if (nombre > 0) {
    return 'positif';
  } else if (nombre < 0) {
    return 'négatif';
  }
}

function factorielle (nombre) {
  var res = 1;
  for(var i = 1; i <= nombre; i++) {
    res = i * res;
  }
  return res;
}
