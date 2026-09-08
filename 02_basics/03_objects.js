// const user = new Object // singleton object
const user = {} // same but, non singleton

user.id = "456asd"
user.name = "Madhav"
user.isMale = true 

// console.log(user);


const nuser = {
    email: "md@g.com",
    fullName: {
        userfullname: {
            firstname: "Sid",
            lastname: "bro"
        }
    }
}

// console.log(nuser.fullName.userfullname.firstname);

obj1 = {1:"a", 2:"b"}
obj2 = {3:"a", 4:"b"}
obj3 = {5:"a", 6:"b"}

// const obj4 = {obj1,obj2,obj3}    // not preffered as it returns objects in an object

// const obj4 = Object.assign({}, obj1,obj2,obj3) // target{}, source(the rest)
// the parenthesis in the begining is not mandatory but its a good practice

const obj4 = {...obj1,...obj2,...obj3} // mostly we'll use this

// looping thru database inputs

const users = [
    {
        id: 321,
        email: "some@kjas.com0"
    },
    {
        id: 322,
        email: "some@ksdg.com0"
    },
    {
        id: 323,
        email: "some@dfas.com0"
    },
    {
        id: 324,
        email: "some@kjuks.com0"
    }
]
users[1].email // email of 1st user index

console.log(user);
console.log(Object.keys(user)); // returns array of user keys
console.log(Object.values(user)); // returns array of user values
console.log(Object.entries(user)); // array in array of key value

console.log(user.hasOwnProperty("isMale")); // checks if the key exists
