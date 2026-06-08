function calcDurataFilm(tempoMax) {
    let ore = parseInt(tempoMax / 60);
    let minuti = tempoMax % 60;
    const durataTot = `${ore} ore e ${minuti} minuti`

    return "il film dura", durataTot;
}