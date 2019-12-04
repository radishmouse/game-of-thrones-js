console.log(`There are ${characters.length} characters in the array.`);


function aNames(chars){
    return chars.filter(x => x.name[0].toUpperCase() == "A").length;
}

console.log(aNames(characters));

function zNames(chars){
    return chars.filter(x => x.name[0].toUpperCase() == "Z").length;
}

console.log(zNames(characters));

function deadPeople(chars){
    return chars.filter(x => x.died != "").length;
}

console.log(deadPeople(characters));

function mostTitles(chars){
    return (chars.sort((a,b) => b.titles.length - a.titles.length))[0].name;
}

console.log(mostTitles(characters));

function valyrian(chars){
    return chars.filter(x => x.culture == "Valyrian").length;
}

console.log(valyrian(characters));

// function hotPie(chars){
//     return chars.filter(x => x.name == "Hot Pie")[0].playedBy;
// }

function hotPie(chars){
    return chars.find(x => x.name == "Hot Pie").playedBy;
}


console.log(hotPie(characters));