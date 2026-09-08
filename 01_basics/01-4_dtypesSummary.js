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

// -----------------------------------------------------------------

// Memory types --> Stack (Primitive) --> We get a copy of the var, Heap (non primitive) --> We get the reference of the var

let var1 = "xyz"
let var2 = var1

var2 = "abc"
console.log(var1); // --> remains unchanged since a copy is shared
console.log(var2);

let obj1 = {
    mail: "asgd@kjsd.com",
    contact: 987212
}

let obj2 = obj1

obj2.mail = "og@mail.com"

console.log(obj2.mail);
console.log(obj1.mail); // --> gets changed as well since reference of the data is given