const findTheOldest = function(people) {
    let max;
    let maxAge = 0;

    for (let i = 0; i < people.length; i++) {
        // checks if alive
        let year = people[i].hasOwnProperty('yearOfDeath') ? people[i].yearOfDeath : new Date().getFullYear();
        // gets age
        let age = year - people[i].yearOfBirth;
        // updates max
        if (age > maxAge) {
            maxAge = age;
            max = people[i];
        }
    }
    return max;

};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
