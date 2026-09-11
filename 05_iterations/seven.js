// map********************
const newnums = [1,2,3,4,5,6,7,8,9,10]

// const tens = newnums.map((num) => num *10)

// can we do it using for each?
// const tens = []
// newnums.forEach(num => {
//     tens.push(num *10)
// });

// chaining
const tens = newnums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 50)
console.log(tens);