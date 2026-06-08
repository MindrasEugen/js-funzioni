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
