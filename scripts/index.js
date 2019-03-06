// console.log(`There are ${characters.length} characters in the array.`);

console.log (characters[0].died)

// How many character names start with A
// function beginsWithA(character) {
//     return character.name.startsWith('A');
// }

// function findsACharacters(book) {
//     aCharacters = book.filter(beginsWithA)
//     return aCharacters.length
// }
// console.log(findsACharacters(characters))


// How many character names start with Z
// function beginsWithZ(character) {
//     return character.name.startsWith('Z');
// }

// function findsACharacters(book) {
//     aCharacters = book.filter(beginsWithZ)
//     return aCharacters.length
// }
// console.log(findsACharacters(characters))

// //How many characters are dead?
deadCharacters = characters.forEach(function(key) {
    deadList = [];
    for (let i = 0; i < characters[key].length; i++) {
        if (key.died.length > 0) {
        deadList.push(characters.died);
        }
        
    }
    // console.log(key.died.length)
    return deadList;
})
console.log(deadCharacters)


