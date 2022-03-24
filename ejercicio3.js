console.table("Bienvenidos a Reto N° 3 ");

// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
// Para saber si una carta es válida ✅,
// debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas.
// Por suerte sólo los ha dejado en medio de los paréntesis...

const letterUno = "bici coche (balón) bici coche peluche"; // true
const letterDos = "(muñeca) consola bici"; // true
const letterTres = "bici coche (balón bici coche"; // -> false
const letterCuatro = "peluche (bici [coche) bici coche balón"; // -> false
const letterCinco = "(peluche {) bici"; // -> false
const letterSeis = "() bici"; // false

// /\([^\{\}\[\]]+\)/
// /[^\(\s\)]+[)$]/;

// return regularExpresion.test(letter);
function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  if(letter.includes('()') || letter.includes('{') || letter.includes('[')){
  }else if (letter.includes('(') && letter.includes(')')){
    return true;
  }
  return false
}

console.log(isValid(letterUno));
console.log(isValid(letterDos));
console.log(isValid(letterTres));
console.log(isValid(letterCuatro));
console.log(isValid(letterCinco));
console.log(isValid(letterSeis));
