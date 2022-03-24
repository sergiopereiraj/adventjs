// Si listamos todos los números por debajo del 10 que son múltiplos de 3 o 5 obtenemos: 3, 5, 6 y 9.
// La suma de estos múltiplos es 23.
// Realice un algoritmo para encontrar la suma de todos los múltiplos de 3 y 5 por debajo de 1000.

const uno = (n) => {
  let x = 0;
  for (i = 0; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      x += i;
    }
  }
  return x;
};
console.log(uno(10));
console.log(uno(100));
console.log(uno(1000));
