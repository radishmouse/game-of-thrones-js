console.log(`There are ${characters.length} characters in the array.`);

function isAName(totalANames, currentCharObj) {
    if (currentCharObj.name[0] === "A") {
        totalANames += 1;
        return totalANames;
    }
    return totalANames;
}

function getNumberOfANames(characterObj) {
    let sumOfANames = characterObj.reduce(isAName, 0);
    return sumOfANames;
}

console.log(`There are ${getNumberOfANames(characters)} characters with a name that starts with "A" in the array.`);
// works :)
// Got confused as to what exactly reduce does. Needed to go look up syntax


// below code was trying to make bind work to get any character starting letter>
// function isAnyLetterName(totalAnyNames, currentCharObj, character) {
//     if (currentCharObj.name[0] === character) {
//         totalAnyNames += 1;
//         return totalAnyNames;
//     }
//     return totalAnyNames;
// }

// function getNumberOfAnyNames(characterObj, character) {
//     let sumOfANames = characterObj.reduce(isAnyLetterName.bind(null, null, null, character), 0);
//     return sumOfANames;
// }

// console.log(`There are ${getNumberOfAnyNames(characters, "Z")} characters with a name that starts with "Z" in the array.`);

// doesn't work yet. Go back and rework with bind and function expression assignment and play around with them

function isZName(totalZNames, currentCharObj) {
    if (currentCharObj.name[0] === "Z") {
        totalZNames += 1;
        return totalZNames;
    }
    return totalZNames;
}

function getNumberOfZNames(characterObj) {
    let sumOfZNames = characterObj.reduce(isZName, 0);
    return sumOfZNames;
}

console.log(`There are ${getNumberOfZNames(characters)} characters with a name that starts with "Z" in the array.`);

// works :)
// Doesn't work for every character like I wanted it to. I need to work on writing out long hand reduce functions to understand how to mess with them. Also work on bind and function expression as shown above to be able to change reduce to work with many modified helper functions

// make function that reduces characters obj down and counts number of dead
// reduce helper function needs to check character dictionary if the "died" keyword has a value

function getTotalDead(totalDead, currentCharObj) {
    if (currentCharObj.died !== "") {
        return totalDead += 1;
    }
    return totalDead;
}

function getNumberOfDead(characterObj) {
    let totalDead = characterObj.reduce(getTotalDead, 0);
    return totalDead;
}

// console.log(`There are ${getNumberOfDead(characters)} characters dead in the array.`);
// works :)
// accidentally named the function getTotalDead as totalDead, which conflicted with the variable declaration in getNumberOfDead


// find the person with the most titles
function getMostTitles(currentObjMostTitles, currentCharObj) {
    if (currentObjMostTitles.titles.length >= currentCharObj.titles.length) {
        return currentObjMostTitles;
    }
    return currentCharObj;
}

function getCharacterMostTitles(characterObj) {
    let charObjWithMostTitles = characterObj.reduce(getMostTitles, characterObj[0]);
    return charObjWithMostTitles;
}

const characterWithMostTitles = getCharacterMostTitles(characters);
console.log(`The character with the most titles is ${characterWithMostTitles.name}, and they have ${characterWithMostTitles.titles.length} titles.`)
// Works :)
// Mistyped return for getCharacterMostTitles. Need to work on shortening variable name length. It's getting confusing.

// find how many people have 