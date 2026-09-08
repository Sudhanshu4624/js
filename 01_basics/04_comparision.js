// console.log(2 > 6);
// console.log(2 < 6);
// console.log(2 == 6);
// console.log(2 <= 6);
// console.log(2 != 6);

// console.log("2" < 6);
// console.log("02" < 6);

// console.log(null > 0); --false 
// console.log(null == 0); -- false 
// console.log(null >= 0); -- true 
// console.log(null <= 0); -- true 

// Reason --> the equality [==] and comparison [<,>,<=,>=] operators works differently
// In 12 and 13 Comparision converts null into num treating as 0 thus true and false 

// Strict check === [checks the datatype as well, does not convert it]

console.log("2" === 2); // -->false
