console.log(`There are ${characters.length} characters in the array.`);

//For each of these questions, write a function that returns the answer.

//How many characters names start with "A"?

function char_a(characters) {
    let char_a = [];
    characters.forEach(function (character) {
        if (character.name[0] === "A" && character != "") {
        char_a.push(character.name)
        };
    })
    console.log(char_a)
}

// Output 168 + list of names
//===============================================//

//How many characters names start with "Z"?
function char_z(characters) {
    let char_z = [];
    characters.forEach(function (character) {
        if (character.name[0] === "Z" && character != "") {
        char_z.push(character.name)
        };
    })
    console.log(char_z)
}
// output 8 + list of names
//===============================================//


//How many characters are dead?
function char_dead(characters) {
    let char_dead = [];
    characters.forEach(function (character) {
        if (character.died !== "") {
        char_dead.push(character.name)
        };
    })
    console.log(char_dead)
}

// output 553 + list of names
//===========================================//


//Who has the most titles?
function title_length(characters) {
    let max_titles = [];
        for (character in characters) {
        if ((character.title).length >= 0) {
            max_titles.push(character.title)
        };
    console.log(max_titles)
    }
}
///// UGH!!!! ////
//========================================//

//How many are Valyrian?
function valyrian(characters) {
    let valyrian_names = [];
    characters.forEach(function(character) {
        if (character.culture === "Valyrian") {
            valyrian_names.push(character.name)
        }
    });
    console.log (valyrian_names)
    }
// Output 57 + list of names
//========================================//

//What actor plays "Hot Pie" (and don't use IMDB)?

function whoIsHotPie(characters) {
    const arrayOfHotPies = characters.filter(function (person) {
        return person.name === "Hot Pie"
    });
    //console.log(arrayOfHotPies)
    if (arrayOfHotPies.length > 0) {
        const hotPie = arrayOfHotPies[0];
        return (hotPie.playedBy);
    } else {
        return ('There are no Hot Pies');
    }
}
whoIsHotPie(characters)
// returns undefined even after following in class //
function findActorFor2(characters, characterName) {
    const theCharacter = characters.find(function(person) {
        return person.name === characterName;
    });
    return theCharacter
}

findActorFor2(characters)
//========================================//


//How many characters are *not* in the tv show?

//Produce a list characters with the last name "Targaryen"


//=================================================================//
//Create a histogram of the houses (it's the "allegiances" key)

function createHouseHistogram(characters){
    const histogram = {};
    // count allegiances by house (which will be a url)
    //console.log(characters[0].allegiances);
    // `.allegiances' is an array of strings
    characters.forEach(function (person) {
        //person.allegiances is the array ...
        //console.log(person.allegiances); 
        person.allegiances.forEach(function (house) {
            // do something with the house
            if (histogram[house] !== undefined) {
                // histogram[house] = histogram[house] + 1;
                histogram[house] += 1;
            } else {
                // we're seeing it for the first time
            histogram[house] = 1;
            }
        });
    });

    return histogram;
}

//=================USING THE MAP FUNCTION FOR HISTOGRAMS==================//
function createHouseHistogram2(characters){
    const histogram2 = new Map(); // call the Map constructor
    characters.forEach(function (person) {
        person.allegiances.forEach(function (house){
            // if the house is already in Map 
            if (histogram2.has(house)) {
                // increment
                // get the current value
                const currentValue = histogram2.get(house);
                // reset to the new value
                histogram2.set(house, currentValue + 1);
                // histogram2.set(house, histogram.get(house) + 1) // condensed version
            } else {
                // add it to the map, sttting its value to 1
                histogram2.set(house, 1);
            }
        });
    });
    return histogram2;
}