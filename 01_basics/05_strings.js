const name = "name"
const nume = 987

// Simple concatenation -- not recommended
console.log(name + nume + " sd");

// prefered -- interpolation
console.log(`My name is ${name} with roll no.${nume}.`);

// another way to define a string
const newName = new String('Sudarshan'); // --> the difference is that we can assess the string obj featues

/* 
String {'Sudarshan'}
0: "S"
1: "u"
2: "d"
3: "a"
4: "r"
5: "s"
6: "h"
7: "a"
8: "n"
length: 9
[[Prototype]]: String
[[PrimitiveValue]]: "Sudarshan"
*/

console.log(newName.length); //-->length
console.log(newName.__proto__); //-->to access prototypes, but need not use it every time

console.log(newName.toUpperCase());
console.log(newName.charAt(5));
console.log(newName.indexOf('r'));

const newstr = newName.substring(0,5)
console.log(newstr);

const s1 = newName.slice(-9, 5) // Slice allows negative values
console.log(s1);

const s2 = "   asdf     "
console.log(s2);
console.log(s2.trim()); // removes white spaces

const url = "https://abc.com/aslkd%20ekjf"
console.log(url.replace('%20','-'));

console.log(url.includes('abc'));

const s3 = "my good name is unknown"
console.log(s3.split(" ")); // --> array o/p




