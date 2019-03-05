console.log(`There are ${characters.length} characters in the array.`);

// How many characters names start with "A"?
function charactersStartWithA(arr) {
    let aCharacters = arr.filter(function(person) {
        // include person if their name starts with a
        return person.name[0] === 'A';
    })
    return aCharacters.length;
}

// How many characters start with "Z"?
function charactersStartWithZ(arr) {
    let zCharacters = arr.filter(function(person) {
        // include person if their name starts with z
        return person.name[0] === 'Z';
    })
    return zCharacters.length;
}

// How many characters are dead?
function deadCharacters(arr) {
    let deadCharacters = arr.filter(function(person) {
        // include person if dead
        return person.died;
    })
    return deadCharacters.length;
}

// Who has the most titles?
function mostTitles(arr) {
    let mostTitles = arr.sort(function(characterA, characterB) {
        return characterB.titles.length - characterA.titles.length;
    })
    return mostTitles[0].name;
}



