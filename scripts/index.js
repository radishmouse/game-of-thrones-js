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

