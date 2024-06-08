const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   //this function agar object ke ander ho to use object ko refer karta hai and incase agar ye bahar ho to ye complete window ko refer karta hai//matlab this current context ko refer karta hai yahi same humne click event ke ander bhi dekha tha
        console.log(this);  //complete object return hoga kyu ki this current context ko refer karata hai
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);    //node ke ander this empty object return karta hai but browser ke ander window ko refer karta hai

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  //ye undefined dega kyu ki function ke ander this is tarike se use nahi kar sakte as there is no current context to refer
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  //ye undefined dega kyu ki function ke ander this is tarike se use nahi kar sakte as there is no current context to refer
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);  //ye undefined dega kyu ki function ke ander this is tarike se use nahi kar sakte as there is no current context to refer+
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2            //paranthesis is used then return keyword is mandatory for returning something
// }

// const addTwo = (num1, num2) =>  num1 + num2  //implicit return is used in case only one thing is returned 

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})   //object return karne ke liye ya to curly braces use karo ya nahi to parnnthesis use karo


console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
