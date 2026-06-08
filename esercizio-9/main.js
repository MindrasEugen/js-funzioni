let eta = Number(prompt("Inserisci la tua età:"));

function defGroup(eta) {
    if (eta < 18) {
        return "Minorenne"
    } else if (eta < 35) {
        return "Giovane Adulto"
    } else if (eta < 60) {
        return "Adulto"
    } else {
        return "Senior"
    }
}

console.log(defGroup(eta))