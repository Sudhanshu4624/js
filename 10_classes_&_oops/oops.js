// the story of this keyword
// object literal is literally a object itself.
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// lets create one function
function users(username, loginCount, isLoggedIn){
    this.username = username; // good to use in methods, its just like variable uname = username...
    this.loginCount = loginCount; // these are all properties, all three, we can also add methods/func ..
    this. isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Heloo ${this.username}`);
        
    }

    return this // not mandatory but better to use
}

// const userOne = users ("name", 5, false)
// console.log(userOne);
// o/p-->
// .....
//     timeOrigin: 1789472754125.636
//   },
//   fetch: [AsyncFunction: fetch],
//   username: 'name',
//   loginCount: 5,
//   isLoggedIn: false
// }

// const userTwo = users ("Sid", 10, true)
// console.log(userOne);
// o/p==>
// even though we are printing user one, it overrides the value
//   },
//   fetch: [AsyncFunction: fetch],
//   username: 'Sid',
//   loginCount: 10,
//   isLoggedIn: true
// }

// that is the reason we use the keyword new, to create a new instance, like we used to use new Promise(), new Date()

const userOne = new users ("name", 5, false)
const userTwo = new users ("Sid", 10, true)
// console.log(userOne);
// console.log(userTwo);
// o/p-->
// users { username: 'name', loginCount: 5, isLoggedIn: false }
// users { username: 'Sid', loginCount: 10, isLoggedIn: true }

// When we use the keyword new 
// an empty object is created which is called instance
// a constructor function is called because of new keyword, what it does is when a argument is called it packs it and give it to us.
// the arguments are injected inside due to the this keyword
// we get them in the function

// constructor is the reference about itself
console.log(userOne.constructor); // [Function: users]

// instanceof
