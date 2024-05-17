//var c = 300  //var has a functional scope thus it is not bound by the curly braces. But let and const has a block scope thus is bound by {}.Also var can be declared multiple times under the same block or function but let and const can't be declared multiple times under the same block.
let a = 300
if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER: ", a);  //agar ander let a=30; nahi kiya rehta toh a ki value global scope me talashi jaati
    
}
let a = 300
function  tuf() {
    console.log("Outer: ", a);  //yaha bhi a bahar ka accessible hai
    
}
  //node aur browser ka global scope alag hai
console.log(a);  //this gives the value
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);  // this will cause an error 
}

// console.log(username);  // this will also cause error to occur


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //addOne is just a function and thus gets hoisted and thus is correct

function addone(num){
    return num + 1
}



addTwo(5)  //this will be cause an error as the function addTwo is considered as an expression and stored in const variable and thus doesn't gets hoisted
const addTwo = function(num){
    return num + 2
}
