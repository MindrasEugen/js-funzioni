# esercizio

Un calendario digitale deve mostrare il giorno esteso. Scrivi una funzione che riceve un numero da 1 a 7 e restituisce il nome del giorno corrispondente (1 = Lunedì, ..., 7 = Domenica). Se il numero non è valido, restituisce "Errore".

## ragionamento

- chiedo al utente di inserire un numero
- SE il numero === 1
    - stampo lunedi
- ALTRIMENTI
    - SE il numero === 2
        - stampo martedi
- ALTRIMENTI
    - SE il numero === 3
        - stampo mercoledi
- ALTRIMENTI
    - SE il numero === 4
        - stampo giovedi
- ALTRIMENTI
    - SE il numero === 5
        - stampo venerdi
- ALTRIMENTI
    - SE il numero === 6
        - stampo sabato
- ALTRIMENTI
    - SE il numero === 7
        - stampo domenica
- ALTRIMENTI
    - stampo "Errooe! Numero non valido"
    - FINCHE il numero non sarà valido
        - chiedo al utente di inserire un altro numero