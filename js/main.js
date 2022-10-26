let parola_1 = prompt(`Inserisci una parola`);
let parola_2 = prompt(`Inserisci un'altra parola`);

if (parola_1.length > parola_2.length){
    console.log (parola_1 + parola_2);
} else {
    console.log (parola_2 + parola_1);
}