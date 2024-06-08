//In js every thing derives some property from object and thus is some how an object for example array, string, function  //Js has a defaukt behaviour that if doesn't find a property at a level it goes to the further level to findout those properties instead of dreturning an error this is called prototypal behaviour of JS.

function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2  //if  some propery can be set this way thus it shows that evenfunction is 

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);  //this returns an object with whatever is added to the reference of that object

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){  //in this way we can inject a property or function into the Object String function Array or any sopecific one of them
    this.score++          // yaha this keyword batayega ki jo naya instance bana hai usko score
}


createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);  // yaha this keyword batayega ki jo naya instance bana hai usko score
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User  // this means that inherit the properties of User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  //TeachingSupport me Teacher ki properties add kardo

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);  // this will contaio that object that it is referring to at this pint of time
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
