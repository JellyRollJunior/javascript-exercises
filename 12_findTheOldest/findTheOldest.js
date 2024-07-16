const findTheOldest = function (people) {
    // we can iterate thru the find them all (normal way)
    // use reduce to return the person object
    let oldestAge = 0;
    let oldestPerson = people[0];
    for (const person of people) {
        let age = 0;
        if (!person.yearOfDeath) {
            let currentTime = new Date();
            age = +currentTime.getFullYear() - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
