// for in

const newObject = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby",
    py : "Python"
}

for (const key in newObject) {
    // console.log(`${key} extension for ${newObject[key]}`);
    
}

// can we use forin for arrays as well?

const prog = ["c++","python","java","go"]

for (const key in prog) {
    // console.log(key); // prints the keys 0,1,2,3
}

for (const key in prog) {
    // console.log(prog[key]); // this will print the values, for of was printing the values directly. forin prints only keys directly, to access the values we need to pass like this.    
}

// Map 
const map = new Map()
map.set("IN","India")
map.set("CN","China")
map.set("FR","France")
map.set("IN","India")

for (const key in map) {
    console.log(key);
}
// no output maps are not iterable

