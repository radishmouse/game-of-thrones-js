console.log(`There are ${characters.length} characters in the array.`);

// How many characters names start with "A"?
function charactersStartWithA(arr) {
    let aCharacters = arr.filter(function(person) {
        // include person if their name starts with a
        return person.name[0] === 'A';
    })
    return aCharacters;
}

// How many characters start with "Z"?
function charactersStartWithZ(arr) {
    let zCharacters = arr.filter(function(person) {
        // include person if their name starts with a
        return person.name[0] === 'Z';
    })
    return zCharacters;
}