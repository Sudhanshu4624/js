// reduce

const nums = [1,2,3,4]

const total = nums.reduce(function (acc, cv) {
    console.log(`Accumulator: ${acc} & Current value: ${cv}`);
    return acc + cv 
},0)
// const total = nums.reduce((acc, cv) => acc + cv, 0)

console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const toPay = shoppingCart.reduce((acc, cv) => (acc + cv.price),0 )

console.log(toPay);
