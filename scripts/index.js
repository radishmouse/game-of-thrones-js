console.log(`There are ${characters.length} characters in the array.`);

// number of characters whose name starts with "A"
function aNames(chars){
    return chars.filter(x => x.name[0].toUpperCase() == "A").length;
}
console.log(aNames(characters));

// number of characters whose name starts with "Z"
function zNames(chars){
    return chars.filter(x => x.name[0].toUpperCase() == "Z").length;
}
console.log(zNames(characters));

// number of characters who are dead.
function deadPeople(chars){
    return chars.filter(x => x.died != "").length;
}
console.log(deadPeople(characters));

// name of character with the most titles. (somehow its not Daenerys)
function mostTitles(chars){
    return (chars.sort((a,b) => b.titles.length - a.titles.length))[0].name;
}
console.log(mostTitles(characters));

// number of characters from Valyrian culture
function valyrian(chars){
    return chars.filter(x => x.culture == "Valyrian").length;
}
console.log(valyrian(characters));


//The actor who plays Hot Pie
//MK1
// function hotPie(chars){
//     return chars.filter(x => x.name == "Hot Pie")[0].playedBy;
// }

//MK 2
function hotPie(chars){
    return chars.find(x => x.name == "Hot Pie").playedBy;
}
console.log(hotPie(characters));


//Number of book characters not on TV
function notOnTV(chars){
    return chars.filter(x => x.tvSeries[0] =="").length;
}
console.log(notOnTV(characters));

// All the characters named Targaryen (the whole entry for them)
// function targ(chars){
//     return chars.filter(x=> x.name.includes("Targaryen"));
// }
//List all the characters named Targaryen (just an array of their names)
function targ(chars){
    return chars.filter(x=> x.name.includes("Targaryen")).map(y => y.name);
}
console.log(targ(characters));


//histogram of the number of people in each house (at least, the API URL for that house. for now...)
function houseHistogram(chars){
    let newObj = {};
    for (let char of chars){
        for (let house of char.allegiances){
            if (house in newObj){
                newObj[house] += 1;
            }else{
                newObj[house] =1;
            }
        }
    }
    return newObj;
}
console.log(houseHistogram(characters));