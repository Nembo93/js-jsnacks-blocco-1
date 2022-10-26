const numeriDisp = [];
console.log(numeriDisp);

for(i = 0; i < 6; i++){
    numero = prompt(`Inserisci un numero`);
    if (numero % 2 !== 0){
        console.log(numero);
        numeriDisp.push(numero)
    }
}