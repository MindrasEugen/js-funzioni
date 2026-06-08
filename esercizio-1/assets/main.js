const age = Number(prompt("inserisci la tua eta"));
const gender = prompt("inserici il tuo genere: M/F").toUpperCase();

function calcNumberOfYears(age, gender) {

    let retiredAge;

    if (gender === "M") {
        retiredAge = 67
    } else if (gender === "F") {
        retiredAge = 62
    }
    const yearsToWork = retiredAge - age;

    return yearsToWork
}

const toWork = calcNumberOfYears(age, gender)

console.log(toWork)