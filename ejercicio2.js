console.table("Bienvenidos a Reto N° 2 ");

// Te ha llegado una carta ✉️ con todos los regalos que debes preparar.
// El tema es que es una cadena de texto y es muy difícil de leer 😱.
// ¡Menos mal que han puesto cada regalo separado por espacio!
// (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)
// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra,
// por ejemplo _playstation, que significa que está tachado y no se tiene que contar.
// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.
// Por ejemplo, si tenemos el texto:

const carta = "bici coche balón _playstation bici coche peluche";

function listGifts(letter) {
  const arr = letter
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter((r) => !r.startsWith("_")); // limpio mi cadena, transformo en array y elimino lo tachado.
  console.log(arr);
  const obj = {}; // creo objeto donde quedara el conteo
  arr.forEach(function(element) {
    obj[element] = (obj[element] || 0) + 1;
  });

  return obj;
}

console.log(listGifts(carta));
