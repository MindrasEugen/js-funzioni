function calcTariffa(prezzoBase, tariffaExtra, orarioPartenza, orarioArrivo) {
    let oreExtra = orarioArrivo - 12;
    const risultato = (orarioArrivo - orarioPartenza) * prezzoBase + (oreExtra * tariffaExtra)

    return risultato
}