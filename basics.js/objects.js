                                                                       Objects 

// singleton  --> object lateral method se singleton object kabhi nahi banta hai
// Object.create

// object literals
 //array is also an object in which the keys are indeces
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",      //you first need to declare the symbol outside and then add in the string with [] around it and also it can be accessed with JsUser[without quotation mark] and remember in this case the outside variable is not getting overwritten  
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) //isi case ke liye [] wala method nikala gaya hai
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"  // we can change the value by this method
// Object.freeze(JsUser)   // ab kiye janawala koi bhi change actual object ko prabhawit nahi karaga
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){ // is tarike se aap Object ke bahar bhi key value pair declare kar sakte hain
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //object ke ander ke function ke ander ka this usi object ko refer karta hai
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// const tinderUser = new Object()          // is method se singleton object declare hota hai
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
//regularUser['fullname']['userfullname']['firstname']

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


                                                           Adding two objects
// const obj3 = { obj1, obj2 }  object 3 will take obj1 and object 2 as input 
// const obj3 = Object.assign( obj1, obj2, obj4)   //is case me obj1 bhi change ho kar obj3 ke hi barabar ho chuka 
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //this wll remove the curly brace from the objects and will add them in first object thus first array also changes thus is important to transfer an empty array

const obj3 = {...obj1, ...obj2} //spread operator
// console.log(obj3)
//thus in this way if we want to add some more fields to it or can update an existing field and wrap it in the {} e.g. let obj2= {...obj1,1:'e',3:'r'}

const users = [          //array of objects   //used in JSON and also while managing databases
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //return keys as array
// console.log(Object.values(tinderUser));  //return values as array
// console.log(Object.entries(tinderUser));  return array in which each key value pair is a sub array 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  /to check whether a particular key is present in the the object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
                                                          Object Destructuring
// course.courseInstructor  //ye likhn me kapho bada hai is liye hum destructure karte hain objects ko

//const {courseInstructor} = course  // ye karne se courseInstructor ko hi use karke hum directrly iski value ko access kar sakte hain 
const {courseInstructor: instructor} = course //is tarike se destructure karke hum koi aur naam bhi assign kar sakte hain

// console.log(courseInstructor);
console.log(instructor);

                                                        API and JSON



// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free",
//       "check":true
// }

[
    {},
    {},
    {}
]
