// console.log(`There are ${characters.length} characters in the array.`);

// // How many characters names start with "A"?

// function startWithA(characters) {
//     let nameA = [];
//     let count = 0;
//     characters.forEach(function (array) {
//         if (array.name.startsWith("A")) {
//             nameA.push(array.name);
//             count += 1;
//         }
//     });
//     // console.log(nameA);
//     console.log(count);
// }

// startWithA(characters);

// // How many characters names start with "Z"?

// function startWithZ(characters) {
//     let nameZ = [];
//     let count = 0;
//     characters.forEach(function (array) {
//         if (array.name.startsWith("Z")) {
//             nameZ.push(array.name);
//             count += 1;
//         }
//     });
//     // console.log(nameZ);
//     console.log(count);
// }

// startWithZ(characters);

// // How many characters are dead?

function dead(characters) {
    let nameDead = [];
    let count = 0;
    characters.forEach(function (array) {
        if (array.died === "") {
            nameDead.push(array.name);
            count += 1;
        }
    });
    console.log(nameDead);
    console.log(count);
}

dead(characters);

// // Who has the most titles?

// function mostTitle(characters) {
//     let count = 0;
//     let name = [];
//     let nameWithSameNumbers = [];
//     characters.forEach(function (array) {
//         if (array.titles.length > count) {
//             count = array.titles.length;
//             name = array.name;
//         }
//     });
//     characters.forEach(function (array) {
//         if (count === array.titles.length) {
//             nameWithSameNumbers.push(array.name);
//         }
//     });
//     // console.log(name);
//     console.log(`Who has the most titles?: ${nameWithSameNumbers}`);
//     console.log(`Number of titmes: ${count}`);
// }

// mostTitle(characters);

// // How many are Valyrian?

// function valyrian(characters) {
//     let count = 0;
//     let name = [];
//     characters.forEach(function (array) {
//         if (array.culture === "Valyrian") {
//             name.push(array.name);
//             count += 1;
//         }
//     });
//     console.log(name);
//     console.log(count);
// }

// valyrian(characters);


// // What actor plays "Hot Pie" (and don't use IMDB)?

// function hotPie(characters) {
//     let name = [];
//     characters.forEach(function (array) {
//         if (array.name === "Hot Pie") {
//             name = array.playedBy;
//         }
//     });
//     console.log(name);
// }

// hotPie(characters);


// // How many characters are *not* in the tv show?

// function tvSeries(characters) {
//     let name = [];
//     let count = 0;
//     characters.forEach(function (array) {
//         // console.log(array.tvSeries);
//         if (array.tvSeries == "") {
//             count += 1;
//             name.push(array.name);
//         }
//     });
//     // console.log(name);
//     console.log(count);
// }

// tvSeries(characters);


// // Produce a list characters with the last name "Targaryen"

// function targaryen(characters) {
//     let name = [];
//     let list = [];
//     characters.forEach(function (array) {
//         name = array.name.split(' ');
//         if ((name[name.length - 1]) == "Targaryen") {
//             list.push(array.name);
//         }
//     });
//     console.log(list);
// }

// targaryen(characters);


// Create a histogram of the houses (it's the "allegiances" key)


