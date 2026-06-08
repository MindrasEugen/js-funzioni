# esrcizio

Un tracker di spedizioni usa codici numerici. Scrivi una funzione che riceve un codice (1, 2, 3) e restituisce "In elaborazione" per 1, "Spedito" per 2, "Consegnato" per 3. Se il codice non esiste, restituisce "Stato sconosciuto".

## ragionamento

- chiedo al utente di inserire il codice 1, 2 o 3
- SE il codice === 1
    - stampo "in elaborazione"
- ALTRIMENTI 
    - SE il codice === 2
        - stampo "spedito"
- ALTRIMENTI
    - SE il codice === 3
        - stampo "consegnato"
- ALTRIMENTI
    - stampo "stato sconosciuto"