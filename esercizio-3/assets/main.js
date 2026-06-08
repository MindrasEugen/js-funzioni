let voto = Number(prompt("insersci voto"))

function valutazione(voto) {
    if (voto < 5) {
        console.log("insufficiente")
    } else if (voto < 8) {
        console.log("sufficiente")
    } else {
        console.log("Ottimo")
    }

}

valutazione(voto)