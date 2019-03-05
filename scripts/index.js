console.log(`There are ${characters.length} characters in the array.`);

// console.log(Object.keys(characters));
//split characters into arrays

function beginsWithLetter(char,letter){
    let count = 0;
    char.forEach(function(person){
        if (person.name[0] === letter){
            count += 1;
            // console.log(person.name)
        }
    });
    return count;
}
console.log(`There are ${beginsWithLetter(characters,"A")} characters with names beginning with A`);
console.log(`There are ${beginsWithLetter(characters,"Z")} characters with names beginning with Z`);

function deadCount(char){
    let count = 0;
    char.forEach(function(person){
        if (person.died !== "") {
            count += 1;
        }
    });
    return count;
}

console.log(`There are ${deadCount(characters)} dead characters.`)

//who has the most titles 

function mostTitles(char){
    let highTitleCount = 0;
    let mostTitles = ""
    char.forEach(function(person){
        if (person.titles.length > highTitleCount) {
            mostTitles = person.name;
            highTitleCount = person.titles.length;
        }
    });
    return [mostTitles , highTitleCount];
}
console.log(`The character with the most titles is ${mostTitles(characters)[0]}.  He has ${mostTitles(characters)[1]}.`);


//valyrian

function valyrianCount(char){
    let valyrianCount = 0;
    char.forEach(function(person){
        if (person.culture === "Valyrian") {
            valyrianCount += 1;  
        }
    });
    //number of people with 'Valyrian' listed in their culture 
    return valyrianCount;  
}
console.log(`There are ${valyrianCount(characters)} characters who are part of the Valyrian Culture.`);

function hotPie(char){
    //playedBy is an array...
    allActors = ""
    char.forEach(function(person){
        if (person.name === "Hot Pie") {
            // console.log(person.playedBy);
            person.playedBy.forEach(function(actors){
                // console.log(actors);
                allActors += actors;
                // console.log(allActors);
            })
            
        }
    });
    return allActors;

}
console.log(`The character Hot Pie is played by ${hotPie(characters)}.`);
