// Escriba una rutina que imprima los números del 1 al 100
//  pero: cuando el número sea múltiplo de 3, imprima “Tic”, en lugar del número. 
//  Cuando el número sea múltiplo de 5, imprima “Toc”, en lugar del número. 
//  Cuando el número sea múltiplo tanto de 3 como de 5, imprima “TicToc”, en lugar del número.

for(i = 1; i < 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("TicToc")
    }else if ( i % 5 == 0){
        console.log("Toc")
    }else if(i % 3 == 0){
        console.log("Tic")
    }else{
        console.log(i)
    }
}