// Haga un programa que filtre el arreglo y devuelva un arreglo
//  con solo el nombre de sus amigos. Si un nombre tiene exactamente 4 letras, 
//  ¡puedes estar seguro que es amigo tuyo! De lo contrario, puede estar seguro de que no…

// Amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]  Deberia [“Ryan”, “Mark”]

const amigo = ["Ryan", "Kieran", "Mark", "Miguel"];

const filtradorDeBuenosAmigos = amigo.filter(function(x){
    if(x.length == 4){
        return x
    }
})

console.log(filtradorDeBuenosAmigos);