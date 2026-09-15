class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){ // we don't want to give access to everone
        return `725`
    }
}

const sid = new User('sid')
// console.log(sid.createId()) // createId not found since we have done static

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const ip = new Teacher('ipname','i@p.com')
// console.log(ip);
ip.logMe()
