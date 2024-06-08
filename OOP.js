                                                                                  Creating objects using constructor functions

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);  //object ke ander this us pure object ko refer karega with all the key value pair and the function with defination
    }
}


//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);   //global object ko refer karega  --> node ke ander epty object print hoga and browser me windows


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;         //functio ka context return kar rahe hai hum yaha pe but bine ye use kiye bhi instance constructor function se return hota hi hai
}


const userOne = new User("hitesh", 12, true);  //agar new use nahi kiya jaye to ek hi instance baar baar overwrite hota rahega
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);  // is object ka constuctor kon hai batao retult [Function:User]
//console.log(userTwo);
