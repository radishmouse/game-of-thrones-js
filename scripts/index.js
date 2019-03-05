console.log(`There are ${characters.length} characters in the array.`);

// How many characters names start with "A"?

function namesWithA(chars) {
    const aNames = chars.filter(function (each) {
        return each.name[0] === 'A';
    });
    // const nameOnly = aNames.map(function (each) {
    //     return each.name
    // });
    return aNames.length;
}
console.log(namesWithA(characters))

// How many characters names start with "Z"?

function namesWithZ(chars) {
    const zNames = chars.filter(function (each) {
        return each.name[0] === 'Z';
    });
    return zNames.length;
}
console.log(namesWithZ(characters))

// How many characters are dead?

function deadCharacters(chars) {
    const dead = chars.filter(function (each) {
        return each.died;
    });
    return dead.length;
}
console.log(deadCharacters(characters));

// Who has the most titles?

function mostTitles(chars) {
    const highToLow = chars.sort(function (a, b) {
        return b.titles.length - a.titles.length;
    });
    return highToLow[0].name;
}
console.log(mostTitles(characters))

// How many are Valyrian?


// What actor plays "Hot Pie" (and don't use IMDB)?



// How many characters are *not* in the tv show?



// Produce a list characters with the last name "Targaryen"



// Create a histogram of the houses (it's the "allegiances" key)


