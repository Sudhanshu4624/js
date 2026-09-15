class User {
    constructor(username){
        this.username = username
    }

    logged(){
        console.log(`User name is ${this.username}`);
    }
}

class Teacher extends User{ // just like teacher.__proto__ = user 
    constructor(username,email,password){
        super(username) // parent class access
        this.email = email
        this.password = password
    }

    addSomething(){
        console.log(`${this.username} added something`);
    }
}

const newUser = new Teacher("sid","s@m.com",'753')
newUser.addSomething()
// const newUser1 = new User("sid")
// newUser.addSomething() // error

console.log(newUser instanceof Teacher); // true
console.log(newUser instanceof User); // true

