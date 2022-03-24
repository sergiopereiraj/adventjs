// Escribe una función llamada sumaDigitos
//  que retorne la suma de todos los dígitos de un número dado,
//   por ejemplo:
// 5646 => 5+6+4+6 => 21
const x = 5646;
const y = 0;

const doce = 12;

function sumaDigito (a,b){
    a.toString().split('').forEach(element => b += parseInt(element));
    return b;
}
console.log(sumaDigito(x,y));
console.log(sumaDigito(doce,y));