function name(){
    console.log("S");
    console.log("I");
    console.log("D");
    
}
// name()

// function add(n1,n2){  // function func name(parameters)
//     console.log(n1+n2);
// }

// add(3, 5) // 8   add(argument)
// add(3, "5") // 35
// add(3, null) // 3
// const res = add(3, 9)
// console.log(res); // undefined

function add(n1,n2){  // function func name(parameters)
    // let result = n1 + n2
    // return result
    return n1 + n2
}
const res = add(3, 9)
// console.log(res); // 12

function logInMessage(username){
    return `${username} just loggedIn`
}

// logInMessage("sid") // only returns the values, does not print
// console.log(logInMessage("sid")); // this will print..
// console.log(logInMessage()); // undefined

// checking prior if its undefined
function logInMessage(username){
    if(username === undefined){  
        // also be written as if(!username); undefined-->false, to convert it to true we put "!" so that it can run inside the statement
        console.log(`Please enter username`);
        return
    }
    return `${username} just loggedIn`
}

// we can also predefine the default value, we will never go inside the if block
function logInMessage(username = "lala"){
    if(username === undefined){  
        console.log(`Please enter username`);
        return
    }
    return `${username} just loggedIn`
}


// there can be situation when we don't know how many arguments are going to to be passed, like the add to cart option in an ecommerce platform.
function calculateCartPrice(...n1){ // rest operator(...) same as spread operator we saw preiviously
    return n1
}

calculateCartPrice(100, 500, 600, 800, 6000) // returns array of all the values.
// console.log(calculateCartPrice(100, 500, 600, 800, 6000)); // prints them

function calculateCartPrice(val1, val2, ...n1){ 
    return n1
}
// console.log(calculateCartPrice(100, 500, 600, 800, 6000)) // 600 - 6000 will be returned in n1

// objects handling
user = {
    uname: "name",
    price: 150
}
function objectHandling(anyobject){
    console.log(`User name is ${anyobject.uname} and price ${anyobject.price}`); // the keynames should be exact else undefined value will be shown
    
}

// objectHandling(user)
// objectHandling({
//     uname: "Raja",
//     price: 149
// })

// same with arrays
const newArray = [600, 610, 650, 700]
function arrayElement2(getArray){
    return getArray[1]
}

console.log(arrayElement2(newArray))
console.log(arrayElement2([400,500,900]));
