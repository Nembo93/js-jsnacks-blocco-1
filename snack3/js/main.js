const invitati = [`francesco`, `marco`, `giovanni`];
const nomeInvitato = prompt(`Inserisci nome`);
let presente = false;

for(i = 0; i < invitati.length; i++ ){
    if (nomeInvitato == invitati[i]){
        presente = true;
    }
}
if (presente == true){
    console.log(`Presente nella lista`);
} else{
    console.log(`Non presente nella lista`)
}
// 