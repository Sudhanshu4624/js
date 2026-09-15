# javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism

 js is a prototype based language
 JavaScript originally used prototype-based inheritance, not the classical class system you see in Java or C++. 
 In ES6 (2015), JavaScript introduced the class syntax to make object-oriented programming easier and more familiar.
 Example: 
 ```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const person1 = new Person("Sid", 25);

person1.introduce();
 ```

 Here:

class Person → defines a class
constructor() → runs when you create an object
this.name → property of the object
introduce() → method
new Person(...) → creates an instance/object

## Imp point
Under the hood, JavaScript still uses prototypes.

```javascript
class Person {
    introduce() {
        console.log("Hello");
    }
}
```
this is all syntactical sugar

You can see this:

console.log(Person.prototype);

The introduce() method lives on Person.prototype, and objects created with new Person() can access it through the prototype chain.


## Prototypical behaviour
js doesn't like to give up if it does not find what we are looking for
it goes deep layer above layer - parents to grandparents..... until it finds null - this is called prototypal inheritance or just inheritance

every prototype is an object only in js.
Array --> Object --> null
String --> Object --> null
function is a function also and object also.