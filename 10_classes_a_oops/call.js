function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

// function createUser(username, email, password){
//     SetUsername(username)
   
//     this.email = email
//     this.password = password
// }
// this function will call the function setUser, but as soon as its job is done all its variables will be removed from the call stack; we won't get the username in the output. 
// o/p --> 
// called
// createUser { email: 'sid@sid.com', password: '9875' }

// So to hold the reference we need to use .call.

function createUser(username, email, password){
    SetUsername.call(this, username) // we need to pass the execution context for this user
   
    this.email = email
    this.password = password
}

// called
// createUser { username: 'sid', email: 'sid@sid.com', password: '9875' }
const code = new createUser("sid", "sid@sid.com", "9875")
console.log(code);