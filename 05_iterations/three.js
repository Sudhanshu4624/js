// array specific loops
// for of

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const str = "String"
// for (const s of str) {
//     console.log(`The char in string is ${s}`);
    
// }

// Map 
const map = new Map()
map.set("IN","India")
map.set("CN","China")
map.set("FR","France")
map.set("IN","India")

// console.log(map); // doesn't allows duplicate values

// for (const key of map) {
//     console.log(key);
// }
// o/p-->
// [ 'IN', 'India' ]
// [ 'CN', 'China' ]
// [ 'FR', 'France' ]

// for (const [key, value] of map) {
//     console.log(key + ' :- ' + value);
// }

// o/p -->
// IN :- India
// CN :- China
// FR :- France

// objects
const newObj = {
    "g1" : "Ludo",
    "g2" : "Snake&Ladders"
}

// for (const [key, value] of newObj) {
//     console.log(key + ' :- ' + value);
// }
// newObj is not iterable, to iterate in objects we use forin

