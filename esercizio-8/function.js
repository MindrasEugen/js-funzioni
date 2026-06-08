function defGiorno(numG) {
    while (numG < 1 || numG > 7) {
        numG = Number(prompt("Errore! Numero non valido, inserisci numero"));
    }
    if (numG === 1) {
        return "Lunedi"
    }
    else if (numG === 2) {
        return "Martedi"
    }
    else if (numG === 3) {
        return "Mercoledi"
    }
    else if (numG === 4) {
        return "Giovedi"
    }
    else if (numG === 5) {
        return "Venerdi"
    }
    else if (numG === 6) {
        return "Sabato"
    }
    else if (numG === 7) {
        return "Domenica"
    }

}
