// console.log(`There are ${characters.length} characters in the array.`);


// How many characters names start with "A"?

function startWithA(characters) {
    let nameA = [];
    let count = 0;
    characters.forEach(function (array) {
        if (array.name.startsWith("A")) {
            nameA.push(array.name);
            count += 1;
        }
    });
    // console.log(nameA);
    return count;
}


// How many characters names start with "Z"?

function startWithZ(characters) {
    let nameZ = [];
    let count = 0;
    characters.forEach(function (array) {
        if (array.name.startsWith("Z")) {
            nameZ.push(array.name);
            count += 1;
        }
    });
    // console.log(nameZ);
    return count;
}


// How many characters are dead?

function dead(characters) {
    let nameDead = [];
    let count = 0;
    characters.forEach(function (array) {
        if (array.died != "") {
            nameDead.push(array.name);
            count += 1;
        }
    });
    return [nameDead, `Number of dead = ${count}`];
}


// Who has the most titles?

function mostTitle(characters) {
    let count = 0;
    let name = [];
    let nameWithSameNumbers = [];
    characters.forEach(function (array) {
        if (array.titles.length > count) {
            count = array.titles.length;
            name = array.name;
        }
    });
    characters.forEach(function (array) {
        if (count === array.titles.length) {
            nameWithSameNumbers.push(array.name);
        }
    });
    // console.log(name);
    return [`Who has the most titles?: ${nameWithSameNumbers}`, `Number of titles: ${count}`];
}


// How many are Valyrian?

function valyrian(characters) {
    let count = 0;
    let name = [];
    characters.forEach(function (array) {
        if (array.culture === "Valyrian") {
            name.push(array.name);
            count += 1;
        }
    });
    return [name, count];
}


// What actor plays "Hot Pie" (and don't use IMDB)?

function hotPie(characters) {
    let name = [];
    characters.forEach(function (array) {
        if (array.name === "Hot Pie") {
            name = array.playedBy;
        }
    });
    console.log(name);
}

function findActorFor(characters, characterName) {
    const arrayOfCharacters = characters.filter(function (person) {
        return person.name === characterName;
    });
    if (arrayOfCharacters.length > 0) {
        const hotPie = arrayOfCharacters[0];
        // console.log(hotPie.playedBy[0]);
        return hotPie.playedBy[0];
    } else {
        return "no hot pie for you!";
    }
}

function findActorFor2(characters, characterName) {
    // The .find method returns the first match or ...undefined
    // const theCharacter = characters.find(function (person) {
    //     return person.name === characterName;
    // });
    return characters.find(function (person) {
        return person.name === characterName;
    });
}


// How many characters are *not* in the tv show?

function tvSeries(characters) {
    let name = [];
    let count = 0;
    characters.forEach(function (array) {
        // console.log(array.tvSeries);
        if (array.tvSeries == "") {
            count += 1;
            name.push(array.name);
        }
    });
    // console.log(name);
    return count;
}


// Produce a list characters with the last name "Targaryen"

function targaryen(characters) {
    let name = [];
    let list = [];
    characters.forEach(function (array) {
        name = array.name.split(' ');
        if ((name[name.length - 1]) == "Targaryen") {
            list.push(array.name);
        }
    });
    return list;
}


// Create a histogram of the houses (it's the "allegiances" key)

function histograms(characters) {
    let list = {};
    let houses = {};
    characters.forEach(function (array) {
        if (array.allegiances != false) {
            for (let i = 0; i < array.allegiances.length; i++) {
                if (list[array.allegiances[i]] === undefined) {
                    list[array.allegiances[i]] = 1;
                }
                else {
                    list[array.allegiances[i]] += 1;
                }
            }
        }
    });
    for (let i = 0; i < list.length; i++) {

    }
    return list;
}

function createHouseHistogram(characters) {
    const histogram = {};

    // Count allegiances by house (which will be a URL)
    
    characters.forEach(function (person) {
        person.allegiances.forEach(function (house) {
            // do something with the house
            if (histogram[house]) {
                histogram[house] += 1;
            } else {
                histogram[house] = 1;
            }
        });
    });
    return histogram;
}

function createHouseHistogram2(characters) {
    // Call the Map constructor
    const histogram = new Map();

    characters.forEach(function (person) {
        person.allegiances.forEach(function (house) {
        // If the house is already in the map,
            if (histogram.has(house)) {
                // increment
                const currentValue = histogram.get(house);
                // histogram.set(house, currentValue + 1);
                histogram.set(house, histogram.get(house) + 1);
            } else {
            // add it to the map, setting its value to 1
                histogram.set(house, 1);
        }
        });
    });

    return histogram;
}