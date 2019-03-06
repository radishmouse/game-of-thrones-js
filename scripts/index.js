console.log(`There are ${characters.length} characters in the array.`);

function howManyStartWith(letter){
    let results = 0;
    characters.forEach(function (charObj){
        if (charObj.name[0] === letter){
            results +=1;
        }
    })
    return results;
}

// console.log(howManyStartWith("A"))
// console.log(howManyStartWith("Z"))

function howManyDead(){
    let results = 0;
    characters.forEach(function(charObj){
        if (charObj.died.length > 0){
            results += 1;
        }
    })
    return results;
}
// console.log(howManyDead())

function whoHasTitles(){
    let result = [];
    let results = 0;
    characters.forEach(function(charObj){
        if (charObj.titles.length > results){
            results = charObj.titles.length;
            result = [charObj.name];
        }
    })
    characters.forEach(function(charObj){
        if (charObj.titles.length === results){
            if (charObj.name !== result[0]){
                result.push(charObj.name);
            }
        }
    })
    return result;
}

// console.log(whoHasTitles())

function howManyCulture(title){
    let results = 0;
    characters.forEach(function(charObj){
        if (charObj.culture === title){
            results += 1;
        }
    })
    return results;
}
// console.log(howManyCulture("Valyrian"))


function whoPlayed(character){
    let result = '';
    characters.forEach(function(charObj){
        if (charObj.name === character) {
            result = charObj.playedBy;
        }
    })
    return result;
}
// console.log(whoPlayed("Hot Pie"))


function notOnTV(){
    let result = 0;
    characters.forEach(function(charObj){
        if (charObj.tvSeries[0].length === 0) {
            result += 1;
        }
    })
    return result;
}

// console.log(notOnTV())

function whosLastName(nameStr){
    let results = [];
    characters.forEach(function(charObj){
        names = charObj.name.split(" ");
        if (names[1] === nameStr){
            results.push(charObj.name);
        }
    })
    return results;
}

// console.log(whosLastName("Targaryen"))

function histogramFun(){
    let results = {};
    let result = '';
    characters.forEach(function(charObj){
        charObj.allegiances.forEach(function(alStr){
            for (let i = (alStr.length - 1); i > alStr.length - 6; i--){
                if ("1234567890".includes(alStr[i])){
                    result = alStr[i] + result;
                }
            }
            if (Object.keys(results).includes(result)){
                results[result] += 1
            } else{
                results[result] = 1;
                
            }
            console.log(result)
            result = '';
        })
    })
    return results;
}
console.log(histogramFun())