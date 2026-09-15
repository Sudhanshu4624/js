const desc = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(desc);

const tea = {
    name: 'Green Tea',
    price: 220,
    inStock: true,

    order: function(){
        console.log('Not ready!');
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(tea)); // undefined
console.log(Object.getOwnPropertyDescriptor(tea, 'name')); 

// we want to overwrite these properties
Object.defineProperty(tea,'name', {
    // writable : false,
    enumerable : false // iterability
})

console.log(Object.getOwnPropertyDescriptor(tea, 'name')); 

// for (const [key,value] of Object.entries(tea)) { // this is giving us the function as well, which we don't want. thus we need to add a check
//     console.log(`${key} : ${value}`);
    
// }

for (const [key,value] of Object.entries(tea)) { 
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
    
}

// o/p -->
// price : 220
// inStock : true
// we did not get the name, if enum was true we can get that.