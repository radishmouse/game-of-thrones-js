console.log(`There are ${characters.length} characters in the array.`);

// How many characters names start with "A"?

function namesWithA(chars) {
    const aNames = chars.filter(function (each) {
        return each.name[0] === 'A';
    });
    const nameOnly = aNames.map(function (each) {
        return each.name
    });

    return nameOnly;
}
console.log(namesWithA(characters))

// How many characters names start with "Z"?



// How many characters are dead?



// Who has the most titles?



// How many are Valyrian?



// What actor plays "Hot Pie" (and don't use IMDB)?



// How many characters are *not* in the tv show?



// Produce a list characters with the last name "Targaryen"



// Create a histogram of the houses (it's the "allegiances" key)


