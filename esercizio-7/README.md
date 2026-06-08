# esercizio

Hai la durata di un film in minuti. Scrivi una funzione che la converta in un formato più leggibile del tipo: x ore e y min

## ragionamento

- dichiaro tempoMax film
- dichiaro ore = tempoMax / 60
- dichiaro minuti = tempoMax % 60
- dichiaro durataTot = `${ore} e ${minuti}`
    - stampo durataTot