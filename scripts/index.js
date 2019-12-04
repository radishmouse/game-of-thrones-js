console.log(`There are ${characters.length} characters in the array.`);

function isAName(totalANames, currentCharObj) {
    if (currentCharObj.name[0] === "A") {
        totalANames += 1;
        return totalANames;
    }
    return totalANames;
}

function getNumberOfANames(charObjArray) {
    let sumOfANames = charObjArray.reduce(isAName, 0);
    return sumOfANames;
}

console.log(`There are ${getNumberOfANames(characters)} characters with a name that starts with "A" in the array.`);
// works :)
// Got confused as to what exactly reduce does. Needed to go look up syntax


// below code was trying to make bind work to get any character starting letter
// function isAnyLetterName(totalAnyNames, currentCharObj, character) {
//     if (currentCharObj.name[0] === character) {
//         totalAnyNames += 1;
//         return totalAnyNames;
//     }
//     return totalAnyNames;
// }

// function getNumberOfAnyNames(charObjArray, character) {
//     let sumOfANames = charObjArray.reduce(isAnyLetterName.bind(null, null, null, character), 0);
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

function getNumberOfZNames(charObjArray) {
    let sumOfZNames = charObjArray.reduce(isZName, 0);
    return sumOfZNames;
}

console.log(`There are ${getNumberOfZNames(characters)} characters with a name that starts with "Z" in the array.`);

// works :)
// Doesn't work for every letter like I wanted it to. I need to work on writing out long hand reduce functions to understand how to mess with them. Also work on bind and function expression as shown above to be able to change reduce to work with many modified helper functions

// make function that reduces characters obj down and counts number of dead
// reduce helper function needs to check character dictionary if the "died" keyword has a value

function getTotalDead(totalDead, currentCharObj) {
    if (currentCharObj.died !== "") {
        return totalDead += 1;
    }
    return totalDead;
}

function getNumberOfDead(charObjArray) {
    let totalDead = charObjArray.reduce(getTotalDead, 0);
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

function getCharacterMostTitles(charObjArray) {
    let charObjWithMostTitles = charObjArray.reduce(getMostTitles, charObjArray[0]);
    return charObjWithMostTitles;
}

const characterWithMostTitles = getCharacterMostTitles(characters);
console.log(`The character with the most titles is ${characterWithMostTitles.name}, and they have ${characterWithMostTitles.titles.length} titles.`)
// Works :)
// Mistyped return for getCharacterMostTitles. Need to work on shortening variable name length. It's getting confusing.

// find how many people have culture: "Valyrian"
function sumValyrians(currentTotalValyrians, currentCharObj) {
    if (currentCharObj.culture === "Valyrian") {
        currentTotalValyrians += 1;
        return currentTotalValyrians;
    }
    return currentTotalValyrians;
}

function getTotalValyrians(charObjArray) {
    let totalValyrians = charObjArray.reduce(sumValyrians, 0);
    return totalValyrians;
}

console.log(`Total number of Valyrians: ${getTotalValyrians(characters)}.`);
// works :)
// getting better at naming things and getting more comfy with reducing arrays

// find the actor that plays character name "Hot Pie"
// take an array and reduce to single character
// actor name is "playedBy"

function isHotPie(charObj) {
    return (charObj.name === "Hot Pie");
}

function getHotPieActor(charObjArray) {
    let HotPieArrayObj = charObjArray.filter(isHotPie);
    return HotPieArrayObj[0].playedBy
}

console.log(`The actor that played Hot Pie is ${getHotPieActor(characters)}.`)

// works :)
// Decided to do it as filtering rather than reducing as it looks a bit cleaner. Plus I liked the name isHotPie. Makes the return a bit more complicated by having to access an array.

// TODO: How many characters are *not* in the tv show?
// Could reduce or filter and get the length of the array here. I'll reduce for more practice.
// use helperFn to find out if "tvSeries" has a length of 0

function sumCharactersNotOnTV(currentCharactersNotOnTV, currentCharObj) {
    if (currentCharObj.tvSeries.length !== 1) {
        currentCharactersNotOnTV += 1;
        return currentCharactersNotOnTV;
    }
    return currentCharactersNotOnTV;
}

function getCharactersNotOnTV(charObjArray) {
    let totalCharactersNotOnTV = charObjArray.reduce(sumCharactersNotOnTV, 0);
    return totalCharactersNotOnTV;
}

console.log(`There are ${getCharactersNotOnTV(characters)} characters in the books and not in the show.`);

// works :)
// Had to play around in the console to figure out why tvSeries length was 1 instead of zero. They automatically have a "" in the array, making the length automatically one

// TODO: Produce a list of characters with the last name "Targaryen"
// I want to filter the array to the just objects with the last name of "Targaryen". This means I need to check the object name, and either check the last 9 characters of the string, or I need to split the string into two parts at the space ----- helperFn
// Then I want to call the helper function to filter the array. Then I want to map the resulting array to get just the names. Return the list, maybe make it pretty

function isTargaryen(charObj) {
    return (charObj.name.split(" ")[1] === "Targaryen") // last bracket [0] is first name [1] is last name
}

function getName(charObj) {
    return charObj.name;
}

function getTargaryens(charObjArray) {
    const targaryenObjs = charObjArray.filter(isTargaryen);
    const targaryenArray = targaryenObjs.map(getName);
    return targaryenArray;
}

console.log(`All of the Targaryens are:

${getTargaryens(characters)}`);

// works...sort of. Seems the data has multiple instances of some of the targaryens due to having the same name (aegon the XIII etc.) Maybe add something to make it prettier or clean it up?
// Had to play with split a bit to make it work like I intended.

// TODO: 1. Get all the houses (maybe pull from the api or just copy and paste) DONE
// 2. Go through the houses and make an array of house names
// 3. Go through the characters and total the number of each type of house (map or filter or reduce?) maybe use the house in part 2?
// 4. Find a way to use js to plot a graph

function getAllegiances(charObjArray) {
    let allAllegiances = [];
    for (let charObj of charObjArray) {
        for (let allegiance of charObj.allegiances) {
            if (allegiance.length === 1) {
                continue;
            } else{
            allAllegiances.push(allegiance.split("/houses/")[1])
            }
        }
    }
    // console.log(allAllegiances) // holy crap that worked
    return allAllegiances;
}

// maybe could have used map or filter to great effect, but making a different sized list, which complicates things

// Got tired and needed to go drink/trivia, so shortened problem expectations. Just going to make a histogram of how many times each thing is in the list.
function getMax(currentMax, item) {
    if (currentMax > item) {
        return currentMax;
    }
    return item
}
function makeNumber(item) {
    return Number(item);
}

function makeXCoordinates(length) {
    let xCoordinates = [];
    for (let i = 1; i<length; i++) {
        xCoordinates.push(i);
    }
    return xCoordinates;
}


let allAllegiances = getAllegiances(characters);
let allAllegiancesNumbers = allAllegiances.map(makeNumber);
let maxAllegiance = allAllegiancesNumbers.reduce(getMax, 0);
console.log(maxAllegiance);
let xCoordinates = makeXCoordinates(444); // makes x axis equal to max house number
let data = {
    histfunc: "count",
    y: allAllegiancesNumbers,
    x: xCoordinates,
    type: "histogram",
    name: "count",
};

Plotly.newPlot("myDiv", data);
