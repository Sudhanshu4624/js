// const mail = "sid@g.ai"

// if (mail) { // true
//     console.log(`Got user email ${mail}`);
    
// } else {
//     console.log(`No email`);
    
// }

// const mail = ""

// if (mail) { // false
//     console.log(`Got user email ${mail}`);
    
// } else {
//     console.log(`No email`);
    
// }

// const mail = []

// if (mail) { // true
//     console.log(`Got user email ${mail}`);
    
// } else {
//     console.log(`No email`);
    
// }


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const mail = []
if (mail.length == 0){
    console.log(`Empty array`);
    
}

const obj = {}
if (Object.keys(obj).length == 0) { // Object.keys()--> returns an array
    console.log(`Empty object`);
    
}


// nullish coalescing operator (??) : null, undefined --> first non null value.

let val1;
// val1 = 5 ?? 10
// console.log(val1); // 5

// val1 = null ?? 10
// console.log(val1); // 10

// val1 = undefined ?? 15 
// console.log(val1); // 15

val1 = null ?? 10 ?? 20
console.log(val1); // 10

// terniary operator

// condition ? true : false 

const valu = 65
valu <= 50 ? console.log(`Less than 50`) : console.log(`More than 50`);


