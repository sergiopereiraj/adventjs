console.table("Bienvenidos a Reto N° 1 ;-) " );

// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
// Haz una función que devuelva una lista con todas las ovejas que sean de color rojo 
// y que además su nombre contenga tanto las letras n Y a, sin importar el orden,
//  las mayúsculas o espacios.


const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

function contarOvejas(ovejas){
    return ovejas.filter(
        oveja => oveja.color == "rojo" && oveja.name.match(/[nN][^aA]*[aA]|[aA][^nN]*[nN]/) 
    )
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// function contarOvejas(ovejas){
//     return ovejas.forEach(function(element){
//        if(element.color == "rojo" && (element.name.includes('a')) ){
//            element.name;
//        }if(element.name.includes("n")){
//            element.name;
//        }
//    })
// }
