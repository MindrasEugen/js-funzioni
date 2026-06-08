let voto1 = Number(prompt("inserisci il primo voto"));
let voto2 = Number(prompt("inserisci il secondo voto"));
let voto3 = Number(prompt("inserisci il terzo voto"));

function calcMedia(voto1, voto2, voto3) {
    let somma = voto1 + voto2 + voto3;
    let media = somma / 3;

    return media;
}


console.log(calcMedia(voto1, voto2, voto3))