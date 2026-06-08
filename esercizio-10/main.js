let cod = Number(prompt("Inserisci il codice 1, 2 o 3"));

function defCode(cod) {
    if (cod === 1) {
        return "In elaborazione"
    } else if (cod === 2) {
        return "Spedito"
    } else if (cod === 3) {
        return "Consegnato"
    } else {
        return "Stato sconosciuto"
    }
}

console.log(defCode(cod))