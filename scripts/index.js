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

    return Object.entries(histo).sort(function(a, b) {
        return b[1] - a[1];
    })

}

console.log(housesMaster(characters));