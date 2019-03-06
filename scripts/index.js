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
    return mostTitles[0];
}

// How many are Valyrian?

function valyrian(arr) {
    let valyrianCharacters = arr.filter(person => {
        return person.culture === 'Valyrian';
    })
    return valyrianCharacters;
}

// Which actor plays "Hot Pie"?

function findHotPie(arr) {
    let hotPie = arr.filter(person => {
        return person.name === 'Hot Pie';
    })
    return hotPie[0].playedBy[0];
}

// How many characters are not in the TV show?

function notInTvShow(arr) {
    let notTv = arr.filter(person => {
        return person.tvSeries.length === 1;
    })
    return notTv;
}

// Produce a list of characters with the last name "Targaryen"

function targaryens(arr) {

    let targaryens = arr.filter(function(person) {
        let firstLast = person.name.split(" ");
        return firstLast[firstLast.length - 1] === 'Targaryen';
    })
    return targaryens;
}

// Create a histogram of the houses (it's the allegiances key)
// LONG WAY
// function allegiances(arr) {
//     // create array with just allegiances
//     let allegiances = arr.map(function(person) {
//         return person.allegiances;
//     })
//     return allegiances;
// }

// function everyAllegiance(allegianceArr) {
//     let singleAllegiance = [];
//     allegianceArr.forEach(allegiances => {
//         allegiances.forEach(allegiance => {
//             singleAllegiance.push(allegiance);
//         })
//     })
//     return singleAllegiance;
// }

// function allegianceHistogram(allegiances) {
//     let histogram = {};
//     allegiances.forEach(function(allegiance) {
//         if (histogram[allegiance]) {
//             histogram[allegiance] += 1;
//         } else {
//             histogram[allegiance] = 1;
//         }
//     })
//     return histogram;
// }

// console.log(allegianceHistogram(everyAllegiance(allegiances(characters))));
// SHORT WAY
function allegiancesClean(arr) {
    let histogram = {};
    arr.forEach(person => {
        person.allegiances.forEach(allegiance => {
            if (histogram[allegiance]) {
                histogram[allegiance] += 1;
            } else {
                histogram[allegiance] = 1;
            }
        })
    })
    return histogram;
}
let allegianceUrlHistogram = allegiancesClean(characters);


