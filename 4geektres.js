// Escribe el código para generar un objeto en que las keys (claves)
// sean los nombres de los depósitos y los valores un arreglo con los
// números de serie de los productos ordenados alfabéticamente por nombre.

const storage = [
  { id: 1, name: "Miami" },
  { id: 2, name: "Tampa" },
  { id: 3, name: "Orlando" },
];

const products = [
  { id: 1, SerialNumber: "86620855", name: "Monitor" },
  { id: 2, SerialNumber: "73178559", name: "MotherBoard" },
  { id: 3, SerialNumber: "73826497", name: "Notebook" },
  { id: 4, SerialNumber: "88587715", name: "Consoles" },
  { id: 5, SerialNumber: "94020190", name: "SmartPhones" },
  { id: 6, SerialNumber: "99804238", name: "HeadSets" },
];

const items = [
  { productId: 6, storageId: 1, balance: 150 },
  { productId: 1, storageId: 3, balance: 180 },
  { productId: 5, storageId: 3, balance: 1350 },
  { productId: 2, storageId: 2, balance: 56 },
  { productId: 3, storageId: 1, balance: 230 },
  { productId: 5, storageId: 2, balance: 150 },
  { productId: 3, storageId: 3, balance: 459 },
  { productId: 2, storageId: 3, balance: 190 },
  { productId: 4, storageId: 3, balance: 510 },
  { productId: 5, storageId: 1, balance: 890 },
  { productId: 1, storageId: 2, balance: 16 },
  { productId: 5, storageId: 3, balance: 375 },
  { productId: 6, storageId: 1, balance: 192 },
  { productId: 2, storageId: 3, balance: 100 },
  { productId: 3, storageId: 2, balance: 54 },
  { productId: 3, storageId: 1, balance: 90 },
  { productId: 4, storageId: 3, balance: 135 },
  { productId: 2, storageId: 1, balance: 382 },
  { productId: 5, storageId: 2, balance: 170 },
  { productId: 1, storageId: 3, balance: 10 },
  { productId: 5, storageId: 2, balance: 6 },
  { productId: 6, storageId: 1, balance: 162 },
  { productId: 2, storageId: 2, balance: 100 },
];

const orden = products
    .sort((a, b) => a.name.localeCompare(b.name));
console.log(orden); // orden alfabeticamente

const miami = storage[0]['name'] //nombres de propiedades
const tampa = storage[1]['name']
const orlando = storage[2]['name']

const arrProduct1 = orden.forEach(function(x){x[x].name}) // busco generar un array de los nombres de productos

const obj = new Object();
obj.miami = arrProduct1;
console.log(obj);



 