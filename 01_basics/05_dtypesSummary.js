// Return type of variables in JavaScript
//  Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// Symbol to assign unque values

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2); // --> false

// BigInt --> n at the end or very huge number
const bigNum = 3216846232n 


//  Non-primitive Datatypes (Reference type)
//        Arrays  =>  object
//        Function  =>  function object
//        Object  =>  object

const myArray = ["a1", "a2", "a3"];

let myObj = {
    name: "Sid",
    city: "Mumbai",
    age: 25
}

const myfun = function(){
    console.log("Hello World!");
    
}

console.log(typeof _____); // get datatypes of any variable.
