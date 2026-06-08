function splitBaggage(weight) {
    if (weight <= 10) {
        return "Bagaglio a mano"
    } else if (weight <= 23) {
        return "Bagaglio da stiva"
    } else {
        return "Collo ingombrante"
    }
}