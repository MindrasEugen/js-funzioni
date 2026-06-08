const age = Number(prompt("inserisci la tua eta"));
const gender = prompt("inserici il tuo genere: M/F").toUpperCase();

const toWork = calcNumberOfYears(age, gender)

console.log(toWork)