// promise is an object 
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task -- DB call, cryptograpy, network related
    setTimeout(function(){
        console.log('Async task completed');
        resolve() // connects to .then
    }, 1000)
})

promiseOne.then(function(){ // this .then has direct relation with resolve. takes func as arg
    console.log("Promise consumed");
    
}) 

// another way
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved/consumed");
    
})


// third promise
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async3");
        resolve({username: 'Sid', email: 'mail@mail.com'}) // we can pass arguments in the form of object or array...
    }, 1000)
})

promiseThree.then(function(user){ // we are calling it user
    console.log(user); // o/p --> {username: 'Sid', email: 'mail@mail.com'}
    
})

// fourth
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async4");
        let error = true
        if (!error) {
            resolve({username:'name', passcode:'passed'})
        } else {
            reject('ERROR: Somethin went wrong')
        }
    }, 1000)
})

// promiseFour.then(function(users){
//     console.log(users);
//     return users.username;
// })
// .then((uname) => {
//     console.log(uname);
// })
// .catch((error) => {
//     console.log(error);
// })
// o/p --> error is true so it will go in catch and print error, if it were false it would have printed the resolve..... uname

// promiseFour.then(function(users){
//     console.log(users);
//     console.log(users.username);
    
//     return users.username;
    
// })
// .catch((error) => {
//     console.log(error);
// })
// this code will also give us the desired o/p username, but its better practice to use chaining method.

promiseFour.then(function(users){
    console.log(users);
    return users.username;
})
.then((uname) => {
    console.log(uname);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log('Promise either resolved or rejected'))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async4");
        let error = true
        if (!error) {
            resolve({username:'js', passcode:'passed'})
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
})

// async function consumePromise5() {
//     const response = await promiseFive
//     console.log(response);
    
// }
// consumePromise5()
// --> this will give error since async await does not handle error directly

async function consumePromise5() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error); // this will give the error we want to print
    }
    
}
consumePromise5()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // await here also, since it takes time to  convert to json
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// using .then .catch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {    
//     return response.json()
// })
// .then((data) => { // return from above then will be in data
//     console.log(data[0].company); // or print only data, as u wish
    
// })
// .catch((error) => console.log(error))


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))