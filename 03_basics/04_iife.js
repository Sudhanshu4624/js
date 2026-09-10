// Immediately invoked function expressions (IIFE)

// function fun(){
//     console.log("DB Connected");
    
// }
// fun() // normally, to run/execute a func.

(function fun(){ // named iife
    console.log("DB Connected");
    
})(); // iife - dirct execution -- semicolon mandatory!

// Global scope ke pollution se problem hoti hai kahi Bar, to bas usi global scope ke jo variables hai ya jo bhi vaha declaration hai, to uske pollution ko hatane ke liye humne iife ka use kiya 

(() => { // unnamed iife
    console.log("DB Connected Again");
})();

((name) => {
    console.log(`DB Connected Again, well done ${name}`);
})("Sid");