// After ES6

class user {
    constructor(uname,email,passcode) { // as soon as we use new keyword with object the constructor is called.
        this.uname = uname
        this.email = email
        this.passcode = passcode
    }
    encryptPassword(){
        return `${this.passcode}xyz`
    }
    changeUsername(){
        return `${this.uname.toUpperCase()}`
    }
}

const per = new user('sid','mail.com','753')

console.log(per.encryptPassword());
console.log(per.changeUsername());

// behind the scene

// function User(username, email, passcode){
//     this.uname = uname;
//     this.email = email;
//     this.passcode = passcode
// }

// User.prototype.encryptPassword = function(){
//     return `${this.passcode}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.uame.toUpperCase()}`
// }


// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());
