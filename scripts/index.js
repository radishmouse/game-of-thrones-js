// console.log(`There are ${characters.length} characters in the array.`);

// console.log (characters[0].died)

// How many character names start with A
// function beginsWithA(character) {
//     return character.name.startsWith('A');
// }

// function findsACharacters(book) {
//     aCharacters = book.filter(beginsWithA)
//     return aCharacters.length
// }
// console.log(findsACharacters(characters))


// // How many character names start with Z
// function beginsWithZ(character) {
//     return character.name.startsWith('Z');
// }

// function findsACharacters(book) {
//     aCharacters = book.filter(beginsWithZ)
//     return aCharacters.length
// }
// console.log(findsACharacters(characters))

// //How many characters are dead?
function deadCharacters (characterList) {
    let deadArray = characterList.filter(function(personName) {
        return personName.died !== '';
    })
    return deadArray.length;
}
console.log(deadCharacters(characters));

// Who has the most titles?
function mostTitles(characterList) {
    characterList.sort(function(a,b) {
        return (b.titles.length - a.titles.length)
    })
    return characterList[0].name;
}
console.log(mostTitles(characters));

// How many are Valyrian?
function areVarlyrian(characterList) {
    let valyrianArray = characterList.filter(function(personName) {
        return personName.culture === 'Valyrian';
    })
    return valyrianArray.length;
}
console.log(areVarlyrian(characters));

//What actor plays "Hot Pie" (and don't use IMDB)?
function isHotPie(characterList) {
    let hotPie = characterList.filter(function(personName) {
        return personName.name === "Hot Pie";
    })
    return hotPie[0].playedBy;
}
console.log(isHotPie(characters));

// How many characters are *not* in the tv show?
function notInShow(characterList) {
    let notInShowArray = characterList.filter(function(personName){
        return personName.tvSeries == '';
    })
    return notInShowArray.length
}
console.log(notInShow(characters));


// Produce a list characters with the last name "Targaryen"

function isTargaryen(characterList) {
    let targaryenArray = characterList.filter(function(personName){
        return personName.name.includes('Targaryen');
    });
    targaryenNamesArray = targaryenArray.map(function(personName){
        return personName.name;
    })
    return targaryenNamesArray;
}
console.log(isTargaryen(characters));

// Create a histogram of the houses (it's the "allegiances" key)
function houseHistogram(characterList) {
    
}
