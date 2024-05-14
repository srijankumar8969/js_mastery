// singleton  --> object lateral method se singleton object kabhi nahi banta hai
// Object.create

// object literals
 //array is also an object in which the keys are indeces
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",      //you first need to declare the symbol outside and then add in the string with [] around it and also it can be accessed with JsUser[without quotation mark]
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
