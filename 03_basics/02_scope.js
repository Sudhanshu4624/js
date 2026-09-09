var a = 30

if (true) {
    a = 300    
}
// console.log(a); // 300, thats the problem with var and thus we avoid using it
let c = 60 // global scope
if (true) {
    let b = 35 // scope within the block only
    const c = 50
    console.log(c);
        
}
// console.log(b); // error b not defined
console.log(c);

function one(){
    const username = "sid"

    function two(){
        const website = "google"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "sid"
    if (username === "sid") {
        const website = " google"
        // console.log(username + website);
    }
    // console.log(website); // error since out of scope
}

// console.log(username); // error since out of scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // can call before writing the function
function addone(num){
    return num + 1
}



addTwo(5) // error, can't call before initialization
const addTwo = function(num){ // also called expression
    return num + 2
}