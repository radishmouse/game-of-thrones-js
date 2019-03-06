console.log(`There are ${characters.length} characters in the array.`);

// How many characters names start with "A"?

function namesWithA(chars) {
    return chars.filter(function (each) {
        return each.name[0] === 'A';
    }).length;
}
console.log(namesWithA(characters))

// How many characters names start with "Z"?

function namesWithZ(chars) {
    return chars.filter(function (each) {
        return each.name[0] === 'Z';
    }).length;
}
console.log(namesWithZ(characters))

// How many characters are dead?

function deadCharacters(chars) {
    return chars.filter(function (each) {
        return each.died;
    }).length;
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

function whoIsValyrian(chars) {
    return chars.filter(function (each) {
        return each.culture === 'Valyrian';
    }).length;
}
console.log(whoIsValyrian(characters));

// What actor plays "Hot Pie" (and don't use IMDB)?

function whoIsHotPie(chars) {
    const him = chars.filter(function (each) {
        return each.name === 'Hot Pie';
    });
    return him[0].playedBy[0];
}
console.log(whoIsHotPie(characters))

// How many characters are *not* in the tv show?

function notOnTv(chars) {
    return chars.filter(function (each) {
        return each.tvSeries.length === 1 && each.tvSeries[0] === ""
    }).length;
}
console.log(notOnTv(characters));

// Produce a list characters with the last name "Targaryen"

function whoIsTarg(chars) {
    const targ = chars.filter(function (each) {
        return each.name.includes('Targaryen');
    })
    return targ.map(function (each) {
        return each.name
    });
}
console.log(whoIsTarg(characters));

// Create a histogram of the houses (it's the "allegiances" key)

function housesMaster(chars) {
    let histo = {}
    let uniqueHouses = []
    let allegiances = chars.map(function (each) {
            return each.allegiances
    })

    // return allegiances;

    allegiances.forEach(function (groupOfHouses) {
        groupOfHouses.forEach(function (indyHouse){
            uniqueHouses.push(houses[indyHouse]);
        })
    })

    // return uniqueHouses;

    uniqueHouses.forEach(function (ea) {
        if (histo.hasOwnProperty(ea)) {
            histo[ea] += 1;
        } else {
            histo[ea] = 1
        }
    });
    // return histo;
    
    // sortable =  Object.entries(histo);
    // sorting over to make it highest to lowest
    return Object.entries(histo).sort(function(a, b) {
        return b[1] - a[1];
    })

}

console.log(housesMaster(characters));

// *********************************
// Chris version of histogram
// *********************************

function createHouseHistogram(chars) {
    const histogram = {};

    // count allegiances by house (which will be a URL)
    // console.log(chars[0].allegiances);
    chars.forEach(function (person) {
        // console.log(person.allegiances)
        person.allegiances.forEach(function (house) {
            if (histogram[house]) {
                histogram[house] += 1;
            } else {
                histogram[house] = 1;
            }
        });
    })

    return histogram;
}

console.log(createHouseHistogram(characters));

function createHouseHistogram2(chars) {
    const histogram = new Map(); // call the map constructor
    chars.forEach(function (person) {
        person.allegiances.forEach(function (house) {
            // if house is already in map
            if (histogram.has(house)) {
                //// increment
                //// get current value
                // const currentValue = histogram.get(house);
                //// re-set new value
                // histogram.set(house, currentValue + 1)
                histogram.set(house, histogram.get(house) + 1)
            } else {
                // add it to the map, with value at 1
                histogram.set(house, 1);
            }
        });
    });

    return histogram;
}

console.log(createHouseHistogram2(characters));