// for each particularly for arrays

const code = ["js","java","python","cpp","ruby"]

// code.forEach(function (v) {
//     console.log(v);
// });

// code.forEach((element) => {
//     console.log(element);    
// });


// function printme(item) {
//     console.log(item);
// }
// code.forEach(printme)

// code.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

// objects in array -- usually to fetch database values
const cart = [
    {
        item : "Mobile",
        price : 19999
    },
    {
        item : "MobileCover",
        price : 199
    },
    {
        item : "MobileStand",
        price : 999
    }
]

cart.forEach(items => {
    console.log(`Items purchased is ${items.item}, priced ${items.price}`);
    
});