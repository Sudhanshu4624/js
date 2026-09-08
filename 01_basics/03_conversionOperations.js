let aNum = 46
// console.log(typeof aNum);

// let n2str = String(aNum)
// console.log(n2str);
// console.log(typeof n2str);

/* 
Similarly we can convert any datatype 
using Number
string "46" => 46  
num+str "46abc" => NaN
boolean true => 1; false => 0
null -> 0
undefined -> NaN

Boolean
1 => true; 0 => false
"" => false
"sid" => true

*/

/* ************** Operations ****************** */

// +, -, *, ** -> ^, /, % -> mod
// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 / 2)
// console.log(2 ** 4)
// console.log(2 % 4)

// String additions

str1 = "hi"
str2 = " bro"
console.log(str1+str2)

console.log("1" + 2);
console.log(2 + "4")
console.log("1"+ 2 + 2); // First string so considers whole as string
console.log(2 + 2 + "1"); // First num so first adds then since can't add string so as it is
// This is because of the rule / guideline in the doc by the experts who made the language it is what it is

// Another tricky conversion bool -> num [Not recommended]

console.log(+true); // o/p -- 1
console.log(+""); // o/p -- 0

// prefix - postfix [++x/x++]


