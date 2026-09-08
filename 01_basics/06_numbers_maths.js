const n1 = 500
// console.log(n1);

// const n2 = new Number(725)
// console.log(n2);
// console.log(n2.toString());
// console.log(typeof(n2));
// console.log(n2.toString().length);
// console.log(n2.toFixed(2)); // --> 2 decimal pts

// const newNum = 123.856
// console.log(newNum.toPrecision(4)); // --> precise value upto 4 nos/digits -- 123.9 rounds off

const n3 = 10000000
// console.log(n3.toLocaleString('en-IN')); // Indian 
// console.log(n3.toLocaleString()); // American

// ------------------+---- Maths ----+------------------------------+

// console.log(Math);
// console.log(Math.abs(-7)); // absolute
// console.log(Math.round(2.6)); // 3
// console.log(Math.ceil(2.4)); // 3
// console.log(Math.floor(2.7)); // 2
// min , max ,......

console.log(Math.random()); // random values b/w 0 - 1
console.log((Math.random()*10) + 1); // random values b/w 0 - 1 * 10 --> now 1 - 10 and to avoid 0 --> +1
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min +1)) + min)) // ******* Formula for random values in range min to max




