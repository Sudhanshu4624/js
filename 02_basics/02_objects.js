// singleton
// Object.create

// object literals

const sym = Symbol("k1") // defining symbol

const newObj = {
    name: "Sid",
    "passcode": "Sidbro",
    email: "sid@g.com",
    age: 25,
    [sym] : "Key1", // using symbol in object
    activeDays: ["Tuesday","Saturday"]
}

// console.log(newObj.email);
// console.log(newObj["email"]); // prefered way
// console.log(newObj.passcode); 
// console.log(newObj["passcode"]);
// console.log(newObj[sym]); // accessing symbol

// change values in object
// newObj.email = "sid@genius.com"
// console.log(newObj.email);

// Object.freeze(newObj) // freezing the object, disallowing any sort of changes hence forth, even if we change there will be no error but there will also be no change
// newObj.email = "sid@g1.com"
// console.log(newObj.email);

newObj.greeting = function(){
    console.log("Hello Brother!");
    
}

console.log(newObj.greeting());

newObj.greeting2 = function(){
    console.log(`Hello Brother, ${this.name}!`);
    
}
console.log(newObj.greeting2());
