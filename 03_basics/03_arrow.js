// const newObj = {
//     username: "sid",
//     passcode: "qwerty",

//     welcomeText: function(){
//         console.log(`${username}, welcome bro!`);
        
//     }
// }
// newObj.welcomeText() // sid, welcome bro!
// newObj.username = "Siddhu"
// newObj.welcomeText() // error

const newObj = {
    username: "sid",
    passcode: "qwerty",

    welcomeText: function(){
        console.log(`${this.username}, welcome bro!`);
        // console.log(this);
        
    }
}
// newObj.welcomeText() // sid, welcome bro!
// newObj.username = "Siddhu" // changing the context of the object
// newObj.welcomeText() // no error since we use this inside function.
// this saves the current context of the function in an object
// console.log(this); // empty object in node, in browser it shows window object since window is a global object in browser

// function fun() {
//     console.log(this); // inside the function it returns multiple objects....  
// }
// fun()

// function fun() {
//     let uname = "something"
//     console.log(this.uname);   
// }
// fun()
// // o/p --> undefined, we are able to use this inside object function

// const fun = function fun() {
//     let uname = "something"
//     console.log(this.uname); 
// }
// console.log(fun);
 // [Function: fun]

// fun() //undefined

// arrow func
// const fun =  () => {
//     let uname = "something"
//     console.log(this.uname); 
// }

// const add = (n1, n2) => {
//     return n1 + n2
// }
// console.log(add(6,9)) //15

// const add = (n1, n2) => n1 + n2 
// const add = (n1, n2) => (n1 + n2)

// console.log(add(6,9)) // 15

// explicit return --> where we use return explicitly ==> {}-> use return keyword
// implicit return --> we don't use return ==> ()--> no return keyword

//returning object
const add = (n1, n2) => ({uname:"sid"})
console.log(add(6,9)) // { uname: 'sid' }