// var c = 300  // var has a function scope and is not bound by curly braces. let and const have block scope and are bound by {}. Also, var can be declared multiple times within the same function.

let cannot be used before declaration, but var can be // the value of the var will be undefined 
var can be redeclared in the same scope, but let cannot be
let has a block scope, but var has a function scope and can be used outside the block in which it is declared
if(true){
    var tim = 10;
    console.log(tim);
}
console.log(tim);//this is possible because var doesnot have a block scope it has a functional or globval scope thus it leaks out of the block and goes to the outside functional scope

let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER: ", a);  // if let a=30; was not declared inside, the value of a would be searched in the global scope
}
// let a = 300; // this will cause an error because a is already declared with let
function tuf() {
    console.log("Outer: ", a);  // here, the outer a is accessible
}
// node and browser have different global scopes
console.log(a);  // this gives the value
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);  // this will cause an error as inner functions can access variables declared in outer functions, but outer functions can't access inner variables. This is sometimes called closure in JS
    two();
}

// one();  // also, the two function can't be accessed outside the one function

if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);  // this will cause an error 
}

// console.log(username);  // this will also cause an error 


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));  // addOne is just a function and thus gets hoisted, so this is correct
// it is possible because during compilation, the definition is added to the global scope and thus when it is called, the function is executed
function addone(num){
    return num + 1;
}

addTwo(5);  // this will cause an error as the function addTwo is considered an expression and stored in a const variable, so it doesn't get hoisted
const addTwo = function(num){
    return num + 2;
};

addTwo(5)  //this will be cause an error as the function addTwo is considered as an expression and stored in const variable and thus doesn't gets hoisted
const addTwo = function(num){
    return num + 2
}
