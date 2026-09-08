// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // adds at the end
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // adds 9 to the 0th index
// myArr.shift() // removes 0th index

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

/* 

Diff in slice and spice
Slice gets the copy also does not modifies/manipulates the original array, last element in the range is not included

Splice gets the copy and removes those elements from the original array, last element in the range is also included

*/


const fruits = ['apple', 'mango', 'orange', 'kiwi']
const flowers = ['rose', 'sunflower', 'jasmine']

// fruits.push(flowers)
// console.log(fruits);
/*
o/p
[
  'apple',
  'mango',
  'orange',
  'kiwi',
  [ 'rose', 'sunflower', 'jasmine' ]
]
*/
// //To access rose
// console.log(fruits[4][0]);

// const all_decors = fruits.concat(flowers)
// console.log(all_decors);
// // [ 'apple', 'mango', 'orange', 'kiwi', 'rose', 'sunflower', 'jasmine' ]

// Another way --> spread operator
const all_new = [...fruits, ...flowers] //popularly used
// console.log(all_new);
// [ 'apple', 'mango', 'orange', 'kiwi', 'rose', 'sunflower', 'jasmine' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_one = another_array.flat(Infinity) // flat opens up the array upto the depth assigned and returns a single array
// console.log(real_one);

console.log(Array.isArray("Sid"));
console.log(Array.from("Sidbro"));
console.log(Array.from({name:"Sid"})); // We need to define which to use key or value, else returns empty array

let v1 = 101
let v2 = 102
let v3 = 103

console.log(Array.of(v1,v2,v3));


